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

  const attributes = [...Object.entries(languageIcons), ...Object.entries(Skills)]
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
      <section style={{ height: "100vh", paddingTop: '1rem', overflow: "hidden"}}>
        <h1 style={{ textAlign: "center"}}>Education</h1>
        <motion.div {...eduMotion} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        {EductionData.map((ed, i) => (
          <CarouselCard key={i} active={eduIndex === i}>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "start", justifyContent: "center", alignItems: "center", backgroundColor: "grey"}}>
              <h3>{ed.date}</h3>
              <h2>{ed.qualification}</h2>
              <h3>{ed.facility}</h3>
            </div>
          </CarouselCard>
        ))}
        </motion.div>
        <DotsComponent index={eduIndex} setIndex={setEduIndex} data={EductionData} />
      </section>
      <section style={{height: "auto", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden"}}>
        <h1 style={{ textAlign: "center"}}>Skills & Attributes</h1>
        <motion.div {...skillsMotion} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {attributes.map((att, i) => (
            <CarouselCard key={i} active={skillsIndex === i}>
              <SkillsCard sk={Object.entries(Skills)} setPaused={setIsPaused} head={head[i]} />
            </CarouselCard>
          ))}
        </motion.div>
        {/* <DotsComponent index={skillsIndex} setIndex={setSkillsIndex} /> */}
      </section>
      <section style={{height: "auto", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden"}}>
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
    </div>
  )
}

export default AboutMe