import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import DashboardPage from "../features/auth/pages/LoginPage";

const AppRoutes: React.FC = () => {
    const token = localStorage.getItem("token");

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={ token ? <DashboardPage /> : <Navigate to="/login" />} />
                <Route path="*" element={<h3>404: Page Not Found</h3>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
