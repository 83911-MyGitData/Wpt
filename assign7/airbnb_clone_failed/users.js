const connectionString = require('./db');
const mysql = require('mysql2');
const express = require('express');

const app = express();

//app.use(express.json());

app.post("/registration",(request,response)=>{
    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    var email = request.body.email;
    var password = request.body.password;
    var phoneNumber = request.body.phoneNumber;
    const connection = mysql.createConnection(connectionString);
    connection.connect();
    let squery = `Insert into user(firstName,lastName,email,password,phone) values('${firstName}','${lastName}','${email}','${password}','${phoneNumber}')`;
    connection.query(squery,(err,result)=>{
        console.log("here");
        //response.setHeader("Content-Type","application/json");
        if(err==null)
     {
       response.write(JSON.stringify(result));
     connection .end();
      response.end();
             }
             else
             {
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
             }
    })
})

module.exports =app;




