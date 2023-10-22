const mongoose = require('mongoose');
const create_button = document.getElementById('create_button');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('email');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:8000/login');
}

const UserSchema = new mongoose.Schema({
    name:String,
    Email:String,
    password:String,
})

const User = new mongoose.model('User',UserSchema);

async function put_database(){
    await main().then(()=>{
        console.log("successfully establic connection");
    }).catch((err)=>{
        console.log(err);
    })


    let newModel = new User({
        name:username.innerText,
        Email:email.innerHTML,
        password: password.innerHTML, 
    })

    newModel.save();

    console.log(username.value);
    console.log(email.value);

}






