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
            width: "clamp(2.5rem, 1.136rem + 6.82vw, 6.25rem)", 
            padding: "0.25rem 0.4rem", 
            backgroundColor: languageColors[lan] || "gray", 
            textAlign: "center", 
            borderRadius: "5px", 
            fontSize: "clamp(0.5rem, 0.318rem + 0.91vw, 1rem)",
            fontWeight: 700, 
            margin: "0 2px"
        }}>
            {lan}
        </span>
    )
}

export default LanguageBadge