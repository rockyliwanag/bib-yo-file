const Book = require('../models/book');
const User = require('../models/user');
const Review = require('../models/review')


module.exports = {
    index,
    new: newBook,
    create,
    show
};

function index(req, res) {
    Book.find({}, function(err, books) {
        res.render('books/index', {books});
    });
}

function newBook(req, res) {
    User.findById(req.user.id, (err, user) => {
    res.render('books/books', {user});
    });
}

function create(req, res) {
    const book = new Book(req.body);
    book.save(function(err) {
        if(err) return alert(err);
        res.redirect('/entries/new');
    });
}

function show(req, res) {
    Book.findById(req.params.id)
        .populate('cast').exec(function (err, books) {
            Review.find({
                _id: {
                    // $nin: books.review
                }
            }, function (err, reviews) {
                res.render('books/show', {
                    title: 'Book Detail',
                    books,
                    reviews
                });
            });
        });
}





