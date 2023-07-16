import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import React from "react";
const website = () => {
  // Change the function name to uppercase "Website"
  return (
    <Router>
      <div className="main_app">
        <Routes>
          <Route exact path="/" element={<App />} />
          {/* Define the route for Contact */}
        </Routes>
      </div>
    </Router>
  );
};

export default website; // Export the uppercase "Website"
