import React, {useEffect, useRef, useState} from 'react'
import {motion, spring, useMotionValue} from 'framer-motion';
import styles from "../styles/Portfolio.module.css";
import LanguageBadge from '../components/LanguageBadge';
import {portfolioData} from '../data/portfolioData'

const Portfolio = () => {
  const [dragging, setDragging] = useState(false);
    const [index, setIndex] = useState(0)

    const dragX = useMotionValue(0);

    useEffect(() => {
      const intervalRef = setInterval(() => {
        
      }, 1000);
      return () => clearInterval(intervalRef)
    }, [])
    const DRAG_BUFFER = 50;
  const SPRING_OPTIONS = {
    type: 'spring',
    mass: 3,
    stiffness: 400,
    damping: 30
  }

    const onDragStart = () => {
      setDragging(true)
      console.log(dragX.get())
    }

    const onDragEnd = () => {
      setDragging(false)
      const x = dragX.get()
      if (x <= -DRAG_BUFFER && index < extended.length - 1) {
        setIndex(prev => prev + 1)
      } else if (x >= DRAG_BUFFER && index > 0) {
        setIndex(prev => prev - 1)
      }
    }

    const extended = [...portfolioData];

  return (
    <div>
        <section style={{height: "25vh", display: "flex", alignItems: "center"}}>
            <h1>Portfolio</h1>
        </section>
        <section style={{postion: "relative", height: "100vh", backgroundColor: "lightgray", padding: "2rem 0", overflow: "hidden"}}>
          <motion.div 
          drag="x" 
          dragConstraints={{left: 0, right: 0}}
          style={{x: dragX, display: "flex", alignItems: 'center', cursor: 'grab', height: "100%"}}
          animate={{
            translateX: `-${index * 100}%`
          }}
          transition={SPRING_OPTIONS}
          whileTap={{cursor: "grabbing"}}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          >
          {extended.map((ext, i) => (
            <motion.div 
            key={i} 
            style={{
              height: "100%", width: "100%", 
              flexShrink: 0, backgroundColor: "lightblue",
              border: "2px solid black",
            }}
            animate={{scale: index === i ? 0.95 : 0.85}}
            transition={SPRING_OPTIONS}
            >{ext.name}</motion.div>
          ))}
          
          </motion.div>
          <Dots index={index} setIndex={setIndex} />
        </section>
    </div>
  )
}

const Dots = ({ index, setIndex }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '16px', gap: 2}}>
      {portfolioData.map((_, i) => (
        <button 
        key={i} 
        onClick={() => setIndex(i)} 
        style={{height: '12px', width: '12px', borderRadius: '1000px', border: 'none', padding: 0}} 
        className={`${styles.dots} ${i === index ? styles.dotsActive : ""}`}
        />
      ))}
    </div>
  )
}

export default Portfolio