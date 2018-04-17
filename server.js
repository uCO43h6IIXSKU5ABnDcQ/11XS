'use strict';
const express = require('express');
const app = express();
const transformHTML=require('./_modules/transformHTML.js');

app.get('/*', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(transformHTML('',req.url));
});

app.post('/*', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(transformHTML('',req.url));
});


app.listen(process.env.PORT || 3003, function () {
  console.log('Server started!');
});
