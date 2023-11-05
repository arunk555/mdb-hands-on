const customErr = function (code, name, message) {
  const err = new Error();
  err.statusCode = code ?? 500;
  err.message = message ?? "Something went wrong!";
  err.name = name ?? "wrong";

  throw err;
};

module.exports = customErr;
