const credentials = require('./credentials');

module.exports = {
  db: `mongodb+srv://${credentials.dbUser}:${credentials.dbPassword}@testing1-yadvc.mongodb.net/test?retryWrites=true`
};