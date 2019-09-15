var mysql = require("mysql");
require('dotenv').config();

var connection;
// if(process.env.JAWSDB_URL){
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
    connection= mysql.createConnection({
    host:"x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port:3306,
    user:"si073ef5ttyyi4wc",
    password:"f2oujezl206icbwd",
    database:"fzwa61381fsrsq4u"
});
// };

connection.connect(function(err){
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;