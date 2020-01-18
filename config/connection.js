var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql10',
        database: 'burgers_db'
    });
};
//  mysql.createConnection({
//     host:"xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     user:"cjr91gmta81pos83",
//     password:"r7czsu3b32jqeoix",
//     database:"grjm3a0clpo6i5wn"
// })
connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: " + connection.threadId);
});
// we have a basic mysql connection here and then 
// we will export it to our orm
module.exports = connection;