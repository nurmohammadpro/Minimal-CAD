"use client";

import { useState, useEffect } from "react";
import Button from "../ui/Button";
import api from "../../api/axios";

const WelcomeSection = () => {
  const [userName, setUserName] = useState("User");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const authCheck = await api.get("/users/check-auth");

        if (authCheck.data.isAuthenticated) {
          // In a real application, you would have an endpoint to get user profile
          // For now, we'll use the data from localStorage if available
          const userData = localStorage.getItem("userData");
          if (userData) {
            const parsedData = JSON.parse(userData);
            setUserName(
              `${parsedData.firstName || ""} ${parsedData.lastName || ""}`
            );
          } else {
            // Fallback to the placeholder name if no data in localStorage
            setUserName("Jaydon Frankie");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserName("User"); // Fallback to generic name on error
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="bg-gray-900 text-white rounded-xl p-6 flex justify-between items-center">
      <div className="max-w-md">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mr-2">Welcome back</h2>
          <span className="text-2xl">👋</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">
          {loading ? "Loading..." : userName}
        </h3>
        <p className="text-gray-300 text-sm mb-4">
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything.
        </p>
        <Button title="Go now" variant="dark" buttonWidth="regular" />
      </div>
      <div className="hidden md:block">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snapshot_2025-03-28_00-25-50-Cdw6Cpd1AmU7ej8LQaeYlytwrON8iq.png"
          alt="Dashboard illustration"
          className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
