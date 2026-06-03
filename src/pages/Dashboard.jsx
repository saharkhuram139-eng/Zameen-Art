import React from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { FaArrowTrendUp } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import ArchitectIcon from "../assets/architect.jpg";
import ContractorIcon from "../assets/contractor.jpg";
import ActiveprojectIcon from "../assets/activeproject.jpg";
import TotaluserIcon from "../assets/totaluser.jpg";

const userData = [
  { month: "Jan", users: 120 },
  { month: "Feb", users: 180 },
  { month: "Mar", users: 250 },
  { month: "Apr", users: 310 },
  { month: "May", users: 420 },
  { month: "Jun", users: 380 },
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 5800 },
  { month: "Mar", revenue: 7200 },
  { month: "Apr", revenue: 8900 },
  { month: "May", revenue: 11300 },
  { month: "Jun", revenue: 10400 },
];

function Dashboard() {
  return (
    <div>
      <h2>Dashboard Overview</h2>
      <p style={{ color: "gray" }}>
        Welcome back! Here's what's happening on ZameenArt.
      </p>

      {/* CARDS */}
      <div style={cardContainer}>

        <div style={card}>
          <div style={cardIcon}>
            <p style={titleText}>Total Users</p>
            <img src={TotaluserIcon} width={120} height={120} alt="Total Users"/>
          </div>

          <h2>2,847</h2>
          <span style={{ color: "green" }}>+12.5% from last month</span>
        </div>

        {/* Architects CARD FIXED */}
        <div style={card}>
          <div style={cardIcon}>
            <p style={titleText}>Architects</p>
            <img src={ArchitectIcon}width={120}height={120}alt="Architect"/>
          </div>

          <h2>184</h2>
          <span style={{ color: "green" }}>+8 new this week</span>
        </div>

       <div style={card}>
          <div style={cardIcon}>
            <p style={titleText}>Contractors</p>
            <img src={ContractorIcon}width={120} height={120}alt="Contractor"/>
          </div>

          <h2>96</h2>
          <span style={{ color: "green" }}>+3 pending approval</span>
        </div>

        <div style={card}>
          <div style={cardIcon}>
            <p style={titleText}>Active Projects</p>
            <img
              src={ActiveprojectIcon}
              width={120}
              height={120}
              alt="Architect"
            />
          </div>

          <h2>312</h2>
          <span style={{ color: "green" }}>+18.2% growth</span>
        </div>

      </div>
      {/* CHARTS SECTION */}
<div style={chartContainer}>

  {/* USER GROWTH */}
  <div style={chartCard}>

    <div style={chartHeader}>
      <div>
        <h3 style={{ margin: 0 }}>User Growth</h3>
        <p style={chartSubtext}>Monthly registrations</p>
      </div>

      <FaArrowTrendUp color="#22c55e" size={22} />
    </div>

    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={userData}>

        <defs>
          <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" vertical={false} />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="users"
          stroke="#3b82f6"
          fillOpacity={1}
          fill="url(#colorUsers)"
          strokeWidth={3}
        />

      </AreaChart>
    </ResponsiveContainer>

  </div>

  {/* REVENUE */}
  <div style={chartCard}>

    <div style={chartHeader}>
      <div>
        <h3 style={{ margin: 0 }}>Revenue</h3>
        <p style={chartSubtext}>Monthly earnings (PKR)</p>
      </div>

      <MdAttachMoney color="#f59e0b" size={26} />
    </div>

    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={revenueData}>

        <CartesianGrid strokeDasharray="3 3" vertical={false} />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="revenue"
          fill="#06b6d4"
          radius={[8, 8, 0, 0]}
        />

      </BarChart>
    </ResponsiveContainer>

  </div>

</div>

         {/* 🔥 NEW SECTION (Activity + Approvals) */}
      <div style={bottomContainer}>

        {/* Recent Activity */}
        <div style={bottomBox}>
          <h3>Recent Activity</h3>

          <div style={activityItem}>
            <div style={circleIcon}>👤</div>
            <div>
              <b>New architect registered</b>
              <p style={smallText}>Ahmed Khan</p>
            </div>
            <span style={time}>2 min ago</span>
          </div>

          <div style={activityItem}>
            <div style={circleIcon}>📄</div>
            <div>
              <b>Design template uploaded</b>
              <p style={smallText}>Sara Ali</p>
            </div>
            <span style={time}>15 min ago</span>
          </div>

          <div style={activityItem}>
            <div style={circleIcon}>✔️</div>
            <div>
              <b>Contractor approved</b>
              <p style={smallText}>Bilal Construction</p>
            </div>
            <span style={time}>1 hr ago</span>
          </div>
          <div style={activityItem}>
            <div style={circleIcon}>📄</div>
            <div>
              <b>Payment processed</b>
              <p style={smallText}>Arch Studio</p>
            </div>
            <span style={time}>2 hr ago</span>
          </div>
          <div style={activityItem}>
            <div style={circleIcon}>📄</div>
            <div>
              <b>New project created</b>
              <p style={smallText}>Fatima Noor</p>
            </div>
            <span style={time}>3 hr ago</span>
          </div>
          <div style={activityItem}>
            <div style={circleIcon}>📄</div>
            <div>
              <b>User verification pending</b>
              <p style={smallText}>Usman Tariq</p>
            </div>
            <span style={time}>5 hr ago</span>
          </div>

        </div>

        {/* Pending Approvals */}
        <div style={bottomBox}>
          <h3>Pending Approvals</h3>

          <div style={approvalItem}>
            <div>
              <b>Ali Raza</b>
              <p style={smallText}>Architect</p>
            </div>
            <span style={pending}>Pending</span>
          </div>

          <div style={approvalItem}>
            <div>
              <b>Green Build Co.</b>
              <p style={smallText}>Contractor</p>
            </div>
            <span style={pending}>Pending</span>
          </div>

          <div style={approvalItem}>
            <div>
              <b>Modern Designs LLC</b>
              <p style={smallText}>Architect</p>
            </div>
            <span style={pending}>Pending</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;

const cardContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  marginTop: "20px"
};

const card = {
  background: "#fff",
  borderRadius: "20px",
  padding: "20px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
};

const cardIcon = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px"
};

const titleText = {
  margin: 0,
  fontSize: "16px",
  fontWeight: "bold"
};

const bottomContainer = {
  display: "flex",
  gap: "20px",
  marginTop: "30px",
  flexWrap: "wrap"
};

const bottomBox = {
  background: "#fff",
  padding: "20px",
  borderRadius: "15px",
  width: "100%",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
};

const activityItem = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "15px"
};

const circleIcon = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  background: "#e6f0ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "10px"
};

const smallText = {
  fontSize: "12px",
  color: "gray",
  margin: 0
};

const time = {
  fontSize: "12px",
  color: "gray"
};

const approvalItem = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "15px",
  padding: "10px",
  border: "1px solid #eee",
  borderRadius: "10px"
};

const pending = {
  background: "#fff3cd",
  color: "#856404",
  padding: "5px 10px",
  borderRadius: "10px",
  fontSize: "12px"
};
const chartContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
  gap: "20px",
  marginTop: "30px",
};

const chartCard = {
  background: "#fff",
  borderRadius: "20px",
  padding: "20px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
};

const chartHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const chartSubtext = {
  color: "gray",
  marginTop: "5px",
  fontSize: "14px",
};