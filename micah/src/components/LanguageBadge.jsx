import React from 'react'
import { languageIcons } from '../data/languageIcons';


const languageColors = {
  HTML: "#e34c26",
  CSS: "#264de4",
  JavaScript: "#f0db4f",
  Python: "#3772A3",
  MaterializeCSS: "#EE6E73",
  React: "#61dafb",
  Node: "#3c873a",
};

const LanguageBadge = ({ lan }) => {
    const Icons = languageIcons[lan];
    return (
        <span 
        style={{ 
            display: "inline-block", 
            width: "clamp(2.5rem, 1.136rem + 6.82vw, 6.25rem)", 
            paddingTop: "0.25rem", 
            backgroundImage: "linear-gradient(180deg, #fff 0%, rgb(227, 227, 227) 100%)", 
            textAlign: "center", 
            borderRadius: "5px", 
            border: "2px solid #884587",
            fontSize: "1.25rem",
            color: "#884587",
            fontWeight: 700, 
            margin: "0 2px",
        }}>
            {Icons ? <Icons title={lan} /> : lan}
        </span>
    )
}

export default LanguageBadge