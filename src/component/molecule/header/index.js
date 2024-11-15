import React, { useRef, useState } from "react";
const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const reviewRef = useRef(null);
  const contactRef = useRef(null);

  const [hoveredButton, setHoveredButton] = useState(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          fontSize: 10,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0px",
          backgroundColor: "#fffff", // Background color for the navbar
          color: "maroon",
          zIndex: 1000, // Ensures header stays on top of other content
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="./logo.svg"
            alt="Logo"
            style={{
              width: "40px",
              height: "40px",
              marginRight: "25px",
              marginLeft: "15px",
            }}
          />
          <span
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "maroon" }}
          >
            OtoRelax
          </span>
        </div>

        <nav style={{ display: "flex", gap: "20px" }}>
          <button
            onClick={() => scrollToSection(homeRef)}
            className="navbar-button" // Apply custom font here
            onMouseEnter={() => setHoveredButton("home")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="navbar-button" // Apply custom font here
            onMouseEnter={() => setHoveredButton("about")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection(galleryRef)}
            className="navbar-button" // Apply custom font here
            onMouseEnter={() => setHoveredButton("gallery")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            REVIEW
          </button>
          <button
            onClick={() => scrollToSection(reviewRef)}
            className="navbar-button" // Apply custom font here
            onMouseEnter={() => setHoveredButton("review")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            SERVICES
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="navbar-button" // Apply custom font here
            onMouseEnter={() => setHoveredButton("contact")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            CONTACT
          </button>
        </nav>
      </header>

      {/* Placeholder to create space under sticky header */}
      <div style={{ height: "60px" }}></div>

      {/* Sections */}
      <div ref={homeRef} style={sectionStyle}>
        Home Section
      </div>
      <div ref={aboutRef} style={sectionStyle}>
        About Section
      </div>
      <div ref={galleryRef} style={sectionStyle}>
        Gallery Section
      </div>
      <div ref={reviewRef} style={sectionStyle}>
        Review Section
      </div>
      <div ref={contactRef} style={sectionStyle}>
        Contact Section
      </div>
    </div>
  );
};

const sectionStyle = {
  padding: "10px 0",
  background: "#f0f0f0",
  borderBottom: "1px solid #ccc",
};

export default App;
