import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/HomePage.module.css';
import stylesA from '../styles/AboutMe.module.css';
import { Skills } from '../data/Skillsdata';
import CarouselCard from '../utils/CarouselCard';
import { languageIcons } from '../data/languageIcons';
import DotsComponent from './DotsComponent';
import { useCarouselMotion } from '../hooks/useCarouselMotion';

const SkillsCard = ({ paused, setPaused }) => {
    const [showMore, setShowMore] = useState(null);

    const attributes = [Object.entries(languageIcons), Object.entries(Skills)]
    const headings = ["Technical Skills", "Transferable Skills"];
    const {index: skillsIndex,
         setIndex: setSkillsIndex,
         containerMotion: skillsMotion
      } = useCarouselMotion({
        length: attributes.length,
        autoDelay: 10000,
        dragBuffer: 50,
        height: "auto",
        paused
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
            <h1 style={{ textAlign: "center" }}>Skills & Attributes</h1>
            <motion.div {...skillsMotion} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                {attributes.map((att, i) => (
                    <CarouselCard key={i} active={skillsIndex === i} backgroundImage={BACK_IMAGE}>
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
                                <h1 style={{ margin: 0, color: 'rgb(118, 58, 117)', fontSize: "clamp(1.5rem, 1.318rem + 0.91vw, 2rem)" }}>{headings[i]}</h1>
                            </div>
                            <motion.div className={stylesA.SkillsGrid}>
                                {att.slice(0, 10).map(([label, Icon], i) => (
                                    <div key={i} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon className={stylesA.icons} style={{ fontSize: "2.5rem" }} />
                                        <div>{label.replace(/([A-Z])/g, ' $1').trim()}</div>
                                    </div>
                                ))}
                                <AnimatePresence>
                                    {showMore === i && att.slice(10).map(([label, Icon], i) => (
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
                                {att.length > 10 && (
                                    <button
                                        onClick={() => toggle(i)}
                                        className={styles.ctaBtn}
                                    >
                                        {showMore !== i ? "See more" : "See less"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </CarouselCard>
                ))}
            </motion.div>
            <DotsComponent index={skillsIndex} setIndex={setSkillsIndex} data={attributes} />
        </section>
    )
}

export default SkillsCard