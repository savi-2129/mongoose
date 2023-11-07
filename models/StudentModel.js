const mongoose=require('mongoose');

const StudentSchema=mongoose.Schema({
    id:Number,
    name:String,
     sem:Number,
    email:String,
    branch:String,

});//storing the datatype


module.exports=mongoose.model("Student",StudentSchema);