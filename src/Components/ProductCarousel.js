// ProductCarousel.js
import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Style/ProductCarousel.css'; // Custom CSS

// Sample product data with detailed information
const products = [
  {
    id: 1,
    name: 'Women Leather Bag',
    category: 'Women, Bag',
    image: 'https://example.com/images/women-leather-bag.jpg', // Example image URL
    description: 'A stylish leather bag perfect for any occasion.',
    onSale: true,
    oldPrice: '$96.00',
    newPrice: '$230.99',
  },
  {
    id: 2,
    name: 'Apple iPad',
    category: 'Electronics, Tablet',
    image: 'https://example.com/images/apple-ipad.jpg',
    description: 'Latest model iPad with high-resolution display.',
    onSale: true,
    oldPrice: '$400.00',
    newPrice: '$369.00',
  },
  {
    id: 3,
    name: 'Sony Headphone',
    category: 'Electronics, Headphone',
    image: 'https://example.com/images/sony-headphone.jpg',
    description: 'High-quality wireless headphones with noise cancellation.',
    onSale: false,
    newPrice: '$23.99',
  },
  {
    id: 4,
    name: 'Macbook Air',
    category: 'Electronics, Laptop',
    image: 'https://example.com/images/macbook-air.jpg',
    description: 'Lightweight and powerful laptop for everyday use.',
    onSale: true,
    oldPrice: '$899.00',
    newPrice: '$649.00',
  },
  {
    id: 5,
    name: 'Nikon DSLR',
    category: 'Camera, DSLR',
    image: 'https://example.com/images/nikon-dslr.jpg',
    description: 'Professional DSLR camera with high-quality lens.',
    onSale: false,
    newPrice: '$250.00',
  },
  {
    id: 6,
    name: 'Samsung Galaxy S10',
    category: 'Electronics, Phone',
    image: 'https://example.com/images/samsung-galaxy-s10.jpg',
    description: 'Latest smartphone with cutting-edge features.',
    onSale: true,
    oldPrice: '$700.00',
    newPrice: '$549.00',
  },
];

// Component to display each product card
function ProductCard({ product }) {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClick = () => {
    navigate(`/products/${product.id}`); // Navigate to product detail page
  };

  return (
    <Col className="product-col" onClick={handleClick}>
      <Card className="product-card">
        {product.onSale && <div className="badge1">Sale</div>}
        <div className="product-tumb">
          <Card.Img variant="top" src={product.image} className="product-img" />
        </div>
        <Card.Body className="product-details">
          <span className="product-category">{product.category}</span>
          <h4><a href="/">{product.name}</a></h4>
          <p>{product.description}</p> {/* Show product description */}
          <div className="product-bottom-details">
            <div className="product-price">
              {product.onSale ? (
                <>
                  <small>{product.oldPrice}</small> {product.newPrice}
                </>
              ) : (
                <>{product.newPrice}</>
              )}
            </div>
            <div className="product-links">
              <a href="#"><i className="fa fa-heart"></i></a>
              <a href="#"><i className="fa fa-shopping-cart"></i></a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

// Carousel component
function ProductCarousel({ onProductClick }) {
  const itemsPerSlide = 4;
  const totalProducts = products.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProducts) % totalProducts);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProducts);
  };

  // Create a new array with cloned products for seamless transition
  const visibleProducts = [
    products[(currentIndex - 1 + totalProducts) % totalProducts],
    products[currentIndex],
    products[(currentIndex + 1) % totalProducts],
    products[(currentIndex + 2) % totalProducts],
  ];
  
  const ProductCard = ({ product }) => {
    const navigate = useNavigate(); // Hook for navigation
  
    const handleClick = () => {
      navigate(`/products/${product.id}`); // Navigate to product detail page using the product ID
    };
  
    return (
      <Col className="product-col" onClick={handleClick}>
        <Card className="product-card">
          {product.onSale && <div className="badge1">Sale</div>}
          <div className="product-tumb">
            <Card.Img variant="top" src={product.image} className="product-img" />
          </div>
          <Card.Body className="product-details">
            <span className="product-category">{product.category}</span>
            <h4><a href="/">{product.name}</a></h4>
            <p>{product.description}</p> {/* Show product description */}
            <div className="product-bottom-details">
              <div className="product-price">
                {product.onSale ? (
                  <>
                    <small>{product.oldPrice}</small> {product.newPrice}
                  </>
                ) : (
                  <>{product.newPrice}</>
                )}
              </div>
              <div className="product-links">
                <a href="#"><i className="fa fa-heart"></i></a>
                <a href="#"><i className="fa fa-shopping-cart"></i></a>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <div>
      <h2 className="featured-title">Featured Products</h2>
      <div className="carousel-container">
        <Button variant="dark" className="carousel-btn prev" onClick={handlePrev}>
          <i className="fa fa-chevron-left"></i>
        </Button>
        <div className="carousel-row" style={{ transform: `translateX(-${(currentIndex) * 25}%)` }}>
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} /> 
          ))}
        </div>
        <Button variant="dark" className="carousel-btn next" onClick={handleNext}>
          <i className="fa fa-chevron-right"></i>
        </Button>
      </div>
    </div>
  );
}

export default ProductCarousel;
