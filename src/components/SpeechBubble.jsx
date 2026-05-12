import React, { useEffect, useState } from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useScrollToSection } from '../hooks/useScrollToSection'

const SpeechBubble = () => {
  
const [isVisible, setIsVisible] = useState(true);
const scrollToNext = useScrollToSection();
const btnControls = useAnimation();

  useEffect(() => {
    const target = document.getElementById("contact-detail");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide when the section is visible, show otherwise
        setIsVisible(!entry.isIntersecting);
      },
      {threshold: 0.25}
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      btnControls.set({ scale: 1 });
      return;
    }
    btnControls.start(
      {
        scale: [0.96, 0.97, 0.98, 0.99, 1, 0.99, 0.98, 0.97, 0.96],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
        },
      }
    )
  }, [isVisible, btnControls]);

  const handleClick = () => {
    scrollToNext("contact-detail");
    // You can optionally hide immediately on click to avoid flicker:
    setIsVisible(false);
  };

  return (
    <motion.div
    animate={btnControls}
    onClick={handleClick}
    whileHover={{color: 'var(--cta-secondary)'}}
    style={{
      position: 'fixed', 
      right: 25, 
      bottom: 10,
      fontSize: '2rem',
      textShadow: '0px 4px 8px rgba(0,0,0,0.2)',
      zIndex: 999999,
      cursor: 'pointer',
      opacity: isVisible ? 1 : 0,
      pointerEvent: isVisible ? 'auto' : 'none'
    }}
    aria-label="Scroll to contact details"
    role="button"

    >
        <i className="fa-solid fa-comment-dots"></i>
    </motion.div>
  )
}

export default SpeechBubble