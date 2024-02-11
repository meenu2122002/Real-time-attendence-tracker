import React from 'react'
import study from "./teacher.jpeg"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';





function Teachersignup() {
  const st = {
    width: "400px",
    padding: "4px",
    borderRadius: "4px",
    border: "2px solid black",
    marginLeft: "34px"
  }
  const navigate = useNavigate();
  const [user, setuser] = useState({

    username: "",
    email: "",
    passwordConfirmation: "",
    password: "",
    // universityname: "",
    qualifications: "",
    mainsub: "DBMS"
  });
  const handleclick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/teacher/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ ...user })

    });
    const message = await response.json();
    if (message.message == "Account created successfully") {
      // notify(message.message);
      toast(message.message
      );
      navigate("/");
    }
    else {
      // alert(message.message);
      toast(message.message
      );
    }



  }


  const handlechange = (e) => {
    setuser({
      ...user, // Copy the old fields
      [e.target.name]: e.target.value, // Update the specific field based on the input's 'name' attribute
    });
  }
  return (
    <div style={{ height: "100vh", width: "100%", backgroundImage: `url(${study})` ,backgroundRepeat:"no-repeat",backgroundSize: 'cover',display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ color: "white", margin: " 0px 200px" }}>
        <h1 style={{ marginLeft: "150px" }}>Signup as A Teacher</h1>
        <div style={{ display: "flex", marginTop: "31px" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", listStyle: "none", fontSize: "25px", height: "339px" }}>

            <li > <span style={{fontWeight:"bold"}}>Username</span> <span style={{color:"red"}}>*</span>:</li>
            <li> <span style={{fontWeight:"bold"}}>Email</span><span style={{color:"red"}}>*</span>:</li>
            <li><span style={{fontWeight:"bold"}}>Password</span><span style={{color:"red"}}>*</span>:</li>
            <li>  <span style={{fontWeight:"bold"}}>Confirmpassword</span><span style={{color:"red"}}>*</span>:</li>
            <li>  <span style={{fontWeight:"bold"}}>Qualifications:</span></li>
            <li> <span style={{fontWeight:"bold"}}>Main subject</span> <span style={{color:"red"}}>*</span>:</li>
          </div>
          <div>
            <form>


              <input type="text" name="username" placeholder='Enter your username' style={st} onChange={handlechange} /><br /><br />
              <input type="email" name="email" placeholder='Enter your email' style={st} onChange={handlechange} /><br /><br />
              <input type="text" name="password" placeholder='Enter your strong password' style={st} minLength="8" onChange={handlechange} /><br /><br />
              <input type="text" name="passwordConfirmation" placeholder='confirm password' style={st} minLength="8" onChange={handlechange} /><br /><br />
              <input type="text" name="qualifications" placeholder='Enter your Qualifications' style={st} onChange={handlechange} /><br /><br />



              <select name="mainsub" id="subject" placeholder='Enter your main subject' style={st} onChange={handlechange}  >
                <option value="DBMS">DATABASE MANAGEMENT SYSTEM</option>
                <option value="TOC">TOC</option>
                <option value="SS">SYSTEM AND SIGNALS</option>
                <option value="OOPS">OBJECT ORIENTED PROGRAMMING</option>
                <option value="UHV">UHV</option>
                <option value="COI">CONSTITUTION OF INDIA</option>
                <option value="ML">MACHINE LEARNING</option>
                <option value="BIO">BIOLOGY</option>
                <option value="OOPSLAB">OOPS Lab</option>
                <option value="DBMSLAB">DBMS LAB</option>



              </select><br /><br />

              <button type="submit" className="btn btn-danger" style={{ marginLeft: "200px",width:"200px",height:"40px",position:"relative",left:"-70px" }} onClick={handleclick}>Signup</button>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Teachersignup
