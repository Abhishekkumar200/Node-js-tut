const express = require("express");
const con = require("./config");
const app = express();


app.get("/data", (req, res)=>{
  con.query("select * from students;", (err, result)=>{
    if(err)
    {
      res.send(err);
    }
    res.send(result);
  });
});

app.listen(5000);
