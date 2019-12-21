var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// creating the base route which will render index
router.get("/", function(req, res){
    burger.selectAll(function(burger_data){
        var handlebarsObject = {
            burgers: burger_data
        };
        console.log(handlebarsObject);
        res.render("index",handlebarsObject);
    });
    
    router.post("/api/burgers", function(req, res){
        burger.insertOne(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function(result){
            // then send back the ID of new burger
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/burgers/:id",function(req, res){
    var condition = "id " + req.params.id;

    console.log("condition", condition);
    burger.updateOne({ devoured: req.body.devoured },condition, function(
        result
    ) {
        if((result, changedRows === 0)) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
router.deleteOne(condition, function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result){
        if((result, changedRows === 0)) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
});
// we are having a file call another file and so on
module.exports = router;