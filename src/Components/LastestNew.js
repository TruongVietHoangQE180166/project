import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../Style/LastestNew.css'

const articles = [
  {
    id: 1,
    title: 'This is some title',
    image: 'https://picsum.photos/id/1011/800/450',
    content: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.',
  },
  {
    id: 2,
    title: 'This is some title',
    image: 'https://picsum.photos/id/1005/800/450',
    content: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.',
  },
  {
    id: 3,
    title: 'This is some title',
    image: 'https://picsum.photos/id/103/800/450',
    content: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.',
  },
  {
    id: 4,
    title: 'This is some title',
    image: 'https://picsum.photos/id/1024/800/450',
    content: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.',
  },
];

function ArticlesSection() {
  return (
    <div className="articles">
    <h2 className="featured-title">Lastest New</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {articles.map((article) => (
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
    </div>
  );
}

export default ArticlesSection;
