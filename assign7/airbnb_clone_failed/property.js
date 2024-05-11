var express = require('express');
var router = express.Router();
var pool=require('./db');
var upload=require('multer');
const { title } = require('process');

router.post("/property",(request,response)=>{
    var connection  = pool;
    connection.connect();

    var sqlQuery = `INSERT INTO property(categoryId,
        title,
        details,
        address,
        contactNo,
        ownerName,
        guests,
        bedrooms,
        beds,
        bathrooms,
        rent) values('${categoryId}','${title}','${details}','${address}','${contactNo}','${ownerName}','${guests}','${bedrooms}','${beds}','${bathrooms}','${rent}')`;
        connection.query((sqlQuery,err,res)=>{
            res.setHeader("Content-Type","application/json");
            if(err==null)
                {
                    response.write(JSON.stringify(res));
                    connection.end();
                    response.end();
                }

                else{
                    response.write(JSON.stringify(err));
                    connection.end();
                    response.end();
                }
        })
})

module.exports =router;