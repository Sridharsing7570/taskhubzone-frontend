import React from "react";

const Services = () => {
  return (
    <div>
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
    </div>
  );
};

export default Services;
