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

  const recentJobs = [
    {
      id: 1,
      title: "Bathroom Pipe Repair",
      category: "Plumbing",
      budget: "$150-200",
      location: "Downtown",
      posted: "2 days ago",
      urgency: "Medium",
    },
    {
      id: 2,
      title: "Living Room Painting",
      category: "Painting",
      budget: "$300-450",
      location: "North Side",
      posted: "1 day ago",
      urgency: "Low",
    },
    {
      id: 3,
      title: "Electrical Fixture Installation",
      category: "Electrical",
      budget: "$100-150",
      location: "East End",
      posted: "5 hours ago",
      urgency: "High",
    },
    {
      id: 4,
      title: "Backyard Landscaping",
      category: "Landscaping",
      budget: "$500-700",
      location: "West Hills",
      posted: "3 days ago",
      urgency: "Medium",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
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
              <a href="#" className="text-gray-600 hover:text-blue-600">
                How It Works
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Browse Jobs
              </a>
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
              <a
                href="#"
                className="block py-2 text-gray-600 hover:text-blue-600"
              >
                How It Works
              </a>
              <a
                href="#"
                className="block py-2 text-gray-600 hover:text-blue-600"
              >
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
          <div className="mb-16">
            <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-8 justify-center">
              <Home className="h-6 w-6 mr-2 text-blue-600" /> For House Owners
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  step: 1,
                  title: "Post a Job",
                  desc: "Describe what you need done, when and your budget",
                },
                {
                  step: 2,
                  title: "Get Quotes",
                  desc: "Receive offers from workers and contractors",
                },
                {
                  step: 3,
                  title: "Choose Someone",
                  desc: "Review profiles, ratings and select the right person",
                },
                {
                  step: 4,
                  title: "Complete & Pay",
                  desc: "Approve the work and release payment",
                },
              ].map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-lg shadow p-5">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-center">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm text-center">
                      {step.desc}
                    </p>
                  </div>
                  {step.step < 4 && (
                    <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-blue-300 transform -translate-x-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Worker Flow */}
          <div className="mb-16">
            <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-8 justify-center">
              <PenTool className="h-6 w-6 mr-2 text-blue-600" /> For Workers
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  step: 1,
                  title: "Create Profile",
                  desc: "Add your skills, experience and work samples",
                },
                {
                  step: 2,
                  title: "Find Jobs",
                  desc: "Browse available jobs from owners or contractors",
                },
                {
                  step: 3,
                  title: "Submit Quotes",
                  desc: "Offer your services with pricing and timeline",
                },
                {
                  step: 4,
                  title: "Complete Tasks",
                  desc: "Do the work, get reviewed and paid",
                },
              ].map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-lg shadow p-5">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-center">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm text-center">
                      {step.desc}
                    </p>
                  </div>
                  {step.step < 4 && (
                    <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-blue-300 transform -translate-x-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contractor Flow */}
          <div>
            <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-8 justify-center">
              <Building className="h-6 w-6 mr-2 text-blue-600" /> For
              Contractors
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  step: 1,
                  title: "Register Company",
                  desc: "Create contractor profile with your services",
                },
                {
                  step: 2,
                  title: "Find Projects",
                  desc: "Review larger projects posted by house owners",
                },
                {
                  step: 3,
                  title: "Hire Workers",
                  desc: "Find and assign qualified workers for the job",
                },
                {
                  step: 4,
                  title: "Manage & Complete",
                  desc: "Oversee work, ensure quality and get paid",
                },
              ].map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-lg shadow p-5">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-center">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm text-center">
                      {step.desc}
                    </p>
                  </div>
                  {step.step < 4 && (
                    <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-blue-300 transform -translate-x-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Jobs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Recent Home Jobs</h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            View All Jobs
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
            >
              <div
                className={`rounded-t-lg py-1 px-3 text-center text-xs font-medium text-white ${
                  job.urgency === "High"
                    ? "bg-red-500"
                    : job.urgency === "Medium"
                    ? "bg-orange-500"
                    : "bg-green-500"
                }`}
              >
                {job.urgency} Urgency
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800 mb-3 truncate">
                  {job.title}
                </h3>
                <div className="flex items-center mb-2">
                  <Briefcase className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{job.category}</span>
                </div>
                <div className="flex items-center mb-2">
                  <CreditCard className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{job.budget}</span>
                </div>
                <div className="flex items-center mb-3">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{job.location}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{job.posted}</span>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "User Management",
                icon: <Users className="h-10 w-10 text-blue-500 mb-4" />,
                description:
                  "Complete profiles for house owners, workers, and contractors with role-based access",
              },
              {
                title: "Job Management",
                icon: <Briefcase className="h-10 w-10 text-blue-500 mb-4" />,
                description:
                  "Post, search, and manage home service jobs with detailed descriptions",
              },
              {
                title: "Messaging System",
                icon: (
                  <MessageSquare className="h-10 w-10 text-blue-500 mb-4" />
                ),
                description:
                  "Direct communication between house owners, workers, and contractors",
              },
              {
                title: "Secure Payments",
                icon: <CreditCard className="h-10 w-10 text-blue-500 mb-4" />,
                description:
                  "Safe and transparent payment processing with dispute resolution",
              },
              {
                title: "Reviews & Ratings",
                icon: <Star className="h-10 w-10 text-blue-500 mb-4" />,
                description:
                  "Build trust with community feedback and quality ratings",
              },
              {
                title: "Notifications",
                icon: <Bell className="h-10 w-10 text-blue-500 mb-4" />,
                description:
                  "Stay updated on job applications, messages, and project updates",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Popular Home Service Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            {
              name: "Plumbing",
              icon: (
                <img
                  src="/api/placeholder/48/48"
                  alt="Plumbing"
                  className="mx-auto mb-3"
                />
              ),
            },
            {
              name: "Electrical",
              icon: (
                <img
                  src="/api/placeholder/48/48"
                  alt="Electrical"
                  className="mx-auto mb-3"
                />
              ),
            },
            {
              name: "Carpentry",
              icon: (
                <img
                  src="/api/placeholder/48/48"
                  alt="Carpentry"
                  className="mx-auto mb-3"
                />
              ),
            },
            {
              name: "Painting",
              icon: (
                <img
                  src="/api/placeholder/48/48"
                  alt="Painting"
                  className="mx-auto mb-3"
                />
              ),
            },
            {
              name: "Cleaning",
              icon: (
                <img
                  src="/api/placeholder/48/48"
                  alt="Cleaning"
                  className="mx-auto mb-3"
                />
              ),
            },
            {
              name: "Landscaping",
              icon: (
                <img
                  src="/api/placeholder/48/48"
                  alt="Landscaping"
                  className="mx-auto mb-3"
                />
              ),
            },
            {
              name: "Roofing",
              icon: (
                <img
                  src="/api/placeholder/48/48"
                  alt="Roofing"
                  className="mx-auto mb-3"
                />
              ),
            },
            {
              name: "HVAC",
              icon: (
                <img
                  src="/api/placeholder/48/48"
                  alt="HVAC"
                  className="mx-auto mb-3"
                />
              ),
            },
          ].map((category, index) => (
            <a
              key={index}
              href="#"
              className="bg-white rounded-lg shadow p-5 text-center hover:shadow-md transition-shadow"
            >
              {category.icon}
              <h3 className="font-medium text-gray-800">{category.name}</h3>
            </a>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your Home Service Experience?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join TaskHubZone today to connect with skilled workers, reliable
            contractors, or find home projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Register as House Owner
            </button>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors">
              Register as Worker/Contractor
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
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
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Find Workers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Find Contractors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4 text-sm">
                For Workers & Contractors
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Find Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Create Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Worker Registration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contractor Registration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4 text-sm">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    About TaskHubZone
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
