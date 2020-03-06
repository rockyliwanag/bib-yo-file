const Book = require('../models/book');
const User = require('../models/user');
const Review = require('../models/review');


module.exports = {
    index,
    new: newBook,
    create,
    show,
    edit,
    update,
    deleteBook
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

function edit(req, res) {
    Book.findById(req.params.id, function(err, book) {
        res.render('books/edit', {book});
    });
}

function update(req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, book) { 
        if(err) console.log('WHY ISNT IT WORKING', err)
        res.redirect(`/entries/${book._id}`);
    });
}

function deleteBook(req, res) {
    Book.findById((req.params.id), function(err, book) {
        book.deleteOne(function (err){
            console.log('Its not deleting');
            res.redirect('/entries');
        });
    });
}

// function search(req, res) { 
//     if(req.query.search) {
//         const regex = new RegExp(escapeRegex(req.query.search), 'gi');
//         Book.find({name: regex}, function(err, bookResult){
//             if(err){
//                 console.log(err);
//             } else {
//                 res.render('books/books', {
//                     bookResult
//                 });
//             }
//         });
//     }
// }

// function escapeRegex(text) {
//     return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
// }




