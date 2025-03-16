import { Building, Home, Menu, PenTool, X } from "lucide-react";
import React from "react";

const nav = [
  { name: "How It Works", path: "#" },
  { name: "Browse Jobs", path: "#" },
];

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              TaskHubZone
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {nav.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="text-gray-600 hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}

          <div className="relative group">
            <button className="text-gray-600 hover:text-blue-600 flex items-center">
              Register
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Home className="h-4 w-4 mr-2" /> As House Owner
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <PenTool className="h-4 w-4 mr-2" /> As Worker
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Building className="h-4 w-4 mr-2" /> As Contractor
              </a>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Sign In
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-white shadow-lg rounded-b-lg">
        <div className="pt-2 pb-4 space-y-1 px-4">
          <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">
            How It Works
          </a>
          <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">
            Browse Jobs
          </a>
          <div className="pt-2 pb-1 border-t border-gray-200 mt-2">
            <p className="text-xs text-gray-500 mb-1">Register as:</p>
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-600 pl-2"
            >
              <Home className="h-4 w-4 inline mr-2" /> House Owner
            </a>
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-600 pl-2"
            >
              <PenTool className="h-4 w-4 inline mr-2" /> Worker
            </a>
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-600 pl-2"
            >
              <Building className="h-4 w-4 inline mr-2" /> Contractor
            </a>
          </div>
          <button className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    )}
  </nav>
);

export default Navigation;
