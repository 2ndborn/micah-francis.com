import React, { useEffect, useRef } from 'react'
import {motion, useAnimation, useInView} from 'framer-motion';
import styles from '../styles/HomePage.module.css';

const InfiniteScroll = ({ icons, content, x = "-100%" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, {once: false});
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
                        {content.paragraph}
                    </motion.p>
                    <motion.button
                    variants={contents}
                    initial="hidden"
                    animate={contentControls}
                    transition={{duration: 0.5, delay: 1.5}}
                    className={styles.ctaBtn}>
                        {content.button}
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}

export default InfiniteScroll