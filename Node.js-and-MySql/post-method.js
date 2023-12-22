const express = require("express");
const con = require("./config");
const app = express();

app.use(express.json());

app.get("/data", (req, res)=>{
  con.query("select * from students;", (err, result)=>{
    if(err)
    {
      res.send(err);
    }
    res.send(result);
  });
});

app.post("/", (req, res)=>{
  const data = req.body;
  con.query("INSERT INTO students SET ?", data, (err, result, fields)=>{
    if(err)
    {
      res.send(err);
    }
    else{
      res.send(result);
    }

  });
});

app.listen(5000);

// con.query("", (err, result)=>{
//   console.warn("result", result);
// })

