"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ReceiptIcon from "@mui/icons-material/Receipt";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import WorkIcon from "@mui/icons-material/Work";
import ExploreIcon from "@mui/icons-material/Explore";
import FolderIcon from "@mui/icons-material/Folder";
import MailIcon from "@mui/icons-material/Mail";
import ChatIcon from "@mui/icons-material/Chat";
import EventIcon from "@mui/icons-material/Event";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("App");

  const navItems = [
    { section: "OVERVIEW", items: [] },
    {
      items: [
        { name: "App", icon: <HomeIcon fontSize="small" /> },
        { name: "Ecommerce", icon: <ShoppingCartIcon fontSize="small" /> },
        { name: "Analytics", icon: <BarChartIcon fontSize="small" /> },
        { name: "Banking", icon: <AccountBalanceIcon fontSize="small" /> },
        { name: "Booking", icon: <CalendarTodayIcon fontSize="small" /> },
        { name: "File", icon: <InsertDriveFileIcon fontSize="small" /> },
        { name: "Course", icon: <SchoolIcon fontSize="small" /> },
      ],
    },
    { section: "MANAGEMENT", items: [] },
    {
      items: [
        { name: "User", icon: <PersonIcon fontSize="small" /> },
        { name: "Product", icon: <InventoryIcon fontSize="small" /> },
        { name: "Order", icon: <ShoppingBagIcon fontSize="small" /> },
        { name: "Invoice", icon: <ReceiptIcon fontSize="small" /> },
        { name: "Blog", icon: <RssFeedIcon fontSize="small" /> },
        { name: "Job", icon: <WorkIcon fontSize="small" /> },
        { name: "Tour", icon: <ExploreIcon fontSize="small" /> },
        { name: "File manager", icon: <FolderIcon fontSize="small" /> },
        { name: "Mail", icon: <MailIcon fontSize="small" /> },
        { name: "Chat", icon: <ChatIcon fontSize="small" /> },
        { name: "Calendar", icon: <EventIcon fontSize="small" /> },
        { name: "Kanban", icon: <ViewKanbanIcon fontSize="small" /> },
      ],
    },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        {navItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-4">
            {section.section && (
              <h3 className="text-xs font-semibold text-gray-500 mb-2 px-3">
                {section.section}
              </h3>
            )}
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    to={`/dashboard/${item.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                      activeItem === item.name
                        ? "bg-green-50 text-green-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
