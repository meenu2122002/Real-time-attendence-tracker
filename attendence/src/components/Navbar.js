import React from 'react'
import logo from "./logo.jpg"

function Navbar() {
  // const notify = () => toast("Wow so easy!");
  return (
    <>
    
    <div className='fixed-top'>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <img src={logo} style={{height:"75px",width:"75px",borderRadius:"58px",cursor:"pointer"}} alt="" className='bg-image hover-zoom cursor:pointer'/>
  <div className="container-fluid">
    <a className="navbar-brand hover-text-opacity-100" href="/" style={{fontWeight:"bold"}}>Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link hover-text-white" href="/signup" style={{fontWeight:"bold"}}>Signup as Student</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/teachersignup" style={{fontWeight:"bold"}}>Signup as Teacher</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/studentlogin" style={{fontWeight:"bold"}}>Login as Student</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/teacherlogin" style={{fontWeight:"bold"}}>Login as Teacher</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>

    </div>
    </>
   
  )
}

export default Navbar
