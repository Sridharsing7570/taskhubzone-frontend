import React from "react";
import PostJobPage from "./page/PostJobPage";
import { ErrorBoundary } from "react-error-boundary";
import LandingPage from "./page/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./page/houseowner/Dashboard";
import WorkerDashboard from "./page/worker/WorkerDashboard";

const App = () => {
  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <div className="bg-red-500">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/job" element={<PostJobPage />} />
            <Route path="/dashboard/houseowner" element={<Dashboard />} />
            <Route path="/dashboard/worker" element={<WorkerDashboard />} />
          </Routes>
        </Router>
      </div>
    </ErrorBoundary>
  );
};

export default App;
