import React, { useContext } from 'react'
import study from "../teacherauth.jpeg"
import { useNavigate } from "react-router-dom"

import Context from '../context';
function Signup() {
  const { setstudents, students } = useContext(Context);
  const handlechange = (e) => {
  
    setstudents({ ...students, [e.target.id]: e.target.value });
    console.log(students,"students")
  };

  const navigate = useNavigate();
  const redirect = () => {
    console.log("i am here")
    navigate("/takeattendence")
  }
  const st = {
    width: "600px",
    padding: "10px",
    borderRadius: "4px",
    border: "2px solid black",
    marginLeft: "34px",
    cursor:"pointer"
  }

  return (
    
    <div style={{ height: "100vh", width: "100%", backgroundImage: `url(${study})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
      <div style={{ color: "white", margin: " 10px 200px 0px 400px", position: "absolute", top: "153px" }}>
        <h1>Enter the Branchname and subject details to take attendence</h1>
        <div style={{ display: "flex", marginTop: "50px" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", listStyle: "none", fontSize: "25px", height: "110px" }}>

            <li>  Subject:</li>

            <li>Classname:</li>

          </div>
          <div>
            <form>

              <select name="subject" id="subject" placeholder='Choose the subject' style={st} onChange={handlechange} required>
                <option value="DBMS">DATABASE MANAGEMENT SYSTEM</option>
                <option value="TOC">TOC</option>
                <option value="SS">SYSTEM AND SIGNALS</option>
                <option value="OOPS">OBJECT ORIENTED PROGRAMMING</option>
                <option value="UHV">UHV</option>
                <option value="COI">CONSTITUTION OF INDIA</option>
                <option value="ML">MACHINE LEARNING</option>
                <option value="OOPSLAB">OOPS Lab</option>
        <option value="DBMSLAB">DBMS LAB</option>
       



              </select><br /><br />

              <select name="branch" placeholder='Choose the branch ' style={st} id="branch" onChange={handlechange} required>
                <option value="CE52">CE52</option>
              </select><br /><br />

              <button type="button" className="btn btn-danger" style={{ marginLeft: "200px" }} onClick={redirect}>Submit</button>

            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup
