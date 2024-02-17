import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { StaffDashboard } from "./StaffDashboard";
import { NewProfileDetails } from "./NewProfileDetails";
import { TeamProfile } from "./TeamProfile";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StaffDashboard />} />
        <Route path="/profile_details" element={<NewProfileDetails />} />
        <Route path="/profile_details/team_profile" element={<TeamProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
