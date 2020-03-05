var express = require('express');
var router = express.Router();
const passport = require('passport');
const indexCtrl = require('../controllers/books');

// router.get('/', function index(req, res) {
//   Book.find({}, function (err, book) {
//     res.render('users/index', {
//       book
//     });
//   });
// });

router.get('/', indexCtrl.index);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// res.render('users/index', { //points to view/users/index
//   users,
//   name: req.query.name,
//   user: req.user,
//   // books
//   // sortKey: sortKey
// });

module.exports = router;
