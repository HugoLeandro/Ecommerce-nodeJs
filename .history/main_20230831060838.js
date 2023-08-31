import { inicializarCarrinho } from './src/menuCarrinho';

var resolve = require('../../../');

module.exports = function (t, cb) {
    resolve('mymodule', null, cb);
};

inicializarCarrinho();