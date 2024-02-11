import React, { useContext, useEffect, useState } from 'react'
import Context from '../context';
import student from "../student.jpeg"
import st1 from "../st1.jpeg"
import st2 from "../st2.jpeg"
import img from "../backg.jpeg"



function Displayattendence() {
  const { profile } = useContext(Context);
  console.log("profile",profile)
  const a = [st1, st2, student];

  const max = 2
  const min = 0
  let result = Math.random() * (max - min) + min
  result = Math.floor(result);
  const [details, setdetails] = useState({

    email: "",
    username: "",
    m: profile.month,
    dateoftakingclass: [],
    dateofpresent: [],
    totalclasses: 0,
    present: 0,
    rollno: 0
  });
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const getattendence = async () => {
    console.log("function called")
    try {
      const response = await fetch("http://localhost:8080/api/student/subjectandmonth", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify({ ...profile })

      });

      const data = await response.json();
      console.log(data);
      setdetails({
        email: data.email,
        username: data.username,
        rollno: data.rollno,
        dateoftakingclass: data.dt.dateoftakingclass,
        dateofpresent: data.dt.dateofpresent,
        totalclasses: data.dt.totalclasses,
        present: data.dt.present
      });


    } catch (e) {
      console.log(e, "error")
    }

  }
  useEffect(() => {
    getattendence();
  }, [])
  return (
    <div style={{ backgroundColor: "rgb(65 65 129)", height: "100vh", width: "100vw", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }} >



      <div className="card" style={{ width: "33rem", backgroundColor: "rgb(8 8 99)", borderRadius: "20px", color: "white", display: "flex", height: "400px", width: "900px", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxShadow: "10px 10px  lightblue" }}>
        <div style={{
          display: "flex",
          justifyContent: "center", alignItems: "center"
        }}>
          <img src={a[parseInt(`${result}`)]} style={{ height: "150px", width: "150px", borderRadius: "94px", margin: " 10px 0px 5px 76px" }} alt="..." />
        </div>
        <div style={{ height: "400px", width: "400px", padding: "20px" }}>
          <h3>Student Name : {details.username}</h3>

          <h3>Rollno : {details.rollno}</h3>



          <h4>Subject : {profile.subject}</h4>
          <h4>Totalclassses in month  of {months[details.monthName]} is : {details.totalclasses}</h4>
          <h4 style={{ color: "green" }}>Total Number of classes attended :{details.present}</h4>
          <h4 style={{ color: "rgb(110 23 23)" }}>Total Number of Absentees: {details.totalclasses - details.present}</h4>
          {/* <h4>Dates on which classes were taken by teacher :{
    details.dateoftakingclass.filter(e=>{
      return 1;
    })}</h4> */}


        </div>
        <div style={{ display: "flex", justifyContent: 'space-evenly', padding: "20px" }}>

        </div>
      </div>
    </div>

  )
}

export default Displayattendence
