import React, {useState} from 'react'
import {motion} from 'framer-motion';
import styles from "../styles/Portfolio.module.css";
import LanguageBadge from '../components/LanguageBadge';
import {portfolioData} from '../data/portfolioData'

const Portfolio = () => {
    const [index, setIndex] = useState(0)
    const port = portfolioData[index];

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % portfolioData.length)
    }

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + portfolioData.length) % portfolioData.length)
    }

    const imageVariants = {
        center: { x: "300px", scale: 1, zIndex: 5 },
        left1: { x: "150px", scale: 0.7, zIndex: 3 },
        left: { x: "0px", scale: 0.5, zIndex: 1 },
        right1: { x: "450px", scale: 0.7, zIndex: 3 },
        right: { x: "600px", scale: 0.5, zIndex: 1 },

        hidden: { opacity: 0, scale: 0.3, zIndex: 0 }
    };


    const getPosition = (i) => {
        const diff = (i - index + portfolioData.length) % portfolioData.length;

        if (diff === 0) return "center";
        if (diff === 1) return "right1";
        if (diff === 2) return "right";
        if (diff === portfolioData.length - 1) return "left1";
        if (diff === portfolioData.length - 2) return "left";

        return "hidden";
    };


  return (
    <div>
        <section style={{height: "25vh", display: "flex", alignItems: "center"}}>
            <h1>Portfolio</h1>
        </section>
        <section style={{display: "flex", flexDirection: "column", alignItems: "center", height: "100vh"}}>
            <div style={{position: "relative", height:"500px", width: "900px", overflow: "visible"}}>
            {portfolioData.map((port, i) => (
                <motion.div 
                key={port.id}
                animate={getPosition(i)}
                variants={imageVariants}
                transition={{duration: 0.5}}
                 style={{position: "absolute",
                  top: 0, left: 0, 
                   width: "300px", 
                   height: "400px", 
                   borderRadius: "15px", 
                   border: "1px solid black", 
                   padding: "1rem", 
                   backgroundColor: "white"}}>
                    <h3 >{port.name}</h3>
                    <img style={{ width: "100%"}} src={port.image} alt="" />
                    <h5 style={{marginBottom: 0}}>Description</h5>
                    <p style={{fontSize: "0.75rem"}}>{port.description}</p>
                    {port.languages.map(lan => <LanguageBadge key={lan} lan={lan} />)}
                </motion.div>
            ))}
            </div>
            <div style={{display: "flex"}}>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </section>
    </div>
  )
}

export default Portfolio