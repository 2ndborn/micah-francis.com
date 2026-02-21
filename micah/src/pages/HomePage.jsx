import React, { useEffect, useRef, useState } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';
import styles from '../styles/HomePage.module.css';
import NatWestIcon from '../components/NatwestIcon';
import Metro from '../components/Metro';
import Civil from '../components/CivilSer'
import CivilSer from '../components/CivilSer';
import South from '../components/South';

const HomePage = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.25, 0.7, 0.95], [0,1,0])
  const opacityTwo = useTransform(scrollYProgress, [0.1, 0.7, 0.99], [0,1,0])
  const container = {
    hidden: {opacity: 0, boxShadow: "none"},
    show: {
      opacity: 1,
      boxShadow: "none",
      transition: {
        duration: 0.8,
        delay: 1,
        ease: "easeOut",
        stagger: 0.4
      }
    },
    shadow: {
      boxShadow:
        "0px 2px 8px rgba(204, 0, 204, 0.7), 0px 4px 16px rgba(77, 5, 76, 0.9)",
      transition: {
        duration: 0.8,
        delay: 1.8,
        ease: "easeOut"
      }
    }
  }

  const text = {
    hidden: {opacity: 0, textShadow: "none"},
    show: {
      opacity: 1,
      textShadow: "0px 2px 6px rgba(204, 0, 204, 0.7), 0px 4px 12px rgba(77, 5, 76, 0.9)",
      transition: { duration: 1, delay: 2.5, ease: "easeOut" }
    }
  }

  const textTwo = {
    hidden: { opacity: 0, textShadow: "none" },
    show: {
      opacity: 1,
      textShadow: "2px 2px 6px rgba(204, 0, 204, 0.7), 4px 4px 12px rgba(77, 5, 76, 0.9)",
      transition: { duration: 1, delay: 3.2, ease: "easeOut" }
    }
  }

  const symbols = [<i class="fa-brands fa-html5"></i>,<i class="fa-brands fa-css3-alt"></i>,<i class="fa-brands fa-js"></i>,<i class="fa-brands fa-python"></i>, <NatWestIcon className={styles.icon} />,
    <Metro className={styles.icon} />,
    <CivilSer className={styles.icon} />,
    <South className={styles.iconTwo} />
  ];

  return (
    <div>
      <section style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <motion.div
          className={styles.introDisplay}
          variants={container}
          initial="hidden"
          animate={["show", "shadow"]}
        >
          <motion.h1 variants={text}>Micah Francis</motion.h1>
          <motion.h3 variants={textTwo}>Fullstack Developer</motion.h3>
        </motion.div>
      </section>
      <section ref={ref} style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <motion.div style={{opacity: opacityTwo}} className={styles.scrollContainer}>
        <motion.div style={{opacity}} className={styles.scrollOverlay}>
          <p>Qualified developer providing freelance and employment services. Checkout my porfolio.</p>
          <button className={styles.ctaBtn}>Portfolio</button>
        </motion.div> 
          <div className={styles.infiniteScroll}>
            {symbols.concat(symbols).map((sym, i) =>
              <div key={i} className={styles.items}>{sym}</div>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default HomePage