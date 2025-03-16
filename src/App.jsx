import React from "react";
import PostJobPage from "./page/PostJobPage";
import { ErrorBoundary } from "react-error-boundary";
import LandingPage from "./page/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <div className="bg-red-500">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/job" element={<PostJobPage />} />
          </Routes>
        </Router>
      </div>
    </ErrorBoundary>
  );
};

export default App;
