// const express = require('express');
// const multer = require('multer');
// const app = express();

// const storage = multer.diskStorage({
//     destination:(req,file,cp)=>{
//         cp(null,'uploads/');
//     },
//     filename:(req,file,originalname)=>{
//         originalname(null,file.originalname);
//     }

    
// });

// const upload = multer({storage: storage});

// module.exports = upload;

const express = require('express');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage({
    destination: (req,file,cp)=>{
        cp(null,'uploads/');
    },

    filename:(req,file,name)=>{
        name(null,file.originalname);
    }
})

const upload = multer({storage:storage});

module.exports = upload;