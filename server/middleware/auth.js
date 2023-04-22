const models = require('../models');
const Hash = require('../lib/hashUtils');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // STUDENT NOTE what is this has supposed to be doing
  req.session = {'hash': Hash.createHash(Hash.createRandom32String()), 'user': {'username': req.body.username}};
  res.cookies = {'shortlyid': {'value': 'Hi Koen'}};
  next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

