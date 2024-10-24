import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

function NewsManage() {
  // const [news, setNews] = useState([
  //   { id: 1, title: 'Tin tức 1', date: '2024-01-01' },
  //   { id: 2, title: 'Tin tức 2', date: '2024-02-01' },
  //   { id: 3, title: 'Tin tức 3', date: '2024-03-01' },
  // ]);

  return (
    <div>NewsManage</div>
    // <Container>
    //   <h1 className="my-4">Quản lý tin tức</h1>
    //   <Button variant="primary" className="mb-3">
    //     Thêm tin tức mới
    //   </Button>
    //   <Table striped bordered hover>
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>Tiêu đề</th>
    //         <th>Ngày</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {news.map((item) => (
    //         <tr key={item.id}>
    //           <td>{item.id}</td>
    //           <td>{item.title}</td>
    //           <td>{item.date}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </Table>
    // </Container>
  );
}

export default NewsManage;
