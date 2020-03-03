const Book = require('../models/book');
const User = require('../models/user');

module.exports = {
    create,
    new: newBook,
};

function create(req, res) {
    Book.create(req.body, function(err, book) {
        res.redirect('/books/new');
    });
}

function newBook(req, res) {
    // Book.find({}, function(err, books) {
    //     res.render('books/new', {
    //         title: 'Add Book',
    //         books
    //     });
    // });
    res.render('books')
}

