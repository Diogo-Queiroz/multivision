var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
/* Variável acima teve que ser __dirname + três levels acima, o
 * route não estava conseguindo encontrar os arquivos pq o caminho
 * não estava legal
 * estava assim para funcionar '../../..' acho que estava faltando
 * uma barra no caminho
 */

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