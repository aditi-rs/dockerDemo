const express = require('express');

const app = express();

app.get('/', function(req,res){
  
    res.send("Hi! Aditi here");
});
const port = 3000;

app.listen(3000,()=>{

    console.log("listening on port no 3000!");
})