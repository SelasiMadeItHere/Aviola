const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const mysql2 = require('mysql2');
const app = express();


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
  res.send("Helloo Express on Aviola"); 
})

const PORT =5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aitcommerce',
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



