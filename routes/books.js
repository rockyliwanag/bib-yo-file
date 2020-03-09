const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');


router.get('/', booksCtrl.index);
router.get('/new', isLoggedIn, booksCtrl.new);
router.get('/:id', booksCtrl.show);
router.get('/:id/edit', isLoggedIn, booksCtrl.edit);
router.put('/:id', isLoggedIn, booksCtrl.update);
router.post('/', isLoggedIn, booksCtrl.create);
router.delete('/:id', isLoggedIn, booksCtrl.deleteBook);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}


module.exports = router;