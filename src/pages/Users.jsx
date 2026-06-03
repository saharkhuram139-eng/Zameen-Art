import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { MdBlockFlipped } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
function Users() {
  const users = [
    {name: "Ahmed Khan", email: "ahmed@mail.com", date: "2024-01-10", status: "Active"} ,
    { name: "Sara Ali", email: "sara@mail.com", date: "2024-01-08", status: "Active" },
    { name: "Usman Tariq", email: "usman@mail.com", date: "2024-01-05", status: "Blocked" },
    { name: "Fatima Noor", email: "fatima@mail.com", date: "2024-01-03", status: "Active" },
    { name: "Hassan Raza", email: "hassan@mail.com", date: "2024-01-01", status: "Pending" },
    {name: "Ahmed Khan", email: "ahmed@mail.com", date: "2024-01-10", status: "Active"},
    {name: "Ahmed Khan", email: "ahmed@mail.com", date: "2024-01-10", status: "Active"},
    {name: "Ahmed Khan", email: "ahmed@mail.com", date: "2024-01-10", status: "Pending"},
    {name: "Ahmed Khan", email: "ahmed@mail.com", date: "2024-01-10", status: "Blocked"}
  ];

  return (
    <div>
      {/*Title*/}
      <h2>User Management</h2>
      <p style={{ color: "gray" }}>
        Manage all registered users on ZameenArt.
      </p>
      {/*Seatch box*/}
      <div style={searchBox}>
        <input
          type="text"
          placeholder="Search users by name..."
          style={inputStyle}/>
      </div>
      {/*Table*/}
      <div style={tableContainer}>
        <table style={table}>
          <thead>
              <tr style={theadRow}>
                <th>Name</th>
                <th>Email</th>
                <th>Joined</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} style={row}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.date}</td>
                {/* Status */}
                <td>
                  <span style={{
                    ...statusStyle,
                    background: user.status === "Active" ? "#d4fBeB" : user.status ==="Blocked" ? "#ffd6d6" :  "#fff3cd",
                    color: user.status === "Active" ? "#green" : user.status === "Blocked" ? "#red" : "#orange"
                 }}>
                   ● {user.status}
                  </span>
                </td>
                {/* Actions */}
                <td  style={{ display: "flex", gap: "10px" }}>
                 <IoEyeOutline style={{ color: "#007bff", cursor: "pointer" }}/>
                 <MdBlockFlipped style={{ color:"#d99624" , cursor: "pointer"}}/>
                 <RiDeleteBin6Line style={{ color: "#dc3545", cursor: "pointer" }} />
                 

                </td>
              </tr>
           ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users

const searchBox ={
  background:"#fff",
  padding: "10px",
  borderRadius: "8px",
  marginTop: "20px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
};
const inputStyle = {
  width: "300px",
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  outline: "none"
};
const tableContainer = {
  background: "#fff",
  marginTop: "20px",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
};
const table ={
   width: "100%",
  borderCollapse: "collapse",
  tableLayout: "fixed" 
};
const theadRow = {
  background: "#f5f7fb",
  textAlign: "left"
};
const row = {
  borderBottom: "1px solid #eee",
  height: "60px" 
};
const statusStyle = {
  padding: "10px 20px",
  borderRadius: "20px",
  fontSize: "13px"
};

