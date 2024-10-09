import React, { useState } from 'react';
import SuperNaturals from '../SuperNatural';
import "./SuperNatural.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SuperNatural = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === SuperNaturals.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? SuperNaturals.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel mx-auto">
            <h3>Super Naturals</h3>
            <div className="arrow left" onClick={handlePrev}>
                <ArrowBackIosIcon />
            </div>
            <div className="carousel-content">
                <img className='col-12 col-sm-12 col-md-10 col-lg-11' src={SuperNaturals[currentIndex].img} alt={SuperNaturals[currentIndex].name} />
                <h2>Title: {SuperNaturals[currentIndex].name}</h2>
            </div>
            <div className="arrow right" onClick={handleNext}>
                <ArrowForwardIosIcon />
            </div>
            <div className="dots">
                {SuperNaturals.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default SuperNatural;
