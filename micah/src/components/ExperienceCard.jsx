import React, { useState } from 'react'

const ExperienceCard = ({ ex }) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr", alignItems: 'start', height: "100%", width: "100%" }}>
            <div style={{
                display: "flex",
                width: "100%",
                marginBottom: "1.5rem",
                marginTop: "4rem"
            }}>
                <div style={{ flex: 1, borderRight: "2px solid #000", textAlign: "center" }}>
                    <h2 style={{ margin: 0 }}>{ex.company}</h2>
                </div>
                <div style={{ flex: 1, borderRight: "2px solid #000", textAlign: "center" }}>
                    <h2 style={{ margin: 0 }}>{ex.role}</h2>
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>
                    <h2 style={{ margin: 0 }}>{ex.dates}</h2>
                </div>
            </div>

            <div style={{ boxSizing: "border-box", paddingLeft: "min(3rem,3%)", paddingRight: "min(3rem,3%)", marginBottom: "4rem" }}>
                <ul>
                    {ex.achievements.slice(0, 3).map((ach) => (
                        <li key={ach} style={{ fontSize: "clamp(1rem, 0.818rem + 0.91vw, 1.5rem)" }}>{ach}</li>
                    ))}
                    {showMore &&
                        ex.achievements.slice(3).map((ach) => (
                            <li key={ach} style={{ fontSize: "clamp(1rem, 0.818rem + 0.91vw, 1.5rem)" }}>
                                {ach}
                            </li>
                        ))}
                </ul>
                <div style={{display: "flex", justifyContent: "end", marginRight: "50px"}}>
                {ex.achievements.length > 3 && (
                    <button onClick={() => setShowMore(prev => !prev)}>
                        {!showMore ? "See more" : "See less"}
                    </button>
                )}
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard