
var mysql=require('mysql2');
var pool= mysql.createConnection({

    host:'localhost',
    user :'root',
    password:'manager',
    database:'airbnb',
    port:3306
});
module.exports=pool;