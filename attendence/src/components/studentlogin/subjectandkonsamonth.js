import React, { useContext } from 'react'
import study from "../teacherauth.jpeg"
import Context from '../context'
import {useNavigate} from "react-router-dom"



function Signup() {
  const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const navigate = useNavigate();
  const {profile,setprofile}=useContext(Context);
  const handlechange=(e)=>{
    setprofile({...profile,[e.target.id]:e.target.value});
  }
  const handle=(e)=>{
    e.preventDefault();
navigate("/displayattendence");
  }
  const st={
width:"800px",
padding:"10px",
borderRadius:"4px",
border:"2px solid black",
marginLeft:"34px"
  }

  return (
    <div style={{height:"100vh",width:"100%",backgroundImage:`url(${study})`,backgroundRepeat:"no-repeat",backgroundSize: 'cover'}}>
      <div style={{color:"white",margin:" 10px 200px 0px 400px",position:"absolute",top:"153px"}}>
        <h1>Get Attendence Details</h1>
        <div style={{display:"flex",marginTop:"50px"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",listStyle:"none",fontSize:"25px" ,height:"180px"}}>
          
          <li> Subject<span style={{color:"black"}}>*</span>:</li>
          
          <li> Month<span style={{color:"black"}}>*</span>:</li>
          <li> Year<span style={{color:"black"}}>*</span>:</li>
          
        </div>
        <div>
        <form >
        
      
      <select name="subject" id="subject" placeholder='Choose the subject'style={st} onChange={handlechange}  required>
        <option value="DBMS">DATABASE MANAGEMENT SYSTEM</option>
        <option value="TOC">TOC</option>
        <option value="SS">SYSTEM AND SIGNALS</option>
        <option value="OOPS">OBJECT ORIENTED PROGRAMMING</option>
        <option value="UHV">UHV</option>
        <option value="COI">CONSTITUTION OF INDIA</option>
        <option value="ML">MACHINE LEARNING</option>
        <option value="OOPSLAB">OOPS Lab</option>
        <option value="DBMSLAB">DBMS LAB</option>
       
        
        
        </select><br/><br/>
      
       <select name="month" placeholder='Choose the month ' style={st} id="month" onChange={handlechange}  required value={`${monthsArray[new Date().getMonth()]}`}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
        
        </select><br/><br/>
       <select  name="year" placeholder='Choose the year ' style={st} id="year" onChange={handlechange}  required>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        
        </select><br/><br/>
    
     
       <button type="button" className="btn btn-danger" style={{marginLeft:"131px"}} onClick={handle}>Get Attendence Details</button>

      </form>
        </div>
      
      </div>
    </div>
    </div>
  )
}

export default Signup
