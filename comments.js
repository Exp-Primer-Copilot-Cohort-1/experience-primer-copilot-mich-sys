// create web server
// create route for comments
// create route for add comments
// create route for delete comments
// create route for edit comments

const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// add route for comments
router.post('/posts/:id/comments', commentsCtrl.create);
// add route for delete comments
router.delete('/comments/:id', commentsCtrl.delete);
// add route for edit comments
router.put('/comments/:id', commentsCtrl.update);

module.exports = router;