import React from 'react';
import ProductCarousel from './ProductCarousel'; // Assuming you have the ProductCarousel component in the same folder
import { Container } from 'react-bootstrap';
import '../Style/Products.css'; // Custom CSS for styling the Products page

const Products = () => {
  return (
    <div className="products-page">
      <Container>
        <h1 className="page-title">Our Products</h1>
        
        {/* Featured Products Carousel */}
        <section className="featured-products">
          <ProductCarousel />
        </section>

        {/* Other sections like categories, popular products, or latest products can be added here */}
        <section className="categories-section">
          <h2>Browse by Categories</h2>
          {/* Add categories components or links here */}
        </section>

        <section className="popular-products">
          <h2>Popular Products</h2>
          {/* Add a list or another carousel of popular products */}
        </section>

      </Container>
    </div>
  );
};

export default Products;