"use client";

import { useState } from "react";

const RelatedApps = () => {
  const [activeTab, setActiveTab] = useState("Top 7 days");

  const apps = [
    {
      name: "Microsoft office 365",
      icon: "/placeholder.svg?height=40&width=40",
      free: true,
      stats: { users: "99.5k", downloads: "3.5M", rating: "4.9/5" },
    },
    {
      name: "Opera",
      icon: "/placeholder.svg?height=40&width=40",
      free: true,
      stats: { users: "115k", downloads: "13.5M", rating: "4.9/5" },
    },
    {
      name: "Adobe acrobat reader DC",
      icon: "/placeholder.svg?height=40&width=40",
      price: "$68.71",
      stats: { users: "61.5k", downloads: "9.1M", rating: "4.1/5" },
    },
    {
      name: "Spotify",
      icon: "/placeholder.svg?height=40&width=40",
      free: true,
      stats: { users: "6.8M", downloads: "8.42M", rating: "4.9/5" },
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-base font-semibold">Related applications</h3>
      </div>
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          {["Top 7 days", "Top 30 days", "All times"].map((tab) => (
            <button
              key={tab}
              className={`py-3 px-4 text-sm font-medium ${
                activeTab === tab
                  ? "border-b-2 border-green-500 text-green-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="divide-y divide-gray-200">
        {apps.map((app, index) => (
          <div key={index} className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={app.icon || "/placeholder.svg"}
                alt={app.name}
                className="w-10 h-10 rounded-md mr-3"
              />
              <div>
                <div className="flex items-center">
                  <h4 className="text-sm font-medium text-gray-900">
                    {app.name}
                  </h4>
                  <span
                    className={`ml-2 px-2 py-0.5 text-xs rounded-md ${
                      app.free ? "bg-gray-100" : "bg-green-100 text-green-800"
                    }`}
                  >
                    {app.free ? "Free" : app.price}
                  </span>
                </div>
                <div className="flex items-center mt-1 space-x-3 text-xs text-gray-500">
                  <span>{app.stats.users}</span>
                  <span>{app.stats.downloads}</span>
                  <span className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    {app.stats.rating}
                  </span>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedApps;
