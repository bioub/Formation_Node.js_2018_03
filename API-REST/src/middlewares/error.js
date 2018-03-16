module.exports = (err, req, res, next) => {
  res.statusCode = 500;
  res.json({
    msg: err.message,
  });
};
