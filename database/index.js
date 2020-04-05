var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var blogSchema = new Schema({
    product_id: Number,
    product_name:  String, // String is shorthand for {type: String}
    product_image: "String",
    product_price: Number,
    product_description: String,
    product_reviews: [{ body: String, date: Date, rating: Number}],
    product_quantity: { type: Date, default: Date.now },
    promotion: Boolean,
    in_cart: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});

var mongoUri = 'mongodb://localhost/ebidProducts';
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log("Connected to DBS");
})
mongoose.connect(mongoUri, {useNewUrlParser: true});

// var Product = mongoose.model('products', productsSchema)