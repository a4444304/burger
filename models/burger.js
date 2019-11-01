// Our models folder will require our orm. 
// It will contain all of the methods we 
// will be using to modify the orm.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers",function(res){
            cb(res);
        })
    },

    update: function(id,cb){
        orm.update("burgers",id,cb);
    },
    create: function(name,cb){
        orm.create("burgers", name, cb);
    }

}
// here we are calling orm.all, we are inserting burgers as our table input 
// then running the function of responce as a callback which will be 
// sent into our routes.js file
module.exports = burger;