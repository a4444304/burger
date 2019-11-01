var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// creating the base route which will render index
router.get("/", function(req, res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index",{burger_data});
    })   
})

router.put("/burgers/update",function(req, res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.post("/burgers/create", function(req, res){
    burger.create(req.body.burger_name, function(result){
        res.redirect("/");
    })
})
// we are having a file call another file and so on
module.exports = router;