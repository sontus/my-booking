import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container,Nav, Navbar} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand >My Booking</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/hotel">Hotel</NavLink>
                    <NavLink to="/car">Car</NavLink>
                    <NavLink to="/flight">Flight</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </Nav>
                <Nav>
                <NavLink to="/contact">More deets</NavLink>
                <NavLink  to="/contact"><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon> Profile</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;