import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Style/ProductDetail.css'; // Import CSS

// Sample product data (or fetch from an API)
const products = [
  {
    id: 1,
    name: 'Women Leather Bag',
    category: 'Women, Bag',
    image: 'https://example.com/images/women-leather-bag.jpg',
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

function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
  
    const [quantity, setQuantity] = useState(1); // State for quantity
    const [cartCount, setCartCount] = useState(0); // State for cart count
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    const handleAddToCart = () => {
      setCartCount(cartCount + quantity); // Increment cart count by the selected quantity
      alert(`${quantity} ${product.name}(s) has been added to your cart!`);
    };
  
    const handleBuyNow = () => {
      alert(`Redirecting to payment for ${quantity} ${product.name}(s)`);
      // Add logic to redirect to payment or checkout page
    };
  
    const handleIncreaseQuantity = () => {
      setQuantity((prev) => prev + 1); // Increase quantity
    };
  
    const handleDecreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1); // Decrease quantity but not below 1
      }
    };
  
    const handleRemoveFromCart = () => {
      setCartCount(0); // Reset cart count (or implement more complex logic)
      alert(`${product.name} has been removed from your cart!`);
    };
  
    return (
      <div className="product-detail">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <div className="product-price">
          {product.onSale ? (
            <>
              <span className="old-price">{product.oldPrice}</span>
              {product.newPrice}
            </>
          ) : (
            <>{product.newPrice}</>
          )}
        </div>
        <div className="quantity-container">
          <button onClick={handleDecreaseQuantity} disabled={quantity === 1}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
        <div className="button-container">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleBuyNow}>Buy Now</button>
          <button onClick={handleRemoveFromCart}>Remove from Cart</button>
        </div>
        <p>Items in Cart: {cartCount}</p> {/* Display cart count */}
      </div>
    );
  }

export default ProductDetail;