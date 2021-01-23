var express = require("express");

var router = express.Router();
// Import the model (post.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

// Post - title , description, date, category, reply
//
router.get("/index", function (req, res) {
  var query = {};
  if (req.query.id) {
    query.id = req.query.author_id;
  }
  db.Posts.findAll({
    order: [
      ['post_date', 'DESC']
    ]
  }).then(
    function (data) {
      console.log(data)
      var hbsObject = {
        thoughts: data
      };

      res.render('index', hbsObject);
    }
  );
});

router.post ("/api/create", function (req, res) {
  db.Posts.create(
    req.body
    // .post_title,
    // req.body.post_desc,
    // req.body.user_id,
  ).then ( function (dbPost) {
    console.log(dbPost);
    res.json(dbPost);
  })
})

// Reply Reply description username of the person that is replying
router.post("/api/user", function (req, res) {
  user.create([
    "rep_desc", "user_id"
  ], [
    req.body.rep_desc,
    req.body.user_id,
  ], function (result) {
    // Send back the ID of the new post
    res.json({ id: result.insertId });
  });
});


// Delete reply
router.delete("/api/thoughts/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  user.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;