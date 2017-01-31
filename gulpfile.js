'use strict';

// @todo properly comment tasks

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
			path.join( paths.templates, '*.css' ),
			path.join( paths.templates, '*.js' ),
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


gulp.task( 'createNav', gulp.series( 'getfiles', function( done ) {

	// @todo wrap this in if check
	// if links array is not empty
	var list = '<ul>';

	// var test = getJSON('nav.json', function (data) {
		
		for (var i = 0; i < links.length; i++) {

			// @TODO MOVE THIS INTO A FUNCTION
			// Get rid of public from string
			var trim = links[i].replace('public', '');


			// @TODO MOVE THIS INTO A FUNCTION
			// Use regex to get rid of anything before the filename
			var text = links[i].replace(/^.*[\\\/]/, '');

			if ( '/index.html' === trim ) {
				continue;
			}

			list += '<li><a href="' + trim + '">' + text +'</a></li>';
		}

		list += '</ul>';

		fs.writeFile('templates/_nav.html', list, 'utf8', function() {
			gutil.log( gutil.colors.bold.underline( 'nav.html file created' ) );
		});

	// });

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
	gulp.watch('templates/asset/sass/*.scss', gulp.series( 'copyAssets' ) );
	gulp.watch('templates/**/*.html', gulp.series( 'copyTemplates' ) );
	gulp.watch( "public/**/*.*" ).on("change", browserSync.reload);
} );
