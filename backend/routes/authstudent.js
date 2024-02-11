const mongoose = require("mongoose");
const model = require("../models/student");
const express = require("express");
const router = express.Router()
const { body, validationResult } = require('express-validator');
const teacher = require("../models/teacher")
const bcrypt = require("bcryptjs")
let email;
let branch;






router.post("/signup", body('email').isEmail(),
  body('password').isLength({ min: 8 }), body('passwordConfirmation').custom((value, { req }) => {
    if (value !== req.body.password) {
      res.status(400).json({ message: "password not matched"});;
    }

    return true;
  }), async (req, res) => {
    try {
      const messages = validationResult(req);
    if (!messages.isEmpty()) {
     res.status(400).json({ message: " Signup failed,Please check credentials"});
    }
    const { username, rollno, universityname, email, password, confirmpassword, skills} = req.body;
    const user=await model.findOne({rollno:rollno});
    if(user){
      res.status(400).json({message:"user exist"} );
    }
    // console.log("m",username);
    else{
      let branchs = req.body.branch;
      // if (branchs == "CE52") {
        
    let  branch = {
          CE52: {
            subjects: {
              DBMS: {},
              DBMSLAB: {},
              OOPS: {},
              OOPSLAB: {},
              COI: {},
              UHV: {},
              TOC: {},
              BIO: {},
              SS: {},
              ML: {}
  
            }
  
          }
  
        }
  
        const teachers = await teacher.find();
        for (let i = 0; i < teachers.length; i++) {
          if (teachers[i].mainsub == "DBMS") {
            branch.CE52.subjects.DBMS = {
              teachername: teachers[i].username,
              attendence: {
                year: 2023,
                month: []
              }
            };
  
          }
          else if (teachers[i].mainsub == "DBMSLAB") {
            branch.CE52.subjects.DBMSLAB = {
              teachername: teachers[i].username,
              attendence: {
                year: 2023,
                month: []
              }
            };
  
          }
          else if (teachers[i].mainsub == "OOPS") {
            branch.CE52.subjects.OOPS = {
              teachername: teachers[i].username,
              attendence: {
                year: 2023,
                month: []
              }
            };
          }
          else if (teachers[i].mainsub == "OOPSLAB") {
            branch.CE52.subjects.OOPSLAB = {
              teachername: teachers[i].username,
              attendence: {
                year: 2023,
                month: []
              }
            };
          }
          else if (teachers[i].mainsub == "COI") {
            branch.CE52.subjects.COI = {
              teachername: teachers[i].username,
              attendence: {
                year: 2023,
                month: []
              }
            };
          }
          else if (teachers[i].mainsub == "UHV") {
            branch.CE52.subjects.UHV = {
              teachername: teachers[i].username,
              attendence: {
                year: 2023,
                month: []
              }
            };
          }
          else if (teachers[i].mainsub == "BIO") {
            branch.CE52.subjects.BIO = {
              teachername: teachers[i].username,
              attendence: {
                year: 2023,
                month: []
              }
            };
          }
          else if (teachers[i].mainsub == "TOC") {
            branch.CE52.subjects.TOC = {
              teachername: teachers[i].username,
              attendence: {
                year: 2023,
                month: []
              }
            };
          }
          else if (teachers[i].mainsub == "SS") {
            branch.CE52.subjects.SS = {
              teachername: teachers[i].username,
              attendence: {
                year: 2023,
                month: []
              }
            };
          }
          else if (teachers[i].mainsub == "ML") {
            branch.CE52.subjects.ML = {
              teachername: teachers[i].username,
              attendence: {
                year: 2023,
                month: []
              }
            };
          }
  
        }
  
  const student = new model({
        username, rollno, universityname, email, password,
        branch, course: req.body.branch, skills
  
      });
      const d = await student.save();
      if(d){
       res.status(200).json({message:"Account created successfully"});
      }
      else{
        res.status(400).json({ message:"Please check your credentials once " });
      }
    }
    
    // res.redirect("http://localhost:3000")
    // console.log(await student.save());
    } catch (error) {
      
    }
    

  });


router.post("/login", body('email').isEmail(), body('password').isLength({ min: 8 }), async (req, res) => {
  try {
    const messages = validationResult(req);
  if (!messages.isEmpty()) {
    res.status(400).json({ message: "Login failed,Please check credentials here"});
  }
  else{
    const user = await model.findOne({ email: req.body.email });
    if (user) {
      const bool = await bcrypt.compare(req.body.password, user.password);
      if (bool) {
        email = user.email;
        branch = user.course;
        console.log("logged in successfully")
        // res.redirect("http://localhost:3000/subjectandmonth")
        res.status(200).json({ message: " Logged in "});
      }
      else {
        // console.log("please check your credentials");
        // res.redirect("http://localhost:3000/studentlogin");
        // res.status(400).json({ message: " Login failed,Please check credentials"});
        res.json({ message: " Either email or password is incorrrect please check your credentails again"});
      }
  
  
    }
    else {
      // console.log("please check your credentials");
      // res.redirect("http://localhost:3000/studentlogin");
      res.status(400).json({ message: " Either email or password is incorrrect please check your credentails again"});
    }
  }
  
  } catch (error) {
    // res.status(400).json({ message: " Either email or password is incorrrect please check your credentails again"});
  }
});
router.post("/subjectandmonth", async (req, res) => {
  try {
    console.log("req.body", req.body)
    const { subject, month } = req.body;
    const user = await model.findOne({ email: email });
    // if(user){
    //   console.log("user found",user)
    // }
    if (branch == "CE52") {
      if (subject == "DBMS") {
        let Emonth = user.branch.CE52.subjects.DBMS?.attendence?.month;
        console.log("emonth",Emonth)
        if(Emonth){
          console.log("Emonth")
          let a=0;
          for (let i = 0; i < Emonth?.length; i++) {
            if (Emonth[i]?.m == month) {
              console.log("function called")
              a=1;
              res.send({ rollno: user.rollno, email: user.email, username: user.username, dt: Emonth[i] });
            }
          };
          if(!a){
            res.statusCode(400).send({message:"Please select valid month"})
          }
         
        }
        else{
          res.statusCode(400).send({message:"Please select valid month"})
        }
      }
      else if (subject == "DBMSLAB") {
        let Emonth = user.branch.CE52.subjects.DBMSLAB.attendence.month;
    
        if(Emonth){
          let a=0;
          for (let i = 0; i < Emonth?.length; i++) {
            if (Emonth[i]?.m == month) {
              console.log("function called")
              a=1;
              res.send({ rollno: user.rollno, email: user.email, username: user.username, dt: Emonth[i] });
            }
          };
          if(!a)
          res.statusCode(400).send({message:"Please select valid month"})
        }
        else{
          res.statusCode(400).send({message:"Please select valid month"})
        }
      
      }
      else if (subject == "OOPS") {
        let Emonth = user.branch.CE52.subjects.DBMSLAB.attendence.month;
        if(Emonth){
          let a=0;
          for (let i = 0; i < Emonth?.length; i++) {
            if (Emonth[i]?.monthName == month) {
              a=1;
              console.log("function called")
              res.send({ rollno: user.rollno, email: user.email, username: user.username, dt: Emonth[i] });
            }
          };
          if(!a)
          res.statusCode(400).send({message:"Please select valid month"})
        }
        else{
          res.statusCode(400).send({message:"Please select valid month"})
        }
      
      }
      else if (subject == "OOPSLAB") {
        let Emonth = user.branch.CE52.subjects.OOPSLAB.attendence.month;
        if(Emonth){
          let a=0;
          for (let i = 0; i < Emonth?.length; i++) {
            if (Emonth[i]?.monthName == month) {
              a=1;
              console.log("function called")
              res.send({ rollno: user.rollno, email: user.email, username: user.username, dt: Emonth[i] });
            }
          };
          if(!a)
          res.statusCode(200).send({message:"Please select valid month"})
        }
        else{
          res.statusCode(200).send({message:"Please select valid month"})
        }
      }
      else if (subject == "COI") {
        let Emonth = user.branch.CE52.subjects.COI.attendence.month;
        if(Emonth){
          let a=0;
          for (let i = 0; i < Emonth?.length; i++) {
            if (Emonth[i]?.monthName == month) {
              console.log("function called")
              a=1;
              res.send({ rollno: user.rollno, email: user.email, username: user.username, dt: Emonth[i] });
            }
          };
          if(!a)
          res.statusCode(200).send({message:"Please select valid month"})
        }
        else{
          res.statusCode(200).send({message:"Please select valid month"})
        }
      }
      else if (subject == "TOC") {
        let Emonth = user.branch.CE52.subjects.TOC.attendence.month;
        if(Emonth){
          let a=0;
          for (let i = 0; i < Emonth?.length; i++) {
            if (Emonth[i]?.monthName == month) {
              a=1;
              console.log("function called")
              res.send({ rollno: user.rollno, email: user.email, username: user.username, dt: Emonth[i] });
            }
          };
          if(!a)
          res.statusCode(200).send({message:"Please select valid month"})
        }
        else{
          res.statusCode(200).send({message:"Please select valid month"})
        }
      }
      else if (subject == "UHV") {
        let Emonth = user.branch.CE52.subjects.UHV.attendence.month;
        if(Emonth){
          let a=0;
          for (let i = 0; i < Emonth?.length; i++) {
            if (Emonth[i]?.monthName == month) {
              a=1;
              console.log("function called")
              res.send({ rollno: user.rollno, email: user.email, username: user.username, dt: Emonth[i] });
            }
          };
          if(!a)
          res.statusCode(200).send({message:"Please select valid month"})
        }
        else{
          res.statusCode(200).send({message:"Please select valid month"})
        }
      }
      else if (subject == "BIO") {
        let Emonth = user.branch.CE52.subjects.BIO.attendence.month;
        if(Emonth){
          let a=0;
          for (let i = 0; i < Emonth?.length; i++) {
            if (Emonth[i]?.monthName == month) {
              a=1;
              console.log("function called")
              res.send({ rollno: user.rollno, email: user.email, username: user.username, dt: Emonth[i] });
            }
          };
          if(!a)
          res.statusCode(200).send({message:"Please select valid month"})
        }
        else{
          res.statusCode(200).send({message:"Please select valid month"})
        }
      }
      else if (subject == "ML") {
        let Emonth = user.branch.CE52.subjects.ML.attendence.month;
        if(Emonth){
          let a=0;
          for (let i = 0; i < Emonth?.length; i++) {
            if (Emonth[i]?.monthName == month) {
              console.log("function called")
              a=1;
              res.send({ rollno: user.rollno, email: user.email, username: user.username, dt: Emonth[i] });
            }
          };
          if(!a)
          res.statusCode(200).send({message:"Please select valid month"})
        }
        else{
          res.statusCode(200).send({message:"Please select valid month"})
        }
      }
      else if (subject == "SS") {
        let Emonth = user.branch.CE52.subjects.SS.attendence.month;
        if(Emonth){
          let a=0;
          for (let i = 0; i < Emonth?.length; i++) {
            if (Emonth[i]?.monthName == month) {
              a=1;
              console.log("function called")
              res.send({ rollno: user.rollno, email: user.email, username: user.username, dt: Emonth[i] });
            }
          };
          if(!a)
          res.statusCode(200).send({message:"Please select valid month"})
        }
        else{
          res.statusCode(200).send({message:"Please select valid month"})
        }
      }
    }



  } catch (e) {
    console.log("message")
    res.send({ messages: e })
  }
})


module.exports = router;
