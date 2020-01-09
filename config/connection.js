var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mysql10",
    database:"burgers_db"
})
connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: " + connection.threadId);
});
// we have a basic mysql connection here and then 
// we will export it to our orm
module.exports = connection;