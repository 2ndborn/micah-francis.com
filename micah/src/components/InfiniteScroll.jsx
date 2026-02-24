import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';
import styles from '../styles/HomePage.module.css';
import NatWestIcon from '../components/NatwestIcon';
import Metro from '../components/Metro';

const InfiniteScroll = ({icons, content}) => {
    const ref = useRef(null)
      const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
      });
    
      const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0,1,0])
      const opacityTwo = useTransform(scrollYProgress, [0.1, 0.7, 0.99], [0,1,0])

    return (
        <div style={{ height: "200vh", display: "flex", justifyContent: "center", margin: "60px 0" }}>
            <div style={{height: "50vh"}} />
            <motion.div ref={ref} style={{position: "sticky", top: 60, height: "75vh", width: "75vw"}}>
                <motion.div className={styles.scrollContainer}>
                    <div className={styles.infiniteScroll}>
                        {icons.concat(icons).map((icon, i) =>
                            <div key={i} className={styles.items}>{icon}</div>
                        )}
                    </div>
                    <motion.div style={{opacity}} className={styles.scrollOverlay}>
                        <p>{content.paragraph}</p>
                        <button className={styles.ctaBtn}>{content.button}</button>
                    </motion.div>
                </motion.div>
            </motion.div>
            <div style={{height: "50vh"}} />
        </div>
    )
}

export default InfiniteScroll