import React, { useState } from 'react'
import { Charactors } from '../Charactors';
import "./Characters.css";
import Hero from '../Hero/Hero';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Characters = () => {
  const [visibleDetails, setVisibleDetails] = useState(null);

  const toggleDetails = (id) => {
      setVisibleDetails(visibleDetails === id ? null : id);
  };

  return (
      <div className='container-fluid'>
          <div className="row d-flex justify-content-center">
              <Hero />
              <h3 className='text-danger'>Characters</h3>
              {Charactors.map((item) => {
                  const isVisible = visibleDetails === item.id;
                  return (
                      <div className='card h-100 col-11 col-sm-5 col-md-3 col-lg-3 mx-4 my-4 p-0' key={item.id}>
                          <img src={item.imgg} height={"300"} width={"100%"} alt={item.name} />
                          <h4 className='mx-auto'>{item.name}</h4>
                          <button onClick={() => toggleDetails(item.id)} className="btn btn-link">
                              <ExpandMoreIcon  />
                              {isVisible ? ' Hide Details' : ' View More'}
                          </button>
                          {isVisible && <p className="details text-white">{item.details}</p>}
                      </div>
                  );
              })}
          </div>
      </div>
  );
}

export default Characters
