// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Components/Header';
import MyCarousel from './Components/MyCarousel';
import WebFooter from './Components/WebFooter';
import BrandList from './Components/Brand';
import ProductCarousel from './Components/ProductCarousel';
import ProductOfTheYear from './Components/Banner';
import ArticlesSection from './Components/LastestNew';
import Products from './Components/Products';
import News from './Components/News';
import Contact from './Components/Contact';
import About from './Components/About';
import ProductDetail from './Components/ProductDetail'; // Import ProductDetail
import PrivateRoute from './Components/PrivateRoute';
import AdminPage from './Components/Admin/AdminPage';
import AdminDashboard from './Components/Admin/AdminDashboard'; // Import các trang quản lý
import ProductManage from './Components/Admin/ProductManage';
import OrderManage from './Components/Admin/OrderManage';
import NewsManage from './Components/Admin/NewsManage';
<<<<<<< HEAD


=======
import OrderHistory from './Components/OrderHistory';
>>>>>>> 4f808ed9e1a549e9cab73426a4144b4b44ce0d30
function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <MyCarousel />
              <BrandList />
              <ProductCarousel />
              <ProductOfTheYear />
              <ArticlesSection />
              <WebFooter />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Header />
              <Products />
              <WebFooter />
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <Header />
              <News />
              <WebFooter />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <WebFooter />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <WebFooter />
            </>
          }
        />
        <Route
          path="/products/:id" // New route for product details
          element={
            <>
              <Header />
              <ProductDetail />
              <WebFooter />
            </>
          }

        />
        <Route
          path="/order-history"
          element={
            <>
              <Header />
              <OrderHistory />
              <WebFooter />
            </>
          }
        />
        {/* Route for Admin Dashboard, without Header and Footer */}
        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<AdminDashboard />} /> {/* Mặc định là Dashboard */}
          <Route path="products" element={<ProductManage />} />
          <Route path="orders" element={<OrderManage />} />
          <Route path="news" element={<NewsManage />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
