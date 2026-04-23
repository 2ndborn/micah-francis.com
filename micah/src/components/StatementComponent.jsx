import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/HomePage.module.css'

const StatementComponent = () => {
    const [showMore, setShowMore] = useState(false)

    const reveal = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0, }
    }
    return (
        <section style={{ position: "relative", height: "auto", margin: "1rem 0" }}>
            <h1 style={{textAlign: 'center', marginBottom: '3rem'}}>Executive Statement</h1>
            <div style={{paddingLeft: "min(2rem, 5%)", paddingRight: "min(2rem, 5%)", textAlign: 'center', fontSize: "clamp(1rem, 0.909rem + 0.45vw, 1.25rem)"}}>
                <p>
                    I’m a full‑stack web developer with a strong foundation
                    in HTML, CSS, JavaScript, and Python, supported by a Level
                    5 Diploma from Code Institute. My background in leadership
                    and customer‑focused roles shapes the way I build digital
                    products always with clarity, usability, and real human
                    needs in mind. I enjoy creating clean, purposeful
                    applications and I’m continually expanding my skills,
                    currently exploring React and sharpening my
                    problem‑solving through LeetCode.
                </p>
                <AnimatePresence>
                    {showMore && (
                        <motion.div
                            variants={reveal}
                            initial="hidden"
                            animate={{ opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
                            exit={{ opacity: 0, y: -10, transition: { duration: 0.4, ease: "easeIn" } }}
                        >
                            <p>
                                Before moving into tech, I spent over a decade in roles
                                that required communication, coaching, and stakeholder
                                management experiences that now influence how I approach
                                development. I’m naturally curious about how systems work
                                and how people interact with them, which is what led me to
                                full‑stack development. I’ve built multiple portfolio
                                projects, including an eCommerce site, community platforms,
                                and interactive games, each one strengthening my understanding
                                of both front‑end and back‑end architecture. I’m passionate
                                about building products that feel intuitive, solve real problems,
                                and deliver a great user experience.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div style={{ display: "flex", justifyContent: "center",  }}>
                <button 
                    className={styles.ctaBtn}
                    onClick={() => setShowMore(prev => !prev)}
                >
                    {!showMore ? "See more" : "See less"}
                </button>
            </div>
            <hr style={{width: "90%", marginTop: "3rem"}}/>
        </section>
    )
}

export default StatementComponent