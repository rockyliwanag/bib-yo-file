const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
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