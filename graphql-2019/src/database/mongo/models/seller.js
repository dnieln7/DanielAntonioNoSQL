const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const seller = new Schema({
    name: String,
    address: String,
    phone: String,
    international: Boolean
});

seller.plugin(AutoIncrement, {inc_field: 'sellerId'});
const model = mongoose.model('seller', seller);

module.exports = model;
