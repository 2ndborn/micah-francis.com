import React, { useState } from 'react'
import { languageIcons } from '../data/languageIcons';
import { AnimatePresence, motion } from 'framer-motion';


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
    const [hovered, setHovered] = useState(false);
    const Icons = languageIcons[lan];
    return (
        <div
            style={{ position: "relative", display: "inline-block" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >

            <motion.span
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
                }}
                whileHover={lan}
            >
                {Icons ? <Icons title={lan} /> : lan}
            </motion.span>
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: -12 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{
                            position: "absolute",
                            top: "-1.5rem",
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "#884587",
                            color: "white",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "4px",
                            fontSize: "0.75rem",
                            whiteSpace: "nowrap",
                            pointerEvents: "none",
                            zIndex: 10
                        }}
                    >
                        {lan}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

    )
}

export default LanguageBadge