// Our models folder will require our orm. 
// It will contain all of the methods we 
// will be using to modify the orm.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.selectAll("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition,cb) {
        orm.selectAll("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    deleteOne: function(condition, cb) {
        orm.selectAll("burgers", condition, function(res) {
            cb(res);
        });
    }
    };

   
// here we are calling orm.all, we are inserting burgers as our table input 
// then running the function of responce as a callback which will be 
// sent into our routes.js file
module.exports = burger;