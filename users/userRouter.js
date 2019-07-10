const express = 'express';

const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

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
