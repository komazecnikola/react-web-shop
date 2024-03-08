import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Products from "./components/views/Products";
import Homepage from "./components/views/Homepage";
import SingleProduct from "./components/views/SingleProduct";
import TermsOfService from "./components/views/TermsOfService";
import PrivacyPolicy from "./components/views/PrivacyPolicy";
import PageNotFound from "./components/views/PageNotFound";
import Cart from "./components/views/Cart";
import ContactUs from "./components/views/ContactUs";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
