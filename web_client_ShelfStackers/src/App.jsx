import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./component/LoginScreen";
import RegisterScreen from "./component/RegisterScreen";
import HomeScreen from "./component/homeScreen";
import ProductDetail from "./component/ProductDetail"; 

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/product/:id" element={<ProductDetail />} /> 
            </Routes>
        </Router>
    );
}
