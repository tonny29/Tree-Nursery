import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="text-style">
            <nav className="nav-style">
                <a href="./nursery">OUR NURSERY</a>
                <a href="./about us">ABOUT US</a>
                <a href="./contact us">CONTACT US</a>
            </nav>
            <h2>***SELLING <span className="middle-text-style">FLOWERS SAPLINGS</span> NURSERY TO NURSERY***</h2>
            <div className="header-container">
                <h3>""A list has been made of how I will delivered
                 flowers saplings from my nursery to another nurserys""</h3> 
            </div> 
            <div className="budget">
                <h1>Total Budget For Selling Tree: $50 million</h1>
            </div>
        </div>
    );
};

export default Header;