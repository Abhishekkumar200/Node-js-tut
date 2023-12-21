const mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sqlabhi@01",
    database: "sql_workbench"
});

con.connect((err)=>{
    if(err) throw err;
    console.log("Connected!");
});

module.exports = con;
