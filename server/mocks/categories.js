/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var categoriesRouter = express.Router();

  var categories = [
    { id: 1,
      name: 'Books'},
    { id: 2,
      name: 'Movies'},
    { id: 3,
      name: 'Video Games'},
    { id: 4,
      name: 'Electronics'},
    { id: 5,
      name: 'Clothing'},
    { id: 6,
      name: 'Sports'},
    { id: 7,
      name: 'Health'} ];

  categoriesRouter.get('/', function(req, res) {
    res.send({
      'categories': categories
    });
  });

  categoriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  categoriesRouter.get('/:id', function(req, res) {
    res.send({
      'categories': {
        id: req.params.id
      }
    });
  });

  categoriesRouter.put('/:id', function(req, res) {
    res.send({
      'categories': {
        id: req.params.id
      }
    });
  });

  categoriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/categories', require('body-parser'));
  app.use('/api/categories', categoriesRouter);
};
