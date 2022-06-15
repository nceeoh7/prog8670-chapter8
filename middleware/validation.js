const customMiddleWare = (req, res, next) => {
  console.log("custom middleware called");
  next();
};

const validateMiddleware = (req, res, next) => {
  if (req.files == null || req.body.title == null) {
    return res.redirect("/posts/new");
  }

  console.log("validation of files was succesful");
  next();
};

module.exports = {
  customMiddleWare,
  validateMiddleware,
};
