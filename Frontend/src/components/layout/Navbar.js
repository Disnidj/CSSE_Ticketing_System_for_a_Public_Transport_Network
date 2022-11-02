import React, { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsPersonLinesFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdOutlineChecklistRtl } from "react-icons/md";
import { MdPictureAsPdf } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  let userRole = localStorage.getItem("userRole");

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">

                {/* customer pages */}

                <a
                  style={{
                    display: userRole == "customer" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/dashboard"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  style={{
                    display: userRole == "customer" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  aria-current="page"
                  href="/AddTrip"
                >
                  Reserve Seats For Journeys
                </a>
                <a
                  style={{
                    display: userRole == "customer" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/"
                  aria-current="page"
                >
                  page 3
                </a>
                <a
                  style={{
                    display: userRole == "customer" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  aria-current="page"
                  href="/"
                >
                  page2
                </a>

                {/*  admin Pages */}

                <a
                  style={{
                    display: userRole == "admin" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/dashboard"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  style={{
                    display: userRole == "admin" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/ViewAllTrips"
                  aria-current="page"
                >
                  Pay Station
                </a>
                <a
                  style={{
                    display: userRole == "admin" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/"
                  aria-current="page"
                >
                  page1
                </a>
                <a
                  style={{
                    display: userRole == "admin" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/"
                  aria-current="page"
                >
                  pag3
                </a>
                <a
                  style={{
                    display: userRole == "admin" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/"
                  aria-current="page"
                >
                  page4
                </a>
                <a
                  style={{
                    display: userRole == "admin" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/"
                  aria-current="page"
                >
                  page5
                </a>
                <a
                  style={{
                    display: userRole == "admin" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/ViewAllRoles"
                  aria-current="page"
                >
                  Registered Customers
                </a>
                <a
                  style={{
                    display: userRole == "admin" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  aria-current="page"
                  href="/staffRegister"
                >
                  Employee Registration
                </a>
                <a
                  style={{
                    display: userRole == "admin" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  aria-current="page"
                  href="/"
                >
                  page6
                </a>

                {/*Employee pages*/}
                <a
                  style={{
                    display: userRole == "Employee" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/EmpViewAllAttendance"
                  aria-current="page"
                >
                  View Attendace
                </a>
                <a
                  style={{
                    display: userRole == "Employee" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/EmpViewSalary"
                  aria-current="page"
                >
                  Salary Information
                </a>
                <a
                  style={{
                    display: userRole == "Employee" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/EmpAttendaceMark"
                  aria-current="page"
                >
                  Attendace Mark
                </a>
                <a
                  style={{
                    display: userRole == "Employee" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/EmpLeaveFormCreate"
                  aria-current="page"
                >
                  Leave Application
                </a>
                <a
                  style={{
                    display: userRole == "Employee" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/EmpViewAllLeaves"
                  aria-current="page"
                >
                  View All Leaves
                </a>
              </div>
            </div>
          </div>
          <Link to="/userprofile">
            <button
              className="btn btn-secondary"
              type="submit"
              style={{
                float: "right",
                display: userRole ? "flex" : "none",
                textDecoration: "none",
              }}
            >
              Profile
            </button>
          </Link>
          <button
            onClick={handleSubmit}
            className="btn btn-primary"
            type="submit"
            style={{
              float: "right",
              marginRight: "10px",
              display: userRole ? "flex" : "none",
            }}
          >
            {"Logout"}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;