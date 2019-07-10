const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Welcome, Let's write some middleware!</h2>`);
});

//custom middleware
function logger(req, res, next) {
  const { method, url } = req;
  const timestamp = new Date().toISOString();
  console.log(method, url, timestamp);
  next();
}

module.exports = server;
