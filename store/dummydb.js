const db = {
  user: [
    {
      id: '1',
      name: "David",
    },
  ],
};

async function list(table) {
  return db[table];
}

async function get(table, id) {
  let coll = await list(table);
  return coll.filter((item) => item.id === id)[0] || null;
}

async function upsert(table, data) {
  db[coll].push(data);
}

async function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
