import React from 'react'

const RecentJob = () => {
  return (
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
  );
}

export default RecentJob
