import React from "react";
import simple from "../assets/Simple.jpg";
import simpleA from "../assets/SimpleA.jpg";
import simpleB from "../assets/SimpleB.jpg";
import simpleC from "../assets/SimpleC.jpg";
import simpleD from "../assets/SimpleD.jpg";
import simpleE from "../assets/SimpleE.jpg";
import simpleF from "../assets/SimpleF.jpg";
import simpleG from "../assets/SimpleG.jpg";
import simpleH from "../assets/SimpleH.jpg";
import { Link } from "react-router-dom";


function Simple() {
  const designs = [
    {title: "Simple Family Home",downloads: 189,category: "Simple",image: simple },
    {title: "Minimal House Design",downloads: 245,category: "Simple",image: simpleA},
    {title: "Classic Small Villa",downloads: 320,category: "Simple",image: simpleB},
    {title: "Simple Family Home",downloads: 189,category: "Simple",image: simpleC},
    {title: "Minimal House Design",downloads: 245,category: "Simple",image: simpleD},
    {title: "Classic Small Villa",downloads: 320,category: "Simple",image: simpleE},
    {title: "Simple Family Home",downloads: 189,category: "Simple",image: simpleF },
    {title: "Minimal House Design",downloads: 245,category: "Simple",image: simpleG},
    {title: "Classic Small Villa",downloads: 320,category: "Simple",image: simpleH},
  ];
  return (
    <div>
      <h2 style={heading}>Simple Designs</h2>
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
                <span style={categoryStyle}>{d.category}
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

export default Simple;
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
  background: "#dcf8e7",
  color: "#16a34a",
  padding: "10px 18px",
  borderRadius: "16px",
  fontSize: "18px",
};
const cardImage = {
   width: "100%",
  height: "100%",
  objectFit: "cover",
};