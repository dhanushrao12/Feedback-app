import React from "react";

const Header = ({ text, bgColor, textColor }) => {
  const headerStyle = { backgroundColor: bgColor, color: textColor };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};
Header.defaultProps = {
  text: "Feedback Form",
  bgColor: "rgba(0,0,0,0.8)",
  textColor: "#ff6a95",
};

export default Header;
