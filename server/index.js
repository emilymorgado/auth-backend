//Main starting point of the application
//`node index.js` starts server
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser'); //express middleware, parses incoming requests into JSON
const morgan = require('morgan'); //express middleware, a logging framework
const app = express();
const router = require('./router');

// APP SETUP
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// SERVER SETUP
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
