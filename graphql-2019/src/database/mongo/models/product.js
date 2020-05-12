const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const product = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    type: String,
    seller: Number
});

product.plugin(AutoIncrement, {inc_field: 'productId'});
const model = mongoose.model('product', product);

module.exports = model;
