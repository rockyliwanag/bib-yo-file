const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    author: String,
    category: String,
    coverArt: String,
    reviews:[{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);