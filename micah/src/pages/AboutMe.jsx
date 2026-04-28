import React, { useState } from 'react'
import { motion } from 'framer-motion';
import CarouselCard from '../utils/CarouselCard';
import { useCarouselMotion } from '../hooks/useCarouselMotion';
import DotsComponent from '../components/DotsComponent';
import { EductionData } from '../data/EductionData';
import { ExperienceData } from '../data/ExperienceData';
import ExperienceCard from '../components/ExperienceCard';
import { languageIcons } from '../data/languageIcons';
import { Skills } from '../data/Skillsdata';
import SkillsCard from '../components/SkillsCard';
import EducationComponent from '../components/EducationComponent';
import StatementComponent from '../components/StatementComponent';


const AboutMe = () => {
  const [isPaused, setIsPaused] = useState(false);
  const {
    index: eduIndex,
    setIndex: setEduIndex, 
    containerMotion: eduMotion
  } = useCarouselMotion({
    length: EductionData.length,
    autoDelay: 10000,
    dragBuffer: 50,
    height: "80%",
    paused: isPaused
  })
  const {
    index: expIndex,
    setIndex: setExpIndex, 
    containerMotion: expMotion
  } = useCarouselMotion({
    length: ExperienceData.length,
    autoDelay: 10000,
    dragBuffer: 50,
    height: "auto",
    paused: isPaused
  })

  const attributes = [Object.entries(languageIcons), Object.entries(Skills)]
  const {index: skillsIndex,
     setIndex: setSkillsIndex,
     containerMotion: skillsMotion
  } = useCarouselMotion({
    length: attributes.length,
    autoDelay: 100000,
    dragBuffer: 50,
    height: "auto",
    paused: isPaused
  })

  const head = ["Technical Skills", "Transferable Skills"];
  
  const BOX_SHADOW = "0px 2px 8px rgba(204, 0, 204, 0.7), 0px 4px 16px rgba(77, 5, 76, 0.9)";

  const container = {
    hidden: {opacity: 0},
    show: {opacity: 1,transition: {duration: 1.1, ease: 'easeIn'}}
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
      <section style={{ height: "auto", paddingTop: '1rem', overflow: "hidden"}}>
        <h1 style={{ textAlign: "center"}}>Education</h1>
        <motion.div {...eduMotion} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        {EductionData.map((ed, i) => (
          <CarouselCard key={i} active={eduIndex === i}>
            <EducationComponent ed={ed} />
          </CarouselCard>
        ))}
        </motion.div>
        <DotsComponent index={eduIndex} setIndex={setEduIndex} data={EductionData} />
      </section>
      <hr style={{width: "50%", marginTop: "3rem", marginBottom: '2rem'}}/>
      <section style={{height: "auto", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden"}}>
        <h1 style={{ textAlign: "center"}}>Skills & Attributes</h1>
        <motion.div {...skillsMotion} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {attributes.map((att, i) => (
            <CarouselCard key={i} active={skillsIndex === i}>
              <SkillsCard sk={att} setPaused={setIsPaused} head={head[i]} />
            </CarouselCard>
          ))}
        </motion.div>
        <DotsComponent index={skillsIndex} setIndex={setSkillsIndex} data={attributes} />
      </section>
      <hr style={{width: "50%", marginTop: "3rem", marginBottom: '0.5rem'}}/>
      <section style={{height: "auto", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden"}}>
        <h1 style={{ textAlign: "center"}}>Work Experience</h1>
        <motion.div {...expMotion} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {ExperienceData.map((ex, i) => (
            <CarouselCard key={i} active={expIndex === i}>
              <ExperienceCard ex={ex} setPaused={setIsPaused} />
            </CarouselCard>
          ))}
        </motion.div>
        <DotsComponent index={expIndex} setIndex={setExpIndex} data={ExperienceData} />
      </section>
    </motion.div>
  )
}

export default AboutMe