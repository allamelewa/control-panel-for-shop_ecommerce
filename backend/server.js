const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');

require('dotenv').config();

const app=express();
const port=process.env.PORT||5000;

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded
const uri = 'mongodb+srv://allam:14789635@cluster0-i3ih0.mongodb.net/control_pannel?retryWrites=true&w=majority';
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");

});
const addProductRouter=require('./routes/addProduct')

app.use('/product',addProductRouter);

app.listen(port,()=>{
    console.log(`Server is Running on Port:${port}`);

})



