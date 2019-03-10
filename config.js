const credentials = require('./credentials');

module.exports = {
  db: `mongodb+srv://jrodrguez08:${credentials.dbPassword}@testing1-yadvc.mongodb.net/test?retryWrites=true`
};