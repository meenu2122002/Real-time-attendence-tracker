import React from 'react'
import study from "./study.jpeg"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Signup() {
  const navigate = useNavigate();
  
  const st = {
    width: "400px",
    padding: "4px",
    borderRadius: "4px",
    border: "2px solid black",
    marginLeft: "34px"
  }
  const [user, setuser] = useState({
    rollno: "",
    username: "",
    email: "",
    passwordConfirmation: "",
    password: "",
    universityname: "",
    branch: "CE52",
    skills: "",
    

  });
  const handleclick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/student/signup", {
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
    <div style={{ height: "100vh", width: "100%", backgroundImage: `url(${study})`,backgroundRepeat:"no-repeat",backgroundSize: 'cover' }}>
        <ToastContainer />
      <div style={{ color: "white", margin: " 90px 200px" }}>
        <h3 className=''>Signup as A student</h3>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", listStyle: "none", fontSize: "25px", height: "453px" }}>

            <li><span style={{fontWeight:"bold"}}> Rollno</span> <span style={{color:"red"}}>*</span>:</li>
            <li> <span style={{fontWeight:"bold"}}>  Username</span> <span style={{color:"red"}}>*</span>:</li>
            <li><span style={{fontWeight:"bold"}}>  Email</span> <span style={{color:"red"}}>*</span>:</li>
            <li><span style={{fontWeight:"bold"}}>  Password</span> <span style={{color:"red"}}>*</span>:</li>
            <li> <span style={{fontWeight:"bold"}}>   Confirmpassword</span> <span style={{color:"red"}}>*</span>:</li>
            <li> <span style={{fontWeight:"bold"}}>  Universityname</span> <span style={{color:"red"}}>*</span>:</li>
            <li><span style={{fontWeight:"bold"}}>  Branch</span> <span style={{color:"red"}}>*</span>:</li>
            <li> <span style={{fontWeight:"bold"}}>  Interest:</span></li>
          </div>
          <div>
            <form >

              <input type="text" name="rollno" placeholder='Enter your rollno' style={st} onChange={handlechange}/><br /><br />
              <input type="text" name="username" placeholder='Enter your username' style={st} onChange={handlechange}/><br /><br />
              <input type="email" name="email" placeholder='Enter your email' style={st} onChange={handlechange} /><br /><br />
              <input type="password" name="password" placeholder='Enter your strong password' style={st} onChange={handlechange}/><br /><br />
              <input type="password" name="passwordConfirmation" placeholder='confirm password' style={st} onChange={handlechange}/><br /><br />
              <input type="text" name="universityname" placeholder='Enter your university name' style={st} onChange={handlechange}/><br /><br />
              <select name="branch" placeholder='Enter your branch' style={st} onChange={handlechange}>
                <option value="CE52">CE52</option>
              </select><br /><br />
              <input type="text" name="skills" placeholder='Enter something about yourself' style={st} onChange={handlechange}/><br /><br />

              <button type="submit" className="btn btn-danger" style={{ marginLeft: "200px",width:"200px",height:"40px",position:"relative",left:"-70px" }} onClick={handleclick}>Signup</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup
