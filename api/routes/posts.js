const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');

/* GET all posts listing. */
router.get('/', postsCtrl.getPosts);

// create a new post
router.post('/create', postsCtrl.createPost); // idTag

router.post('/:id/likes', postsCtrl.likePost);

router.get('/:id/comments', postsCtrl.getComments);
router.post('/:id/comments', postsCtrl.commentPost);

//delete one post
router.delete('/:id', postsCtrl.deletePost);

module.exports = router;
