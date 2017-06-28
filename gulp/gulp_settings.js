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

location['cssdest'] = 'dist/css';
location['cssoutput'] = 'royal-canin.styles.css';
location['cssoutput-min'] = 'royal-canin.styles.min.css';

location['jsdest'] = 'dist/js';
location['jsoutput'] = 'royal-canin.js';
location['jsoutput-min'] = 'royal-canin.min.js';

location['imgdest'] = 'dist/img';
location['imgoutput'] = 'icons';

const watch = {
  sass: [location['stylessrc'] + '/**/*.scss', location['stylessrc'] + '/*.scss'],
  js: [location['js'] + '/*.js']
};

exports.location = location;
exports.watch = watch;