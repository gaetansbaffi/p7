const express = require('express');
const router = express.Router();
const tagsCtrl = require('../controllers/tags');

/* 

Routes: tag

/* GET all tags */
router.get('/', tagsCtrl.getTags);

module.exports = router;
