import React from 'react'
import styles from "../styles/Portfolio.module.css";

const DotsComponent = ({index, setIndex, data}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px', gap: 4 }}>
            {data.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setIndex(i)}
                    style={{ height: '12px', width: '12px', borderRadius: '1000px', border: 'none', padding: 0, cursor: 'pointer' }}
                    className={`${styles.dots} ${i === index ? styles.dotsActive : ""}`}
                    aria-label={`Go to project card ${i + 1}`}
                    aria-current={i === index ? "true" : undefined}
                />
            ))}
        </div>
    )
}

export default DotsComponent