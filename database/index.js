var mongoose = require('mongoose');

var mongoUri = 'mongodb://localhost/ecommerce';
mongoose.connect(process.env.MONGODB_URI || mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to MongoDB at localhost/ecommerce!");
});

module.exports = db;
