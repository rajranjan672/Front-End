import React from 'react'
import { Charactors } from '../Charactors';
import "./Characters.css";
import Hero from '../Hero/Hero';

const Characters = () => {
    console.log(Charactors.name)
  return (
    <div className='container-fluid'>

        <div className="row d-flex justify-content-center">
      <Hero />

        <h3 className='text-danger '>Characters</h3>
      {Charactors.map((item) => {
        return (
            <div className='card h-100 col-11 col-sm-5 col-md-3 col-lg-3 mx-4 my-4 p-0' key={item.id}>
            <img src={item.imgg} height={"300"} width={"100%"} alt='tee' />

            <h4 className='mx-auto'>{item.name}</h4>
            </div>

        )
      })}
        </div>
      
    </div>
  )
}

export default Characters
