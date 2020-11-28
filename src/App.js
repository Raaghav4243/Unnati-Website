import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/HomePage/pages/index";
import SideNav from "./StudentDashboard/SideNav/SideNav";
import { Navbar } from "./HomePage/components/Navbar_New";
import StudentDashboard from "./StudentDashboard";
// import AssignmentStart from "./AssignmentPages/AssignmentStart";
// import AssignmentResults from "./AssignmentPages/AssignmentResult";
import CourseDashboard from "./CourseDashboard";
function App() {
  return (
    <Router>
      <CourseDashboard />
    </Router>
  );
}

export default App;
