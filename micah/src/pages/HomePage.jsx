import React from 'react'
import {motion} from 'framer-motion';
import styles from '../styles/HomePage.module.css'

const HomePage = () => {
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
    </div>
  )
}

export default HomePage