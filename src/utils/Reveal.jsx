import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';
import styles from '../styles/HomePage.module.css';


const Reveal = ({children}) => {
    const targetRef = useRef(null)
      const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
      });
    
      const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
      const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
      <div>
          <motion.div ref={targetRef} style={{scale, height: "150vh", display: "flex", justifyContent: "center", margin: "100px 0" }}>
              <motion.div style={{ position: "sticky", top: 60, height: "75vh", width: "75vw", overflow: "hidden" }}>
                  <motion.div style={{opacity}} className={styles.scrollContainer}>
                      {children}
                  </motion.div>
              </motion.div>
          </motion.div>
      </div>
  )
}

export default Reveal