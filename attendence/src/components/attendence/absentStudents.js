import React from 'react'
import { useState, useContext } from 'react';
import Context from '../context';
import { useEffect } from 'react';
import th from "./th.jpg"
import student from "../student.jpeg"
import st1 from "../st1.jpeg"
import st2 from "../st2.jpeg"
import st3 from "../st3.jpeg"
import st4 from "../st4.jpeg"
import st5 from "../st5.jpeg"

const AbsentStudents = () => {



// const [result, setresult] = useState(0)
    const a = [st1, st2, st3, st4, st5, student, st1, st2, st3, st4, st5, student];
    const max = 10
    const min = 0
    let result = Math.random() * (max - min) + min
    result = Math.floor(result);
    
    
    const { markattendence, students } = useContext(Context)
    const [d, setd] = useState([]);

    console.log("me")

    //   console.log(d);
    useEffect(() => {
        const data = markattendence.filter((e) => {
            return (e.status != 1)
        });
        setd(data);
        console.log("d", data)


    }, [])

    return (
        <>


            <div style={{ marginTop: "100px" }}>
                <h1 style={{ padding: "0px 50px" }}>Absent students in Today's {students.subject} class</h1>
                <div style={{ borderTop: "2px solid black", position: "relative", margin: "0px 96px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", padding: "5px", fontSize: "20px", padding: "30px", paddingBottom: "10px" }}>
                        <div>Student Image</div>
                        <div>Name of Student</div><div>University Id</div><div>Email Address</div><div>Status</div>

                    </div>
                    <div style={{ padding: "50px", paddingTop: "10px" }}>
                        {
                            d.map((e) => {
                                // getimage();
                                return <>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", padding: "5px", paddingRight: "0px" }}>
                                        <div>
                                            <img src={a[parseInt(`${result}`)]} style={{ height: "20px", width: "20px", borderRadius: "5px" }} /></div>
                                        <div >{e.email.substr(0, 20)}</div>
                                        <div >{e.username}</div>
                                        <div>{e.rollno}</div>
                                        <div style={{ height: "50px", width: "100px", backgroundColor: "red", borderRadius: "3px", textAlign: "center", paddingTop: "10px" }}>
                                            Absent
                                        </div>
                                    </div>
                                    <div style={{ height: "3px", width: "100%", backgroundColor: "black" }}></div>

                                </>
                            })
                        }

                    </div>
                    <div style={{
                        height: "100%", width: "2px", backgroundColor: "black", position: "absolute", left:
                            '219px', top: "0px"
                    }}></div>
                    <div style={{
                        height: "100%", width: "2px", backgroundColor: "black", position: "absolute", left:
                            '460px', top: "0px"
                    }}></div>
                    <div style={{
                        height: "100%", width: "2px", backgroundColor: "black", position: "absolute", left:
                            '1227px', top: "0px"
                    }}></div>
                    <div style={{
                        height: "100%", width: "2px", backgroundColor: "black", position: "absolute", left:
                            '687px', top: "0px"
                    }}></div>
                    <div style={{
                        height: "100%", width: "2px", backgroundColor: "black", position: "absolute", left:
                            '0px', top: "0px"
                    }}></div>
                    <div style={{
                        height: "100%", width: "2px", backgroundColor: "black", position: "absolute", left:
                            '934px', top: "0px"
                    }}></div>
                </div>


            </div>
        </>
    )
}

export default AbsentStudents