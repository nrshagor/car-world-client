import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import './Navigation.css'
const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg" >
                <Container>
                    <Navbar.Brand as={Link} to="/" ><h4 className="brandName">  Car World</h4></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user?.email ?

                                    <>
                                        <Nav.Link as={Link} to="/dashbord">Dashbord</Nav.Link>
                                        <Button className="nav-btn" onClick={logOut}>Log Out</Button>
                                    </>

                                    :
                                    <>
                                        <Nav.Link as={Link} to="/login">login</Nav.Link>
                                        <Nav.Link as={Link} to="/registerd">registerd</Nav.Link>
                                    </>
                            }
                            <h5 className="userName"> {user.displayName}</h5>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Navigation;