"use client";

import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../dashboard/Sidebar";
import WelcomeSection from "../dashboard/WelcomeSection";
import StatsCards from "../dashboard/StatsCards";
import ChartsSection from "../dashboard/ChartsSection";
import InvoiceTable from "../dashboard/InvoiceTable";
import RelatedApps from "../dashboard/RelatedApps";
import FeaturedApp from "../dashboard/FeaturedApp";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // You would replace this with your actual API endpoint
        const response = await axios.get(
          "http://localhost:5000/api/users/check-auth",
          {
            withCredentials: true,
          }
        );

        if (response.data.isAuthenticated) {
          // For now, we'll use placeholder data
          setUser({
            name: "Jaydon Frankie",
            email: "demo@minimals.cc",
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <WelcomeSection />
              </div>
              <div>
                <FeaturedApp />
              </div>
            </div>

            <StatsCards />
            <ChartsSection />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <InvoiceTable />
              </div>
              <div>
                <RelatedApps />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
