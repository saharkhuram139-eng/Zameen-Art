import { Link, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import Users from "./Users";
import Freelancer from "./Freelancer";
import Architects from "./Architects";
import Designs from "./Designs";
import Simple from "./Simple";
import Modern from "./Modern";
import Luxury from "./Luxury";
import Settings from "./Settings";


import { MdDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { SiFreelancer } from "react-icons/si";
import { FaPenNib } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import logo from "../assets/logo.jpg";


function AdminHome() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Sidebar */}
      <div style={sidebar}>
        <div style={logoContainer}>
        <img src={logo} width={50} height={50} alt="Logo" />
          <h2 style={{ color: "#F8C97F", margin: 0 ,fontSize: "26px",fontWeight: "bold "}}>
           ZameenArt
          </h2>
        </div>
        
        <Link to="/AdminHome/Dashboard" style={menuItem}><MdDashboard style={{ color:"#E9D7CD "}}/>  Dashboard</Link>
        <Link to="/AdminHome/Users" style={menuItem}><FiUsers style={{ color:"#E9D7CD "}}/>  Users</Link>
        <Link to="/AdminHome/Freelancer" style={menuItem}><SiFreelancer style={{ color:"#E9D7CD "}} />  Freelancers</Link>
        <Link to="/AdminHome/Architects" style={menuItem}><FaPenNib style={{ color:"#E9D7CD "}}/>  Architects</Link>
        <Link to="/AdminHome/Designs" style={menuItem}><SiAffinitydesigner style={{ color:"#E9D7CD "}}/>  Designs</Link>
        <Link to="/AdminHome/Settings" style={menuItem}><IoMdSettings style={{ color:"#E9D7CD "}}/>  Settings</Link>
      </div>
      {/* RIGHT SIDE */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {/* HEADER */}
        <div style={header}>
      {/* Search */}
          <input
            type="text"
            placeholder="Search users, architects, projects..."
            style={search}
          />

      {/* Right Section */}
          <div style={rightHeader}>

            <IoMoonOutline style={iconStyle} />
            <IoIosNotificationsOutline style={iconStyle} />

            {/* User */}
            <div style={userBox}>
              <div style={avatar}>👤</div>

              <div>
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                  Admin User
                </div>
                <div style={{ fontSize: "12px", color: "gray" }}>
                  admin@zameenart.com
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CONTENT */}
        <div style={{ padding: "20px", background: "#f5f7fb", flex: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/AdminHome/Dashboard" />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Users" element={<Users />} />
            <Route path="Freelancer" element={<Freelancer />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="Architects" element={<Architects />} />
            <Route path="Designs" element={<Designs />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="Designs/Simple" element={<Simple />} />
            <Route path="Designs/Modern" element={<Modern />} />
            <Route path="Designs/Luxury" element={<Luxury />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default AdminHome;
const logoContainer = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "30px"
};
const sidebar = {
  width: "250px",
  background: "#6D4D35",
  color: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column"
};

const menuItem = {
  display: "block",
  padding: "12px",
  color: "white",
  textDecoration: "none",
  marginBottom: "10px",
  borderRadius: "8px"
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 20px",
  background: "#fff",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};

const search = {
  width: "350px",
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  outline: "none"
};

const rightHeader = {
  display: "flex",
  alignItems: "center",
  gap: "15px"
};

const iconStyle = {
  fontSize: "18px",
  cursor: "pointer"
};

const userBox = {
  display: "flex",
  alignItems: "center",
  gap: "10px"
};

const avatar = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  background: "#e0ecff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};