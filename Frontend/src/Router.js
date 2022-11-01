import React, { Profiler, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//disni
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/layout/Profile";
import Dashboard from "./components/Dashboard";

//admin
import ViewAllRoles from "./components/admin/ViewAllRoles";
import UpdateUser from "./components/admin/UpdateUser";
import ViewAllTrips from "./components/admin/ViewAllTrips";
//cus
import AddTrip from "./components/customer/AddTrip";
import EditTrip from "./components/customer/EditTrip";









//employee
import RegisterStaff from "./components/auth/RegisterStaff";



export default function Router() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/userprofile" element={<Profile />} />

          {/* employee */}

          <Route exact path="/staffRegister" element={<RegisterStaff />} />

        
          
          <Route path="/AddTrip" element={<AddTrip />} />
          <Route path="/:id" element={<EditTrip />} />

          {/* admin */}
          <Route exact path="/ViewAllRoles" element={<ViewAllRoles />} />
          <Route exact path="/updateUser/:id" element={<UpdateUser />} />
          <Route path="/ViewAllTrips" element={<ViewAllTrips />} />

          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
