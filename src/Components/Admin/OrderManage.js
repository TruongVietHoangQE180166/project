import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';

function OrderManage() {
  // const [orders, setOrders] = useState([
  //   { id: 1, customer: 'Nguyễn Văn A', total: 1200, status: 'Đã giao' },
  //   { id: 2, customer: 'Trần Thị B', total: 1000, status: 'Chưa giao' },
  //   { id: 3, customer: 'Lê Văn C', total: 2500, status: 'Đã giao' },
  // ]);

  return (
    <div>OrderManage</div>
    // <Container>
    //   <h1 className="my-4">Order Manage</h1>
    //   <Table striped bordered hover>
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>Customer</th>
    //         <th>Price</th>
    //         <th>Status</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {orders.map((order) => (
    //         <tr key={order.id}>
    //           <td>{order.id}</td>
    //           <td>{order.customer}</td>
    //           <td>{order.total}</td>
    //           <td>{order.status}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </Table>
    // </Container>
  );
}

export default OrderManage;
