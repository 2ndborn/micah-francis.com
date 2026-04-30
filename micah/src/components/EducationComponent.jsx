import React, { useState } from 'react'
import { EductionData } from '../data/EductionData';
import { motion } from 'framer-motion';
import styles from '../styles/AboutMe.module.css';
import CarouselCard from '../utils/CarouselCard';
import { useCarouselMotion } from '../hooks/useCarouselMotion';
import DotsComponent from './DotsComponent';

const EducationComponent = ({ paused, setPaused }) => {
  const {
      index: eduIndex,
      setIndex: setEduIndex, 
      containerMotion: eduMotion
    } = useCarouselMotion({
      length: EductionData.length,
      autoDelay: 10000,
      dragBuffer: 50,
      height: "80%",
      paused
    })

  return (
    <section style={{ height: "auto", paddingTop: '1rem', overflow: "hidden" }}>
      <h1 style={{ textAlign: "center" }}>Education</h1>
      <motion.div {...eduMotion} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {EductionData.map((ed, i) => (
          <CarouselCard key={i} active={eduIndex === i}>
            <div className={styles.EducationGrid}>
              <div className={styles.qualification}>
                <h2>{ed.qualification}</h2>
              </div>
              <div className={styles.facility}>
                <h4 style={{ margin: 0 }}>{ed.facility}</h4>
              </div>
              <div className={styles.date}>
                <h4 style={{ margin: 0 }}>{ed.date}</h4>
              </div>
              <div className={styles.location}>
                <h4 style={{ margin: 0 }}>{ed.location}</h4>
              </div>
              <div className={styles.desc}>
                <hr style={{ width: "75%", marginBottom: '3rem' }} />
                <p><strong>Summary: </strong>{ed.description}</p>
              </div>
            </div>
          </CarouselCard>
        ))}
      </motion.div>
      <DotsComponent index={eduIndex} setIndex={setEduIndex} data={EductionData} />
    </section>
  )
}

export default EducationComponent