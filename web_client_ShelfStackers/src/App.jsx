import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginScreen from "./component/LoginScreen";
import RegisterScreen from "./component/RegisterScreen";
import HomeScreen from "./component/HomeScreen";
import { ProductDetail } from "./component/ProductDetail";
import Cart from "./component/CartScreen";
import UserProfile from "./component/UserProfile";
import CategoryPage from "./component/CategoryPage";
import CheckoutScreen from "./component/CheckoutScreen";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
      </Routes>
    </Router>
  );
}
