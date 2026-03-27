import React, {useEffect, useRef, useState} from 'react'
import {motion, spring, useMotionValue} from 'framer-motion';
import styles from "../styles/Portfolio.module.css";
import LanguageBadge from '../components/LanguageBadge';
import {portfolioData} from '../data/portfolioData'

const Portfolio = () => {
  
    const [index, setIndex] = useState(0)

    const ONE_SECOND = 1000;
    const AUTO_DELAY = ONE_SECOND * 10;
    const DRAG_BUFFER = 50;
    const SPRING_OPTIONS = {
      type: 'spring',
      mass: 3,
      stiffness: 400,
      damping: 50
    }
    
  const dragX = useMotionValue(0);
  
  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setIndex((prev) => {
          if(prev === portfolioData.length - 1) {
            return 0
          }
          return prev + 1
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef)
  }, []);


  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && index < portfolioData.length - 1) {
      setIndex(prev => prev + 1)
    } else if (x >= DRAG_BUFFER && index > 0) {
      setIndex(prev => prev - 1)
    }
    dragX.set(0);
  }

  return (
    <div>
      <section style={{height: "25vh", display: "flex", alignItems: "center"}}>
          <h1>Portfolio</h1>
      </section>
      <section style={{ position: "relative", height: "100vh", backgroundColor: "lightgray", overflow: "hidden" }}>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          animate={{translateX: `-${index * 100}%`}}
          transition={SPRING_OPTIONS}
          whileTap={{ cursor: "grabbing" }}
          onDragEnd={onDragEnd}
          style={{x: dragX, display: "flex", alignItems: 'center', cursor: 'grab', height: "90%" }}
        >
          {portfolioData.map((ext, i) => (
            <motion.div
              key={i}
              style={{
                height: "100%", width: "100%",
                flexShrink: 0, backgroundColor: "lightblue",
                boxSizing: 'border-box',
                border: "2px solid black", 
                borderRadius: "10px",
                perspective: '1000px',
                overflow: 'hidden'
              }}
              animate={{ scale: index === i ? 0.95 : 0.85 }}
              transition={SPRING_OPTIONS}
            >
              <h1>{ext.name}</h1>
              <img style={{objectFit: 'cover', height: '100%', width: '100%', transform: 'rotateX(45deg) rotateY(-30deg)', transformStyle: 'preserve-3d'}} src={ext.image} alt="" />
            </motion.div>
          ))}

        </motion.div>
        <Dots index={index} setIndex={setIndex} />
      </section>
    </div>
  )
}

const Dots = ({ index, setIndex }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '4px', gap: 4}}>
      {portfolioData.map((_, i) => (
        <button 
        key={i} 
        onClick={() => setIndex(i)} 
        style={{height: '12px', width: '12px', borderRadius: '1000px', border: 'none', padding: 0, cursor: 'pointer'}} 
        className={`${styles.dots} ${i === index ? styles.dotsActive : ""}`}
        />
      ))}
    </div>
  )
}

export default Portfolio