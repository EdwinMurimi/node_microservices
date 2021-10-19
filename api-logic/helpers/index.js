const parseResults = (result, single, message) => {
  let key = result.recordset[0];
  let values = Object.values(key)[0];

  if (values && single === true) return JSON.parse(values)[0];

  if (values && single === false) return JSON.parse(values);

  if (!values) throw message;
};

const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = {
  parseResults,
  use,
};
