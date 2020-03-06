const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.get('/reviews', reviewsCtrl.new);

module.exports = router;

