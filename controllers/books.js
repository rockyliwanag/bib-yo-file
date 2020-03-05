const Book = require('../models/book');
const User = require('../models/user');

module.exports = {
    index,
    new: newBook,
    create
};

function index(req, res) {
    Book.find({}, function(err, books) {
        res.render('books/index', {books});
    });
}

function newBook(req, res) {
    User.findById(req.user.id, (err, user) => {
    res.render('books/books', {user}); //change to users/new after rendering profile
    });
}

function create(req, res) {
    const book = new Book(req.body);
    book.save(function(err) {
        console.log(err);
        console.log(book);
        // if(err) return alert(err);
        res.redirect('/');
    });
}





