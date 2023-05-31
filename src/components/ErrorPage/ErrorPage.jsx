import React from 'react';
import Lottie from 'lottie-react';
import errorAnimation from '../../assets/errorAnimation.json';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='error-animation'>
            <Lottie animationData={errorAnimation} loop={true} />
        </div>
    );
};

export default ErrorPage;