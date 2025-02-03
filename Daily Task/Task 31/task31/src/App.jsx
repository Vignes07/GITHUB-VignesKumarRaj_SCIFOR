import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav>
        <Link className="nav-item" to="/">
          Products
        </Link>
        <Link className="nav-item" to="/cart">
          Cart
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
