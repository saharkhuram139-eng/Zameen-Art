
import React, { useState } from "react";
import { FaUsers } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { TfiTimer } from "react-icons/tfi";
import { CiMoneyCheck1 } from "react-icons/ci";


function Architects() {
  const architects = [
  {name: "Ali Raza",specialization: "Modern",projects: 12,fee: "PKR 5,000",commission: "20%",earnings: "PKR 4,000",wallet: "PKR 48,000",status: "Approved",},
  {name: "Ahmed Khan",specialization: "Luxury",projects: 8,fee: "PKR 5,000",commission: "20%",earnings: "PKR 4,800",wallet: "PKR 44,800",status: "Approved",},
  {name: "Sara Ali",specialization: "Simple",projects: 15,fee: "PKR 4,000",commission: "20%",earnings: "PKR 3,200",wallet: "PKR 48,000",status: "Pending",},
  {name: "Ali Raza",specialization: "Modern",projects: 12,fee: "PKR 5,000",commission: "20%",earnings: "PKR 4,000",wallet: "PKR 48,000",status: "Approved",},
  {name: "Ahmed Khan",specialization: "Luxury",projects: 8,fee: "PKR 5,000",commission: "20%",earnings: "PKR 4,800",wallet: "PKR 44,800",status: "Approved",},
  {name: "Sara Ali",specialization: "Simple",projects: 15,fee: "PKR 4,000",commission: "20%",earnings: "PKR 3,200",wallet: "PKR 48,000",status: "Pending",},
  {name: "Ali Raza",specialization: "Modern",projects: 12,fee: "PKR 5,000",commission: "20%",earnings: "PKR 4,000",wallet: "PKR 48,000",status: "Approved",},
  {name: "Ahmed Khan",specialization: "Luxury",projects: 8,fee: "PKR 5,000",commission: "20%",earnings: "PKR 4,800",wallet: "PKR 44,800",status: "Approved",},
  {name: "Sara Ali",specialization: "Simple",projects: 15,fee: "PKR 4,000",commission: "20%",earnings: "PKR 3,200",wallet: "PKR 48,000",status: "Pending",},
];
  const [selectedArchitect, setSelectedArchitect] = useState(null);
  return (
    <>
<div style={statsContainer}>
  <div style={statCard}>
    <h3><FaUsers /> Total</h3>
    <p>120 Architects</p>
  </div>
  <div style={statCard}>
    <h3><TiTick />Approved</h3>
    <p>98 Projects</p>
  </div>
  <div style={statCard}>
    <h3><TfiTimer /> Pending</h3>
    <p>22TotalEarnings</p>
  </div>

  <div style={statCard}>
    <h3><CiMoneyCheck1 />PKR 140K</h3>
    <p>Total Earnings</p>
  </div>
</div>
<div style={{ display: "flex",gap: "25px",alignItems: "flex-start",marginTop: "20px",}}>
    {/* Table Section */}
    <div style={tableCard}>
      <table style={table}>
        <thead>
          <tr>
            <th>Architect</th>
            <th>Specialization</th>
            <th>Projects</th>
            <th>Fee</th>
            <th>Commission</th>
            <th>Earnings</th>
            <th>Wallet</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {architects.map((a, i) => (
            <tr key={i}>
              <td>{a.name}</td>
              <td>{a.specialization}</td>
              <td>{a.projects}</td>
              <td>{a.fee}</td>
              <td>{a.commission}</td>
              <td>{a.earnings}</td>
              <td>{a.wallet}</td>

              <td>
                <span
                  style={
                    a.status === "Approved"
                      ? approvedStatus
                      : pendingStatus
                  }
                >
                  {a.status}
                </span>
              </td>

              <td>
                <button style={viewBtn}onClick={() => setSelectedArchitect(a)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Detail Card */}
    {selectedArchitect && (
  <div style={detailCard}>
    
    <div style={cardHeader}>
      <h2 style={{ margin: 0 }}>Architect Details</h2>

      <button
        style={closeBtn}
        onClick={() => setSelectedArchitect(null)}
      >
        ✕
      </button>
    </div>

    <div style={profileBox}>
      <div style={avatar}>
        {selectedArchitect.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>

      <div>
        <h3 style={{ margin: 0 }}>
          {selectedArchitect.name}
        </h3>

        <p style={{ color: "#6b7280" }}>
          {selectedArchitect.specialization}
        </p>
      </div>
    </div>

    <div style={detailRow}>
      <span>Projects</span>
      <b>{selectedArchitect.projects}</b>
    </div>

    <div style={detailRow}>
      <span>Consultation Fee</span>
      <b>{selectedArchitect.fee}</b>
    </div>

    <div style={detailRow}>
      <span>App Commission</span>
      <b>{selectedArchitect.commission}</b>
    </div>

    <div style={detailRow}>
      <span>Architect Earnings</span>
      <b>{selectedArchitect.earnings}</b>
    </div>

    <div style={detailRow}>
      <span>Wallet Balance</span>
      <b>{selectedArchitect.wallet}</b>
    </div>

    <h3 style={{ marginTop: "25px" }}>
      Withdraw History
    </h3>

    <div style={historyCard}>
      <span>12-05-2026</span>
      <b>PKR 10,000</b>
    </div>

    <div style={historyCard}>
      <span>05-05-2026</span>
      <b>PKR 8,000</b>
    </div>

    <div style={btnRow}>
      <button style={approveBtn}>
        Approve Withdraw
      </button>

      <button style={suspendBtn}>
        Suspend
      </button>
    </div>

  </div>
)}

  </div>
  </>
);
}

export default Architects
const statsContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  marginBottom: "25px",
};

const statCard = {
  background: "#fff",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  textAlign: "center",
};
const tableCard = {
  flex: 1,
  background: "#fff",
  borderRadius: "16px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  width: "100%",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const approvedStatus = {
  background: "#dcfce7",
  color: "#15803d",
  padding: "8px 14px",
  borderRadius: "8px",
};

const pendingStatus = {
  background: "#fef3c7",
  color: "#92400e",
  padding: "8px 14px",
  borderRadius: "8px",
};

const viewBtn = {
  background: "#6D4D35",
  color: "#fff",
  border: "none",
  padding: "8px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

const detailCard = {
  background: "#fff",
  padding: "25px",
  borderRadius: "16px",
  width: "350px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  position: "sticky",
  top: "20px",
};

const profileBox = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  marginBottom: "20px",
};

const avatar = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  background: "#e0e7ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "26px",
};

const detailRow = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 0",
  borderBottom: "1px solid #eee",
};

const historyCard = {
  display: "flex",
  justifyContent: "space-between",
  background: "#f8fafc",
  padding: "12px",
  borderRadius: "10px",
  marginTop: "10px",
};

const btnRow = {
  display: "flex",
  gap: "10px",
  marginTop: "20px",
};

const approveBtn = {
  flex: 1,
  background: "#6D4D35",
  color: "#fff",
  border: "none",
  padding: "12px",
  borderRadius: "10px",
};

const suspendBtn = {
  flex: 1,
  background: "#fff",
  color: "#6D4D35",
  border: "1px solid #6D4D35",
  padding: "12px",
  borderRadius: "10px",
};
const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};
const closeBtn = {
  border: "none",
  background: "#fee2e2",
  color: "#6D4D35",
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
};