var mongoose = require('mongoose')
var db = require('./index')
var Schema = mongoose.Schema;


var ecommerceSchema = new Schema({
    product_id: Number,
    product_name:  String,
    product_image: String,
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

var Ecommerce = mongoose.model('Ecommerce', ecommerceSchema)

module.exports = Ecommerce;