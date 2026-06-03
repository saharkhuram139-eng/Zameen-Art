import React from "react";
import {
  FiSearch,
  FiBell,
  FiUser,
  FiSettings,
  FiCreditCard,
  FiShield,
} from "react-icons/fi";

function Settings() {
  return (
    <div style={page}>

      {/* Title */}
      <h1 style={title}>Settings</h1>

      {/* Main Grid */}
      <div style={grid}>

        {/* LEFT SIDE */}
        <div>

          {/* General Settings */}
          <div style={card}>
            <div style={cardHeader}>
              <FiSettings />
              <h3>General Settings</h3>
            </div>

            <div style={cardBody}>
              <label>App Name</label>
              <input type="text" value="ZameenArt" style={input} />

              <label>Support Email</label>
              <input
                type="text"
                value="support@zameenart.com"
                style={input}
              />

              <label>Contact Phone</label>
              <input
                type="text"
                value="+92 312 3456789"
                style={input}
              />

              <button style={saveBtn}>Save Settings</button>
            </div>
          </div>

          {/* Payment Settings */}
          <div style={card}>
            <div style={cardHeader}>
              <FiCreditCard />
              <h3>Payment Settings</h3>
            </div>

            <div style={cardBody}>
              <label>JazzCash Number</label>
              <input type="text" value="0312-1234567" style={input} />

              <label>EasyPaisa Number</label>
              <input type="text" value="0345-7654321" style={input} />

              <label>Enable Payment Verification</label>
              <input type="text" value="PKR 5,000" style={input} />

              <button style={saveBtn}>Save Settings</button>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* Commission Settings */}
          <div style={card}>
            <div style={cardHeader}>
              <FiCreditCard />
              <h3>Commission Settings</h3>
            </div>

            <div style={cardBody}>
              <label>Default Commission %</label>
              <input type="text" value="20%" style={input} />

              <label>Premium Architect Commission %</label>
              <input type="text" value="10%" style={input} />

              <label>Minimum Withdrawal Amount</label>
              <input type="text" value="PKR 5,000" style={input} />

              <button style={saveBtn}>Save Settings</button>
            </div>
          </div>

          {/* Security Settings */}
          <div style={card}>
            <div style={cardHeader}>
              <FiShield />
              <h3>Security Settings</h3>
            </div>

            <div style={cardBody}>
              <label>New Admin Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                style={input}
              />

              <label>Confirm New Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                style={input}
              />

              <label>Two-Factor Authentication</label>

              <div style={toggle}>ok</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Settings;

/* STYLES */

const page = {
  background: "#f5f7fb",
  minHeight: "100vh",
  padding: "25px",
};

const title = {
  marginBottom: "25px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "25px",
};

const card = {
  background: "#fff",
  borderRadius: "18px",
  overflow: "hidden",
  marginBottom: "25px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const cardHeader = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "18px 20px",
  borderBottom: "1px solid #eee",
  fontWeight: "bold",
};

const cardBody = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
};

const input = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "15px",
};

const saveBtn = {
  marginTop: "10px",
  padding: "12px",
  border: "none",
  borderRadius: "10px",
  background: "#6D4D35",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
};

const toggle = {
  width: "60px",
  height: "32px",
  borderRadius: "20px",
  background: "#cbd5e1",
};