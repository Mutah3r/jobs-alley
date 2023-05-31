import React from 'react';
import './HeaderTitle.css'
import { useLocation } from 'react-router-dom';

const HeaderTitle = () => {
    let titleText = '';
    const {pathname} = useLocation();

    if(pathname === '/statistics'){
        titleText = 'Statistics'
    }
    else if(pathname === '/applied-jobs'){
        titleText = 'Applied Jobs';
    }
    else if(pathname === '/blog'){
        titleText = 'Blog';
    }
    else {
        titleText = 'Job Details';
    }


    return (
        <div className='header-title-wrapper'>
            <h1 className='header-title'>{titleText}</h1>
        </div>
    );
};

export default HeaderTitle;