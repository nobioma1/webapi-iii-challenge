const express = require('express');
const Users = require('./userDb');
const Posts = require('../posts/postDb');
const postRouter = require('../posts/postRouter');

const router = express.Router();
const validatePost = postRouter.validatePost;

router.post('/', validateUser, async (req, res) => {
  const { name } = req.body;

  try {
    const user = await Users.insert({ name });
    return res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'User already exits' });
  }
});

router.post('/:id/posts', validateUserId, validatePost, async (req, res) => {
  const { text } = req.body;
  const { id } = req.user;

  try {
    const post = await Posts.insert({ text, user_id: id });
    return res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error adding post, please try again' });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await Users.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving all users, try again...' });
  }
});

router.get('/:id', validateUserId, (req, res) => {
  res.status(200).json(req.user);
});

router.get('/:id/posts', validateUserId, async (req, res) => {
  const userId = req.user.id;

  try {
    const userPosts = await Users.getUserPosts(userId);
    res.status(200).json(userPosts);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error retrieving users posts, try again...' });
  }
});

router.delete('/:id', validateUserId, async (req, res) => {
  const userId = req.user.id;
  try {
    await Users.remove(userId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user, try again...' });
  }
});

router.put('/:id', validateUserId, validatePost, async (req, res) => {
  const { name } = req.body;
  const { id } = req.user;

  try {
    await Users.update(id, { name });
    const user = await Users.getById(id);
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error saving changes' });
  }
});

//custom middleware

async function validateUserId(req, res, next) {
  const { id } = req.params;
  const user = await Users.getById(id);

  if (!user) {
    return res.status(400).json({ message: 'invalid user id' });
  }
  req.user = user;
  next();
}

function validateUser(req, res, next) {
  if (!req.body) {
    return res.status(400).json({ message: 'missing user data' });
  }
  if (!req.body.name) {
    return res.status(400).json({ message: 'missing required name field' });
  }
  next();
}

module.exports = router;
