var path = require('path');
var rootPath = path.normalize(__dirname + '../../..');

module.exports = {
    development: {
        db:'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db:'mongodb://diogo-admin:multivision@ds033116.mlab.com:33116/plural-multivision',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};