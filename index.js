// Interface for require cross platform versions of gm
//TODO: Support other platforms
const constants = require('./constants');

let gm;

if(process.platform === 'linux') {
    console.log(`appPath: ${constants.IM_PATH}`);

    // Set Paths
    process.env['LD_LIBRARY_PATH'] = constants.LIB_PATH;
    process.env['PATH'] = `${process.env['PATH']}:${constants.IM_PATH}`;

    gm = require('gm').subClass({
        imageMagick: true,
        appPath: constants.IM_PATH });

} else {
    console.log('Using system Imagemagick');
    gm = require('gm').subClass({ imageMagick: true}); // Enable ImageMagick integration.

}

module.exports = gm;
