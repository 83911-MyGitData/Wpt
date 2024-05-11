const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const appForUsers =  require('./users');
const appforProp = require('./property');



app.use(express.json());
app.use(cors());


app.use("/users",appForUsers);
app.use("/property",appforProp);
app.listen(9999,()=>{console.log("listening..........")})