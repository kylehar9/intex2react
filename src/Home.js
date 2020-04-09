import React from "react";

export default function Home() {

    return (
      <>
      <div className='home-background' style={{textAlign:"center"}}>

      <h1 style={{color:"white", paddingTop: "15%", fontSize:"4.5rem", textShadow:"1px 1px 10px #444444"}}><b>We're Here To Help</b> <i>You</i> <b>Help Others</b></h1>
      <h1 style={{color:"white", paddingTop: "1%", fontSize:"2rem", textShadow:"1px 1px 10px #222222"}}><b>Together we can help those affected with COVID 19</b></h1>

      <h1 style={{color:"white", paddingTop: "10%", fontSize:"3rem", textShadow:"1px 1px 10px #222222"}}>Here's How</h1>
      <i style={{color:"white", fontSize:"3rem"}} className="fa fa-chevron-circle-down"></i>

      </div>

      </>
    );
  }