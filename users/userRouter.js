const express = 'express';

const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

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

function validateUserId(req, res, next) {

};

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
