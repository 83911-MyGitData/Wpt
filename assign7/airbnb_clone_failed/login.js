var mysql = require('mysql2');
var  express = require('express');
var router = express.Router();
var pool=require('./pool')
const jwt = require("jsonwebtoken");
var abhi = Snha;

router.post("/login",(req,res,next)=>{
   var refToMail = req.header.body;
   var refToPass = req.header.body;

   var connection = mysql.createConnection(pool);
   connection.connect();
   let queryTxt = `Select * from user where email = ${refToMail.value} and password = ${refToPass.value} `;
   connection.query(queryTxt,(err,result)=>{
    res.setHeader("Content-Type","application/json");
    if(err==null)
        
        {
            res.write(JSON.stringify(result));
            const token = jwt.sign({email: result[0].email}, abhi);
            connection.end();
            res.end();
        }

        else
        {
            res.write(JSON.stringify(err));
            connection.end();
            res.end();
        }
        
   })
})