// const mongoose=require("mongoose");
// const url="mongodb://localhost:27017/attendence";
// mongoose.connect(url,{
//     useUnifiedTopology:true,
//     useNewUrlParser:true
// });
// mongoose.connect()
// const schema=new mongoose.Schema({
//     rollno:{
//         type:Number
//     }
// })
// const sc=new mongoose.Schema({
//     name:schema
// })
// const model=new mongoose.model(sc,"coll");
// const obj=new model({
//     name:{
//         rollno:21001003079
//     }
// })
// console.log(obj.name.rollno);
const express=require("express");
const app=express();
app.get("/",(req,res,next)=>{
console.log("hello")
next()
},(req,res)=>{
console.log("hii")
})
app.listen(3001);
