const express = require("express")
const router2 = express.Router();
const teacher = require("../models/teacher");
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const student = require("../models/student");
const monthsArray = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

router2.post("/signup", body('email').isEmail(),

  body('password').isLength({ min: 8 }), body('passwordConfirmation').custom((value, { req }) => {
    if (value !== req.body.password) {
      res.status(400).json({ message: "password not matched" });;
    }

    // Indicates the success of this synchronous custom validator
    return true;
  }), async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ message: " Signup failed,Please check credentials" });
      }
      const { username, email, password, mainsub, qualifications } = req.body;
      const user = await teacher.findOne({ email: email });
      if (user) {
        res.status(400).json({ message: "user exist" });
      }
      const newteacher = new teacher({ username, email, password, qualifications, mainsub });
  
      // console.log();
  
      const students = await student.find();
      // console.log("j", students);
      let p = 0;
      for (let i = 0; i < students.length; i++) {
        let b = await student.findOne({ rollno: students[i].rollno })
  // console.log("b",b);
        if (mainsub == "DBMS") {
           // students[i].branch.CE52.subjects.BIO.teachername = username;
          // let b = await student.findOne({rollno:students[i].rollno})
          console.log("dbms is here")
          let a = await student.findByIdAndUpdate(students[i]._id, {
            branch: {
              CE52: {
                subjects: {
                  DBMS: {
                    teachername: username, attendence: b.branch.CE52.subjects.DBMS?.attendence
                  }, BIO: b.branch.CE52.subjects.BIO, DBMSLAB: b.branch.CE52.subjects.DBMSLAB, SS: b.branch.CE52.subjects.SS, ML: b.branch.CE52.subjects.ML, OOPS: b.branch.CE52.subjects.OOPS, COI: b.branch.CE52.subjects.COI, UHV: b.branch.CE52.subjects.UHV, OOPSLAB: b.branch.CE52.subjects.OOPSLAB, TOC: b.branch.CE52.subjects.TOC
                }
              }
            }
          });
          if (!a) {
            p = 1;
            break;
          }
        }
  
  
        if (mainsub == "OOPS") {
          // students[i].branch.CE52.subjects.OOPS.teachername = username;
  
          let a = await student.findByIdAndUpdate(b._id, {
            branch: {
              CE52: {
                subjects: {
                  OOPS: {
                    teachername: username, attendence: b.branch.CE52.subjects.OOPS?.attendence
                  }, ...b.branch.CE52.subjects
                }
              }
            }
          });
          if (!a) {
            p = 1;
            break;
          }
  
        }
        if (mainsub == "BIO") {
          // students[i].branch.CE52.subjects.BIO.teachername = username;
          // let b = await student.findOne({rollno:students[i].rollno})
          let a = await student.findByIdAndUpdate(students[i]._id, {
            branch: {
              CE52: {
                subjects: {
                  BIO: {
                    teachername: username, attendence: b.branch.CE52.subjects.BIO?.attendence
                  }, DBMS: b.branch.CE52.subjects.DBMS, DBMSLAB: b.branch.CE52.subjects.DBMSLAB, SS: b.branch.CE52.subjects.SS, ML: b.branch.CE52.subjects.ML, OOPS: b.branch.CE52.subjects.OOPS, COI: b.branch.CE52.subjects.COI, UHV: b.branch.CE52.subjects.UHV, OOPSLAB: b.branch.CE52.subjects.OOPSLAB, TOC: b.branch.CE52.subjects.TOC
                }
              }
            }
          });
          if (!a) {
            p = 1;
            break;
          }
        }
        if (mainsub == "TOC") {
          // students[i].branch.CE52.subjects.TOC.teachername = username;
          let a = await student.findByIdAndUpdate(students[i]._id, {
            branch: {
              CE52: {
                subjects: {
                  TOC: {
                    teachername: username, attendence: b.branch.CE52.subjects.TOC?.attendence
                  }, DBMS: b.branch.CE52.subjects.DBMS, DBMSLAB: b.branch.CE52.subjects.DBMSLAB, SS: b.branch.CE52.subjects.SS, ML: b.branch.CE52.subjects.ML, BIO: b.branch.CE52.subjects.BIO, COI: b.branch.CE52.subjects.COI, UHV: b.branch.CE52.subjects.UHV, OOPSLAB: b.branch.CE52.subjects.OOPSLAB, OOPS: b.branch.CE52.subjects.OOPS
                }
              }
            }
          });
          if (!a) {
            p = 1;
            break;
          }
        }
        if (mainsub == "SS") {
          // students[i].branch.CE52.subjects.SS.teachername = username;
          let a = await student.findByIdAndUpdate(students[i]._id, {
            branch: {
              CE52: {
                subjects: {
                  SS: {
                    teachername: username, attendence: b.branch.CE52.subjects.SS?.attendence
                  }, DBMS: b.branch.CE52.subjects.DBMS, DBMSLAB: b.branch.CE52.subjects.DBMSLAB, OOPS: b.branch.CE52.subjects.OOPS, ML: b.branch.CE52.subjects.ML, BIO: b.branch.CE52.subjects.BIO, COI: b.branch.CE52.subjects.COI, UHV: b.branch.CE52.subjects.UHV, OOPSLAB: b.branch.CE52.subjects.OOPSLAB, TOC: b.branch.CE52.subjects.TOC
                }
              }
            }
          });
          if (!a) {
            p = 1;
            break;
          }
        }
        if (mainsub == "OOPSLAB") {
          // students[i].branch.CE52.subjects.OOPSLAB.teachername = username;
          let a = await student.findByIdAndUpdate(students[i]._id, {
            branch: {
              CE52: {
                subjects: {
                  OOPSLAB: {
                    teachername: username, attendence: b.branch.CE52.subjects.OOPSLAB?.attendence
                  }, DBMS: b.branch.CE52.subjects.DBMS, DBMSLAB: b.branch.CE52.subjects.DBMSLAB, SS: b.branch.CE52.subjects.SS, ML: b.branch.CE52.subjects.ML, BIO: b.branch.CE52.subjects.BIO, COI: b.branch.CE52.subjects.COI, UHV: b.branch.CE52.subjects.UHV, OOPS: b.branch.CE52.subjects.OOPS, TOC: b.branch.CE52.subjects.TOC
                }
              }
            }
          });
          if (!a) {
            p = 1;
            break;
          }
        }
        if (mainsub == "COI") {
          // students[i].branch.CE52.subjects.COI.teachername = username;
          let a = await student.findByIdAndUpdate(students[i]._id, {
            branch: {
              CE52: {
                subjects: {
                  COI: {
                    teachername: username, attendence: b.branch.CE52.subjects.COI?.attendence
                  },
                  DBMS:b.branch.CE52.subjects.DBMS, DBMSLAB: b.branch.CE52.subjects.DBMSLAB, SS: b.branch.CE52.subjects.SS, ML:b.branch.CE52.subjects.ML, BIO:b.branch.CE52.subjects.BIO, OOPS:b.branch.CE52.subjects.OOPS, UHV:b.branch.CE52.subjects.UHV, OOPSLAB:b.branch.CE52.subjects.OOPSLAB, TOC: b.branch.CE52.subjects.TOC
                }
              }
            }
          });
          if (!a) {
            p = 1;
            break;
          }
        }
        if (mainsub == "DBMSLAB") {
          // students[i].branch.CE52.subjects.DBMSLAB.teachername = username;
          let a = await student.findByIdAndUpdate(students[i]._id, {
            branch: {
              CE52: {
                subjects: {
                  DBMSLAB: {
                    teachername: username, attendence: b.branch.CE52.subjects.DBMSLAB?.attendence
                  }, DBMS: b.branch.CE52.subjects.DBMS, OOPS: b.branch.CE52.subjects.OOPS, SS: b.branch.CE52.subjects.SS, ML: b.branch.CE52.subjects.ML, BIO: b.branch.CE52.subjects.BIO, COI: b.branch.CE52.subjects.COI, UHV: b.branch.CE52.subjects.UHV, OOPSLAB: b.branch.CE52.subjects.OOPSLAB, TOC: b.branch.CE52.subjects.TOC
                }
              }
            }
          });
          if (!a) {
            p = 1;
            break;
          }
        }
        if (mainsub == "ML") {
          // students[i].branch.CE52.subjects.ML.teachername = username;
          let a = await student.findByIdAndUpdate(students[i]._id, {
            branch: {
              CE52: {
                subjects: {
                  ML: {
                    teachername: username, attendence: b.branch.CE52.subjects.ML?.attendence
                  }, DBMS: b.branch.CE52.subjects.DBMS, DBMSLAB: b.branch.CE52.subjects.DBMSLAB, SS: b.branch.CE52.subjects.SS, OOPS: b.branch.CE52.subjects.OOPS, BIO: b.branch.CE52.subjects.BIO, COI: b.branch.CE52.subjects.COI, UHV: b.branch.CE52.subjects.UHV, OOPSLAB: b.branch.CE52.subjects.OOPSLAB, TOC: b.branch.CE52.subjects.TOC
                }
              }
            }
          });
          if (!a) {
            p = 1;
            break;
          }
        }
      }
      // console.log(await newteacher.save());
      if (p) {
        res.status(400).json({ message: "Students records could not be updated  " });
      }
      else {
        await newteacher.save();
        // console.log("hello")
        res.status(200).json({ message: "Account created successfully" });
      }
      // res.redirect("http://localhost:3000/")
  
   
    } catch (error) {
      
    }
  });


router2.post("/teacherlogin", body('email').isEmail(), body('password').isLength({ min: 8 }), async (req, res) => {
  try {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ message: "Login failed,Please check credentials"});
  }
  const user = await teacher.findOne({ email: req.body.email });
  if (user) {
    const bool = await bcrypt.compare(req.body.password, user.password);
    if (bool) {
      res.status(400).json({ message: " Logged in "});
    }
    else {
      res.status(400).json({ message: " Either email or password is incorrrect please check your credentails again"});
    }


  }
  else {
    res.status(400).json({ message: " Either email or password is incorrrect please check your credentails again"});
  }
  } catch (error) {
    // res.status(400).json({ message: " Either email or password is incorrrect please check your credentails again"});
  }
});

router2.post("/getstudents", async (req, res) => {
  console.log("branch", req.body.students.branch)
  const students = await student.find({ course: req.body.students.branch }).select({ username: 1, email: 1, course: 1, skills: 1, rollno: 1 }).sort({ rollno: 1 });
  console.log("students",students)

  res.send(students);


});
router2.post("/takeattendence", async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { students, attendence } = req.body;
    const sub = students.subject;

    if (students.branch == "CE52") {
      if (sub == "DBMS") {
        for (let i = 0; i < attendence.length; i++) {
          let c = await student.findById(attendence[i].id);

          let arr = c.branch.CE52.subjects.DBMS?.attendence?.month;
          let ind = -1;
          for (let k = 0; k < arr?.length; k++) {
            if (arr[k].m== monthsArray[new Date().getMonth()]) {
              ind = k;
              break;
            };
          };


          if (ind == -1) {
            obj = {
              m: monthsArray[new Date().getMonth()],
              dateoftakingclass: [new Date().getDate()],
              dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
              totalclasses: 1,
              present: attendence[i].status
            }
            if (!arr) {
              arr = []
            }
            arr.push(obj)
          }
          else {

            arr[ind].dateoftakingclass.push(new Date().getDate());
            arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1);
            arr[ind].totalclasses += 1;
            arr[ind].present += attendence[i].status;

          }

          let a = await student.findByIdAndUpdate(attendence[i].id,
            { branch: { CE52: { subjects: { DBMS: { attendence: { year: new Date().getFullYear(), month: arr } }, OOPS: c.branch.CE52.subjects.OOPS, DBMSLAB: c.branch.CE52.subjects.DBMSLAB, SS: c.branch.CE52.subjects.SS, ML: c.branch.CE52.subjects.ML, BIO: c.branch.CE52.subjects.BIO, COI: c.branch.CE52.subjects.COI, UHV: c.branch.CE52.subjects.UHV, OOPSLAB: c.branch.CE52.subjects.OOPSLAB, TOC: c.branch.CE52.subjects.TOC } } } });




        }

      }
      else if (sub == "SS") {
        for (let i = 0; i < attendence.length; i++) {
          let c = await student.findById(attendence[i].id);

          let arr = c.branch.CE52.subjects.SS?.attendence?.month;
          let ind = -1;
          for (let k = 0; k < arr?.length; k++) {
            if (arr[k].m == monthsArray[new Date().getMonth()]) {
              ind = k;
              break;
            };
          };
          let obj;

          if (ind == -1) {
            obj = {
              m: monthsArray[new Date().getMonth()],
              dateoftakingclass: [new Date().getDate()],
              dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
              totalclasses: 1,
              present: attendence[i].status
            }
            arr.concat(obj)
          }
          else {

            arr[ind].dateoftakingclass.push(new Date().getDate());
            arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1);
            arr[ind].totalclasses += 1;
            arr[ind].present += attendence[i].status;

          }

          let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { SS: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) }, }, DBMS: c.branch.CE52.subjects.DBMS, DBMSLAB: c.branch.CE52.subjects.DBMSLAB, OOPS: c.branch.CE52.subjects.OOPS, ML: c.branch.CE52.subjects.ML, BIO: c.branch.CE52.subjects.BIO, COI: c.branch.CE52.subjects.COI, UHV: c.branch.CE52.subjects.UHV, OOPSLAB: c.branch.CE52.subjects.OOPSLAB, TOC: c.branch.CE52.subjects.TOC } } } });



        }
      }
      else if (sub == "ML") {
        for (let i = 0; i < attendence.length; i++) {
          let c = await student.findById(attendence[i].id);

          let arr = c.branch.CE52.subjects.ML?.attendence?.month;
          let ind = -1;
          for (let k = 0; k < arr?.length; k++) {
            if (arr[k].m == monthsArray[new Date().getMonth()]) {
              ind = k;
              break;
            };
          };
          let obj;

          if (ind == -1) {
            obj = {
              m: monthsArray[new Date().getMonth()],
              dateoftakingclass: [new Date().getDate()],
              dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
              totalclasses: 1,
              present: attendence[i].status
            }
            arr.concat(obj)
          }
          else {

            arr[ind].dateoftakingclass.push(new Date().getDate());
            arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1);
            arr[ind].totalclasses += 1;
            arr[ind].present += attendence[i].status;

          }

          let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { ML: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) }, }, DBMS: c.branch.CE52.subjects.DBMS, DBMSLAB: c.branch.CE52.subjects.DBMSLAB, SS: c.branch.CE52.subjects.SS, OOPS: c.branch.CE52.subjects.OOPS, BIO: c.branch.CE52.subjects.BIO, COI: c.branch.CE52.subjects.COI, UHV: c.branch.CE52.subjects.UHV, OOPSLAB: c.branch.CE52.subjects.OOPSLAB, TOC: c.branch.CE52.subjects.TOC } } } });



        }
      }
      else if (sub == "DBMSLAB") {
        for (let i = 0; i < attendence.length; i++) {
          let c = await student.findById(attendence[i].id);

          let arr = c.branch.CE52.subjects.DBMSLAB?.attendence?.month;
          let ind = -1;
          for (let k = 0; k < arr?.length; k++) {
            if (arr[k].m == monthsArray[new Date().getMonth()]) {
              ind = k;
              break;
            };
          };
          let obj;

          if (ind == -1) {
            obj = {
              m: monthsArray[new Date().getMonth()],
              dateoftakingclass: [new Date().getDate()],
              dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
              totalclasses: 1,
              present: attendence[i].status
            }
            arr.concat(obj)
          }
          else {

            arr[ind].dateoftakingclass.push(new Date().getDate());
            arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1);
            arr[ind].totalclasses += 1;
            arr[ind].present += attendence[i].status;

          }

          let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { DBMSLAB: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) } }, DBMS: c.branch.CE52.subjects.DBMS, OOPS: c.branch.CE52.subjects.OOPS, SS: c.branch.CE52.subjects.SS, ML: c.branch.CE52.subjects.ML, BIO: c.branch.CE52.subjects.BIO, COI: c.branch.CE52.subjects.COI, UHV: c.branch.CE52.subjects.UHV, OOPSLAB: c.branch.CE52.subjects.OOPSLAB, TOC: c.branch.CE52.subjects.TOC } } } });



        }
      }
      else if (sub == "OOPS") {
        for (let i = 0; i < attendence.length; i++) {
          let c = await student.findById(attendence[i].id);
          console.log("p", c);
          let arr = [];
          arr = c.branch.CE52.subjects.OOPS?.attendence?.month;
          console.log("arr", arr)
          let ind = -1;
          for (let k = 0; k < arr?.length; k++) {

            if (arr[k].m == monthsArray[new Date().getMonth()]) {
              ind = k;
              break;
            };
          };
          let obj;

          if (ind == -1) {
            obj = {
              m: monthsArray[new Date().getMonth()],
              dateoftakingclass: [new Date().getDate()],
              dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
              totalclasses: 1,
              present: attendence[i].status
            }
            console.log("k", obj)
            arr.push(obj)
          }
          else {

            arr[ind].dateoftakingclass.push(new Date().getDate());
            arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1);
            arr[ind].totalclasses += 1;
            arr[ind].present += attendence[i].status;

          }

          let a = await student.findByIdAndUpdate(attendence[i].id,
            {
              branch:
              {
                CE52:
                {
                  subjects:
                  {
                    OOPS: {
                      attendence: { year: new Date().getFullYear(), month: arr },
                    },
                    DBMS: c.branch.CE52.subjects.DBMS,
                    DBMSLAB: c.branch.CE52.subjects.DBMSLAB,
                    SS: c.branch.CE52.subjects.SS,
                    ML: c.branch.CE52.subjects.ML,
                    BIO: c.branch.CE52.subjects.BIO,
                    COI: c.branch.CE52.subjects.COI,
                    UHV: c.branch.CE52.subjects.UHV,
                    OOPSLAB: c.branch.CE52.subjects.OOPSLAB,
                    TOC: c.branch.CE52.subjects.TOC
                  }
                }
              }
            });
          console.log("m", a);


        }
      }
      else if (sub == "TOC") {
        for (let i = 0; i < attendence.length; i++) {
          let c = await student.findById(attendence[i].id);

          let arr = c.branch.CE52.subjects.TOC?.attendence?.month;
          let ind = -1;
          for (let k = 0; k < arr?.length; k++) {
            if (arr[k].m == monthsArray[new Date().getMonth()]) {
              ind = k;
              break;
            };
          };
          let obj;

          if (ind == -1) {
            obj = {
              m: monthsArray[new Date().getMonth()],
              dateoftakingclass: [new Date().getDate()],
              dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
              totalclasses: 1,
              present: attendence[i].status
            }
            arr.concat(obj)
          }
          else {

            arr[ind].dateoftakingclass.push(new Date().getDate());
            arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1);
            arr[ind].totalclasses += 1;
            arr[ind].present += attendence[i].status;

          }

          let a = await student.findByIdAndUpdate(attendence[i].id,
            {
              branch:
              {
                CE52:
                {
                  subjects:
                  {
                    TOC: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) } },
                    DBMS: c.branch.CE52.subjects.DBMS,
                    DBMSLAB: c.branch.CE52.subjects.DBMSLAB,
                    SS: c.branch.CE52.subjects.SS,
                    ML: c.branch.CE52.subjects.ML,
                    BIO: c.branch.CE52.subjects.BIO,
                    COI: c.branch.CE52.subjects.COI,
                    UHV: c.branch.CE52.subjects.UHV,
                    OOPSLAB: c.branch.CE52.subjects.OOPSLAB,
                    OOPS: c.branch.CE52.subjects.OOPS
                  }
                }
              }
            });



        }
      }
      else if (sub == "OOPSLAB") {
        for (let i = 0; i < attendence.length; i++) {
          let c = await student.findById(attendence[i].id);

          let arr = c.branch.CE52.subjects.OOPSLAB?.attendence?.month;
          let ind = -1;
          for (let k = 0; k < arr?.length; k++) {
            if (arr[k].m == monthsArray[new Date().getMonth()]) {
              ind = k;
              break;
            };
          };
          let obj;

          if (ind == -1) {
            obj = {
              m: monthsArray[new Date().getMonth()],
              dateoftakingclass: [new Date().getDate()],
              dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
              totalclasses: 1,
              present: attendence[i].status
            }
            arr.concat(obj)
          }
          else {

            arr[ind].dateoftakingclass.push(new Date().getDate());
            arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1);
            arr[ind].totalclasses += 1;
            arr[ind].present += attendence[i].status;

          }

          let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { OOPSLAB: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) } }, DBMS: c.branch.CE52.subjects.DBMS, DBMSLAB: c.branch.CE52.subjects.DBMSLAB, SS: c.branch.CE52.subjects.SS, ML: c.branch.CE52.subjects.ML, BIO: c.branch.CE52.subjects.BIO, COI: c.branch.CE52.subjects.COI, UHV: c.branch.CE52.subjects.UHV, OOPS: c.branch.CE52.subjects.OOPS, TOC: c.branch.CE52.subjects.TOC } } } });



        }
      }
      else if (sub == "BIO") {
        for (let i = 0; i < attendence.length; i++) {
          let c = await student.findById(attendence[i].id);

          let arr = c.branch.CE52.subjects.BIO?.attendence?.month;
          let ind = -1;
          for (let k = 0; k < arr?.length; k++) {
            if (arr[k].m == monthsArray[new Date().getMonth()]) {
              ind = k;
              break;
            };
          };
          let obj;

          if (ind == -1) {
            obj = {
              m: monthsArray[new Date().getMonth()],
              dateoftakingclass: [new Date().getDate()],
              dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
              totalclasses: 1,
              present: attendence[i].status
            }
            arr.concat(obj)
          }
          else {

            arr[ind].dateoftakingclass.push(new Date().getDate());
            arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1);
            arr[ind].totalclasses += 1;
            arr[ind].present += attendence[i].status;

          }

          let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { BIO: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) } }, DBMS: c.branch.CE52.subjects.DBMS, DBMSLAB: c.branch.CE52.subjects.DBMSLAB, SS: c.branch.CE52.subjects.SS, ML: c.branch.CE52.subjects.ML, OOPS: c.branch.CE52.subjects.OOPS, COI: c.branch.CE52.subjects.COI, UHV: c.branch.CE52.subjects.UHV, OOPSLAB: c.branch.CE52.subjects.OOPSLAB, TOC: c.branch.CE52.subjects.TOC } } } });



        }
      }
      else if (sub == "UHV") {
        for (let i = 0; i < attendence.length; i++) {
          let c = await student.findById(attendence[i].id);

          let arr = c.branch.CE52.subjects.UHV?.attendence?.month;
          let ind = -1;
          for (let k = 0; k < arr?.length; k++) {
            if (arr[k].m == monthsArray[new Date().getMonth()]) {
              ind = k;
              break;
            };
          };
          let obj;

          if (ind == -1) {
            obj = {
              m: monthsArray[new Date().getMonth()],
              dateoftakingclass: [new Date().getDate()],
              dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
              totalclasses: 1,
              present: attendence[i].status
            }
            arr.concat(obj)
          }
          else {

            arr[ind].dateoftakingclass.push(new Date().getDate());
            arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1);
            arr[ind].totalclasses += 1;
            arr[ind].present += attendence[i].status;

          }

          let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { UHV: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) } }, DBMS: c.branch.CE52.subjects.DBMS, DBMSLAB: c.branch.CE52.subjects.DBMSLAB, SS: c.branch.CE52.subjects.SS, ML: c.branch.CE52.subjects.ML, BIO: c.branch.CE52.subjects.BIO, COI: c.branch.CE52.subjects.COI, OOPS: c.branch.CE52.subjects.OOPS, OOPSLAB: c.branch.CE52.subjects.OOPSLAB, TOC: c.branch.CE52.subjects.TOC } } } });



        }
      }
      else if (sub == "COI") {
        for (let i = 0; i < attendence.length; i++) {
          let c = await student.findById(attendence[i].id);

          let arr = c.branch.CE52.subjects.COI?.attendence?.month;
          let ind = -1;
          for (let k = 0; k < arr?.length; k++) {
            if (arr[k].m == monthsArray[new Date().getMonth()]) {
              ind = k;
              break;
            };
          };
          let obj;

          if (ind == -1) {
            obj = {
              m: monthsArray[new Date().getMonth()],
              dateoftakingclass: [new Date().getDate()],
              dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
              totalclasses: 1,
              present: attendence[i].status
            }
            arr.concat(obj)
          }
          else {

            arr[ind].dateoftakingclass.push(new Date().getDate());
            arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1);
            arr[ind].totalclasses += 1;
            arr[ind].present += attendence[i].status;

          }

          let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { COI: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) } }, DBMS: c.branch.CE52.subjects.DBMS, DBMSLAB: c.branch.CE52.subjects.DBMSLAB, SS: c.branch.CE52.subjects.SS, ML: c.branch.CE52.subjects.ML, BIO: c.branch.CE52.subjects.BIO, OOPS: c.branch.CE52.subjects.OOPS, UHV: c.branch.CE52.subjects.UHV, OOPSLAB: c.branch.CE52.subjects.OOPSLAB, TOC: c.branch.CE52.subjects.TOC } } } });



        }
      }
    }



    // res.redirect("http://localhost:3000/");
    res.send("hello there")
  } catch (e) {
    console.log(e + "   error")
    res.send({ error: e })
  }
})





module.exports = router2;