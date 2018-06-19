var express = require("express");
var router = express.Router();

// Require burger.js
var burger = require("../models/burger.js");

//Route for getting all data
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Route for adding data
router.post("/", function(req, res) {
  burger.create([
    "burger_name", "delivered"
  ], [
    req.body.burger_name, req.body.delivered
  ], function() {
    res.redirect("/");
  });
});

// Route for updating data
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    delivered: req.body.delivered
  }, condition, function() {
    res.redirect("/");
  });
});

// route for deleting data
router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;