import React, { useState } from 'react';
import { Card, Col, Row, Container, Pagination } from 'react-bootstrap';
import '../Style/LastestNew.css';

// Array of 14 articles
const articles = [
  { id: 1, title: 'Title 1', image: 'https://picsum.photos/id/1011/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
  { id: 2, title: 'Title 2', image: 'https://picsum.photos/id/1005/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
  { id: 3, title: 'Title 3', image: 'https://picsum.photos/id/103/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
  { id: 4, title: 'Title 4', image: 'https://picsum.photos/id/1024/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
  { id: 5, title: 'Title 5', image: 'https://picsum.photos/id/1027/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
  { id: 6, title: 'Title 6', image: 'https://picsum.photos/id/1021/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
  { id: 7, title: 'Title 7', image: 'https://picsum.photos/id/1029/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
  { id: 8, title: 'Title 8', image: 'https://picsum.photos/id/1031/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
  { id: 9, title: 'Title 9', image: 'https://picsum.photos/id/1015/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
  { id: 10, title: 'Title 10', image: 'https://picsum.photos/id/1022/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
  { id: 11, title: 'Title 11', image: 'https://picsum.photos/id/1008/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
  { id: 12, title: 'Title 12', image: 'https://picsum.photos/id/1032/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
  { id: 13, title: 'Title 13', image: 'https://picsum.photos/id/1033/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
  { id: 14, title: 'Title 14', image: 'https://picsum.photos/id/1016/800/450', content: 'Curabitur convallis ac quam vitae laoreet.' },
];
const PAGE_SIZE = 7;

function News() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentArticles = articles.slice(startIndex, startIndex + PAGE_SIZE);

  const totalPages = Math.ceil(articles.length / PAGE_SIZE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container className="articles">
      <h2 className="featured-title">News</h2>

      {/* Top horizontal article (larger size) */}
      <Row className="mb-4">
  <Col>
    <Card className="horizontal-card larger-horizontal-card">
      <Row noGutters>
      <Col md={9} className="d-flex align-items-stretch">
  <Card.Img src={currentArticles[0]?.image} className="img-fluid larger-card-img" />
</Col>

        <Col md={3}> {/* Cột chứa nội dung sẽ chiếm 1/3 */}
          <Card.Body>
            <Card.Title>{currentArticles[0]?.title}</Card.Title>
            <Card.Text>{currentArticles[0]?.content}</Card.Text>
            <Card.Link href="#" className="read-more">
              Read more <span className="sr-only">about {currentArticles[0]?.title}</span>
            </Card.Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  </Col>
</Row>


      {/* Remaining articles in rows of 3 */}
      <Row xs={1} md={3} className="g-4">
        {currentArticles.slice(1).map((article) => (
          <Col key={article.id}>
            <Card>
              <Card.Img variant="top" src={article.image} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.content}</Card.Text>
                <Card.Link href="#" className="read-more">
                  Read more <span className="sr-only">about {article.title}</span>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination Controls */}
      <Pagination className="pagination-custom">
        <Pagination.Prev 
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        >
          Previous
        </Pagination.Prev>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
            className="pagination-item-custom"
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next 
          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
        >
          Next
        </Pagination.Next>
      </Pagination>
    </Container>
  );
}

export default News;