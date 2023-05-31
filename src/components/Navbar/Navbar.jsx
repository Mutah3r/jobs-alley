import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="nav-wrapper">
                <div className="nav-logo">
                    <Link to='/'><h1>JobsAlley</h1></Link>
                </div>
                <div className="nav-links">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    <NavLink to='/applied-jobs'>Applied Jobs</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </div>
                <div className="nav-btn-container">
                    <button className="btn-primary">Start Applying</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;