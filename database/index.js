var mongoose = require('mongoose');


var mongoUri = 'mongodb://localhost/ecommerce';
mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're Connected to DB!")
});


module.exports = db;