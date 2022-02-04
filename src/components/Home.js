import React, { Component } from "react";
import landscapebg from "./landscapebg.jpg";
import '../App.css'
function Home() {
  return (<body style={{backgroundImage:`url(${landscapebg})`,backgroundAttachment:"fixed",backgroundSize:`100% 100%`,opacity:`0.6`}}>
      <h1 className="textbig textcol mt-5 pt-5 pr-4" style={{color:'white',opacity:`1`}} >Les Membres</h1>
    </body>)
}

export default Home;
