const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = app => {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // ... other configurations like CORS, error handlers
};
