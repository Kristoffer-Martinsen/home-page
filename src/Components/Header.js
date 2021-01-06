import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Kristoffer Martinsen</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#AboutMe">About me</Nav.Link>
                <Nav.Link href="#Projects">Projects</Nav.Link>
                <Nav.Link href="#Skills">Skills</Nav.Link>
                <Nav.Link href="#ContactMe">Contact me</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header;