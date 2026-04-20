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
                    <h1 style={{ margin: 0, color: 'rgb(118, 58, 117)' }}>{head}</h1>
            </div>
            <motion.div className={stylesA.SkillsGrid}>
                {sk.slice(0, 10).map(([label, Icon], i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon className={stylesA.icons} style={{ fontSize: "2.5rem" }} />
                        <div>{label}</div>
                    </div>
                ))}
                <AnimatePresence>
                {showMore && sk.slice(10).map(([label, Icon], i) => (
                    <div key={i}>
                        <Icon style={{ fontSize: "2.5rem" }} />
                        <div>{label}</div>
                    </div>
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