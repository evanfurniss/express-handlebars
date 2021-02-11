var connection = require("./connection");

function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }

var orm = {
    insertOne: function(table, col, vals, cb){
        let queryString = `INSERT INTO ${table} (${col}) FROM ${vals}`;
        connection.query(queryString, function(err, res){
            if (err) throw (err);
            cb(res);
        });
    },
    selectAll: function(tableName, cb){
        let queryString = `SELECT * FROM ${tableName}`;
        connection.query(queryString, function(err, res){
            if (err) throw (err);
            cb(res);
        });
    },
    updateOne: function(table, vals, condition, cb){
        let queryString = `UPDATE ${table} SET ${objToSql(vals)} WHERE ${condition}`;
        connection.query(queryString, function(err, res){
            if (err) throw (err);
            cb(res);
        });
    }
};

module.exports = orm;