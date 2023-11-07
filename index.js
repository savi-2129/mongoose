const express = require('express');
const app = express();//create a express class
const PORT = 5000;

const Student = require("./models/StudentModel");
const Faculty = require("./models/FacultyModel");

app.use(express.json())
require('./db')

app.get("/", (req, res) => {
    res.send("`Hello world`...");

});

app.get("/students", (req, res) => {
    res.send("`Hello form student`...");
});

app.get("/facultys", (req, res) => {
    res.send("`Hello form faculty`...");
});
   

    // create a student
app.post('/students', async (req, res) => {
    try {
        const data = req.body;
        const createStudent = new Student(data);
        await createStudent.save();
        res.send("Student created");
    }
    catch (error) {
        console.log(error);
    }
});



    //read all student data
app.get('/students',async(req,res)=>{
    try {
      const studentList=await Student.find();
      res.send(studentList);
     
    }
    catch (error) {
        console.log(error);
       
    }

});
    
     

   // update all student data
   app.put('/students/:id', async (req, res) => {  //(id=id params,which acess the req.params.id)
    try {
       const studentId=req.params.id;
       await Student.updateOne({id:studentId},{$set:req.body}); //(updateOne=update particular documemt in cace of mongo dp,$set=update few data/setting a data,)
       res.send("student updated") 
    }
    catch (error) {
        console.log(error);
    }
});

// delete the student data
app.delete('/student/:id', async (req, res) => {  //(id=id params,which acess the req.params.id)
    try {
        const studentId=req.params.id;
       await Student.deleteOne({id:studentId}); //(updateOne=update particular documemt in cace of mongo dp,$set=update few data/setting a data,)
       res.send("student delete") 
    }
    catch (error) {
        console.log(error);
    }
});




// create all faculty data
app.post('/faculty', async (req, res) => {
    try {
        const data = req.body;
        const createFaculty = new Faculty(data);
        await createFaculty.save();
        res.send("Faculty created");
    }
    catch (error) {
        console.log(error);
    }
});



    //read all faculty data
app.get('/faculty',async(req,res)=>{
    try {
      const facultyList=await Faculty.find();
      res.send(facultyList);
     
    }
    catch (error) {
        console.log(error);
       
    }

});
// update all faculty data
app.put('/faculty/:id', async (req, res) => {  //(id=id params,which acess the req.params.id)
    try {
       const facultyId=req.params.id;
       await Faculty.updateOne({id:facultyId},{$set:req.body}); //(updateOne=update particular documemt in cace of mongo dp,$set=update few data/setting a data,)
       res.send("faculty updated") 
    }
    catch (error) {
        console.log(error);
    }
});

// delete the faculty data
app.delete('/faculty/:id', async (req, res) => {  //(id=id params,which acess the req.params.id)
    try {
        const facultyId=req.params.id;
       await Faculty.deleteOne({id:facultyId}); //(updateOne=update particular documemt in cace of mongo dp,$set=update few data/setting a data,)
       res.send("faculty delete") 
    }
    catch (error) {
        console.log(error);
    }
});





// create a resource
// app.post()

app.listen(PORT, function () {  //create your server
    console.log(`Server is running on localhost:${PORT}`);   //Server is running on localbost
});