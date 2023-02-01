const consoleLog = (req, res, next) => {
  console.log("This is a practice-middleware");
  next();
};

module.exports = consoleLog;
