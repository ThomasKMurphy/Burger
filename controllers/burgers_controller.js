var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require('../models/burger.js');

// Create out routes and logic
router.get('/', function(request, response) {
  burger.all(function(burger_data) {
    console.log(burger_data)
    response.render('index', { burger_data });
  })
})

router.put('/burgers/update', function(request, response) {
  burger.update(request.body.burger_id, function(result) {
    console.log(result);
    response.redirect('/');
  })
})

router.post('/burgers/create', function(request, response) {
  burger.create(request.burger.burger_name, function(result) {
    response.redirect('/');
  })
})

// Export routes for server.js to use
module.exports = router;