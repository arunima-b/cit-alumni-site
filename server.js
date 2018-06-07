const express = require('express'),
  app = express(),
  path = require('path'),
  mysql = require('mysql'),
  dbInfo = require(path.join(__dirname, 'secret', 'db.js'));

//const dbConnection = mysql.createConnection(dbInfo)

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
