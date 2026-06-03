import React from 'react'

function Freelancer() {
  return (
    <div>
        {/*Title*/}
      <h2>Freelancer</h2>
      {/*Seatch box*/}
      <div style={searchBox}>
        <input
          type="text"
          placeholder="Search freelancers by name..."
          style={inputStyle}/>
      </div>
    </div>
  )
}
export default Freelancer
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