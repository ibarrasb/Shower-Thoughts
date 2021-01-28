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
      ['post_date', 'ASC']
    ]
  }).then(
    function (data) {
      // res.render('index', hbsObject);
      db.Reply.findAll({
        // where: [{
        //   post_id: req.params.id
        // }]
      })
        .then(
          function (rdata) {
            console.log(JSON.stringify(data))
            console.log("data" + rdata)
            var replyObject = {
              replies: rdata,
              thoughts: data
            }
            res.render('index', replyObject);
          });
    }
  );
});

router.post("/api/create", function (req, res) {
  db.Posts.create(req.body)
    .then(function (dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    })
})

router.post("/api/reply", function (req, res) {
  console.log(req.body)
  db.Reply.create(req.body)
    .then(function (dbReply) {
      console.log(dbReply);
      res.json(dbReply);
    })
})

//render replies page

router.get("/index/:id", function (req, res) {
  db.Posts.findAll({
    where: [{
      id: req.params.id
    }]
  }).then(
    function (data) {
      db.Reply.findAll({
        where: [{
          post_id: req.params.id
        }]
      })
        .then(
          function (rdata) {
            console.log(JSON.stringify(rdata))
            console.log("data" + rdata)
            var replyObject = {
              thoughts: data,
              replies: rdata,
             
            }
            res.render('replies', replyObject);
          });
    }
  );
});

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


//To render home
router.get("/home", function (req, res) {
  res.render("home");
});

// Export routes for server.js to use.
module.exports = router;




// select o.usernme , o.rep_desc from replies o
// join Posts b on 
// o.post_id = b.id
// where o.post_id = ?;