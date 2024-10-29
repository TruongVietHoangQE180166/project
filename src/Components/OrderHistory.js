// src/Components/OrderHistoryModal.js
import React, { useEffect, useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap'; // Import Bootstrap Modal
import '../Style/OrderHistory.css';
const OrderHistoryModal = ({ show, handleClose }) => {
  const [orders, setOrders] = useState([]);

  // Giả lập dữ liệu đơn hàng
  useEffect(() => {
    const mockOrders = [
      { id: 1, date: '2024-10-01', total: '$100.00', status: 'Delivered' },
      { id: 2, date: '2024-10-10', total: '$50.00', status: 'Pending' },
      { id: 3, date: '2024-10-15', total: '$75.00', status: 'Cancelled' },
    ];
    setOrders(mockOrders);
  }, []);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Order History</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {orders.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No orders found.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderHistoryModal;
