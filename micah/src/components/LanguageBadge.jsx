import React from 'react'

const languageColors = {
  HTML: "#e34c26",
  CSS: "#264de4",
  JavaScript: "#f0db4f",
  MaterializeCSS: "#EE6E73",
  React: "#61dafb",
  Node: "#3c873a",
};

const LanguageBadge = ({ lan }) => {
    return (
        <span 
        style={{ 
            display: "inline-block", 
            minWidth: "40px", 
            padding: "0.25rem 0.4rem", 
            backgroundColor: languageColors[lan] || "gray", 
            textAlign: "center", 
            borderRadius: "5px", 
            fontSize: "0.5rem",
            fontWeight: 700, 
            margin: "0 2px"
        }}>
            {lan}
        </span>
    )
}

export default LanguageBadge