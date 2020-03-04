const Book = require('../models/book');
const User = require('../models/user');

module.exports = {
    // index,
    new: newBook,
    create

};

// function index(req, res) {
//     Book.find({}, function(err, books) {
//         res.render('users/index', {books});
//     });
// }

function newBook(req, res) {
    User.findById(req.user.id, (err, user) => {
    res.render('users/books', {user}); //change to users/new after rendering profile
    });
}

function create(req, res) {
    const book = new Book(req.body);
    book.user = req.user._id;
    book.save(function(err) {
        if(err) return render(err);
        res.redirect('users/index');
    });
}



