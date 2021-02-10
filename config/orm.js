var connection = require("./connection.js");

var orm = {
    // insertOne: function(){
    //     let queryString = "INSERT INTO ?? (??) FROM ??";
    // },
    selectAll: function(tableName){
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, res){
            if (err) throw (err);
            res.render("index", { burgers });
        });
    },
    // updateOne: function(){

    // }
}

module.exports = orm;