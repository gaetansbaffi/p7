const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const app = require('../app');

// Create user
router.post('/register', usersCtrl.createUser);

// login user
router.post('/login', usersCtrl.login);

// get profil

router.get('/logout', usersCtrl.logout);

router.get('/:id', usersCtrl.showProfil);

router.use(function (req, res, next) {
	next(createError(404));
});

module.exports = router;
