import React, { useState } from "react";
import {
  Tool,
  DollarSign,
  MapPin,
  Calendar,
  Clock,
  MessageSquare,
  CheckCircle,
  Filter,
  Home,
  User,
  Bell,
  LogOut,
} from "lucide-react";

const WorkerDashboard = () => {
  const [activeTab, setActiveTab] = useState("available");
  const [selectedJob, setSelectedJob] = useState(null);

  // Sample data for jobs
  const availableJobs = [
    {
      id: 1,
      title: "Bathroom Faucet Replacement",
      description:
        "Need to replace a leaking bathroom faucet. Have purchased the new fixture already.",
      category: "Plumbing",
      location: "Downtown",
      address: "123 Main Street",
      distance: "2.3 miles",
      price: "$150",
      date: "Mar 25, 2025",
      time: "Morning",
      owner: "John Smith",
      ownerRating: 4.8,
      postedDate: "2 days ago",
    },
    {
      id: 2,
      title: "Backyard Landscaping",
      description:
        "Looking for someone to trim bushes and clean up garden beds for spring.",
      category: "Gardening",
      location: "Westside",
      address: "456 Park Avenue",
      distance: "3.5 miles",
      price: "$250",
      date: "Mar 29, 2025",
      time: "Afternoon",
      owner: "Lisa Johnson",
      ownerRating: 4.5,
      postedDate: "1 day ago",
    },
    {
      id: 3,
      title: "Install New Light Fixtures",
      description:
        "Need to replace 3 ceiling light fixtures throughout the house.",
      category: "Electrical",
      location: "Northside",
      address: "789 Elm Street",
      distance: "1.8 miles",
      price: "$180",
      date: "Mar 26, 2025",
      time: "Afternoon",
      owner: "Robert Davis",
      ownerRating: 4.9,
      postedDate: "Just now",
    },
    {
      id: 4,
      title: "Kitchen Backsplash Installation",
      description:
        "Need ceramic tile backsplash installed in kitchen. Materials provided.",
      category: "Tiling",
      location: "Eastside",
      address: "234 Oak Drive",
      distance: "4.2 miles",
      price: "$400",
      date: "Mar 30, 2025",
      time: "Full day",
      owner: "Sarah Williams",
      ownerRating: 4.7,
      postedDate: "3 days ago",
    },
  ];

  const myJobs = [
    {
      id: 5,
      title: "Window Repair",
      description: "Fix broken window pane in living room.",
      category: "Handyman",
      location: "Southside",
      address: "567 Pine Street",
      distance: "2.8 miles",
      price: "$120",
      date: "Mar 22, 2025",
      time: "Morning",
      owner: "Michael Brown",
      ownerRating: 4.6,
      status: "Upcoming",
      messages: 3,
    },
    {
      id: 6,
      title: "Deck Staining",
      description: "Need to stain a 300 sq ft deck. Materials provided.",
      category: "Painting",
      location: "Westside",
      address: "890 Cedar Lane",
      distance: "3.1 miles",
      price: "$280",
      date: "In progress",
      time: "Full day",
      owner: "Jennifer Miller",
      ownerRating: 4.9,
      status: "In Progress",
      messages: 5,
    },
    {
      id: 7,
      title: "Ceiling Fan Installation",
      description: "Install a new ceiling fan in the master bedroom.",
      category: "Electrical",
      location: "Downtown",
      address: "345 Maple Road",
      distance: "1.5 miles",
      price: "$140",
      date: "Completed on Mar 15",
      time: "Morning",
      owner: "David Wilson",
      ownerRating: 4.7,
      status: "Completed",
      rating: 5,
      messages: 0,
    },
  ];

  // Getting jobs based on active tab
  const getDisplayJobs = () => {
    if (activeTab === "available") return availableJobs;
    return myJobs.filter((job) =>
      activeTab === "upcoming"
        ? job.status === "Upcoming"
        : activeTab === "inprogress"
        ? job.status === "In Progress"
        : activeTab === "completed"
        ? job.status === "Completed"
        : true
    );
  };

  const displayJobs = getDisplayJobs();

  // Sample messages for job communication
  const [messages, setMessages] = useState([
    {
      sender: "owner",
      name: "Michael Brown",
      message: "Hi, are you available to fix my window on March 22?",
      time: "Mar 16, 2:30 PM",
    },
    {
      sender: "worker",
      message: "Yes, I can do that. Is morning or afternoon better for you?",
      time: "Mar 16, 3:15 PM",
    },
    {
      sender: "owner",
      name: "Michael Brown",
      message: "Morning would be perfect, maybe around 9am?",
      time: "Mar 16, 3:45 PM",
    },
    {
      sender: "worker",
      message:
        "9am works for me. Can you describe the window that needs repair?",
      time: "Mar 16, 4:00 PM",
    },
    {
      sender: "owner",
      name: "Michael Brown",
      message:
        "It's a double-hung window with a broken pane in the living room. I've already measured it - it's 24x36 inches.",
      time: "Mar 16, 4:30 PM",
    },
    {
      sender: "worker",
      message:
        "Perfect. I'll bring the necessary materials. Do you have any particular type of glass in mind?",
      time: "Mar 16, 5:00 PM",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      sender: "worker",
      message: newMessage,
      time: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed w-16 md:w-64 h-full bg-blue-800 text-white">
        <div className="p-4 flex items-center justify-center md:justify-start">
          <Tool className="h-8 w-8 md:mr-2" />
          <span className="hidden md:block text-xl font-bold">WorkerPro</span>
        </div>

        <nav className="mt-8">
          <ul>
            <li className="mb-2">
              <button
                className={`w-full flex items-center justify-center md:justify-start p-3 rounded-lg ${
                  activeTab === "available"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
                onClick={() => setActiveTab("available")}
              >
                <Home className="h-5 w-5 md:mr-3" />
                <span className="hidden md:block">Available Jobs</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`w-full flex items-center justify-center md:justify-start p-3 rounded-lg ${
                  activeTab === "upcoming" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
                onClick={() => setActiveTab("upcoming")}
              >
                <Calendar className="h-5 w-5 md:mr-3" />
                <span className="hidden md:block">Upcoming Jobs</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`w-full flex items-center justify-center md:justify-start p-3 rounded-lg ${
                  activeTab === "inprogress"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
                onClick={() => setActiveTab("inprogress")}
              >
                <Clock className="h-5 w-5 md:mr-3" />
                <span className="hidden md:block">In Progress</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`w-full flex items-center justify-center md:justify-start p-3 rounded-lg ${
                  activeTab === "completed"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
                onClick={() => setActiveTab("completed")}
              >
                <CheckCircle className="h-5 w-5 md:mr-3" />
                <span className="hidden md:block">Completed</span>
              </button>
            </li>
            <li className="mb-2">
              <button className="w-full flex items-center justify-center md:justify-start p-3 rounded-lg hover:bg-blue-700">
                <MessageSquare className="h-5 w-5 md:mr-3" />
                <span className="hidden md:block">Messages</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full p-4">
          <div className="hidden md:flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
              <User className="h-6 w-6" />
            </div>
            <div>
              <p className="font-medium">Mike Wilson</p>
              <p className="text-sm text-blue-200">4.9 ★ • Handyman</p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center md:justify-start p-3 rounded-lg hover:bg-blue-700">
            <LogOut className="h-5 w-5 md:mr-3" />
            <span className="hidden md:block">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="md:ml-64 ml-16">
        {/* Header */}
        <header className="bg-white p-4 shadow-sm flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">
            {activeTab === "available"
              ? "Available Jobs"
              : activeTab === "upcoming"
              ? "Upcoming Jobs"
              : activeTab === "inprogress"
              ? "Jobs In Progress"
              : "Completed Jobs"}
          </h1>
          <div className="flex items-center">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full mr-2 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs h-4 w-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center md:hidden">
              <User className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </header>

        {/* Main dashboard content */}
        <main className="p-4">
          {!selectedJob ? (
            <>
              {/* Filters */}
              {activeTab === "available" && (
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4 flex flex-wrap items-center">
                  <div className="flex items-center mr-4 mb-2">
                    <Filter className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="font-medium">Filters:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Within 5 miles
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Plumbing
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Electrical
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      $100+
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      This Week
                    </button>
                  </div>
                </div>
              )}

              {/* Jobs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayJobs.length > 0 ? (
                  displayJobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition duration-200"
                      onClick={() => setSelectedJob(job)}
                    >
                      <div className="flex justify-between items-start">
                        <h2 className="text-lg font-semibold text-gray-800">
                          {job.title}
                        </h2>
                        {job.status && (
                          <span
                            className={`text-xs px-2 py-1 rounded-full font-medium ${
                              job.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : job.status === "In Progress"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {job.status}
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 text-sm mt-1 mb-3 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Tool className="h-4 w-4 text-gray-500 mr-2" />
                          <span>{job.category}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                          <span>
                            {job.location} • {job.distance}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="font-medium">{job.price}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                          <span>
                            {job.date} • {job.time}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t flex justify-between items-center">
                        <div className="text-sm">
                          <span className="text-gray-600">Posted by:</span>
                          <div className="flex items-center">
                            <span className="font-medium">{job.owner}</span>
                            <span className="ml-2 text-yellow-500 text-xs">
                              ★ {job.ownerRating}
                            </span>
                          </div>
                        </div>

                        {activeTab === "available" ? (
                          <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                            Apply
                          </button>
                        ) : job.messages > 0 ? (
                          <div className="flex items-center text-blue-600">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            <span>{job.messages}</span>
                          </div>
                        ) : null}
                      </div>

                      {job.postedDate && (
                        <div className="mt-2 text-xs text-gray-500">
                          {job.postedDate}
                        </div>
                      )}

                      {job.rating && (
                        <div className="mt-2 text-sm">
                          <span className="text-gray-600 mr-2">
                            Client Rating:
                          </span>
                          <span className="text-yellow-500">
                            {"★".repeat(job.rating)}
                          </span>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 bg-white rounded-lg shadow-sm p-8 text-center">
                    <p className="text-gray-600 mb-3">
                      No jobs available in this category right now.
                    </p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                      Update Your Skills
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            // Job detail view with chat
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row min-h-screen">
                {/* Job details */}
                <div className="w-full md:w-1/3 border-r p-4">
                  <div className="flex justify-between items-center mb-4">
                    <button
                      className="text-gray-600 hover:text-gray-800"
                      onClick={() => setSelectedJob(null)}
                    >
                      ← Back
                    </button>
                    {selectedJob.status && (
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          selectedJob.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : selectedJob.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {selectedJob.status}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {selectedJob.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {selectedJob.description}
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-medium text-gray-800 mb-2">
                      Job Details
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Tool className="h-4 w-4 text-gray-500 mr-2" />
                        <span>{selectedJob.category}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                        <span>{selectedJob.address}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="font-medium">{selectedJob.price}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                        <span>
                          {selectedJob.date} • {selectedJob.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">
                      Client Information
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{selectedJob.owner}</p>
                        <div className="flex items-center">
                          <span className="text-yellow-500 text-sm">
                            {"★".repeat(Math.floor(selectedJob.ownerRating))}
                          </span>
                          <span className="ml-1 text-sm">
                            {selectedJob.ownerRating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Member since Jan 2023
                    </p>
                  </div>

                  {activeTab === "available" && (
                    <div className="mt-4">
                      <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium">
                        Apply for this Job
                      </button>
                    </div>
                  )}

                  {(selectedJob.status === "Upcoming" ||
                    selectedJob.status === "In Progress") && (
                    <div className="mt-4 space-y-2">
                      <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium">
                        {selectedJob.status === "Upcoming"
                          ? "Start Job"
                          : "Mark as Complete"}
                      </button>
                      {selectedJob.status === "Upcoming" && (
                        <button className="w-full py-2 border border-red-500 text-red-500 rounded-lg font-medium">
                          Cancel Job
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Chat section */}
                <div className="w-full md:w-2/3 flex flex-col">
                  <div className="border-b p-4 flex items-center">
                    <h3 className="font-medium">
                      Messages with {selectedJob.owner}
                    </h3>
                  </div>

                  <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                      {messages.map((msg, index) => (
                        <div
                          key={index}
                          className={`flex ${
                            msg.sender === "worker"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                              msg.sender === "worker"
                                ? "bg-blue-600 text-white"
                                : "bg-white shadow-sm"
                            }`}
                          >
                            {msg.sender !== "worker" && (
                              <div className="font-medium text-blue-600 mb-1">
                                {msg.name}
                              </div>
                            )}
                            <p>{msg.message}</p>
                            <div
                              className={`text-xs mt-1 ${
                                msg.sender === "worker"
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

                  <div className="p-4 border-t">
                    <form onSubmit={sendMessage} className="flex">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-r-lg"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default WorkerDashboard;
