import React, { useEffect, useRef } from 'react'
import {motion, useAnimation} from 'framer-motion';
import styles from '../styles/HomePage.module.css';
import InfiniteScroll from '../components/InfiniteScroll';
import Reveal from '../utils/Reveal';
import { HomePageData } from '../data/HomePageData';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useScrollToSection } from '../hooks/useScrollToSection';

const HomePage = () => {
  const shadowControls = useAnimation();
  const btnControls = useAnimation();
  const isSmail = useMediaQuery('(max-width: 400px)');
  const scrollToNext = useScrollToSection();

  useEffect(() => {
    btnControls.start({
      backgroundColor: [
        'var(--cta-secondary)',
        'hsl(300, 99%, 41%)',
        'rgba(77, 5, 76, 0.9)',
        'hsl(300, 99%, 41%)',
        'var(--cta-secondary)',
      ],
      transition: {duration: 10, ease: 'easeOut', repeat: Infinity}
    })
    shadowControls.start({
      textShadow: [
        '0px 2px 8px rgba(248, 1, 248, 0.7), 0px 4px 16px rgba(248, 1, 248, 0.7)', 
        '0px 2px 8px rgba(248, 1, 248, 0.7), 0px 4px 16px rgba(248, 1, 248, 0.7)', 
        '0px 2px 8px rgba(204, 0, 204, 0.7), 0px 4px 16px rgba(77, 5, 76, 0.9)', 
        '0px 2px 8px rgba(248, 1, 248, 0.7), 0px 4px 16px rgba(248, 1, 248, 0.7)',
        '0px 2px 8px rgba(248, 1, 248, 0.7), 0px 4px 16px rgba(248, 1, 248, 0.7)', 
      ],
      transition: {duration: 10, delay: 5, ease: 'easeOut', repeat: Infinity}
    })
  }, [btnControls, shadowControls])

  const container = {
    hidden: {opacity: 0, boxShadow: "none"},
    show: {
      opacity: 1,
      boxShadow: "none",
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
        stagger: 0.4
      }
    },
    shadow: {
      boxShadow:
        "0px 2px 8px rgba(204, 0, 204, 0.7), 0px 4px 16px rgba(77, 5, 76, 0.9)",
      transition: {
        duration: 0.8,
        delay: 1,
        ease: "easeOut"
      }
    },
    gradient: {
      backgroundImage: 
      'radial-gradient(ellipse 130% 90% at 50% 35%, hsl(0, 0%, 93%) 50%, rgba(192, 165, 191, 0.8) 100%)',
      transition: {
        duration: 0.75,
        delay: 2,
        ease: "easeOut"
      }
    }
  }

  const text = {
    hidden: {opacity: 0, textShadow: "none"},
    show: {
      opacity: 1,
      textShadow: "0px 2px 6px rgba(204, 0, 204, 0.7), 0px 4px 12px rgba(77, 5, 76, 0.9)",
      transition: { duration: 1, delay: 1.5, ease: "easeOut" }
    }
  }

  const textTwo = {
    hidden: { opacity: 0, textShadow: "none" },
    show: {
      opacity: 1,
      textShadow: "2px 2px 6px rgba(204, 0, 204, 0.7), 4px 4px 12px rgba(77, 5, 76, 0.9)",
      transition: { duration: 1, delay: 2, ease: "easeOut" }
    }
  }

  const btn = {
    hidden: {opacity: 0, textShadow: 'none'},
    show: {
      opacity: 1,
      transition: { duration: 1, delay: 3, ease: "easeOut" }
    }
  }

  return (
    <div>
      <section style={{ 
        height: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        padding: isSmail ? '5%' : 0,
         }}
        >
        <motion.div
          className={styles.introDisplay}
          variants={container}
          initial="hidden"
          animate={["show", "shadow", "gradient"]}
        >
          <motion.div variants={text}>
            <motion.h1>Micah Francis</motion.h1>
          </motion.div>
          <motion.div variants={textTwo}>
            <motion.h3>Fullstack Developer</motion.h3>
          </motion.div>
          <motion.div
            variants={btn}
            style={{
              marginTop: '50px'
            }}
          >
            <motion.button
              onClick={() => scrollToNext('contact-detail')}
              animate={btnControls}
              className={styles.btn}
              style={{ 
                color: 'whitesmoke', 
                fontWeight: 500, 
                fontSize: '1.3rem', 
                backgroundColor: 'rgba(77, 5, 76, 0.9)', 
                border: 'none',
                boxShadow: '0px 5px 8px rgba(77, 5, 76, 0.9)'
               }}
            >
              Let's talk!!!
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
      <Reveal>
        <section style={{
          height: 'auto',
          background: '#eeefee',
          color: '#4D054C',
          fontSize: '1.5rem',
          padding: 'min(2.5rem, 4.5%)',
          textAlign: 'center',
        }}
        >
          <h2 style={{color: '#4d054cb0',}}>About this site</h2>
          <p style={{color: '#4d054cb0',}}>
            This site was created as a space to share my work, my journey, and the skills I’ve developed as a full‑stack web developer. Everything here from the projects to the writing reflects the way I approach building digital experiences: with clarity, curiosity, and a focus on real human needs.
          </p>
          <p style={{color: '#4d054cb0',}}>
            If something here resonates with you, or if you feel my experience could support your project or organisation, you’re welcome to reach out through the contact section. I’m always open to meaningful conversations and new opportunities to create purposeful, intuitive digital products.
          </p>
        </section>
      </Reveal>
      <section className={styles.secTwo} style={{overflowX: 'hidden'}}>
        {HomePageData.map((home, i) => (
          <InfiniteScroll 
            key={i}
            icons={home.icons}
            paragraph={home.paragraph}
            button={home.button}
            link={home.link}
            x={home.x}          />
        ))}
      </section>
    </div>
  )
}

export default HomePage