var mysql = require('mysql')
var db = mysql.createConnection({
    host : 'localhost',
    user : 'admin',
    password : '',
    database : 'school',
})

db.connect(error => {
    if (error) {
        throw error.message
    }
})

module.exports = db