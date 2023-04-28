const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aitcommerce',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/user', (req, res) => {
  const { fname, sname, age, locations, gender, telephone } = req.body;
  const query = `INSERT INTO tryouts (fname, sname, age, locations, gender, telephone) VALUES (?, ?, ?, ?, ?, ?)`;
  connection.query(query, [fname, sname, age, location, gender, telephone], (err, result) => {
    if (err) throw err;
    console.log('Data inserted successfully!');
    res.send('Data inserted successfully!');
  });
});

const PORT =5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
