import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

function AdminNavbar() {
    const navigate = useNavigate();

    const handleLogout = () => {

      navigate('/');
    };
    return (
    <div style={{ 
        width: '200px', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        background: 'rgb(34, 30, 30)', // Màu nền đen
        color: 'white', // Màu chữ trắng
        padding: '1rem' 
      }}>
        <h5 style={{ color: 'white' }}>Admin</h5> {/* Đổi màu chữ tiêu đề */}
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/admin" style={{ color: 'white' }}>Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/admin/products" style={{ color: 'white' }}>Product Manage</Nav.Link>
          <Nav.Link as={Link} to="/admin/orders" style={{ color: 'white' }}>Order Manage</Nav.Link>
          <Nav.Link as={Link} to="/admin/news" style={{ color: 'white' }}>New Manage</Nav.Link>
          <Button variant="outline-light" onClick={handleLogout} className="mt-3">
          Log Out
        </Button>
      
        </Nav>
      </div>
    
  );
}

export default AdminNavbar;
