import React, { useEffect } from 'react'
import { useState,useContext } from 'react';
import Context from '../context';
import Studentitem from "./studentprofile"
import Alert from "./alert"
import {useNavigate} from "react-router-dom"
import th from "./th.jpg"
import { ToastContainer, toast } from 'react-toastify';
// import AbsentStudents from './absentStudents';


function Takeattendence() {
  const navigate = useNavigate();
// const [takeattendence, setTakeattendence] = useState(false)
const [show, setShow] = useState(true)
const {students,setattendence,markattendence}=useContext(Context)
const [studentslist,setstudentslist]=useState([]);
const handle=async()=>{
  // console.log(markattendence)
  const response = await fetch("http://localhost:8080/api/teacher/takeattendence", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify({attendence:markattendence,students:students}) 
        
     });
     if(response){
      toast.success("Attendence has been taken successfully", {
        theme: "colored"
      })

      
      navigate("/absentstudents")  
     }
     else{
      toast.warn("Error occured")
      console.log(response.console.error())
     }
 
}
const getstudents=async ()=>{
     const response = await fetch("http://localhost:8080/api/teacher/getstudents", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify({students}) 
        
     });
const parsedata=await response.json()
console.log(parsedata,"parsedata")
setstudentslist(parsedata);
// console.log("setlist array is ");
// console.log(studentslist.length +"studentlistlength");
   
    }


    useEffect(()=>{
      getstudents();
    },[])


    return (
      <>
      <div style=
      {{display:`${show?'block':'none'}`,
      marginTop:"100px"}} >
      <h1 style={{textAlign:"center",fontFamily:"sans-serif",marginTop:"20px"}}>Taking the Attendence of Computer Engineering students (CE52) </h1>
      <div style={{fontFamily:"sans-serif",margin:"10px 100px 10px 100px",backgroundColor:"rgb(58 50 50 / 32%)"}}>
        
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
     
      
{studentslist.map((e)=>{
  return <Studentitem username={e.username} email={e.email}  course={e.course?e.course:"Computer Engineering 32"} skills={e.skills?e.skills.substring(0,75):"Engaged in learning new things Engaged in learning new things Engaged in learning new things Engaged in learning new things"} rollno={e.rollno} id={e._id} key={e._id}/>
})}
    </div>
    </div>
    <button type="button" className={`btn btn-warning ${!(markattendence.length==studentslist.length)?"disabled":""}`} style={{margin:"10px 0px 10px 45vw"}} onClick={()=>{
      setShow(false);
    }} >Take Attendence</button>
      </div>
      {/* #dad2d2 */}
      <div style={{backgroundColor:"#9f9f9f",width:"100%",display:`${show?'none':'flex'}`,justifyContent:"center",alignItems:"center",height:"100vh",marginTop:"90px"}}>

        <div style={{width:"800px",backgroundColor:"white",borderRadius:"3px",height:"400px",padding:"15px"}}>
<div style={{textAlign:"center"}}>
  <img src={th} alt="" style={{textAlign:"center",height:"100px",width:"100px"}} />
<h1 style={{fontWeight:"bold"}}>Are you sure?</h1>
<h2>You wont't be able to revert this!</h2>
<div style={{marginTop:"50px",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
<div style={{backgroundColor:"red",color:"white",fontWeight:"bold",height:"40px",width:"200px",padding:"7px",borderRadius:"2px",marginRight:"10px",fontSize:"20px",cursor:"pointer"}} onClick={handle}>
  Yes,take Attendence
</div>
<div style={{backgroundColor:"blue",color:"white",fontWeight:"bold",height:"40px",width:"200px",padding:"7px",borderRadius:"2px",marginRight:"10px",fontSize:"20px"}} onClick={()=>{setShow(true)}}>
 Cancel
</div>
</div>

</div>
        </div>
      </div>
    </>
  )
}

export default Takeattendence
