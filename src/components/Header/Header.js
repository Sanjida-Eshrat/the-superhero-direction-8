import React from 'react';
import logo from '../../images/logo.svg.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            
            <h3 className="mt-4">Total Budget: 150 Million</h3>
            
        </div>
    );
};

export default Header;