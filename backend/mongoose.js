const mongoose=require("mongoose");
const uri="mongodb://localhost:27017/attendence";
mongoose.set('strictQuery', true);
mongoose.connect(uri,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("mongoose connected successfully")
}).catch((err)=>{
console.log(err)
});