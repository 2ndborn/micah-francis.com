import React, { useEffect, useRef } from 'react'
import {motion, useAnimation, useInView} from 'framer-motion';
import {Link} from 'react-router-dom';
import styles from '../styles/HomePage.module.css';

const InfiniteScroll = ({ icons, paragraph, button, x = "-100%", link='/default' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, {once: false, amount: 0.3});
    const mainControls = useAnimation();
    const contentControls = useAnimation();

    const container = {
        hidden: { opacity: 0, x: x },
        visible: { opacity: 1, x: 0 }
    }

    const contents = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0}
    }

    useEffect(() => {
        if (inView) {
            mainControls.start("visible")
            contentControls.start("visible")
        }
    }, [inView, mainControls, contentControls])

    return (
        <div ref={ref} className={styles.cardContainer}>
            <motion.div
                variants={container}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 1, delay: 0.5}}
                className={styles.scrollContainer}
            >
                <div className={styles.infiniteScroll}>
                    {icons.concat(icons).map((icon, i) =>
                        <div key={i} className={styles.items}>{icon}</div>
                    )}
                </div>
                <div className={styles.scrollOverlay}>
                    <motion.p
                    variants={contents}
                    initial="hidden"
                    animate={contentControls}
                    transition={{duration: 0.5, delay: 1}}
                    >
                        {paragraph}
                    </motion.p>
                    <Link to={link}>
                    <motion.button
                        variants={contents}
                        initial="hidden"
                        animate={contentControls}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className={styles.ctaBtn}>
                        {button}
                    </motion.button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default InfiniteScroll