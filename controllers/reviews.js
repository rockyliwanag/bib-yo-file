const Book = require('../models/book');


module.exports = {
    create
};

function create(req, res) {
    
    Book.findById(req.params.id, function (err, books) {
        books.reviews.push(req.body);
        console.log('test',books);
        books.save(function (err, book) {
            if(err) console.log("ERRR ", err)
            console.log("BOOK ", book)
            res.redirect(`/entries/${books._id}`);
        });
    });
}

