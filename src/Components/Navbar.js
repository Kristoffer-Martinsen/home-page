import React from 'react';
import '../Stylesheets/Navbar.css';
import {Link} from 'react-scroll';

function Navbar() {
    return(
        <div className="Navbar">
            <h1><Link activeClass="active" to="AboutMe" spy={true} smooth={true}>About me</Link></h1>
            <h1><Link to="ListOfProjects" spy={true} smooth={true}>Projects</Link></h1>
            <h1><Link to="Skills" spy={true} smooth={true}>Skills</Link></h1>
            <h1><Link to="ContactMe" spy={true} smooth={true}>Contact me</Link></h1>
        </div>
    )
}

export default Navbar;