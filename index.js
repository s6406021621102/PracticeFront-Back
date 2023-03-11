// Main 
const express = require('express');
//const db = require('./config/db.js');
const user = require('./routes/router.js');
const app = express();

app.use('/' , user);

//start connect on port 3000 //ต้องอยู่ล่างสุด
app.listen(3000,() => { 
    console.log("Server id running");
});   

