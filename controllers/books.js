const Book = require('../models/book');
const User = require('../models/user');



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
        res.redirect('/');
    });
}

function show(req,res) {
    Book.findById(req.params.id, function(err, books) {
        res.render('books/show', {
            books
        })
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
        res.redirect(`/entries/${book._id}`);
    });
}

function deleteBook(req, res) {
    Book.findById((req.params.id), function(err, book) {
        book.deleteOne(function (err){
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




