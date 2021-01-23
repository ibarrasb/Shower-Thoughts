var db = require("../models");

module.exports = function(app) {
app.post("/members", function(req, res) {
    var query = {};
    if (req.query.userid) {
        query.userid = req.query.userid;
    }
    db.Post.findall({
      include: [db.Post]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};