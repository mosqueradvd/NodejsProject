const store = require('../../../store/dummydb');
const controller = require('./controller');

module.exports = controller(store);
