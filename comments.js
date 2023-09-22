// create web server
// 2017-02-22 18:00
// create by lichunping
// modified by lichunping

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// GET /comments 所有用户或者特定用户的评论页
// eg: GET /comments?author=xxx
router.get('/', function(req, res, next) {
  var author = req.query.author;

  Comment.getComments(author)
    .then(function(comments) {
      res.render('comments', {
        comments: comments
      });
    })
    .catch(next);
});

// POST /comments 发表一条留言
router.post('/', function(req, res, next) {
  var author = req.fields.author;
  var content = req.fields.content;

  // 校验参数
  try {
    if (!author.length) {
      throw new Error('请填写作者名');
    }
    if (!content.length) {
      throw new Error('请填写留言内容');
    }
  } catch (e) {
    req.flash('error', e.message);
    return res.redirect('back');
  } });