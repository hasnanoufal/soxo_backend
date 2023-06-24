const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 1433;
const cors = require('cors');
const con = require('./db');
const list = require('./list');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

con.connect(function(err){
    console.log('connected:::',err)
})

app.use('/listRoute',list)
app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});