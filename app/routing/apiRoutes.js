var friends = require("../data/friends.js");
var express = require("express");

module.exports = function(app) {
// API ROUTES
app.get('/api/peeps', function(req, res) {
	app.set('json spaces', 40);
    res.json(friends);
});

app.post("/api/peeps", function(req, res) {
	friends.push(req.body);
// app.post("/api/new", function(req, res) {
//   var newcharacter = req.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   peeps.push(newcharacter);

//   res.json(newcharacter);
// });

})
};