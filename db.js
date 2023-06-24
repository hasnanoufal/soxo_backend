const mysql = require('mysql');

const con = mysql.createConnection({
    // host:"ec2-15-206-206-108.ap-south-1.compute.amazonaws.com",
    // user:"Soxo_Client_Test",
    // password:"Soxo_Client_Test@ad900",
    // database:"Soxo_Client_Test",
//     port:1433

host:"localhost",
    user:"root",
    password:"",
    database:"books"
});
console.log('inside db::::')


module.exports = con;