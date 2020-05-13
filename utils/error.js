function error(message, code) {
  let err = new Error(message);

  if(code) {
    e.statusCode = code;
  }

  return err;
}

module.exports = error;