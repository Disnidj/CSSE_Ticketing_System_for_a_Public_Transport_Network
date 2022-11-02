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

//anodya
import AddBusTimeTable from './components/admin/AddBusTimeTable';    
import ViewAllTimeTable from './components/admin/ViewAllTimeTable';  
import UpdateBusTimeTable from './components/admin/UpdateBusTimeTable';
import AppointDrivers from './components/admin/AppointDrivers'; 
import ViewAllAppoints from './components/admin/ViewAllAppoints';    
import UpdateDriverAppoints from './components/admin/UpdateDriverAppoints';

//cus
import AddTrip from "./components/customer/AddTrip";
import EditTrip from "./components/customer/EditTrip";
import ViewAll from "./components/customer/ViewAll";
import GetOne from "./components/customer/ViewOne"

import C_ViewBusTimeTable from './components/customer/C_ViewBusTimeTable'; 








//employee
import RegisterStaff from "./components/auth/RegisterStaff";
import D_ViewAllAppoints from './components/employee/D_ViewAllAppoints'; 



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

        
          <Route path="/viewAll" element={<ViewAll/>} />
          <Route path="/AddTrip" element={<AddTrip />} />
          <Route path="/:id" element={<EditTrip />} />
          <Route path="/GetOneTrip/:id" element={<GetOne />} />

          {/* admin */}
          <Route exact path="/ViewAllRoles" element={<ViewAllRoles />} />
          <Route exact path="/updateUser/:id" element={<UpdateUser />} />
          <Route path="/ViewAllTrips" element={<ViewAllTrips />} />

              <Route    path = "/AddBusTimeTable" element = {<AddBusTimeTable/>}/>    
              <Route    path = "/ViewAllTimeTable" element = {<ViewAllTimeTable/>}/>    
              <Route    path = "/UpdateBusTimeTable/:id" element = {<UpdateBusTimeTable/>}/> 
              <Route    path = "/C_ViewBusTimeTable" element = {<C_ViewBusTimeTable/>}/>   
              <Route    path = "/AppointDrivers" element = {<AppointDrivers/>}/>  
              <Route    path = "/ViewAllAppoints" element = {<ViewAllAppoints/>}/>  
              <Route    path = "/D_ViewAllAppoints" element = {<D_ViewAllAppoints/>}/>  
              <Route    path = "/UpdateDriverAppoints/:id" element = {<UpdateDriverAppoints/>}/> 
           

          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
