var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require('../models/burger.js');

// Create our routes and logic
router.get('/', function(request, response) {
  burger.all(function(burger_data) {
    console.log(burger_data)
    response.render('index', { burger_data });
  })
});

router.post('/', function(request, response) {
  burger.create(request.body.burger_name, function(result) {
    console.log(result);
    response.redirect('/');
  })
});

router.put('/:id', function(request, response) {
  burger.update(request.params.id, function(result) {
    console.log(result);
    response.redirect('/');
  })
});

// Export routes for server.js to use
module.exports = router;