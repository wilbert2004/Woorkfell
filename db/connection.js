const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "climalaboral",
});



db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
