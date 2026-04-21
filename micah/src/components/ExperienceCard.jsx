import React, { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styles from '../styles/HomePage.module.css';

const ExperienceCard = ({ ex, setPaused }) => {
    const [showMore, setShowMore] = useState(false);

    const toggle = () => {
        setShowMore(prev => {
            const next = !prev;
            setPaused(next);
            return next;
        })
    }
    return (
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr", alignItems: 'start', height: "100%", width: "100%" }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: "2rem" }}>
                <h2 style={{ margin: 0, fontSize: "clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem))" }}>{ex.company}</h2>
            </div>
            <div style={{
                display: "flex",
                width: "100%",
                alignItems: "stretch",
                marginBottom: "1.5rem",
                marginTop: "2rem"
            }}>
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, borderRight: "2px solid #000" }}>
                    <h2 style={{ margin: 0, fontSize: "clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem)" }}>{ex.role}</h2>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <h2 style={{ margin: 0, fontSize: "clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem)" }}>{ex.dates}</h2>
                </div>
            </div>

            <motion.div 
                style={{ boxSizing: "border-box", paddingLeft: "min(3rem,3%)", paddingRight: "min(3rem,3%)", marginBottom: "4rem" }}>
                <ul>
                    {ex.achievements.slice(0, 3).map((ach) => (
                        <li key={ach} style={{ fontSize: "clamp(1rem, 0.818rem + 0.91vw, 1.5rem)" }}>{ach}</li>
                    ))}
                    <AnimatePresence>
                    {showMore &&
                        ex.achievements.slice(3).map((ach) => (
                            <motion.li
                                key={ach}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                style={{ fontSize: "clamp(1rem, 0.818rem + 0.91vw, 1.5rem)" }}
                            >
                                {ach}
                            </motion.li>
                        ))}
                        </AnimatePresence>
                </ul>
                <div style={{display: "flex", justifyContent: "center" }}>
                {ex.achievements.length > 3 && (
                    <button 
                    onClick={toggle}
                    className={styles.ctaBtn}
                    >
                        {!showMore ? "See more" : "See less"}
                    </button>
                )}
                </div>
            </motion.div>
        </div>
    )
}

export default ExperienceCard