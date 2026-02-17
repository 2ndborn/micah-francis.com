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
                <button>WhatsApp<i class="fa-brands fa-whatsapp"></i></button>
                <button>Email<i class="fa-regular fa-envelope"></i></button>
                <button>LinkedIn<i class="fa-brands fa-linkedin"></i></button>
                <button>GitHub<i class="fa-brands fa-github"></i></button>
            </div>
            <div className={styles.lower}>
                <div style={{ flex: 1, minWidth: '120px' }}>
                    <i className="fa-solid fa-location-dot"></i>
                    Aylesbury/London
                </div>
                <div style={{ flex: 1, minWidth: '120px' }}>
                    <i className="fa-regular fa-envelope"></i>
                    noemail@hotmail.com
                </div>
                <div style={{ flex: 1, minWidth: '120px' }}>
                    <i className="fa-solid fa-mobile-screen"></i>
                    07900 567 891
                </div>
            </div>
        </motion.div>
    )
}

export default Footer