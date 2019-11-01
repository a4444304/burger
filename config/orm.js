// we are going to import our connection in orm
var connection = require("./connection.js");
// within this file we will create an object that 
// has a lot of methods within it

// orm .all method
var orm = {
    all: function(tableInput, cb){
        connection.query("SELECT * FROM "+tableInput+";", function(err,
        result){
        if(err) throw err;
        cb(result)
        // here we are going to use a callback to pass the result into the next file
        })
    },

    update: function(tableInput, condition, cb){
        connection.query("UPDATE "+tableInput+" SET devoured=true WHERE id="+condition+";", function(err,result){
        if (err)throw err;
        cb(result);
        })
    },

    create: function(tableInput, val, cb){
        connection.query("INSERT INTO "+tableInput+" (burger_name) VALUES ("+val+");", function(err,result){
        if(err)throw err;
        cb(result);
        })
    }
}

module.exports = orm;