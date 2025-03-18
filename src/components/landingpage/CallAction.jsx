import React from "react";

const CallAction = () => {
  return (
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
  );
};

export default CallAction;
