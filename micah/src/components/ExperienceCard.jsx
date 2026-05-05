import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/HomePage.module.css';
import DotsComponent from './DotsComponent';
import { ExperienceData } from '../data/ExperienceData';
import { useCarouselMotion } from '../hooks/useCarouselMotion';
import CarouselCard from '../utils/CarouselCard';

const ExperienceCard = ({ paused, setPaused }) => {
    // const [showMore, setShowMore] = useState(false);
    const [showMore, setShowMore] = useState(null);
    // const closeShowMore = () => {
    //     setShowMore(false);
    //     setPaused(false);
    // }
    const {
        index: expIndex,
        setIndex: setExpIndex, 
        containerMotion: expMotion
      } = useCarouselMotion({
        length: ExperienceData.length,
        autoDelay: 10000,
        dragBuffer: 50,
        height: "auto",
        paused,
        // onManuelDrag: closeShowMore,
      })

    const toggle = (i) => {
        setShowMore(prev => {
            const next = prev === i ? null : i;
            setPaused(next !== null);
            return next;
        })
    }

    const BACK_IMAGE = 
    'linear-gradient(180deg, hsl(0, 0%, 90%) 0%, #fff 100%)'

    return (
        <section style={{ height: "auto", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
            <h1 style={{ textAlign: "center" }}>Work Experience</h1>
            <motion.div {...expMotion} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                {ExperienceData.map((ex, i) => (
                    <CarouselCard key={i} active={expIndex === i} backgroundImage={BACK_IMAGE}>
                        <div style={{ display: "grid", gridTemplateRows: "auto 1fr", alignItems: 'start', height: "100%", width: "100%" }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: "2rem" }}>
                                <h1 style={{ margin: 0, fontSize: "clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem))", color: 'rgb(118, 58, 117)' }}>{ex.company}</h1>
                            </div>
                            <div style={{
                                display: "flex",
                                width: "100%",
                                alignItems: "stretch",
                                marginBottom: "1.5rem",
                                marginTop: "2rem"
                            }}>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, borderRight: "2px solid var(--headfour-color)" }}>
                                    <h3 style={{ margin: 0, fontSize: "clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem)" }}>{ex.role}</h3>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                    <h3 style={{ margin: 0, fontSize: "clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem)" }}>{ex.dates}</h3>
                                </div>
                            </div>

                            <motion.div
                                style={{ boxSizing: "border-box", paddingLeft: "min(3rem,3%)", paddingRight: "min(3rem,3%)", marginBottom: "4rem" }}>
                                <ul>
                                    {ex.achievements.slice(0, 3).map((ach) => (
                                        <li key={ach} style={{ fontSize: "clamp(1rem, 0.818rem + 0.91vw, 1.5rem)" }}>{ach}</li>
                                    ))}
                                    <AnimatePresence>
                                        {showMore === i &&
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
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    {ex.achievements.length > 3 && (
                                        <button 
                                            onClick={() => toggle(i)}
                                            className={styles.ctaBtn}
                                        >
                                            {showMore !== i ? "See more" : "See less"}
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </CarouselCard>
                ))}
            </motion.div>
            <DotsComponent index={expIndex} setIndex={setExpIndex} data={ExperienceData} />
        </section>
    )
}

export default ExperienceCard