const { Int32, Decimal128 } = require('bson');
const { timeStamp } = require('console');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Int32,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: Text,
    },
    SKU: {
        type: String,
    },
    category_id: {
        type: Int32,
        required: true,
    },
    inventory_id: {
        type: Int32,
        required: true,
    },
    price: {
        type: Decimal128,
        required: true,
    },
    discount_id: {
        type: Int32,
        required: true,
    },
    created_at: {
        type: timeStamp,
        required: true,
    },
    modified_at: {
        type: timeStamp,
        required: true,
    },
    deleted_at:{
        type: timeStamp,
        required: true,
    }
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;