var mysql = require("mysql");
var connection;

connection = mysql.createConnection({
    host: process.env.NETWORTHYMAX_HOST,
    user: process.env.NETWORTHYMAX_USER,
    password: process.env.NETWORTHYMAX_PASSWORD,
    database: process.env.NETWORTHYMAX_DATABASE
})

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;