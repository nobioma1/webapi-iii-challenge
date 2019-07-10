const express = require('express');
const Posts = require('../posts/postDb');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.get();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving all posts, try again...' });
  }
});

router.get('/:id', validatePostId, (req, res) => {
  res.status(200).json(req.post);
});

router.delete('/:id', validatePostId, async (req, res) => {
  const postId = req.post.id;
  try {
    await Posts.remove(postId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting post, try again...' });
  }
});

router.put('/:id', validatePostId, validatePost, async (req, res) => {
  const { id } = req.post;
  const { text } = req.body;

  try {
    await Posts.update(id, { text });
    const post = await Posts.getById(id);
    return res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error saving changes' });
  }
});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;