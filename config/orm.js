var connection = require("./connection.js");

var orm = {
    read: function(tableName){
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, res){

        });
    }
}

module.exports = orm;