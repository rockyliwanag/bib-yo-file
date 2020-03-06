const Book = require('../models/book');


module.exports = {
    create
};

function create(req, res) {
    
    Book.findById(req.params.id, function (err, books) {
        books.reviews.push(req.body);
        books.save(function (err, book) {
            res.redirect(`/entries/${books._id}`);
        });
    });
}

