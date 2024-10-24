import React, { useState } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';

// Danh sách sản phẩm khởi tạo
const initialProducts = [
  {
    id: 1,
    name: 'Women Leather Bag',
    category: 'Women, Bag',
    image: '',
    onSale: true,
    oldPrice: '$96.00',
    newPrice: '$230.99',
  },
  {
    id: 2,
    name: 'Apple iPad',
    category: 'Electronics, Tablet',
    image: '',
    onSale: true,
    oldPrice: '$400.00',
    newPrice: '$369.00',
  },
  {
    id: 3,
    name: 'Sony Headphone',
    category: 'Electronics, Headphone',
    image: '',
    onSale: false,
    newPrice: '$23.99',
  },
  {
    id: 4,
    name: 'Macbook Air',
    category: 'Electronics, Laptop',
    image: '',
    onSale: true,
    oldPrice: '$899.00',
    newPrice: '$649.00',
  },
  {
    id: 5,
    name: 'Nikon DSLR',
    category: 'Camera, DSLR',
    image: '',
    onSale: false,
    newPrice: '$250.00',
  },
  {
    id: 6,
    name: 'Samsung Galaxy S10',
    category: 'Electronics, Phone',
    image: '',
    onSale: true,
    oldPrice: '$700.00',
    newPrice: '$549.00',
  },
];

function ProductManage() {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productOnSale, setProductOnSale] = useState(false);
  const [productOldPrice, setProductOldPrice] = useState('');
  const [productNewPrice, setProductNewPrice] = useState('');

  const handleClose = () => {
    setShowModal(false);
    setCurrentProduct(null);
    setProductName('');
    setProductCategory('');
    setProductImage('');
    setProductOnSale(false);
    setProductOldPrice('');
    setProductNewPrice('');
  };

  const handleShow = (product) => {
    setCurrentProduct(product);
    setProductName(product ? product.name : '');
    setProductCategory(product ? product.category : '');
    setProductImage(product ? product.image : '');
    setProductOnSale(product ? product.onSale : false);
    setProductOldPrice(product ? product.oldPrice : '');
    setProductNewPrice(product ? product.newPrice : '');
    setShowModal(true);
  };

  const handleSave = () => {
    if (currentProduct) {
      // Cập nhật sản phẩm
      setProducts(products.map((prod) =>
        prod.id === currentProduct.id ? { ...prod, name: productName, category: productCategory, image: productImage, onSale: productOnSale, oldPrice: productOldPrice, newPrice: productNewPrice } : prod
      ));
    } else {
      // Thêm sản phẩm mới
      const newProduct = {
        id: products.length + 1, // Tạo ID mới
        name: productName,
        category: productCategory,
        image: productImage,
        onSale: productOnSale,
        oldPrice: productOldPrice,
        newPrice: productNewPrice,
      };
      setProducts([...products, newProduct]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  return (
    <div>
      <h1 className="my-4">Product Manage</h1>
      <Button variant="primary" onClick={() => handleShow(null)}>
        Add new product
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Old Price</th>
            <th>New Price</th>
            <th>OnSale</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.onSale ? product.oldPrice : 'N/A'}</td>
              <td>{product.newPrice}</td>
              <td>{product.onSale ? 'True' : 'False'}</td>
              <td>
                <Button variant="warning" onClick={() => handleShow(product)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal cho thêm/sửa sản phẩm */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currentProduct ? 'Edit Product' : 'Add Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Product Name" 
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formProductCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Category" 
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formProductImage">
              <Form.Label>Image</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="URL Image" 
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formProductOnSale">
              <Form.Check 
                type="checkbox" 
                label="OnSale"
                checked={productOnSale}
                onChange={(e) => setProductOnSale(e.target.checked)}
              />
            </Form.Group>
            <Form.Group controlId="formProductOldPrice">
              <Form.Label>Old Price</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Old Price" 
                value={productOldPrice}
                onChange={(e) => setProductOldPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formProductNewPrice">
              <Form.Label>New Price</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter New Price" 
                value={productNewPrice}
                onChange={(e) => setProductNewPrice(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {currentProduct ? 'Save Change' : 'Add Product'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductManage;
