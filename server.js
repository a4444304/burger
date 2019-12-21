var express = require("express");
var bodyParser = require("body-parser");
// var methodOverride = require("method-override");
var expressHandlebars = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/routes");
app.use("/",routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});


// app.use(methodOverride("_method"));




