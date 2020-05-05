const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    type: String,
    seller: Number
});

productSchema.plugin(AutoIncrement, {inc_field: 'productId'});
const model = mongoose.model('product', productSchema);

module.exports = model;
