import { useState, useEffect, useRef } from "react";
import InputField from "./ui/InputField";
import { Link } from "react-router-dom";

const SearchPopUp = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchPopupRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (
        searchPopupRef.current &&
        !searchPopupRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSearch = (query) => {
    setSearchTerm(query);
    const results = [
      { title: "App", path: "/dashboard" },
      { title: "Ecommerce", path: "/dashboard/ecommerce" },
    ];
    const filteredResults = results.filter((result) =>
      result.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div
        ref={searchPopupRef}
        className="w-2/5 h-auto bg-gray-50 rounded-md shadow p-4 relative"
      >
        <InputField
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
          type="text"
          value={searchTerm}
          className="mb-4"
        />
        <span className="absolute top-5 right-5 text-gray-500 px-4 py-1 rounded-md border border-gray-200 bg-gray-100 cursor-pointer">
          Esc
        </span>

        <ul className="text-gray-600">
          {searchResults.map((result) => {
            return (
              <li
                key={result.path}
                className="flex items-center justify-between p-2 rounded-md border border-dashed border-gray-200 hover:border-gray-400 hover:bg-gray-100 transition-all ease-in-out 300 mb-2"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{result.title}</p>
                  <p className="text-gray-500 text-sm">{result.path}</p>
                </div>
                <Link to={result.path}>
                  <span className="bg-gray-200 font-semibold text-sm border border-gray-300 rounded-md px-2 py-1 cursor-pointer">
                    Overview
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchPopUp;
