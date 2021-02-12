// Require express
var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();

// Use anything in the "public" folder
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes to handle requests
var routes = require("./controllers/controller.js");

app.use(routes);

// Connected to front-end
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});