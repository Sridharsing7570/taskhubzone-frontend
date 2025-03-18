import React, { useState } from "react";
import {
  Menu,
  X,
  CheckCircle,
  Home,
  Briefcase,
  MessageSquare,
  Star,
  CreditCard,
  Users,
  Bell,
  Upload,
  List,
  MapPin,
  Search,
  Filter,
  User,
  Building,
  PenTool,
} from "lucide-react";
import Navigation from "../components/landingpage/navigation/Navigation";
import Footer from "../components/landingpage/footer/Footer";
import CallAction from "../components/landingpage/CallAction";
import Services from "../components/landingpage/Services";
import Feature from "../components/landingpage/Feature";
import RecentJob from "../components/landingpage/RecentJob";
import ContractorFlow from "../components/landingpage/ContractorFlow";
import WorkerFlow from "../components/landingpage/WorkerFlow";
import HouseOwnerFlow from "../components/landingpage/HouseOwnerFlow";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    "Plumbing",
    "Electrical",
    "Carpentry",
    "Painting",
    "Cleaning",
    "Landscaping",
    "Roofing",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Home Services Made Simple
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Connect house owners with skilled workers and contractors for all
            your home repair and improvement needs
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-2 md:p-3 max-w-3xl mx-auto shadow-lg flex flex-col md:flex-row">
            <div className="flex-1 flex items-center mb-2 md:mb-0 md:mr-2">
              <Search className="h-5 w-5 text-gray-400 ml-2 mr-1" />
              <input
                type="text"
                placeholder="What service do you need help with?"
                className="w-full p-2 focus:outline-none text-gray-800 text-sm md:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex-1 flex items-center mb-2 md:mb-0 md:mr-2">
              <Filter className="h-5 w-5 text-gray-400 ml-2 mr-1" />
              <select
                className="w-full p-2 focus:outline-none text-gray-800 bg-white text-sm md:text-base"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm md:text-base">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* User Type Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          TaskHubZone Works for Everyone
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "House Owner",
              icon: <Home className="h-12 w-12 text-blue-500 mb-4" />,
              description:
                "Post home repair and improvement jobs, find qualified workers or contractors",
              actions: [
                "Post jobs for your home",
                "Review worker profiles",
                "Get multiple quotes",
                "Pay securely for completed work",
              ],
              cta: "Post a Job",
            },
            {
              title: "Worker",
              icon: <PenTool className="h-12 w-12 text-blue-500 mb-4" />,
              description:
                "Find jobs matching your skills directly from homeowners or contractors",
              actions: [
                "Find jobs in your area",
                "Apply with your qualifications",
                "Complete work and get paid",
                "Build your reputation",
              ],
              cta: "Find Work",
            },
            {
              title: "Contractor",
              icon: <Building className="h-12 w-12 text-blue-500 mb-4" />,
              description:
                "Manage larger projects, find skilled workers and grow your business",
              actions: [
                "Take on bigger projects",
                "Find skilled workers",
                "Manage client relationships",
                "Scale your operations",
              ],
              cta: "Become a Contractor",
            },
          ].map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center">{type.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {type.title}
              </h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <ul className="text-left space-y-2 mb-6">
                {type.actions.map((action, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{action}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full">
                {type.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
            How TaskHubZone Works
          </h2>

          {/* House Owner Flow */}
          <HouseOwnerFlow />

          <WorkerFlow />

          <ContractorFlow />
        </div>
      </div>

      <RecentJob />

      <Feature />

      <Services />

      <CallAction />

      <Footer />
    </div>
  );
};

export default LandingPage;
