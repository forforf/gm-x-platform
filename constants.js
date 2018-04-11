const IM_DIR = `${__dirname}/imagemagick-${process.platform}`;
const IM_PATH = `${IM_DIR}/bin/`;
const LIB_PATH = `${IM_DIR}/lib/`;
const PKG_CONFIG_PATH = `${LIB_PATH}/pkgconfig/`;

const BIN_SYMLINKS = [
    'animate', 'compare', 'composite', 'conjure', 'convert', 'display', 'identify', 'import',
    'magick-script', 'mogrify', 'montage', 'stream'
];

module.exports = Object.freeze({IM_DIR, IM_PATH, LIB_PATH, PKG_CONFIG_PATH, BIN_SYMLINKS});
