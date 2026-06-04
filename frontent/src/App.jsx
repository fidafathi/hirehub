import JobDetails from "./pages/JobDetails";
import ApplyJob from "./pages/ApplyJob";
import AdminLogin from "./pages/AdminLogin";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/apply" element={<ApplyJob />} />

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/recruiter" element={<RecruiterDashboard />} />

        <Route path="/apply/:jobId" element={<ApplyJob />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/jobdetails" element={<JobDetails />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;