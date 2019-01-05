const mysql = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'test',
  password : 'secret',
  database : 'test-db'
});

module.exports = db;