// Location based variables.
const location = [];

// Lint rules.
location['linting'] = [];
location['linting']['sass'] = require('./resources/styleLint');

location['images'] = 'images';

// Raw assets like svgs for conversion etc.
location['rawfiles'] = [];
location['rawfiles']['folder'] = 'src';
location['rawfiles']['svgs'] = location['rawfiles']['folder'] + '/svgs';
location['rawfiles']['imgs'] = location['rawfiles']['folder'] + '/imgs';

// Stylesheet sources and destinations.
location['stylessrc'] = 'src/scss';
location['csssource'] = '*.styles.scss';

// All sass that's generated should be added here to the master sass file will pick it up.
location['gensass'] = [];
location['gensass']['icons'] = location['stylessrc'] + '/svgs';

location['cssdest'] = 'dist';
location['cssoutput'] = 'royal-canin.styles.css';
location['cssoutput-min'] = 'royal-canin.styles.min.css';


location['js'] = 'src/js';
location['js-dependencies'] = [
  'node_modules/choices.js/assets/scripts/dist/choices.min.js',
  'node_modules/pikaday/pikaday.js',
  'node_modules/tiny-slider/dist/tiny-slider.js',
  'node_modules/nouislider/distribute/nouislider.min.js',
  'node_modules/tippy.js/dist/tippy.min.js'
];

location['jsdest'] = 'dist';
location['jsoutput'] = 'royal-canin.js';
location['jsoutput-min'] = 'royal-canin.min.js';

location['imgdest'] = 'dist/img';
location['imgoutput'] = '';

const watch = {
  sass: [location['stylessrc'] + '/**/*.scss', location['stylessrc'] + '/*.scss'],
  js: [location['js'] + '/*.js']
};

const deploy = {
  version: '1-2-0'
}

exports.location = location;
exports.watch = watch;
exports.deploy = deploy