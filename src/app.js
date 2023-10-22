const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { stat } = require('fs');
const app = express();
const port = 8000;
const templete = path.join(__dirname,'../templates/view');
const partial_path = path.join(__dirname,'../templates/partials');
const static_path = path.join(__dirname,'../public');
app.set("view setEngine",'hbs' )
app.set('views',templete)
hbs.registerPartials(partial_path)
app.use(express.static(static_path));

app.get("/",(req,res)=>{
    res.render('index.hbs')
})

app.get("/testing",(req,res)=>{
    res.render('test.hbs')
})

app.listen(port,()=>{
    console.log('Our Site is Working Fine');
})

