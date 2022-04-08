const router = require('express').Router()
const auth = require('./auth')
const dashboard = require('./dashboard')
const cars = require('./cars')
const User = require('../models/users')

router.use('/', auth)

// MIDDLEWARE AUTH
// router.use(function (req, res, next) {
//     if (User.login === true) {
//         next()
//     } else {
//         res.redirect('/login')
//     }
// })

router.use('/', dashboard)
router.use('/cars', cars)
router.get('/addCar', function (req, res, next) {
    res.render('addCar');
});

module.exports = router

// const express = require('express');
// const car = require('../controllers/cars')
// const router = express.Router();
// // const pageRouter = require('./pages');

// /* GET home page. */
// router.get('/login', function(req, res, next) {
//   res.render('login');
// });

// router.get('/', function(req, res, next) {
//   res.render('dashboard');
// });

// router.get('/cars', car.post.index)

// router.get('/addCar', function(req, res, next) {
//   res.render('addCar');
// });

// // router.use(pageRouter);

// module.exports = router;