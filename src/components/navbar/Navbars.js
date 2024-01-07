import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css'

const Navbars = () => {
    return (
        <>
            <Navbar className='navbar' bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">StayHub</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#ricerca">Ricerca</Nav.Link>
                        <Nav.Link href="#prenota">Prenota</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars