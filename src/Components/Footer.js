import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/NavbarBrand';

function Footer() {
    return (
        <div fixed="bottom" className="w-100">  
            <Navbar>
                <Container>
                    <NavbarBrand className="m-auto">Footer</NavbarBrand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;