var express = require("express");
var router = express.Router();

// Require burger.js
var burger = require("../models/burger.js");

//Route for getting all data
router.get("/index", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/burgers/create", function(req, res) {
  // console.log("inside api/burger"+req.body);
  // takes the request object using it as input for buger.addBurger
  burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    // console.log(result);
    res.redirect("/index");
  });
 });


// Route for updating data
router.post('/burger/deliver/:id', function (req, res) 
{
  burger.updateOne(req.params.id, function() 
  {
    res.redirect('/index');
  });
});

// Export routes for server.js to use.
module.exports = router;