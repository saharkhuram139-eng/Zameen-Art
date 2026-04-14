import { Link, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import Users from "./Users";
import Architects from "./Architects";
import Contractors from "./Contractors";
import Designs from "./Designs";
import Payments from "./Payments";
import { MdDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaPenNib } from "react-icons/fa";
import { HiBuildingStorefront } from "react-icons/hi2";
import { SiAffinitydesigner } from "react-icons/si";
import { MdPayment } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

function AdminHome() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Sidebar */}
      <div style={{
        width: "220px",
        background: "#315385",
        color: "white",
        padding: "20px"
      }}>
        <h3 style={{color:"#F48B3E"}}>ZameenArt</h3>

        <Link to="/AdminHome/Dashboard" style={menuItem}><MdDashboard /> Dashboard</Link>
        <Link to="/AdminHome/Users" style={menuItem}><FiUsers /> Users</Link>
        <Link to="/AdminHome/Architects" style={menuItem}><FaPenNib /> Architects</Link>
        <Link to="/AdminHome/Contractors" style={menuItem}><HiBuildingStorefront /> Contractors</Link>
        <Link to="/AdminHome/Designs" style={menuItem}><SiAffinitydesigner /> Designs</Link>
        <Link to="/AdminHome/Payments" style={menuItem}><MdPayment /> Payments</Link>
      </div>

      {/* Right Side */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Header */}
       <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
          background: "#fff",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>

  {/* 🔍 Search Bar */}
  <input
    type="text"
    placeholder="Search users, architects, projects..."
    style={{
      width: "350px",
      padding: "10px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      outline: "none"
    }}
  />

  {/* 👤 Right Side (Icons + User) */}
  <div style={{
    display: "flex",
    alignItems: "right",
    gap: "15px"
  }}>

    {/*  Dark mode icon */}
    <IoMoonOutline style={iconStyle}/>
    {/*  Notification */}
    <IoIosNotificationsOutline style={iconStyle}/>

     
    </div>

    {/* 👤 User Info */}
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      width:"140px"
    }}>

      {/* Profile Circle */}
      <div style={{
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        background: "#e0ecff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        👤
      </div>
      {/* Name + Email */}
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

        {/* Page Content */}
        <div style={{ padding: "20px"}}>
          <Routes>
            <Route path="/" element={<Navigate to="/AdminHome/Dashboard" />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Users" element={<Users />} />
            <Route path="Architects" element={<Architects />} />
            <Route path="Contractors" element={<Contractors />} />
            <Route path="Designs" element={<Designs />} />
            <Route path="Payments" element={<Payments />} />
          </Routes>
        </div>
       
      </div>

    
  );
}
const menuItem = {
  display: "block",
  padding: "12px",
  color: "white",
  textDecoration: "none",
  marginBottom: "10px",
  borderRadius: "8px"
};
const iconStyle = {
  fontSize: "18px",
  cursor: "pointer"
};

export default AdminHome;