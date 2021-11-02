import userEvent from '@testing-library/user-event';
import React from 'react';
import { Container, Nav as Link, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../hook/UseAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
const Header = () => {
    const { user, logOut } = UseAuth()
    return (
        <div className="p-2 bg-dark">
            <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home" className="fw-bold fs-2">GhuraGhuri.com</Navbar.Brand>
                    <Nav className="mx-auto text-light">
                        <Nav.Link as={HashLink} to="/home#home" className="fw-bold text-light ">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#package" className="fw-bold text-light">package</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#heritage" className="fw-bold text-light ">Heritage</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#Why" className="fw-bold text-light ">Why Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/login" className="fw-bold text-light ">Log In</Nav.Link>
                        <Nav.Link as={HashLink} to="/booking" className="fw-bold text-light ">My Booking</Nav.Link>
                        <Nav.Link as={HashLink} to="/add" className="fw-bold text-light ">Add a package</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {user?.email ?
                            <button className="bg-light text-dark" onClick={logOut}>Log Out</button> :
                            <Nav.Link as={HashLink} to="/login" className="fw-bold text-light fs-5">Log in</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a as={HashLink} to="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;