import React from 'react';
import { GitHub } from 'react-feather';
import { Linkedin } from 'react-feather';
import '../Stylesheets/Header.css';

function Header() {
    return (
        <div className="Header">
            <h1>Kristoffer Martinsen</h1>
            <hr></hr>
            <a href="https://github.com/Kristoffer-Martinsen"><GitHub/></a>
            <a href="https://www.linkedin.com/in/kristoffer-martinsen-11b07a167/"><Linkedin/></a>
        </div>
    )
}

export default Header;