import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faPhone,faInfo} from '@fortawesome/free-solid-svg-icons'
import './Header.css';
const Header = () => {
    return (
        <div className="text-style">
            <nav className="nav-style">
                <a href="./our nursery">OUR NURSERY {<FontAwesomeIcon icon={faHome}/>}</a>
                <a href="./information">INFORMATION {<FontAwesomeIcon icon={faInfo}/>}</a>
                <a href="./contact us">CONTACT US {<FontAwesomeIcon icon={faPhone}/>}</a>
            </nav>
            <h2>***SELLING <span className="middle-text-style">FLOWERS SAPLINGS</span> NURSERY TO NURSERY***</h2>
            <div className="header-container">
                <h3>""A list has been made of how I will delivered
                 flowers saplings from my nursery to another nurserys""</h3> 
            </div> 
            <div className="budget">
                <h1>Total Budget For Selling Tree: $30 Thousand</h1>
            </div>
        </div>
    );
};

export default Header;