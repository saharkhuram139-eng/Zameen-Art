import React from "react";
import luxury from "../assets/Luxury.jpg";
import luxuryA from "../assets/LuxuryA.jpg";
import luxuryB from "../assets/LuxuryB.jpg";
import luxuryC from "../assets/LuxuryC.jpg";
import luxuryD from "../assets/LuxuryD.jpg";
import luxuryE from "../assets/LuxuryE.jpg";
import luxuryF from "../assets/LuxuryF.jpg";
import luxuryG from "../assets/LuxuryG.jpg";
import luxuryH from "../assets/LuxuryH.jpg";
import { Link } from "react-router-dom";

function Luxury() {
  const designs = [
    {title: "Luxury Estate Plan",downloads: 456,category: "Luxury",image: luxury},
    {title: "Royal Mansion",downloads: 520,category: "Luxury",image: luxuryA},
    {title: "Premium Palace Villa",downloads: 610,category: "Luxury",image: luxuryB},
    {title: "Luxury Estate Plan",downloads: 456,category: "Luxury",image: luxuryC},
    {title: "Royal Mansion",downloads: 520,category: "Luxury",image: luxuryD},
    {title: "Premium Palace Villa",downloads: 610,category: "Luxury",image: luxuryE},
    {title: "Luxury Estate Plan",downloads: 456,category: "Luxury",image: luxuryF},
    {title: "Royal Mansion",downloads: 520,category: "Luxury",image: luxuryG},
    {title: "Premium Palace Villa",downloads: 610,category: "Luxury",image: luxuryH},
  ];

  return (
    <div>
      <h2 style={heading}>Luxury Designs</h2>
      <div style={searchBox}>
      <input
        type="text"
        placeholder="Search designs..."
        style={inputStyle}
      />

  <div style={filterBtns}>
  <Link to="/AdminHome/Designs"><button style={activeFilter}>All</button></Link>
  <Link to="/AdminHome/Designs/Simple"><button style={filter}>Simple</button></Link>
  <Link to="/AdminHome/Designs/Modern"><button style={filter}>Modern</button></Link>
  <Link to="/AdminHome/Designs/Luxury"><button style={filter}>Luxury</button></Link>
  </div>
    </div>

      <div style={cardContainer}>
        {designs.map((d, index) => (
          <div key={index} style={card}>
            
            {/* Image */}
            <div style={imageBox}>
           <img src={d.image} alt={d.title} style={cardImage} />
          </div>

            {/* Content */}
            <div style={content}>
              
              {/* Title + Category */}
              <div style={titleRow}>
                <h2 style={title}>{d.title}</h2>

                <span style={categoryStyle}>
                  {d.category}
                </span>
              </div>

              {/* Downloads */}
              <p style={downloadsText}>
                {d.downloads} downloads
              </p>

              {/* Tags */}
              <div style={tagRow}>
                <span style={aiTag}>AI Generated</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Luxury;
const heading = {
  fontSize: "32px",
  marginBottom: "25px",
};
const searchBox ={
  background: "#fff",
  padding: "10px",
  borderRadius: "8px",
  marginTop: "20px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};
const inputStyle = {
  padding: "10px",
  width: "250px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  marginRight: "10px",
};
const filterBtns = {
  display: "flex",
  gap: "10px",
};
const activeFilter = {
  padding: "8px 15px",
  borderRadius: "10px",
  border: "none",
  background: "#6D4D35",
  color: "#fff",
  cursor: "pointer",
};
const filter = {
  padding: "8px 15px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
};

const cardContainer = {
  display: "flex",
  gap: "30px",
  flexWrap: "wrap",
};

const card = {
  width: "300px",
  background: "#fff",
  borderRadius: "25px",
  overflow: "hidden",
  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
};

const imageBox = {
 height: "260px",   // pehle 140px thi
  width: "100%",
  overflow: "hidden",
};

const logoText = {
  fontSize: "60px",
  color: "#9cb0c7",
  fontWeight: "300",
};

const content = {
  padding: "15px",   // pehle 9px tha
};

const titleRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const title = {
  fontSize: "22px",  // thora chota
  fontWeight: "700",
  margin: 0,
};

const downloadsText = {
   color: "#6c757d",
  fontSize: "16px",
  marginTop: "8px",
};

const tagRow = {
 display: "flex",
  gap: "10px",
  marginTop: "14px",
};

const aiTag = {
  background: "#e8f3ff",
  color: "#0d6efd",
  padding: "10px 16px",
  borderRadius: "14px",
  fontSize: "18px",
};
const categoryStyle = {
  background: "#fff3cd",
  color: "#d39e00",
  padding: "10px 18px",
  borderRadius: "16px",
  fontSize: "18px",
};
const cardImage = {
   width: "100%",
  height: "100%",
  objectFit: "cover",
};