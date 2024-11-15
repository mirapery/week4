
function auth(req, res, next) {
    if (req.query.admin === 'true') {
      next();
    } else {
      res.status(403).send('No auth');
    }
  }

  module.exports = auth;