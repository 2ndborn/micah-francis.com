import React, {useEffect, useRef, useState} from 'react'
import {motion, useMotionValue} from 'framer-motion';
import styles from "../styles/Portfolio.module.css";
import LanguageBadge from '../components/LanguageBadge';
import {portfolioData} from '../data/portfolioData'

const Portfolio = () => {
  const [dragging, setDragging] = useState(false);
    const [index, setIndex] = useState(0)

    const dragX = useMotionValue(0);
    const DRAG_BUFFER = 50;

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
          whileTap={{cursor: "grabbing"}}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          >
          {extended.map((ext, i) => (
            <div key={i} style={{height: "100%", width: "100%", flexShrink: 0, backgroundColor: "lightblue", border: "2px solid black"}}>{ext.name}</div>
          ))}
          
          </motion.div>
        </section>
    </div>
  )
}

export default Portfolio