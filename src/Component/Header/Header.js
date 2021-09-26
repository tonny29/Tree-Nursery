import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="text-style">
            <nav className="nav-style">
                <a href="./nursery">Nursery</a>
                <a href="./about us">About Us</a>
                <a href="./contact us">Contact Us</a>
            </nav>
            <h2>**DISTRIBUTING FLOWERS SAPLINGS**</h2>
            <div className="header-container">
                <h3>A list has been made of how I will distribute
                some flower saplings from my nursery to a few schools.</h3> 

            </div>
        </div>
    );
};

export default Header;