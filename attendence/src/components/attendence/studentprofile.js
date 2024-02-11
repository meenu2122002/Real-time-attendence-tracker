import React, { useState, useContext } from 'react'
import student from "../student.jpeg"
import st1 from "../st1.jpeg"
import st2 from "../st2.jpeg"
import st3 from "../st3.jpeg"
import st4 from "../st4.jpeg"
import st5 from "../st5.jpeg"
// import { useContext } from 'react'
import Context from '../context'


function Studentprofile(props) {
  const { setattendence, markattendence, absents, setabsents } = useContext(Context)

  const { email, username, skills, rollno, course, id } = props
  const a = [st1, st2, st3, st4, st5, student, st1, st2, st3, st4, st5, student];

  const max = 10
  const min = 0
  let result = Math.random() * (max - min) + min
  result = Math.floor(result);

  const [p, setp] = useState(-1);
  const [arr, setarr] = useState([])
  // const [ab, setabs] = useState([])


  const handleclick = (e) => {
    setp(parseInt(e.target.id));

    let i = {
      rollno:rollno,
      username:username,
      email:email,
      id: id,
      status: parseInt(e.target.id)
    }
    // let k = {
    //   email, username, rollno, course, id
    // }
    if (arr.length == 0) {
      setarr(arr.push(i));

      setattendence(markattendence.concat(arr));
      console.log(markattendence.length + "length")
      // if (p == 0) {
      //   // setabs(ab.push(k));
      //   setabsents(absents.push(k));
      // }
    }
    else {
      const data = markattendence.filter((e) => {
        return !(e.id == id)
      });
      data.push(i)
      console.log(data.length + "data length")
      setattendence(data)
      console.log(markattendence.length + "length");

      // const datas = absents.filter(e => {
      //   return (!e.id == id);
      // // })
      // if (p == 0) {
      //   setabsents(absents.push({ email, username, rollno, course, id }));
      //   // setabsents()
      // }
    }

  }
  return (
    <div className="card" style={{ width: "21rem", margin: "10px", boxShadow: "10px 10px 10px 10px gray", overflow: "hidden" }}>
      <img src={a[parseInt(`${result}`)]} style={{ height: "150px", width: "150px", borderRadius: "94px", margin: " 10px 0px 5px 76px" }} alt="..." />
      <div className="card-body">
        <h1 style={{ textAlign: "center" }}>{username}</h1>

        <h5><span style={{ fontWeight: "bold" }}> Rollno:{rollno}</span></h5>
        <h6><span style={{ fontWeight: "bold" }}> Email:{email}</span></h6>

        <p className="card-text" >Student of JC bose University,having skills or interest as {skills.substr(0, 50)}</p>

      </div>
      <div style={{ display: "flex", justifyContent: 'space-evenly', padding: "20px" }}>
        <button type="button" className={`btn btn-${(p == 1) ? "success" : "secondary"}`} onClick={handleclick} id="1">Present</button>
        <button type="button" className={`btn btn-${(p == 0) ? "danger" : "secondary"}`} onClick={handleclick} id="0">Absent</button>
      </div>
    </div>
  )
}

export default Studentprofile
