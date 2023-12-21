// mysql has some problems and is uable to connect. So, I am using mysql2.
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("select * from students", (err, result)=>{
  console.warn("result", result);
})

