const express = require("express");
const path = require('path');
const app = express();


app.use(express.json());
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-Width,Content-Type, Accept,Authorization");
  res.header("Access-Control-Allow-Methos", "GET,POST,PUT,DELETE,OPTIONS")
  next();
});

app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public', 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));