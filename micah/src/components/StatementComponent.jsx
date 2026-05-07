import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/HomePage.module.css';
import profile from '../assets/profile_pic.jpeg';

const StatementComponent = () => {
    const [showMore, setShowMore] = useState(false)

    const reveal = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0, }
    }
    return (
        <section style={{ position: "relative", height: "auto", margin: "1rem 0" }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img 
                    src={profile} 
                    alt="My profile piture"
                    style={{width: '288px', height: '360px', objectFit: 'cover', borderRadius: '900px', boxShadow: 'inset 12px 12px 40px #000'}}  
                    />
            </div>
            <h1 style={{textAlign: 'center', marginTop: '32px'}}>Executive Statement</h1>
            <div style={{paddingLeft: "min(4rem, 5%)", paddingRight: "min(4rem, 5%)", textAlign: 'center', fontSize: "clamp(1rem, 0.909rem + 0.45vw, 1.25rem)"}}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <p style={{textAlign: 'justify'}}>
                        I’m a full‑stack web developer who came into tech through curiosity, 
                        persistence, and a fascination with how people interact with digital 
                        systems. My background in leadership and customer‑focused roles shapes 
                        the way I build digital products always with clarity, usability, and 
                        real human needs in mind. I’m grounded in HTML, CSS, JavaScript, and 
                        Python, supported by a Level 5 Diploma from Code Institute, and I 
                        enjoy creating clean, purposeful applications that feel intuitive 
                        from the first click.
                    </p>
                    
                </div>
                <AnimatePresence>
                    {showMore && (
                        <motion.div
                            variants={reveal}
                            initial="hidden"
                            animate={{ opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
                            exit={{ opacity: 0, y: -10, transition: { duration: 0.4, ease: "easeIn" } }}
                        >
                            <p style={{textAlign: 'justify', marginTop: 0}}>
                                Before moving into tech, I spent over a decade in people‑management 
                                roles where I led teams, coached individuals, and handled complex 
                                customer and stakeholder needs. That experience taught me how to 
                                communicate clearly, break down problems, and design solutions that 
                                genuinely help people skills that now influence how I approach 
                                development.
                            </p>
                            <p style={{textAlign: 'justify', marginTop: 0}}>
                                I’m naturally curious about how systems work and why people use 
                                them the way they do, which is what drew me to full‑stack 
                                development. I’ve built a range of portfolio projects from an 
                                eCommerce site to community platforms and interactive games 
                                each one strengthening my understanding of both front‑end and 
                                back‑end architecture. I’m continually expanding my skills, 
                                exploring React, and sharpening my problem‑solving through LeetCode. 
                                My goal is simple: build digital experiences that make sense, 
                                feel good to use, and genuinely solve problems.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button 
                    className={styles.ctaBtn}
                    onClick={() => setShowMore(prev => !prev)}
                >
                    {!showMore ? "See more" : "See less"}
                </button>
            </div>
        </section>
    )
}

export default StatementComponent