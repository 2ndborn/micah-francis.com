import React, {useEffect, useRef, useState} from 'react'
import {motion, rgba, spring, useMotionValue} from 'framer-motion';
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

    const BOX_SHADOW = "0px 2px 8px rgba(204, 0, 204, 0.7), 0px 4px 16px rgba(77, 5, 76, 0.9)";
    
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
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
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
                position: 'relative',
                height: "100%", width: "100%",
                flexShrink: 0, 
                // backgroundColor: "#9e9b97",
                boxSizing: 'border-box',
                // border: "2px solid black", 
                borderRadius: "10px",
                perspective: '400px',
                backfaceVisibility: "hidden",
                padding: "0.25rem",
                overflow: 'hidden',
              }}
              animate={{
                scaleX: index === i ? 0.85 : 0.75, 
                scaleY: index === i ? 0.95 : 0.85, 
                boxShadow: i === index ? BOX_SHADOW : "none"
              }}
              transition={{scale: SPRING_OPTIONS, boxShadow: {duration: 0.4, ease: "easeOut", delay: 0.2}}}
            >
              <Image objectPosition={ext.backgroundImage} {...ext} />
              {/* <img style={{
                // position: "absolute",
                // right: "-400px",
                // top: 0,
                height: '100%', 
                width: '100%',
                objectFit: "cover",
                objectPosition: "left"
                }} src={ext.image} alt="" />
              <div style={{position: 'absolute', inset: 0, backgroundImage: "linear-gradient(160deg, rgba(245, 245, 245, 0.3) 0%, #f5f5f5 30%)" }} />
              <div style={{position: 'absolute', inset: 0, backgroundImage: "linear-gradient(70deg, #ffffff 10%, rgba(245, 245, 245, 0.3) 40%)" }} /> */}
            </motion.div>
          ))}

        </motion.div>
        <Dots index={index} setIndex={setIndex} />
      </section>
    </div>
  )
}

const Image = ({objectPosition, image, name, description, languages, thumb, website}) => {
  return (
    <>
      <img style={{
        // position: "absolute",
        // right: "-400px",
        // top: 0,
        height: '100%',
        width: '100%',
        objectFit: "cover",
        objectPosition: objectPosition,
      }} src={image} alt="" />
      {/* <div style={{position: 'absolute', inset: 0, backgroundImage: "linear-gradient(160deg, rgba(245, 245, 245, 0.3) 0%, #f5f5f5 30%)" }} />
              <div style={{position: 'absolute', inset: 0, backgroundImage: "linear-gradient(70deg, #ffffff 10%, rgba(245, 245, 245, 0.3) 40%)" }} /> */}
      <div 
      style={{
        position: 'absolute', 
        inset: 0, 
        backgroundImage: "Linear-gradient(180deg, rgba(245, 245, 245, 0.9) 0%, rgba(245, 245, 245, 1) 100%)",
        display: 'grid',
        gridTemplateColumns: "repeat(16, 1fr)",
        gridTemplateRows: "repeat(9, 1fr)",
        padding: "min(5rem, 8%)"
      }}>
        <div style={{
          gridArea: "2 / 1 / 2 / 9", 
          fontSize: "clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem)",
          backgroundColor: "bisque"
        }}>
          <h1>{name}</h1>
        </div>
        <div style={{
          gridArea: "2 / 9 / 2 / -1 ", 
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}>
          <a href={website} target='_blank' style={{
            height: "clamp(1.875rem, 0.739rem + 5.68vw, 5rem)", 
            width: "clamp(3.438rem, 1.165rem + 11.36vw, 9.688rem)", 
            padding: 0,
            borderRadius: "10px",
            overflow: "hidden"
          }}>
            <img style={{height: "100%", width: "100%", objectFit: "contain",imageRendering: "crisp-edges"}} src={thumb} alt='' />
          </a>
          <a style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "clamp(1.875rem, 0.739rem + 5.68vw, 5rem)", 
            width: "clamp(3.438rem, 1.165rem + 11.36vw, 9.688rem)",
            backgroundColor: "white",
            fontSize: "2.5rem",
            borderRadius: "10px"
          }}>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div style={{
          gridArea: "3 / 1 / 7 / -1",
          fontSize: "1.5rem"
        }}>
          {description}
        </div>
        <div style={{
          gridArea: "7 / 1 / 8 / -1",
          justifySelf: "end",
          backgroundColor: "beige",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 4,
          paddingRight: "1rem",
          maxWidth: "100%",
          width: "fit-content",
        }}>
          {languages?.map((l, idx) => (
            <LanguageBadge key={idx} lan={l} />
          ))}
        </div>
      </div>
    </>
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