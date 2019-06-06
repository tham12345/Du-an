var mysql = require('mysql');

var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'thuctap',
    multipleStatements: true
})

module.exports = connect;