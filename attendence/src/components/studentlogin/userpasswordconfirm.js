import React from 'react'
import study from "../front.jpeg"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context'
import { useContext } from 'react';

function Signup() {
  const navigate = useNavigate();
  const {profile,setprofile}=useContext(Context);
  const st = {
    width: "400px",
    padding: "4px",
    borderRadius: "4px",
    border: "2px solid black",
    marginLeft: "34px"
  }
  const [user, setuser] = useState({

    email: "",

    password: "",

  });
  const handleclick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/student/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ ...user })

    });
    const message = await response.json();
    if (message.message == " Logged in ") {
      // notify(message.message);
      toast("Login successful"
      );
      
      // setprofile({...user,email:user.email});
      navigate("/subjectandmonth");
    }
    else {
      alert(message.message);
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
    <div style={{ height: "100vh", width: "100%", backgroundImage: `url(${study})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' ,opacity:"0.9"}}>
      <div style={{ color: "white", margin: " 10px 200px 0px 400px", position: "absolute", top: "153px" }}>
        <h1>Login as A student</h1>
        <div style={{ display: "flex", marginTop: "50px" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", listStyle: "none", fontSize: "25px", height: "97px" }}>

            <li ><span style={{fontWeight:"bold"}}>   E-mail</span> <span style={{color:"red"}}>*</span>:</li>

            <li > <span style={{fontWeight:"bold"}}> Password</span> <span style={{color:"red"}}>*</span>:</li>

          </div>
          <div>
            <form >


              <input type="text" name="email" placeholder='Enter your email' style={st} onChange={handlechange} /><br /><br />

              <input type="password" name="password" placeholder='Enter your  password' style={st} onChange={handlechange} /><br /><br />


              <button type="submit" className="btn btn-danger" style={{ marginLeft: "200px",width:"200px",height:"50px",position:"relative",left:"-70px" }} onClick={handleclick}>Login</button>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup
