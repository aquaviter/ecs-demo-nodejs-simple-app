'use strict';

const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to ecs-demo-nodejs-simple-app\n');
});

app.listen(PORT);
console.log('Running app on http://localhost:' + PORT);
