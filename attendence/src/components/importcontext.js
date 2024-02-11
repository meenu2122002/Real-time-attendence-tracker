import {  useState,useContext } from "react";
import React from 'react'
import  Context from "./context"

function Importcontext(props) {
const [students,setstudents]=useState({
  branch:"CE52",
  subject:"DBMS"
});
let Month=["January","February","March","April","May","June","July","August","September","October","November","December"];
const [profile,setprofile]=useState({
  subject:"DBMS",
  month:Month[new Date().getMonth()],
  year:2023,
  email:"",
})
const [markattendence,setattendence]=useState([]);
const [absents,setabsents]=useState([])
  return (
    <Context.Provider value={{setstudents,students,setattendence,markattendence,profile,setprofile,absents,setabsents}}>
      {props.children}
    </Context.Provider>
  )
}

export default Importcontext
