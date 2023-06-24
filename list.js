const express = require('express');
const con = require('./db');
const list = express.Router();

list.route('/getList').get(function(req,res){
    con.query("SELECT*FROM book",(err,result,fields)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })   
});

 

module.exports = list;

