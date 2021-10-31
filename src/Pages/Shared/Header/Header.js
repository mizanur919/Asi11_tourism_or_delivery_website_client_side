import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <>
            <Navbar className="header-nav text-white" variant="light" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home" className="brand"><span className="text-white text-uppercase fw-bold">The Traveler</span></Navbar.Brand>

                    <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="mr-auto my-2 my-lg-0 my-nav"
                            style={{ color: "white" }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} to="/home"><span className="text-white">Home</span></Nav.Link>
                            {
                                user.email
                                    ?
                                    <>
                                        {/* <Button onClick={logOut} variant="info"><span className="text-white">LogOut</span></Button> */}
                                        {/* <span className="fw-bold"> Hello, {user.displayName} </span> */}

                                        <Nav.Link as={HashLink} to="/cart"><span className="text-white">My Orders</span></Nav.Link>
                                        <Nav.Link as={HashLink} to="/manageOrders"><span className="text-white">Manage Orders</span></Nav.Link>
                                        <Nav.Link as={Link} to="/dashboard"><span className="text-white">Add New Service</span></Nav.Link>

                                        <NavDropdown
                                            title={
                                                <img
                                                    style={{
                                                        width: "35px",
                                                        borderRadius: "50%",
                                                    }}
                                                    src={user.photoURL}
                                                    alt=""
                                                />
                                            }
                                        >
                                            <div className="text-center">
                                                <h6>{user.displayName}</h6>
                                                <p className="m-0 mb-2">{user.email}</p>
                                                <Button onClick={logOut} variant="info"><span className="text-white">LogOut</span></Button>
                                            </div>
                                        </NavDropdown>
                                    </>
                                    :
                                    <div className="d-flex">
                                        <Nav.Link as={Link} to="/login"><span className="text-white">Login</span></Nav.Link>
                                        <Nav.Link as={Link} className="signup-button" to="/signup"><span className="text-white">Sign up</span></Nav.Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;