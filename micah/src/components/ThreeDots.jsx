import React from 'react'
import {motion} from 'framer-motion';

const ThreeDots = () => {
    const dotVariants = {
    pulse: {
        scale: [1, 1.5, 1],
        transition: {
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
}

    const container = {
    display: 'flex',
    justifContent: 'center',
    alignItems: 'center',
    gap: '20px',
}

const dot = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'var(--cta-secondary)',
    willChange: 'transform',
}

    return (
        <motion.div 
        style={container}
        animate='pulse'
        transition={{ staggerChildren: 0.2}}
        >
            <motion.div style={dot} variants={dotVariants} />
            <motion.div style={dot} variants={dotVariants} />
            <motion.div style={dot} variants={dotVariants} />
        </motion.div>
    )
}

export default ThreeDots