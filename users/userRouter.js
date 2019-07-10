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

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

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
