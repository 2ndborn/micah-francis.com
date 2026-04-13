import React, { useState } from 'react'
import { motion } from 'framer-motion';
import CarouselCard from '../utils/CarouselCard';
import { useCarouselMotion } from '../hooks/useCarouselMotion';

const AboutMe = () => {
  const EductionData = [
    {
      date: "2022/23",
      qualification: "Level 5 diploma - Fullstack Web Development",
      facility: "Peterborough University"
    },
    {
      date: "1998/2001",
      qualification: "GNVQ - Advanced Business",
      facility: "Westminster Kingsway College"
    }
  ]

  const {index, setIndex, containerMotion} = useCarouselMotion({
    length: EductionData.length,
    autoDelay: 10000,
    dragBuffer: 50,
  })
  const BOX_SHADOW = "0px 2px 8px rgba(204, 0, 204, 0.7), 0px 4px 16px rgba(77, 5, 76, 0.9)";

  const PAD_TOP = "min(5rem, 5%)"
  const PAD_BOT = "min(5rem, 5%)"
  const PAD_LEFT = "min(0.5rem, 0%)"
  const PAD_RIGHT = "min(0.5rem, 0%)"


  return (
    <div>
        <section style={{height: "25vh", display: "flex", alignItems: "center"}}>
          <h1>About Me</h1>
      </section>
      <section style={{ position: "relative", height: "50vh", backgroundColor: "grey" }}>
        <h2>Executive Statement</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Neque eius, distinctio adipisci facilis dolorem consequuntur 
            dolores odio excepturi? Iste sapiente iusto, corporis et quasi 
            porro eius quibusdam laborum quas aliquam.
        </p>
      </section>
      <section style={{height: "75vh", paddingTop: PAD_TOP, paddingBottom: PAD_BOT, paddingLeft: PAD_LEFT, paddingRight: PAD_RIGHT}}>
        <div
          style={{
            position: 'relative',
            alignItems: "center",
            height: "100%",
            width: "100%",
            boxSizing: 'border-box',
            borderRadius: "10px",
            padding: "0.25rem",
            boxShadow: BOX_SHADOW,
            overflow: 'hidden',
            display: "grid",
            gridTemplateRows: "1fr 2fr",
            gridTemplateAreas: "'header' 'content'",
          }}
        >
          <h1 style={{gridArea: "header", textAlign: "center"}}>Education</h1>
          <div style={{gridArea: "content", display: "flex", flexDirection: "column", alignSelf: "start", justifyContent: "center", alignItems: "center"}}>
            <h3>2022/23</h3>
            <h2>Level 5 diploma - Fullstack Web Development</h2>
            <h3>Peterborough University</h3>
          </div>
        </div>
      </section>
      <section style={{ position: "relative", height: "100vh", backgroundColor: "pink" }}>
        Skills & Attributes
      </section>
      <section style={{ position: "relative", height: "100vh", backgroundColor: "yellow" }}>
        Work Experience
      </section>
      <section style={{ height: "100vh"}}>
        <h1 style={{gridArea: "header", textAlign: "center"}}>Education</h1>
        <motion.div {...containerMotion}>
        {EductionData.map((ed, i) => (
          <CarouselCard key={i} active={index === i}>
            <div style={{gridArea: "content", display: "flex", flexDirection: "column", alignSelf: "start", justifyContent: "center", alignItems: "center", backgroundColor: "grey"}}>
              <h3>{ed.date}</h3>
              <h2>{ed.qualification}</h2>
              <h3>{ed.facility}</h3>
            </div>
          </CarouselCard>
        ))}
        </motion.div>
      </section>
    </div>
  )
}

export default AboutMe