const dotenv=require('dotenv');
dotenv.config();

const express= require('express');
const PORT=process.env.PORT || 5000;

const app=express(); 
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))