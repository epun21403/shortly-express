let auth = require('./auth');

const parseCookies = (req, res, next) => {

  if (req.headers.cookie) {
    let cookieSet = req.headers.cookie.split('; ');
    cookieSet.forEach(function (element) {
      let cookiePair = element.split('=');
      req.cookies[cookiePair[0]] = cookiePair[1];
    });
  } else {
    auth.createSession(req, res, next);
  }

  next();
};

module.exports = parseCookies;