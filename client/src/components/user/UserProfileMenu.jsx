"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FolderIcon from "@mui/icons-material/Folder";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsIcon from "@mui/icons-material/Settings";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AddIcon from "@mui/icons-material/Add";
import api from "../../api/axios";

const UserProfileMenu = ({ onClose, userData }) => {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await api.post("/users/signout", {}, { withCredentials: true });
      navigate("/signin");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const menuItems = [
    { icon: <HomeIcon />, label: "Home", path: "/dashboard" },
    { icon: <PersonIcon />, label: "Profile", path: "/dashboard/profile" },
    {
      icon: <FolderIcon />,
      label: "Projects",
      path: "/dashboard/projects",
      badge: "3",
    },
    {
      icon: <SubscriptionsIcon />,
      label: "Subscription",
      path: "/dashboard/subscription",
    },
    { icon: <SecurityIcon />, label: "Security", path: "/dashboard/security" },
    {
      icon: <SettingsIcon />,
      label: "Account settings",
      path: "/dashboard/settings",
    },
  ];

  // Use userData if provided, otherwise use default values
  const user = userData || {
    firstName: "User",
    lastName: "",
    email: "user@example.com",
    avatar: "/placeholder.svg?height=80&width=80",
  };

  // Construct full name from firstName and lastName
  const fullName =
    user.firstName && user.lastName
      ? `${user.firstName} ${user.lastName}`
      : user.firstName || "User";

  return (
    <div className="fixed inset-0 bg-black/20 z-50 flex justify-end">
      <div className="w-80 h-full flex flex-col bg-white overflow-y-auto animate-slide-left">
        <div className="p-4 flex justify-between items-center">
          <div></div> {/* Empty div for spacing */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex flex-col items-center px-6 py-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-400">
              <img
                src={user.avatar || "/placeholder.svg?height=80&width=80"}
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-green-400 border-r-green-400"></div>
          </div>
          <h3 className="mt-3 text-lg font-semibold">{fullName}</h3>
          <p className="text-gray-500 text-sm">{user.email}</p>

          <div className="flex mt-4 space-x-2">
            {/* {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"
              >
                <img
                  src={`/placeholder.svg?height=40&width=40&text=${index + 1}`}
                  alt={`Avatar ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))} */}
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
              <AddIcon fontSize="small" />
            </button>
          </div>
        </div>

        <div className="px-4 py-2">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                  onClick={onClose}
                >
                  <span className="text-gray-500 mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="px-4 py-4">
          <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl p-4 text-white">
            <div className="flex items-center mb-2">
              <h4 className="text-xl font-bold">35% OFF</h4>
            </div>
            <p className="text-sm mb-3">Power up Productivity!</p>
            <button className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              Upgrade to Pro
              <RocketLaunchIcon fontSize="small" className="ml-1" />
            </button>
          </div>
        </div> */}

        <div className="px-4 py-4 mt-auto">
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
          >
            {isLoggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileMenu;
