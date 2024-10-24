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
import AdminDashboard from './Components/AdminDashboard';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Các route với Header và Footer */}
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

        {/* Route cho Admin Dashboard, không có Header và Footer */}
        <Route path="/admin" element={<AdminDashboard />}>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
