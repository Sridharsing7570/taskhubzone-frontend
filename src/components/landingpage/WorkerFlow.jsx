import React from "react";

const WorkerFlow = () => {
  return (
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
              <p className="text-gray-600 text-sm text-center">{step.desc}</p>
            </div>
            {step.step < 4 && (
              <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-blue-300 transform -translate-x-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkerFlow;
