const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    // favoriteBooks: [],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);