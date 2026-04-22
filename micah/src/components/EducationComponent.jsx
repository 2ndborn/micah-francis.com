import React from 'react'
import { EductionData } from '../data/EductionData';
import styles from '../styles/AboutMe.module.css';

const EducationComponent = ({ed}) => {
  return (
    <div className={styles.EducationGrid}>
        <h2 className={styles.qualification}>{ed.qualification}</h2>
        <h3>{ed.date}</h3>
        <h3>{ed.facility}</h3>
        <h3>{ed.location}</h3>
        <h3>{ed.description}</h3>
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