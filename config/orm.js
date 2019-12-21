// we are going to import our connection in orm
var connection = require("./connection.js");
// within this file we will create an object that 
// has a lot of methods within it

// our question marks helper
function createQmarks(num) {
    var arr = [];
    for(var i=0; i< num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
// this will translate the string into a readable querry
function translateSql(obj) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
        if(typeof value === "string" && value.indexOf(" ") >= 0 {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value)
    }
}
return arr.toString();

// orm .all method
var orm = {
    selectAll: function(tableInput, cb){
        var dbQuery = "SELECT * FROM "+ tableInput + ";";
        connection.query(dbQuery, function(err, res){
            if (err) {
                throw err;
            }
            cb(result);
        }); 
        // here we are going to use a callback to pass the result into the next file
    },
    insertOne: function(table, cols, vals, cb) {
        var dbQuery =
        "INSERT INTO" +
        table +
        " (" +
        cols.toString() +
        ") " +
        "VALUES (" +
        createQmarks(vals.length) +
        ") ";

    console.log(dbQuery);
    connection.query(dbQuery, vals, function(err, res){
        if (err) {
            throw err;
        }
        cb(result);
    }); 
    },
    updateOne: function(tableInput, objColVals, condition, cb) {
        var dbQuery =
        "UPDATE " +
        table +
        "SET " +
        translateSql(objColVals) +
        "WHERE " +
        condition;

    console.log(dbQuery);
    connection.query(dbQuery, function(err, res){
        if (err) {
            throw err;
        }
        cb(result);
    }); 
    },
    deleteOne: function(table, condition, cb) {
        var dbQuery = "DELETE FROM" + table + "WHERE" + condition;
        console.log(dbQuery);

        connection.query(dbQuery, function(err, res){
        if (err) {
            throw err;
        }
        cb(result);
    }); 
    },
    
module.exports = orm;