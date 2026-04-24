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
        <h4 style={{margin: 0}}>{ed.facility}</h4>
      </div>
      <div className={styles.date}>
        <h4 style={{margin: 0}}>{ed.date}</h4>
      </div>
      <div className={styles.location}>
        <h4 style={{margin: 0}}>{ed.location}</h4>
      </div>
      <div className={styles.desc}>
      <hr style={{width: "75%", marginBottom: '3rem'}}/>
        <p><strong>Summary: </strong>{ed.description}</p>
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