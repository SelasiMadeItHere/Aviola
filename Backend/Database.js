const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const mysql2 = require('mysql2');
const app = express();

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crudtrial',
});



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/get', (req,res) =>{
  const sqlGet = "SELECT * FROM contactdb";
  connection.query(sqlGet, (error,result)=> {
    res.send(result);
  })
})

app.get("/",(req,res)=>{
  const sqlinsert = "INSERT INTO contactdb (fname, sname, email, contact) VALUES ('PRECIOUS', 'SELASI', 'selasiprecious20@gmail.com', '0534324234')";
  connection.query(sqlinsert,(err,result)=>{
    console.log("error", err)
    console.log("results", result)
  })
  res.send("Helloo Express on Aviola"); 
})

const PORT =5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database! Hooray!!!!');
});




// app.post('/api/user', (req, res) => {
//   const { fname, sname, age, locations, gender, telephone } = req.body;
//   const query = `INSERT INTO tryouts (fname, sname, age, locations, gender, telephone) VALUES (?, ?, ?, ?, ?, ?)`;
//   connection.query(query, [fname, sname, age, location, gender, telephone], (err, result) => {
//     if (err) throw err;
//     console.log('Data inserted successfully!');
//     res.send('Data inserted successfully!');
//   });
// });



