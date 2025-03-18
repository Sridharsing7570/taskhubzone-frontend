import React, { useState } from "react";
import {
  Home,
  MessageSquare,
  User,
  DollarSign,
  Calendar,
  Plus,
  Search,
  MapPin,
  PenTool,
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("posted");
  const [showNewJobForm, setShowNewJobForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample jobs data
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Bathroom Faucet Replacement",
      description:
        "Need to replace a leaking bathroom faucet. Have purchased the new fixture already.",
      category: "Plumbing",
      location: "123 Main St",
      budget: "$120-150",
      date: "Mar 25, 2025",
      status: "Open",
      applicants: 3,
      messages: 5,
    },
    {
      id: 2,
      title: "Backyard Landscaping",
      description:
        "Looking for someone to trim bushes and clean up garden beds for spring.",
      category: "Gardening",
      location: "123 Main St",
      budget: "$200-300",
      date: "Apr 2, 2025",
      status: "Open",
      applicants: 5,
      messages: 2,
    },
    {
      id: 3,
      title: "Kitchen Backsplash Installation",
      description:
        "Need ceramic tile backsplash installed in kitchen. Materials provided.",
      category: "Tiling",
      location: "123 Main St",
      budget: "$350-450",
      date: "Mar 30, 2025",
      status: "In Progress",
      worker: "Mike Johnson",
      applicants: 0,
      messages: 8,
    },
    {
      id: 4,
      title: "Living Room Painting",
      description:
        "Paint living room walls and ceiling. Approximately 400 sq ft.",
      category: "Painting",
      location: "123 Main St",
      budget: "$500-600",
      date: "Completed on Mar 15, 2025",
      status: "Completed",
      worker: "Sarah Williams",
      applicants: 0,
      messages: 0,
      rating: 5,
    },
  ]);

  // Sample chat messages for a job
  const [selectedJob, setSelectedJob] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "worker",
      name: "Mike Johnson",
      message: "Hi there! I'm interested in your kitchen backsplash job.",
      time: "Mar 16, 10:23 AM",
    },
    {
      sender: "you",
      message: "Great! Do you have experience with ceramic tile installation?",
      time: "Mar 16, 10:45 AM",
    },
    {
      sender: "worker",
      name: "Mike Johnson",
      message:
        "Yes, I've been installing tile for over 5 years. I can send photos of my previous work if you'd like.",
      time: "Mar 16, 11:02 AM",
    },
    {
      sender: "you",
      message: "That would be great. Also, how soon could you start?",
      time: "Mar 16, 11:15 AM",
    },
    {
      sender: "worker",
      name: "Mike Johnson",
      message:
        "I could start as early as next Monday. It should take 1-2 days to complete.",
      time: "Mar 16, 11:30 AM",
    },
    {
      sender: "you",
      message:
        "Perfect. Here are some details about the materials I've purchased.",
      time: "Mar 16, 12:05 PM",
    },
    {
      sender: "worker",
      name: "Mike Johnson",
      message:
        "Those tiles look great. I'll bring all the necessary tools and adhesive. Looking forward to working on this project!",
      time: "Mar 16, 12:25 PM",
    },
    {
      sender: "you",
      message: "Sounds good! I've selected you for the job. See you on Monday.",
      time: "Mar 16, 1:15 PM",
    },
  ]);

  // New job form data
  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    category: "Plumbing",
    budget: "",
    date: "",
  });

  const handleNewJobSubmit = (e) => {
    e.preventDefault();
    const jobId = jobs.length + 1;
    const createdJob = {
      id: jobId,
      ...newJob,
      location: "123 Main St",
      status: "Open",
      applicants: 0,
      messages: 0,
    };

    setJobs([createdJob, ...jobs]);
    setShowNewJobForm(false);
    setNewJob({
      title: "",
      description: "",
      category: "Plumbing",
      budget: "",
      date: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({
      ...newJob,
      [name]: value,
    });
  };

  const openChat = (job) => {
    setSelectedJob(job);
  };

  const closeChat = () => {
    setSelectedJob(null);
  };

  const filteredJobs = jobs.filter((job) => {
    if (activeTab === "posted" && job.status === "Completed") return false;
    if (activeTab === "completed" && job.status !== "Completed") return false;

    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              TaskHubZone
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium flex items-center">
              <Plus className="h-5 w-5 mr-1" />
              Post a Job
            </button>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4">
        {!selectedJob ? (
          <>
            {/* Job Dashboard */}
            <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  My Home Jobs
                </h2>
                <p className="text-gray-600">
                  Manage your home improvement and repair projects
                </p>
              </div>
              <button
                className="mt-4 md:mt-0 px-4 py-2 bg-green-600 text-white rounded-lg font-medium flex items-center"
                onClick={() => setShowNewJobForm(true)}
              >
                <Plus className="h-5 w-5 mr-1" />
                New Job
              </button>
            </div>

            {/* Search and Filters */}
            <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
                <Search className="absolute h-5 w-5 text-gray-400 left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex bg-white rounded-lg shadow-sm">
                <button
                  className={`px-4 py-2 rounded-l-lg font-medium ${
                    activeTab === "posted"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => setActiveTab("posted")}
                >
                  Active Jobs
                </button>
                <button
                  className={`px-4 py-2 rounded-r-lg font-medium ${
                    activeTab === "completed"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => setActiveTab("completed")}
                >
                  Completed
                </button>
              </div>
            </div>

            {/* Show new job form if active */}
            {showNewJobForm && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Post a New Job</h3>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowNewJobForm(false)}
                  >
                    ✕
                  </button>
                </div>
                <form onSubmit={handleNewJobSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="w-full p-2 border rounded-lg"
                      placeholder="e.g., Bathroom Faucet Replacement"
                      value={newJob.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      className="w-full p-2 border rounded-lg h-32"
                      placeholder="Provide details about the job..."
                      value={newJob.description}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Category
                      </label>
                      <select
                        name="category"
                        className="w-full p-2 border rounded-lg"
                        value={newJob.category}
                        onChange={handleInputChange}
                      >
                        <option>Plumbing</option>
                        <option>Electrical</option>
                        <option>Carpentry</option>
                        <option>Painting</option>
                        <option>Gardening</option>
                        <option>Cleaning</option>
                        <option>Tiling</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Budget
                      </label>
                      <input
                        type="text"
                        name="budget"
                        className="w-full p-2 border rounded-lg"
                        placeholder="e.g., $100-150"
                        value={newJob.budget}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="text"
                        name="date"
                        className="w-full p-2 border rounded-lg"
                        placeholder="e.g., Apr 15, 2025"
                        value={newJob.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="px-4 py-2 text-gray-700 mr-2"
                      onClick={() => setShowNewJobForm(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg"
                    >
                      Post Job
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Job Listings */}
            <div className="space-y-4">
              {filteredJobs.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <p className="text-gray-600">
                    No jobs found. Post a new job to get started!
                  </p>
                </div>
              ) : (
                filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-lg shadow-md p-4"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {job.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            job.status === "Open"
                              ? "bg-green-100 text-green-800"
                              : job.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {job.status}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <div className="flex items-center">
                        <PenTool className="h-4 w-4 text-gray-500 mr-1" />
                        <span>{job.category}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-gray-500 mr-1" />
                        <span>{job.budget}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                        <span>{job.date}</span>
                      </div>
                    </div>

                    {job.status === "Completed" && (
                      <div className="mt-4 flex items-center">
                        <div className="text-yellow-500 flex">
                          {"★".repeat(job.rating)}
                          {"☆".repeat(5 - job.rating)}
                        </div>
                        <span className="ml-2 text-gray-600">
                          Job completed by {job.worker}
                        </span>
                      </div>
                    )}

                    <div className="mt-4 flex justify-between items-center">
                      {job.status !== "Completed" && (
                        <div className="flex space-x-4 text-sm">
                          {job.status === "Open" && (
                            <div className="flex items-center text-blue-600">
                              <User className="h-4 w-4 mr-1" />
                              <span>{job.applicants} Applicants</span>
                            </div>
                          )}
                          {job.status !== "Open" && (
                            <div className="flex items-center text-gray-600">
                              <User className="h-4 w-4 mr-1" />
                              <span>Assigned to {job.worker}</span>
                            </div>
                          )}
                          <div className="flex items-center text-blue-600">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            <span>{job.messages} Messages</span>
                          </div>
                        </div>
                      )}
                      <div className="space-x-2">
                        {job.status !== "Completed" && (
                          <button
                            className="px-3 py-1 border border-blue-600 text-blue-600 rounded-lg text-sm hover:bg-blue-50"
                            onClick={() => openChat(job)}
                          >
                            Messages
                          </button>
                        )}
                        {job.status === "Open" && (
                          <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                            View Applicants
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        ) : (
          // Chat Interface
          <div className="bg-white rounded-lg shadow-md h-screen-80 flex flex-col overflow-hidden">
            <div className="border-b p-4 flex justify-between items-center">
              <div className="flex items-center">
                <button
                  className="mr-3 text-gray-600 hover:text-gray-800"
                  onClick={closeChat}
                >
                  ←
                </button>
                <div>
                  <h3 className="font-bold text-gray-800">
                    {selectedJob.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedJob.status === "In Progress"
                      ? `Assigned to ${selectedJob.worker}`
                      : "Open for applicants"}
                  </p>
                </div>
              </div>
              <div>
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    selectedJob.status === "Open"
                      ? "bg-green-100 text-green-800"
                      : selectedJob.status === "In Progress"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {selectedJob.status}
                </span>
              </div>
            </div>

            <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "you" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                        msg.sender === "you"
                          ? "bg-blue-600 text-white"
                          : "bg-white border"
                      }`}
                    >
                      {msg.sender !== "you" && (
                        <div className="font-medium text-blue-600 mb-1">
                          {msg.name}
                        </div>
                      )}
                      <p>{msg.message}</p>
                      <div
                        className={`text-xs mt-1 ${
                          msg.sender === "you"
                            ? "text-blue-200"
                            : "text-gray-500"
                        }`}
                      >
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t p-4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
