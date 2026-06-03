import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Modern from "../assets/Modern.jpg";
import ModernVillaA from "../assets/ModernVillaA.jpg";
import ModernVila from "../assets/ModernVila.jpg";
import Simple from "../assets/Simple.jpg";
import SimpleA from "../assets/SimpleA.jpg";
import SimpleB from "../assets/SimpleB.jpg";
import Luxury from "../assets/Luxury.jpg";
import LuxuryA from "../assets/LuxuryA.jpg";
import LuxuryB from "../assets/LuxuryB.jpg";

function Designs() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const designs = [
    {title: "Modern Villa A",downloads: 234,category: "Modern",image: Modern,},
    {title: "Simple Family Home",downloads: 189,category: "Simple",image: Simple,},
    {title: "Luxury Estate Plan",downloads: 456,category: "Luxury",image: Luxury,},
    {title: "Modern Villa B",downloads: 234,category: "Modern",image: ModernVila,},
    {title: "Simple House A",downloads: 189,category: "Simple",image: SimpleA,},
    {title: "Luxury House A",downloads: 456,category: "Luxury",image: LuxuryA,},
    {title: "Modern Villa C",downloads: 234,category: "Modern",image: ModernVillaA,},
    {title: "Simple House B",downloads: 189,category: "Simple",image: SimpleB,},
    {title: "Luxury House B",downloads: 456,category: "Luxury",image: LuxuryB,},
  ];

  return (
    <div>
      <h2>Design Management</h2>
      <p style={{ color: "gray" }}>
        Manage AI-generated designs and templates.
      </p>
      {/* Search + Filters + AI Button */}
      <div style={searchBox}>
        <div style={leftSection}>
          <input
            type="text"
            placeholder="Search designs..."
            style={inputStyle}
          />
          <div style={filterBtns}>
            <Link to="/AdminHome/Designs">
              <button style={activeFilter}>All</button>
            </Link>
            <Link to="/AdminHome/Designs/Simple">
              <button style={filter}>Simple</button>
            </Link>
            <Link to="/AdminHome/Designs/Modern">
              <button style={filter}>Modern</button>
            </Link>
            <Link to="/AdminHome/Designs/Luxury">
              <button style={filter}>Luxury</button>
            </Link>
            <Link to="/AdminHome/Designs/2D-Designs">
              <button style={filter}>2D Designs</button>
            </Link>
            <Link to="/AdminHome/Designs/3D-Designs">
              <button style={filter}>3D Designs</button>
            </Link>
          </div>
        </div>

        <button
          style={aiButton}
          onClick={() => setShowModal(true)}
        >
           Generate AI Design
        </button>
      </div>

      {/* AI Modal */}
      {showModal && (
        <div style={modalOverlay}>
          <div style={modalContent}>
           <h1
  style={{
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "25px",
    fontWeight: "700",
  }}
>
  House Details
</h1>
            <div style={detailsContainer}>

  <div style={row}>
    <div style={labelBox}>Area Size</div>
    <input type="text" placeholder="sq ft" style={valueBox} />
  </div>

  <div style={row}>
    <div style={labelBox}>Bedroom</div>
    <input type="number" placeholder="Enter" style={valueBox} />
  </div>

  <div style={row}>
    <div style={labelBox}>Washroom</div>
    <input type="number" placeholder="Enter" style={valueBox} />
  </div>

  <div style={row}>
    <div style={labelBox}>Kitchen</div>
    <input type="number" placeholder="Enter" style={valueBox} />
  </div>

  <div style={row}>
    <div style={labelBox}>Lounge</div>
    <input type="number" placeholder="Enter" style={valueBox} />
  </div>

  <div style={row}>
    <div style={labelBox}>Drawing Room</div>
    <input type="number" placeholder="Enter" style={valueBox} />
  </div>

  <div style={row}>
    <div style={labelBox}>Estimated Budget</div>
    <input type="text" placeholder="Enter Budget" style={valueBox} />
  </div>

</div>
            <textarea
              placeholder="Description"
              style={textareaStyle}
            />

            <div style={buttonRow}>
              <button
                style={cancelBtn}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button style={generateBtn}>
                Generate Design
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cards */}
      <div style={cardContainer}>
        {designs.map((d, index) => (
          <div key={index} style={card}>
            <div style={imageBox}>
              <img
                src={d.image}
                alt={d.title}
                style={cardImage}
              />
            </div>

            <div style={{ padding: "8px" }}>
              <div style={titleRow}>
                <h4>{d.title}</h4>

                <span style={getCategoryStyle(d.category)}>
                  {d.category}
                </span>
              </div>

              <p
                style={{
                  color: "gray",
                  fontSize: "13px",
                }}
              >
                {d.downloads} downloads
              </p>

              <div style={bottomRow}>
                <div>
                  <span style={tagBrown}>
                    AI Generated
                  </span>

                 
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Designs;
const searchBox = {
  background: "#fff",
  padding: "15px",
  borderRadius: "8px",
  marginTop: "20px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
};

const leftSection = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const inputStyle = {
  padding: "10px",
  width: "300px",
  borderRadius: "10px",
  border: "1px solid #ddd",
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

const aiButton = {
  background: "#6D4D35",
  color: "#fff",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
};

const cardContainer = {
  display: "flex",
  gap: "20px",
  marginTop: "25px",
  flexWrap: "wrap",
};

const card = {
  width: "300px",
  background: "#fff",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const imageBox = {
  height: "140px",
  background: "#f5f5f5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const cardImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const titleRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const bottomRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "10px",
};

const tagBrown = {
  background: "#e6f4ff",
  color: "#6D4D35",
  padding: "5px 10px",
  borderRadius: "10px",
  fontSize: "12px",
};

const tagGray = {
  background: "#f1f1f1",
  padding: "5px 10px",
  borderRadius: "10px",
  fontSize: "12px",
};

/* Modal */

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalContent = {
  background: "#fff",
  width: "850px",
  maxWidth: "95%",
  borderRadius: "20px",
  padding: "30px",
  maxHeight: "90vh",
  overflowY: "auto",
};

const formGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px",
};

const field = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
};

const textareaStyle = {
  width: "100%",
  height: "120px",
  marginTop: "25px",
  borderRadius: "12px",
  border: "2px solid #7A5A42",
  padding: "15px",
  resize: "none",
  fontSize: "15px",
  boxSizing: "border-box",
};

const buttonRow = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
  marginTop: "20px",
};

const cancelBtn = {
  padding: "10px 20px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
};

const generateBtn = {
  padding: "10px 20px",
  borderRadius: "10px",
  border: "none",
  background: "#6D4D35",
  color: "#fff",
  cursor: "pointer",
};
const detailsContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const row = {
  display: "flex",
  gap: "15px",
};

const labelBox = {
  width: "220px",
  padding: "14px",
  border: "2px solid #7A5A42",
  borderRadius: "12px",
  fontWeight: "600",
  background: "#fafafa",
  display: "flex",
  alignItems: "center",
};

const valueBox = {
  flex: 1,
  padding: "14px",
  border: "2px solid #7A5A42",
  borderRadius: "12px",
  fontSize: "15px",
  outline: "none",
};

const getCategoryStyle = (category) => {
  if (category === "Modern") {
    return {
      background: "#e6f0ff",
      color: "#0d6efd",
      padding: "5px 10px",
      borderRadius: "10px",
    };
  }

  if (category === "Simple") {
    return {
      background: "#e6fff2",
      color: "#28a745",
      padding: "5px 10px",
      borderRadius: "10px",
    };
  }

  return {
    background: "#fff3cd",
    color: "#d39e00",
    padding: "5px 10px",
    borderRadius: "10px",
  };
};