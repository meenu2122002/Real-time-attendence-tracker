router2.post("/takeattendence", async (req, res) => {
    try {
  
      const { students, attendence } = req.body;
      const sub = students.subject;
      if (students.branch == "CE52") {
        if (sub == "DBMS") {
          for (let i = 0; i < attendence.length; i++) {
            let c = await student.findById(attendence[i].id);
            console.log(c + "c")
            let arr = c.branch.CE52.subjects.DBMS?.attendence?.month;
            let ind = -1;
            for (let k = 0; k < arr?.length; k++) {
              if (arr[k].m == monthsArray[new Date().getMonth()]) {
                ind = k;
                break;
              };
            };
            let obj;
            let newarr;
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
              // newarr = arr.filter((e) => {
              //   return !(e.m == monthsArray[new Date().getMonth()])
              // })
              arr[ind].dateoftakingclass.push(new Date().getDate());
              arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1);
              arr[ind].totalclasses+=1;
              arr[ind].present+= attendence[i].status;
              // obj = {
              //   m: monthsArray[new Date().getMonth()],
              //   dateoftakingclass: arr[ind].dateoftakingclass,
              //   dateofpresent: arr[ind].dateofpresent
              //   ,
              //   totalclasses: (arr[ind].totalclasses + 1),
              //   present: arr[ind].present + attendence[i].status
              // }
              // arr = newarr;
            }
  
            let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { aec: { attendence: { year: new Date().getFullYear(), month: arr } }} } } });
  
  
  
          }
  
        }
        else if (sub == "maths") {
          for (let i = 0; i < attendence.length; i++) {
            let c = await student.findById(attendence[i].id);
            console.log(c + "c")
            let arr = c.branch.CE52.subjects.maths.attendence.month;
            let ind = -1;
            for (let k = 0; k < arr.length; k++) {
              if (arr[k].m == new Date().getMonth()) {
                ind = k;
                break;
              };
            };
            let obj;
            let newarr;
            if (ind == -1) {
              obj = {
                m: new Date().getMonth(),
                dateoftakingclass: [new Date().getDate()],
                dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
                totalclasses: 1,
                present: attendence[i].status
              }
            }
            else {
              newarr = arr.filter((e) => {
                return !(e.m == new Date().getMonth())
              })
              arr[ind].dateoftakingclass.push(new Date().getDate());
              arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1)
              obj = {
                m: new Date().getMonth(),
                dateoftakingclass: arr[ind].dateoftakingclass,
                dateofpresent: arr[ind].dateofpresent
                ,
                totalclasses: (arr[ind].totalclasses + 1),
                present: arr[ind].present + attendence[i].status
              }
              arr = newarr;
            }
  
            let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { maths: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) } }, de: c.branch.CE52.subjects.de, aeclab: c.branch.CE52.subjects.aeclab, etc: c.branch.CE52.subjects.etc, aec: c.branch.CE52.subjects.aec, delab: c.branch.CE52.subjects.delab, itws: c.branch.CE52.subjects.itws } } } });
  
  
  
          }
        }
        else if (sub == "delab") {
          for (let i = 0; i < attendence.length; i++) {
            let c = await student.findById(attendence[i].id);
            console.log(c + "c")
            let arr = c.branch.CE52.subjects.delab.attendence.month;
            let ind = -1;
            for (let k = 0; k < arr.length; k++) {
              if (arr[k].m == new Date().getMonth()) {
                ind = k;
                break;
              };
            };
            let obj;
            let newarr;
            if (ind == -1) {
              obj = {
                m: new Date().getMonth(),
                dateoftakingclass: [new Date().getDate()],
                dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
                totalclasses: 1,
                present: attendence[i].status
              }
            }
            else {
              newarr = arr.filter((e) => {
                return !(e.m == new Date().getMonth())
              })
              arr[ind].dateoftakingclass.push(new Date().getDate());
              arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1)
              obj = {
                m: new Date().getMonth(),
                dateoftakingclass: arr[ind].dateoftakingclass,
                dateofpresent: arr[ind].dateofpresent
                ,
                totalclasses: (arr[ind].totalclasses + 1),
                present: arr[ind].present + attendence[i].status
              }
              arr = newarr;
            }
  
            let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { delab: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) } }, de: c.branch.CE52.subjects.de, aeclab: c.branch.CE52.subjects.aeclab, etc: c.branch.CE52.subjects.etc, maths: c.branch.CE52.subjects.maths, aec: c.branch.CE52.subjects.aec, itws: c.branch.CE52.subjects.itws } } } });
  
  
  
          }
        }
        else if (sub == "de") {
          for (let i = 0; i < attendence.length; i++) {
            let c = await student.findById(attendence[i].id);
            console.log(c + "c")
            let arr = c.branch.CE52.subjects.de.attendence.month;
            let ind = -1;
            for (let k = 0; k < arr.length; k++) {
              if (arr[k].m == new Date().getMonth()) {
                ind = k;
                break;
              };
            };
            let obj;
            let newarr;
            if (ind == -1) {
              obj = {
                m: new Date().getMonth(),
                dateoftakingclass: [new Date().getDate()],
                dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
                totalclasses: 1,
                present: attendence[i].status
              }
            }
            else {
              newarr = arr.filter((e) => {
                return !(e.m == new Date().getMonth())
              })
              arr[ind].dateoftakingclass.push(new Date().getDate());
              arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1)
              obj = {
                m: new Date().getMonth(),
                dateoftakingclass: arr[ind].dateoftakingclass,
                dateofpresent: arr[ind].dateofpresent
                ,
                totalclasses: (arr[ind].totalclasses + 1),
                present: arr[ind].present + attendence[i].status
              }
              arr = newarr;
            }
  
            let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { de: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) } }, aec: c.branch.CE52.subjects.aec, aeclab: c.branch.CE52.subjects.aeclab, etc: c.branch.CE52.subjects.etc, maths: c.branch.CE52.subjects.maths, delab: c.branch.CE52.subjects.delab, itws: c.branch.CE52.subjects.itws } } } });
  
  
  
          }
        }
        else if (sub == "aeclab") {
          for (let i = 0; i < attendence.length; i++) {
            let c = await student.findById(attendence[i].id);
            console.log(c + "c")
            let arr = c.branch.CE52.subjects.aeclab.attendence.month;
            let ind = -1;
            for (let k = 0; k < arr.length; k++) {
              if (arr[k].m == new Date().getMonth()) {
                ind = k;
                break;
              };
            };
            let obj;
            let newarr;
            if (ind == -1) {
              obj = {
                m: new Date().getMonth(),
                dateoftakingclass: [new Date().getDate()],
                dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
                totalclasses: 1,
                present: attendence[i].status
              }
            }
            else {
              newarr = arr.filter((e) => {
                return !(e.m == new Date().getMonth())
              })
              arr[ind].dateoftakingclass.push(new Date().getDate());
              arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1)
              obj = {
                m: new Date().getMonth(),
                dateoftakingclass: arr[ind].dateoftakingclass,
                dateofpresent: arr[ind].dateofpresent
                ,
                totalclasses: (arr[ind].totalclasses + 1),
                present: arr[ind].present + attendence[i].status
              }
              arr = newarr;
            }
  
            let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { aeclab: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) } }, de: c.branch.CE52.subjects.de, aec: c.branch.CE52.subjects.aec, etc: c.branch.CE52.subjects.etc, maths: c.branch.CE52.subjects.maths, delab: c.branch.CE52.subjects.delab, itws: c.branch.CE52.subjects.itws } } } });
  
  
  
          }
        }
        else if (sub == "itws") {
          for (let i = 0; i < attendence.length; i++) {
            let c = await student.findById(attendence[i].id);
            console.log(c + "c")
            let arr = c.branch.CE52.subjects.itws.attendence.month;
            let ind = -1;
            for (let k = 0; k < arr.length; k++) {
              if (arr[k].m == new Date().getMonth()) {
                ind = k;
                break;
              };
            };
            let obj;
            let newarr;
            if (ind == -1) {
              obj = {
                m: new Date().getMonth(),
                dateoftakingclass: [new Date().getDate()],
                dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
                totalclasses: 1,
                present: attendence[i].status
              }
            }
            else {
              newarr = arr.filter((e) => {
                return !(e.m == new Date().getMonth())
              })
              arr[ind].dateoftakingclass.push(new Date().getDate());
              arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1)
              obj = {
                m: new Date().getMonth(),
                dateoftakingclass: arr[ind].dateoftakingclass,
                dateofpresent: arr[ind].dateofpresent
                ,
                totalclasses: (arr[ind].totalclasses + 1),
                present: arr[ind].present + attendence[i].status
              }
              arr = newarr;
            }
  
            let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { itws: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) } }, de: c.branch.CE52.subjects.de, aeclab: c.branch.CE52.subjects.aeclab, etc: c.branch.CE52.subjects.etc, maths: c.branch.CE52.subjects.maths, delab: c.branch.CE52.subjects.delab, aec: c.branch.CE52.subjects.aec } } } });
  
  
  
          }
        }
        else if (sub == "etc") {
          for (let i = 0; i < attendence.length; i++) {
            let c = await student.findById(attendence[i].id);
            console.log(c + "c")
            let arr = c.branch.CE52.subjects.etc.attendence.month;
            let ind = -1;
            for (let k = 0; k < arr.length; k++) {
              if (arr[k].m == new Date().getMonth()) {
                ind = k;
                break;
              };
            };
            let obj;
            let newarr;
            if (ind == -1) {
              obj = {
                m: new Date().getMonth(),
                dateoftakingclass: [new Date().getDate()],
                dateofpresent: [attendence[i].status ? new Date().getDate() : -1],
                totalclasses: 1,
                present: attendence[i].status
              }
            }
            else {
              newarr = arr.filter((e) => {
                return !(e.m == new Date().getMonth())
              })
              arr[ind].dateoftakingclass.push(new Date().getDate());
              arr[ind].dateofpresent.push(attendence[i].status ? new Date().getDate() : -1)
              obj = {
                m: new Date().getMonth(),
                dateoftakingclass: arr[ind].dateoftakingclass,
                dateofpresent: arr[ind].dateofpresent
                ,
                totalclasses: (arr[ind].totalclasses + 1),
                present: arr[ind].present + attendence[i].status
              }
              arr = newarr;
            }
  
            let a = await student.findByIdAndUpdate(attendence[i].id, { branch: { CE52: { subjects: { etc: { attendence: { year: new Date().getFullYear(), month: arr.concat(obj) } }, de: c.branch.CE52.subjects.de, aeclab: c.branch.CE52.subjects.aeclab, aec: c.branch.CE52.subjects.aec, maths: c.branch.CE52.subjects.maths, delab: c.branch.CE52.subjects.delab, itws: c.branch.CE52.subjects.itws } } } });
  
  
  
          }
        }
      }
      else {
  
      }
  
  
      // res.redirect("http://localhost:3000/");
      res.send("hello there")
    } catch (e) {
      console.log(e + "   error")
    }
  })