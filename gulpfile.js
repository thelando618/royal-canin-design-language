'use strict';

// @todo properly comment tasks
// @todo install an html sanitizer such as https://www.npmjs.com/package/sanitize-html and run string that ends up in _nav.html through it before writing file.

// Gulp
var gulp 						= require('gulp');
var autoprefixer 		= require('gulp-autoprefixer');
var clean 					= require('gulp-clean');
var fileinclude			= require('gulp-file-include');
var sass 						= require('gulp-sass');
var gutil 					= require('gulp-util');

// Node
var browserSync 		= require('browser-sync').create();
var dirTree 				= require('directory-tree');
var fs 							= require('fs');
var path 						= require('path');

// Object to contain files and paths
// @todo update with better paths
var paths = {
	templates : './templates/**/',
	anyFile : '*.*',
	template : '*.html',
	partial : '_*.html',
	assets : '/assets/',
	public: './public/'
};


// Empty array to contain links
var links = [];


// Public Directory
gulp.task( 'publicDir', function( done ) {
	// If public directory exists
	if ( fs.existsSync( './public' ) ) {
		// Clean it
		return gulp.src( paths.public , { read: false } )
			.pipe( clean() );
	} else {
		// Create it
		fs.mkdirSync( './public' );
	}
	done();
});


// Copy .html files to public. Exclude those that start with an underscore
gulp.task('copyTemplates', function( done ) {
	return gulp.src([ path.join( paths.templates, paths.template ), '!' + path.join( paths.templates, paths.partial ) ])
	.pipe( fileinclude({
		// todo update paths to use object
  	prefix: '@@',
  	basepath: './templates'
	}) )
	.pipe(gulp.dest('./public'));
	done();
});


gulp.task( 'sass', function( done ) {    
	return gulp.src( './templates/assets/sass/style.scss' )
		.pipe( sass( { outputStyle: 'compressed' } ).on( 'error', sass.logError ) )
		.pipe( autoprefixer( { browsers: ['last 5 versions'] } ) )
		.pipe( gulp.dest( './templates/assets/css/' ) );
	done();
} );


// Copy other assets, excluding HTML files.
gulp.task( 'copyAssets', gulp.parallel( 'sass', function( done ) {
	return gulp.src([
			// @todo make this into a single command that copies everything
			path.join( paths.templates, '*.css' ),
			path.join( paths.templates, '*.js' ),
			path.join( paths.templates, '*.ttf' ),
			path.join( paths.templates, '*.woff' ),
			path.join( paths.templates, '*.woff2' ),
		])
		.pipe( fileinclude({
			// todo update paths to use object
      prefix: '@@',
      basepath: './templates'
		}) )
		.pipe( gulp.dest( './public/' ) );
	done();
} ) );


// Get HTML files inside public directory and create an array
gulp.task( 'getfiles', function( done ) {  
	dirTree( paths.public, ['.html'], function( item ) {
		links.push( item.path );
	});
	done();
} );

// Create a _nav.html file that can be imported into full files
gulp.task( 'createNav', gulp.series( 'getfiles', function( done ) {

	function getFilesRecursive( folder ) {

		var fileContents = fs.readdirSync(folder),
		fileTree = '<ul>',
		stats;

		fileContents.forEach( function( fileName ) {
			
			stats = fs.lstatSync( folder + '/' + fileName );

			if (stats.isDirectory()) {

				// Ignore assets directoy
				// @todo come up with a better way to ignore directories (start support dirs with underscore perhaps?)
				if ( 'assets' === fileName ) {
					return false;
				}
				

				// @todo move this to root with other functions and improve
				function niceFolderName( fileName ) {
					// get rid of digits and hyphen
					var niceName = fileName.replace( /(\d)+\-/g, '' );
					// capitalize first letter
					niceName = niceName.charAt(0).toUpperCase() + niceName.slice(1);
					return niceName;
				}

				// Create an empty link that will trigger some JS
				fileTree += '<li><a href="#" class="gs-nav__trigger">' + niceFolderName( fileName ) + '</a>' + getFilesRecursive( folder + '/' + fileName) +'</li>';

			} else {

				// Create full url and get rid of public 
				var fullUrl = folder.replace( './public', '' ) + '/' + fileName

				// Ignore root index.html
				// @todo come up with a better way to ignore files (start support dirs with underscore perhaps?)
				if ( '/index.html' === fullUrl ) {
					return false;
				}


				// @todo move this to root with other functions and maybe combine with niceFolderName
				function niceFileName( fileName ) {
					// remove .html
					var niceName = fileName.replace( '.html', '' )
					// capitalize first letter
					niceName = niceName.charAt(0).toUpperCase() + niceName.slice(1);
					return niceName;
				}

				// Add list item with anchor with full url
				fileTree += '<li><a href="' + fullUrl + '">' + niceFileName( fileName ) + '</a></li>';
			}

		});

		fileTree += '</ul>';

		return fileTree;
	};

	// Create the file and add the HTML string
	fs.writeFile('templates/_nav.html', getFilesRecursive('./public'), 'utf8', function() {
		gutil.log( gutil.colors.bold.underline( 'nav.html file created' ) );
	});

	done();
} ) );



// Styleguide tasks
gulp.task( 'generate', gulp.series( 'publicDir', 'copyTemplates', 'copyAssets', 'createNav', 'copyTemplates', function( done ) {
	done();
} ) );


gulp.task( 'view', gulp.series( 'generate', function( done ){
	browserSync.init({
		server: {
			baseDir: "./public"
		}
	});
} ) );


// @todo update with paths object
gulp.task( 'develop', function( done ){
	browserSync.init({
		server: {
			baseDir: "./public"
		}
	});
	gulp.watch( ['templates/**/*.scss', 'templates/assets/js/**/*.js'], gulp.series( 'copyAssets' ) );
	gulp.watch( 'templates/**/*.html', gulp.series( 'copyTemplates' ) );
	gulp.watch( "public/**/*.*" ).on("change", browserSync.reload);
} );