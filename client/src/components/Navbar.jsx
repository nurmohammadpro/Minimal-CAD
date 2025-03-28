"use client";

import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Logo from "../assets/logo.png";
import UserAvatar from "../assets/user-avatar.png";
import { Link } from "react-router-dom";
import SearchPopUp from "./SearchPopUp";
import UserProfileMenu from "./user/UserProfileMenu";
import api from "../api/axios";

const Navbar = () => {
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // First check if user is authenticated
        const authResponse = await api.get("/users/check-auth", {
          withCredentials: true,
        });

        setIsLoggedIn(authResponse.data.isAuthenticated);

        if (authResponse.data.isAuthenticated) {
          // If authenticated, fetch user profile data
          // Note: You'll need to create this endpoint on your backend
          try {
            const userResponse = await api.get("/users/profile", {
              withCredentials: true,
            });

            setUserData(userResponse.data);
          } catch (profileError) {
            console.error("Error fetching user profile:", profileError);
            // Fallback to basic authenticated state without profile data
            setUserData({
              firstName: "User",
              email: "user@example.com",
              avatar: UserAvatar,
            });
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleSearchClick = () => {
    setIsSearchPopupOpen(true);
  };

  const handleProfileClick = () => {
    setIsProfileMenuOpen(true);
  };

  return (
    <>
      <nav className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={Logo || "/placeholder.svg"}
              alt="Logo"
              width={32}
              className="mr-2"
            />
            <span className="font-semibold text-lg hidden md:block">
              MinimalCAD
            </span>
          </Link>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleSearchClick}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
            >
              <SearchIcon />
            </button>

            {isLoggedIn && (
              <>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <NotificationsIcon />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <SettingsIcon />
                </button>
                <button
                  onClick={handleProfileClick}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-300 hover:border-green-400 transition-colors"
                >
                  <img
                    src={userData?.avatar || UserAvatar}
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </button>
              </>
            )}

            {!isLoggedIn && (
              <div className="flex items-center space-x-2">
                <Link
                  to="/signin"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {isSearchPopupOpen && (
        <SearchPopUp onClose={() => setIsSearchPopupOpen(false)} />
      )}

      {isProfileMenuOpen && (
        <UserProfileMenu
          onClose={() => setIsProfileMenuOpen(false)}
          userData={userData}
        />
      )}
    </>
  );
};

export default Navbar;
