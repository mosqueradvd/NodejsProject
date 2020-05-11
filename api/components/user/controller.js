const TABLE = 'user';

module.exports = function(injectedStore) {
  let store = injectedStore;
  if(!store) {
    store = require('../../../store/dummydb');
  }

  function list() {
    return store.list(TABLE)
  }

  function get(id) {
    return store.get(TABLE, id)
  }

  return {
    list,
    get
  }
}
