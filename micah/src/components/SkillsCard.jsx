import React, { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styles from '../styles/HomePage.module.css';
import stylesA from '../styles/AboutMe.module.css';
import { Skills } from '../data/Skillsdata';

const SkillsCard = ({ sk, head, setPaused }) => {
    const [showMore, setShowMore] = useState(false);

    const toggle = () => {
        setShowMore(prev => {
            const next = !prev;
            setPaused(next);
            return next;
        })
    }

    return (
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr", alignItems: 'start', height: "100%", width: "100%", }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    marginBottom: "4rem",
                    marginTop: "4rem"
                }}
                >
                    <h1 style={{ margin: 0, color: 'rgb(118, 58, 117)', fontSize: "clamp(1.5rem, 1.318rem + 0.91vw, 2rem)" }}>{head}</h1>
            </div>
            <motion.div className={stylesA.SkillsGrid}>
                {sk.slice(0, 10).map(([label, Icon], i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon className={stylesA.icons} style={{ fontSize: "2.5rem" }} />
                        <div>{label.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                ))}
                <AnimatePresence>
                {showMore && sk.slice(10).map(([label, Icon], i) => (
                    <motion.div
                        key={i}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                        <Icon className={stylesA.icons} style={{ fontSize: "2.5rem" }} />
                        <div>{label.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </motion.div>
                ))}
                </AnimatePresence>
            </motion.div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem", marginBottom: "4rem" }}>
                {sk.length > 10 && (
                    <button
                        onClick={toggle}
                        className={styles.ctaBtn}
                    >
                        {!showMore ? "See more" : "See less"}
                    </button>
                )}
            </div>
        </div>
    )
}

export default SkillsCard