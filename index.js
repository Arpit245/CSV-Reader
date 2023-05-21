const express = require('express');   //using express as a server
const port =  8000;
const path = require('path');
const fs = require('fs');

const app = express();         //initializing express
//setting up view 
app.set('view engine','ejs');  
//path setup
app.set('views',path.join(__dirname,'views'));   

app.use(express.urlencoded({extended: true}));  

//accessing static and upload files from static and uploads folder
app.use(express.static('assets'));    
app.use('/uploads',express.static(__dirname+'/uploads')); 

//using routes this will navigate to index.js of routes
app.use('/',require('./routes'));    

//listening server on port 8000
app.listen(port,function(err){
    if(err){
        console.log(`Error running the server ${err}`);
        return;
    }
   
    console.log(`Server is running on port number ${port}`);
});