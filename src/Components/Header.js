// src/Components/Header.js
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown, Badge, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import '../Style/Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import { FaUser } from 'react-icons/fa';
import OrderHistoryModal from './OrderHistory';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [user, setUser] = useState(null);
  const [showOrderHistoryModal, setShowOrderHistoryModal] = useState(false);  // Modal cho Order History
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const base64Payload = token.split('.')[1];
        const userData = JSON.parse(atob(base64Payload));
        setUser(userData);
      } catch (error) {
        console.error("Invalid token", error);
        localStorage.removeItem("token");
      }
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const switchForm = () => {
    setIsLoginForm(!isLoginForm);
  };
  const openOrderHistoryModal = () => {
    setShowOrderHistoryModal(true);  // Mở modal Order History
  };

  const closeOrderHistoryModal = () => {
    setShowOrderHistoryModal(false); // Đóng modal Order History
  };

  return (
    <header className="sticky-header">
      <Navbar expand="lg" className="py-3">
        <Container>
          <Link to="/" className="navbar-brand me-5">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              height="60"
              alt="Logo"
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex justify-content-between w-100">
              <Nav className="navbar-nav">
                <Link to="/" className="nav-link nav-item-custom">Home</Link>
                <Link to="/products" className="nav-link nav-item-custom">Products</Link>
                <Link to="/news" className="nav-link nav-item-custom">News</Link>
                <Link to="/contact" className="nav-link nav-item-custom">Contact</Link>
                <Link to="/about" className="nav-link nav-item-custom">About</Link>
              </Nav>

              <div className="d-flex align-items-center">
                <Form className="d-flex" style={{ maxWidth: '300px' }}>
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="rounded"
                    aria-label="Search"
                  />
                  <Button variant="outline-secondary" className="ms-2">
                    <i className="fas fa-search"></i>
                  </Button>
                </Form>

                {user ? (
                  <>
                    <a href="#" className="text-reset text-dark ms-4">
                      <i className="fas fa-shopping-cart"></i>
                      <Badge bg="danger" className="ms-1">2</Badge>
                    </a>

                    <NavDropdown
                      title={<FaUser size={20} />}
                      align="end"
                      menuVariant="light"
                      className="ms-4"
                    >
                      <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
                      <NavDropdown.Item onClick={openOrderHistoryModal}>Order History</NavDropdown.Item>
                      {user.role === "admin" && (
                        <NavDropdown.Item href="/admin">Admin Dashboard</NavDropdown.Item>
                      )}
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <div className="d-flex align-items-center ms-4">
                    <Button
                      variant="outline-dark"
                      onClick={() => {
                        setIsLoginForm(true);
                        toggleModal();
                      }}
                      className="me-2"
                    >
                      Login
                    </Button>
                    <Button
                      variant="outline-dark"
                      onClick={() => {
                        setIsLoginForm(false);
                        toggleModal();
                      }}
                    >
                      Register
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <OrderHistoryModal show={showOrderHistoryModal} handleClose={closeOrderHistoryModal} />
      {isLoginForm ? (
        <LoginComponent
          modalOpen={showModal}
          toggleModal={toggleModal}
          switchToRegister={switchForm}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <RegisterComponent
          modalOpen={showModal}
          toggleModal={toggleModal}
          switchToLogin={switchForm}
        />
      )}
    </header>
  );
}

export default Header;
