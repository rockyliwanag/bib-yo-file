const Book = require('../models/book');
const User = require('../models/user');

module.exports = {
    // index,
    create,
    new: newBook
};

// function index(req, res) {
//     Book.find({}, function(err, users) {
//         res.render('users', {users});
//     });
// }

function create(req, res) {
    const book = new Book(req.body);
    book.user = req.user._id;
    book.save(function(err) {
        if(err) return render(err);
        res.redirect(`/entries/${book._id}`);
    });
}

function newBook(req, res) {
    User.findById(req.user.id, (err, user) => {
    res.render('users/book', {user});
    });
}

