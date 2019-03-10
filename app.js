const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const config = require('./config');
const users = require('./server/routes/User');

const app = express();
app.use(passport.initialize());
require('./server/strategies/local')(passport);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(config.db, {useNewUrlParser: true}).then(
  () => {
    console.log('Database is connected')
  },
  error => {
    console.log(`Can not connect to the database ${error}`)
  }
);

const PORT = process.env.PORT || 8080;

app.use('/api/users', users);

app.get('/', function (req, res) {
  res.send('hello');
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});