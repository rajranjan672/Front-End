import React from 'react'
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container-fluid mt-5">
        <div className="row">
        <div className="hero d-flex mx-auto justify-content-center align-items-center col-8 col-sm-8 col-md-6 col-lg-6" id="home">
            <div className="text-white d-flex ">
                <h1>Welcome to the <span>Adventure</span> </h1>
            </div>
        </div>
        </div>
    </div>
   
  )
}

export default Hero
