import React from 'react';
import Lottie from "lottie-react";
import './Banner.css'
import findJobAnimation from "../../assets/findJobAnimaiton.json";

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="banner-details">
                <h1 className="banner-title">
                    One Step<br />Closer To Your<br /><span>Dream Job</span>
                </h1>
                <p className="banner-details">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn-primary banner-button">Get Started</button>
            </div>

            <div className="banner-image-container">
                <Lottie animationData={findJobAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Banner;