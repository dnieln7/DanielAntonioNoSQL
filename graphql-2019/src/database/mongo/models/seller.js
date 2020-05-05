const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const sellerSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    international: Boolean
});

sellerSchema.plugin(AutoIncrement, {inc_field: 'sellerId'});
const model = mongoose.model('seller', sellerSchema);

module.exports = model;
