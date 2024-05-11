const multer = require('multer');
const express = require('express');
const app = express();

const storage = multer.diskStorage({
    destination:(req,file,cp)=>{
        cp(null,'uploads/');
    },
    filename:(req,file,originalname)=>{
        originalname(null,file.originalname);
    }

    
});

const upload = multer({storage: storage});

module.exports = upload;


//const multer = require('multer');
// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//     cb(null,'uploads/')},
    
//     filename:(req,file,cb)=>{
//     cb(null,file.originalname)}
//     });
    
//     const upload = multer({storage storage});
    
//     module.exports = upload;
