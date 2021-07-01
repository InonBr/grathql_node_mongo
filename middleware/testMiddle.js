const testMiddle = (req, res, next) => {
  req.random = 'some random middleware';
  next();
};

module.exports = testMiddle;
