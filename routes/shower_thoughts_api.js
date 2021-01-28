// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    app.get("/", (req, res) => {
        // If the user already has an account send them to the members page
        // if (req.user) {
        //   res.redirect("/members");
        // }
        // res.sendFile(path.join(__dirname, "../public/signup.html"));
        res.render("index")
      });

  app.get("/profile", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("profile")
  });

  
};