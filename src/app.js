'use strict';

const express = require('express');

const PORT = 8080;

const app = express();

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'ECS Hands On'} );
});

app.listen(PORT);
console.log('Running app on http://localhost:' + PORT);
