import React from 'react';
import {motion} from 'framer-motion';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    const container = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1, y: 0,
            transition: {
                duration: 1.5,
                ease: "easeOut"
            }
        }
    }
    return (
        <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className={styles.footerContainer}>
            <h2 style={{ textAlign: "center" }}>Contact</h2>
            <div className={styles.upperFooter}>
                <a
                    href='https://wa.me/447958774171?text=Hi%20Micah'
                    target='_blank'
                    aria-label='Chat via WhatsApp'
                    rel='noopener noreferrer'
                >
                    WhatsApp
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a
                    href='mailto:mfrancisr@hotmail.com?subject=Enquiry&body=Hi%20Micah'
                    aria-label='Contact me via email'
                >
                    Email
                    <i className="fa-regular fa-envelope"></i>
                </a>
                <a
                    href='https://www.linkedin.com/in/micah-francis-87bb0832/'
                    target='_blank'
                    aria-label='Visit my LinkedIn page'
                    rel='noopener noreferrer'
                >
                    LinkedIn
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a 
                href='https://github.com/2ndborn' 
                target='_blank' 
                aria-label='Visit my GitHub page' 
                rel="noopener noreferrer"
                >
                    GitHub
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <div className={styles.lower}>
                <div style={{ flex: 1, minWidth: '120px' }}>
                    <i className="fa-solid fa-location-dot"></i>
                    Aylesbury/London
                </div>
                <div style={{ flex: 1, minWidth: '120px' }}>
                    <i className="fa-regular fa-envelope"></i>
                    mfrancisr@hotmail.com
                </div>
                <div style={{ flex: 1, minWidth: '120px' }}>
                    <i className="fa-solid fa-mobile-screen"></i>
                    07958 774 171
                </div>
            </div>
        </motion.div>
    )
}

export default Footer