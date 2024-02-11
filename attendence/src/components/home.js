import React, { useEffect } from 'react'
import front from "./kaam.jpeg"
import a from "./a.jpg"
import jcbose from "./jcbose.jpg"
import vicechancellor from "./vicechancellor.jpg"
import study from "./study.jpeg"
import another from "./another.jpg"
import third from "./third.jpg"
import fourth from "./fourth.jpg"
function Home() {

  return (
   
    <>

    <div style={{width:"100%",position:"absolute",top:"80px",backgroundImage:`url(${front})`,backgroundSize: 'cover',fontFamily:"sans-serif",color:"white",
        backgroundRepeat: 'no-repeat',overflow:"hidden"}}>
          
          
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{color:"white"}}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={front} class="d-block w-100" alt="..." style={{height:"400px",width:"100%"}}/>
      <div class="carousel-caption d-none d-md-block" style={{fontWeight:"bold"}}>
        <h5>Recruiter Drive</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={another} class="d-block w-100" alt="..." style={{height:"400px",width:"100%"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={study} class="d-block w-100" alt="..." style={{height:"400px",width:"100%"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




    <div style={{display:"flex"}}>
    <img src={jcbose} alt="" style={{height:"300px",width:"300px",borderRadius:"173px"}}/>
    <div style={{position:"relative",top:"40px",color:"white",margin:"0px 10px 0px 200px",width:"100%"}}>
      <h1>J.C Bose University of Science And Technology,Ymca ,Faridabad,Haryana</h1>
      <h2>(A Haryana State Government University)</h2>
      <h4>(Established by Haryana State Legislative Act NO. 21 0f 2009 and recognised by UGC Act 1956 u/s 22 to Confer Degree) </h4>
<h3>Accredated 'A+' Grade by NAAC </h3>
      
    
    </div> 
      </div>      
<div style={{display:"flex",marginTop:"50px"}}>
<div style={{width:"1000px",padding:"20px",border:"2px solid white",borderRadius:"5px"}}>
  <h1>Vice Chancellor</h1>
  <h3>Prof. Sushil Kumar Tomar is a distinguished academician, researcher and educational administrator. He is currently the Vice-Chancellor of JC Bose University of Science and Technology, YMCA, Faridabad (formerly known as YMCA University of Science and Technology). Prof. Tomar, who is also a well known Mathematician, assumed the office of Vice-Chancellor on February 22, 2022 as the seventh Vice-Chancellor of the University.

Prior to joining JC Bose University, Prof. Tomar was Dean of University Instruction at Panjab University, Chandigarh. The career of Prof. Tomar as an academician and researcher spans over 34 years. He brings with him a rich mixture of professional expertise and administrative experience.</h3>

</div>
  <img src={vicechancellor} style={{height:"300px",width:"300px",borderRadius:"173px",}} alt=""  />
  
</div>
<div style={{height:"500px",width:"100vw",backgroundImage:`url(${a})`,backgroundSize:'cover',backgroundRepeat:"no-repeat"} }>

</div>
        
    </div>
    
    </>
     
 
  )
}

export default Home
