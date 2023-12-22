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

app.put("/update", (req, res)=>{
  // res.send("Working");
  const data = ["Laxmikant", 21, "Ajmer","Male", "Laxmikant"];
  con.query("UPDATE students SET studentName = ?, age = ?, city = ?, gender = ? where studentName = ?", data, (err, result, field)=>{
    if(err) throw err;
    res.send(result);
  });
});

//PUT method using postman to send data.

app.put("/update/:studentName", (req, res)=>{
  // res.send("Working");
  const data = [req.body.studentName, req.body.age, req.body.city,req.body.gender, req.params.studentName];
  con.query("UPDATE students SET studentName = ?, age = ?, city = ?, gender = ? where studentName = ?", data, (err, result, field)=>{
    if(err) throw err;
    res.send(result);
  });
});

app.listen(5000);

// con.query("", (err, result)=>{
//   console.warn("result", result);
// })

