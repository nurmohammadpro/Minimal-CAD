"use client";

import { Navigate, useNavigate } from "react-router-dom"; // Fixed missing import
import { useEffect, useState } from "react";
import api from "../../api/axios";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get("/users/check-auth", {
          withCredentials: true,
        });
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
