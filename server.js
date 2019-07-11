const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const users = require('./users/userRouter');
const posts = require('./posts/postRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger);

server.use('/api/users', users);
server.use('/api/posts', posts.router);

server.get('/', (req, res) => {
  res.send(`<h2>Welcome, Let's write some middleware!</h2>`);
});

//custom middleware
function logger(req, res, next) {
  const { method, url } = req;
  const timestamp = new Date();
  console.log(method, url, timestamp);
  next();
}

module.exports = server;
