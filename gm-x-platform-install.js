// This is basically a shim to have gm to work from system (my mac)
// and a locally built gm for lambda.
// Note that my gm is based on imagemagick
const fs = require('fs');
const exec = require('child_process').exec;
const constants = require('./constants');

if (process.platform === 'linux') {

    // ugly hack to restore symlinks after npm? removes them (or maybe it's git)
    constants.BIN_SYMLINKS.forEach( (symln) => {
        fs.symlink(`${constants.IM_PATH}magick`, `${constants.IM_PATH}${symln}`, (err) => {
            if(err) { console.log("ERROR", err)}
        })
    });

    exec(`PKG_CONFIG_PATH=${constants.PKG_CONFIG_PATH} npm install gm`, (err, stdout, stderr) => {
        if(err) { throw err }
        if(stdout) { console.log(stdout)}
        if(stderr) {console.log('STDERR', stderr)}
    })
} else {
    // use system gm
    exec('npm install gm', (err, stdout, stderr) => {
       if(err) { throw err }
       if(stdout) { console.log(stdout)}
       if(stderr) {console.log('STDERR', stderr)}
    })
}


