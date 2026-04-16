import React, { useState } from 'react'
import { motion } from 'framer-motion';
import CarouselCard from '../utils/CarouselCard';
import { useCarouselMotion } from '../hooks/useCarouselMotion';
import DotsComponent from '../components/DotsComponent';
import { EductionData } from '../data/EductionData';
import { ExperienceData } from '../data/ExperienceData';


const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);
  const {index, setIndex, containerMotion} = useCarouselMotion({
    length: EductionData.length,
    autoDelay: 100000,
    dragBuffer: 50,
    height: "80%",
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
      <section style={{ height: "100vh", paddingTop: '1rem'}}>
        <h1 style={{ textAlign: "center"}}>Education</h1>
        <motion.div {...containerMotion}>
        {EductionData.map((ed, i) => (
          <CarouselCard key={i} active={index === i}>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "start", justifyContent: "center", alignItems: "center", backgroundColor: "grey"}}>
              <h3>{ed.date}</h3>
              <h2>{ed.qualification}</h2>
              <h3>{ed.facility}</h3>
            </div>
          </CarouselCard>
        ))}
        </motion.div>
        <DotsComponent index={index} setIndex={setIndex} data={EductionData} />
      </section>
      <section style={{height: "100vh"}}>
        <h1 style={{ textAlign: "center"}}>Work Experience</h1>
        <motion.div {...containerMotion}>
        {ExperienceData.map((ex, i) => (
        <CarouselCard key={i} active={index === i}>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", width: "100%"}}>
              <div style={{ display: "flex", width: "100%", height: "10%", marginBottom: "40px" }}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "calc(100%/3)", borderRight: "2px solid #000" }}>
                  <h2 style={{fontSize: "clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem)", textAlign: "center", margin: 0}}>{ex.company}</h2>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "calc(100%/3)", borderRight: "2px solid #000" }}>
                  <h2 style={{ fontSize: "clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem)", textAlign: "center", margin: 0 }}>{ex.role}</h2>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "calc(100%/3)" }}>
                  <h2 style={{ fontSize: "clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem)", textAlign: "center", margin: 0 }}>{ex.dates}</h2>
                </div>
              </div>
            <div style={{boxSizing: "border-box", paddingLeft: "min(3rem,3%)", paddingRight: "min(3rem,3%)",}}>
              <ul>
                {ex.achievements.slice(0,3).map((ach) => (
                  <li key={ach} style={{fontSize: "clamp(1rem, 0.818rem + 0.91vw, 1.5rem)"}}>{ach}</li>
                ))}
                  {!showMore && ex.achievements.length > 3 && (
                    <li>
                      <button onClick={() => setShowMore(prev => !prev)}>
                        {!showMore ? "See more" : "See less"}
                      </button>
                    </li>
                  )}
                  {showMore &&
                    ex.achievements.slice(3).map((ach) => (
                      <li key={ach} style={{ fontSize: "clamp(1rem, 0.818rem + 0.91vw, 1.5rem)" }}>
                        {ach}
                      </li>
                    ))}
                </ul>
              </div>
          </div>
        </CarouselCard>
        ))}
        </motion.div>
      </section>
    </div>
  )
}

export default AboutMe