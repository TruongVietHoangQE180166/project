// src/Components/AdminDashboard.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function AdminDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/"); // Điều hướng về trang chủ sau khi logout
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Admin Dashboard</h1>
//       <p>Welcome, Admin! Manage your content here.</p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default AdminDashboard;
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AdminDashboard() {
  
  return (
    <Container>
      <h1 className="my-4">Admin Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total of Product</Card.Title>
              <Card.Text>500</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total of Order</Card.Title>
              <Card.Text>120</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>News</Card.Title>
              <Card.Text>25</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;