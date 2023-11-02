const errorhandler = function (error, req, res, next) {
  const { statusCode, name, message } = error;
  const code = statusCode ?? 500;
  const msg = message ?? "Something went wrong";
  console.error(`${name} - ${msg}`);
  res.status(code).json({ status: false, message: `${name} - ${msg}` });
};

module.exports = errorhandler;
