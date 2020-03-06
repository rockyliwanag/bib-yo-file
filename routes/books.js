const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');


router.get('/', booksCtrl.index);
router.get('/new', booksCtrl.new);
router.get('/:id', booksCtrl.show);
router.get('/:id/edit', booksCtrl.edit);
router.put('/:id', booksCtrl.update);
router.post('/', booksCtrl.create);
router.delete('/:id', booksCtrl.deleteBook);


module.exports = router;