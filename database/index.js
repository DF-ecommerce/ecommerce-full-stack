var mongoose = require('mongoose');

var mongoUri = 'mongodb://13.52.250.82:27017/ecommerce';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to MongoDB at localhost/ecommerce!");
});

module.exports = db;
