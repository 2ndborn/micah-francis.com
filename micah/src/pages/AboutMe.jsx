import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { ExperienceData } from '../data/ExperienceData';
import ExperienceCard from '../components/ExperienceCard';
import SkillsCard from '../components/SkillsCard';
import EducationComponent from '../components/EducationComponent';
import StatementComponent from '../components/StatementComponent';


const AboutMe = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const container = {
    hidden: {opacity: 0, y: 10},
    show: {
      opacity: 1, 
      y: 0, 
      transition: {duration: 0.7, ease: 'easeIn'}
    }
  }

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
    >
      <section style={{
        height: "25vh", 
        display: "flex", 
        alignItems: "center", 
        backgroundImage: "linear-gradient(180deg, hsl(0, 0%, 93%) 0%, transparent 100%)"
        }}
      >
        <h1 style={{marginLeft: "2rem", fontSize: 'clamp(2rem, 1.636rem + 1.82vw, 3rem)'}}>About Me</h1>
      </section>
      <StatementComponent />
      <hr style={{width: "90%", marginTop: "3rem"}}/>
      <EducationComponent paused={isPaused} setPaused={setIsPaused} />
      <hr style={{width: "50%", marginTop: "3rem", marginBottom: '2rem'}}/>
      <SkillsCard paused={isPaused} setPaused={setIsPaused} />
      <hr style={{width: "50%", marginTop: "3rem", marginBottom: '0.5rem'}}/>
      <ExperienceCard paused={isPaused} setPaused={setIsPaused} />
    </motion.div>
  )
}

export default AboutMe