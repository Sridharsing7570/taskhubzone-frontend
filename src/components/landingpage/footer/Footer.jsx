import { Home } from "lucide-react";
import React from "react";

const listOwner = [
  { name: " Post a Job", path: "#" },
  { name: " Find Workers", path: "#" },
  { name: "  Find Contractors", path: "#" },
  { name: "  How It Works", path: "#" },
];

const listContractor = [
  { name: " Find Jobs", path: "#" },
  { name: "Create Profile", path: "#" },
  { name: " Find Jobs", path: "#" },
  { name: " Create Profile", path: "#" },
  { name: " Worker Registration", path: "#" },
  { name: " Contractor Registration", path: "#" },
];

const aboutList = [
  { name: "About TaskHubZone", path: "#" },
  { name: " How It Works", path: "#" },
  { name: " Terms of Service", path: "#" },
  { name: "Privacy Policy", path: "#" },
  { name: " Contact", path: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Home className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-lg font-bold text-white">
                TaskHubZone
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Connecting house owners, workers, and contractors for home
              services and repairs.
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} TaskHubZone
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 text-sm">
              For House Owners
            </h3>
            <ul className="space-y-2 text-sm">
              {listOwner.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="hover:text-blue-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 text-sm">
              For Workers & Contractors
            </h3>
            <ul className="space-y-2 text-sm">
              {listContractor.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="hover:text-blue-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 text-sm">About</h3>
            <ul className="space-y-2 text-sm">
              {aboutList.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="hover:text-blue-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
