const {Schema, model} = require('mongoose');

const image = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    path: {
        type: String,
        required: true
    }
});

module.exports = model('Projects', image);