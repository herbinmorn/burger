var connection = require("./connection.js");

var orm = {
all:function(cb){
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString,function(err, result){
        if(err){
            throw err;
        }
        cb(result);
    });
},
create:function(vals, cb){

    var queryString = "INSERT INTO burgers(burger_name, devoured)";
    queryString += "VALUES ('";
    queryString += vals;
    queryString += "', false); ";

    console.log(queryString);
    connection.query(queryString, vals, function(err, result){
        if(err) throw err;
        cb(result);
    });

},
update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });

}
};

module.exports = orm;