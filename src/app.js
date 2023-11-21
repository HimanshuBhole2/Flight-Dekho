// import

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');
const { stat } = require('fs');
const app = express();
const port = 8000;


// Path
const templete = path.join(__dirname,'../templates/view');
const partial_path = path.join(__dirname,'../templates/partials');
const static_path = path.join(__dirname,'../public');
const Flights = path.join(__dirname,"../models/flightsModel.js")


app.set("view setEngine",'ejs' )
app.set('views',templete)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
hbs.registerPartials(partial_path)
app.locals.partials = {
    links_head: path.join(partial_path+'/links_head'),
    header:path.join(partial_path+'/header'),
    footer: path.join(partial_path+'/footer') // Provide the correct path relative to the 'partials' folder
    
};
app.use(express.static(static_path));

// Mongodb connection
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/FlightProject');
}
main().then(()=>{
    console.log("Connection is established successfullyu");

})


//get request page
app.get("/",(req,res)=>{
    res.render('index.ejs')
})

app.get("/testing",(req,res)=>{
    res.render('test.ejs');
})

app.get("/flights",(req,res)=>{

    res.render('flights.ejs');
})


// Post requests
app.post('/flights',async (req,res)=>{
    let body = await req.body;
    let{departure,arival,date} = req.body;
    let flight = await new Flights({departure:departure,arival:arival,date:date});
    flight.save();
    console.log(body);

})
app.listen(port,()=>{
    console.log('Our Site is Working Fine');
})

