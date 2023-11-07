const mongoose=require('mongoose');

const FacultySchema=mongoose.Schema({
    id:Number,
    name:String,
     sem:Number,
    email:String,
    branch:String,

});//storing the datatype


module.exports=mongoose.model("Faculty",FacultySchema);