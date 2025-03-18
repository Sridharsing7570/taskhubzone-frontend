import React from "react";

const Feature = () => {
  return (
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
              icon: <MessageSquare className="h-10 w-10 text-blue-500 mb-4" />,
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
  );
};

export default Feature;
