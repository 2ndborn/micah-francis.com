import React from 'react'
import { EductionData } from '../data/EductionData';
import styles from '../styles/AboutMe.module.css';

const EducationComponent = ({ed}) => {
  return (
    <div className={styles.EducationGrid}>
      <div className={styles.qualification}>
        <h2>{ed.qualification}</h2>
      </div>
      <div className={styles.facility}>
        <h3 style={{margin: 0}}>{ed.facility}</h3>
      </div>
      <div className={styles.date}>
        <h3 style={{margin: 0}}>{ed.date}</h3>
      </div>
      <div className={styles.location}>
        <h3 style={{margin: 0}}>{ed.location}</h3>
      </div>
      <div className={styles.desc}>
        <p>{ed.description}</p>
      </div>
    </div>

    //     {/* <div style={{ display: "flex", flexDirection: "column", alignSelf: "start", justifyContent: "center", alignItems: "center", backgroundColor: "grey" }}>
    //       <h2>{ed.qualification}</h2>
    //       <h3>{ed.date}</h3>
    //       <h3>{ed.facility}</h3>
    //       <h3>{ed.location}</h3>
    //       <h3>{ed.description}</h3>
    //   </div> */}
  )
}

export default EducationComponent