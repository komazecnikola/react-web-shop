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

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
