import React from 'react'
import { motion } from 'framer-motion';

const CarouselCard = ({ active, children, height }) => {
    const SPRING_OPTIONS = {
      type: 'spring',
      mass: 3,
      stiffness: 400,
      damping: 50
    }

    const BOX_SHADOW = "0px 2px 8px rgba(204, 0, 204, 0.7), 0px 4px 16px rgba(77, 5, 76, 0.9)";

    return (
        <motion.div
            style={{
                position: 'relative',
                height: height || "100%",
                width: "100%",
                flexShrink: 0,
                boxSizing: 'border-box',
                borderRadius: "10px",
                backfaceVisibility: "hidden",
                padding: "0.25rem",
                overflow: 'hidden',
            }}
            animate={{
                scaleX: active ? 0.85 : 0.75,
                scaleY: active ? 0.95 : 0.85,
                boxShadow: active ? BOX_SHADOW : "none"
            }}
            transition={{ scale: SPRING_OPTIONS, boxShadow: { duration: 0.4, ease: "easeOut", delay: 0.2 } }}
        >
            {children}
        </motion.div>
    )
}

export default CarouselCard