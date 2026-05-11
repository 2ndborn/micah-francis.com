import React, { useEffect, useState } from 'react'
import { motion, spring, useMotionValue } from 'framer-motion';
import LanguageBadge from './LanguageBadge';
import { useMediaQuery } from '../hooks/useMediaQuery';

const PortCarousel = ({
  objectPosition,
  image,
  imageAlt,
  name,
  description,
  languages,
  thumb,
  thumbAlt,
  website,
  github,
  filter
}) => {

  // const matches = useMediaQuery()
  const isSmall = useMediaQuery('(max-width: 600px)')

  return (
    <>
      <img style={{
        height: '100%',
        width: '100%',
        objectFit: "cover",
        objectPosition: objectPosition,
      }} src={image} alt={imageAlt} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "Linear-gradient(180deg, rgba(245, 245, 245, 0.9) 0%, rgba(245, 245, 245, 1) 100%)",
          display: 'grid',
          gridTemplateColumns: "repeat(16, 1fr)",
          gridTemplateRows: "repeat(9, 1fr)",
          padding: "min(5rem, 8%)"
        }}>
        <div style={{
          gridArea: isSmall ? "1 / 1 / 1 / -1" : "2 / 1 / 2 / 9",
          fontSize: "clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem)",
        }}>
          <h1>{name}</h1>
        </div>
        <div style={{
          gridArea: isSmall ? "2 / 1 / 4 / -1" : "2 / 9 / 2 / -1",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}>
          <motion.a href={website} target='_blank' rel='noopener noreferrer' style={{
            height: "clamp(4rem, 4.318rem + 0.91vw, 5rem)",
            width: "clamp(7rem, 6.704rem + 3.98vw, 9.688rem)",
            padding: 0,
            borderRadius: "10px",
            boxShadow: "0px 2px 4px rgba(196, 85, 196, 0.7), 0px 4px 8px rgba(77, 35, 76, 0.9)",
            overflow: "hidden",
            cursor: 'pointer'
          }}
            whileHover={{
              color: "var(--cta-secondary)",
              border: "2px solid var(--cta-secondary)",
              scale: 1.05,
              transition: { duration: 0.5, ease: "easeInOut" }
            }}
          >
            <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={thumb} alt={thumbAlt} />
          </motion.a>
          <motion.a
            href={github}
            aria-label="View project on GitHub"
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "clamp(4rem, 4.318rem + 0.91vw, 5rem)",
              width: "clamp(7rem, 6.704rem + 3.98vw, 9.688rem)",
              backgroundColor: "white",
              fontSize: "clamp(1.75rem, 1.477rem + 1.36vw, 2.5rem)",
              color: "var(--font-primary)",
              borderRadius: "10px",
              border: "2px solid #884587",
              boxShadow: "0px 2px 4px rgba(196, 85, 196, 0.7), 0px 4px 8px rgba(77, 35, 76, 0.9)",
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            whileHover={{
              color: "var(--cta-secondary)",
              border: "2px solid var(--cta-secondary)",
              scale: 1.05,
              transition: { duration: 0.5, ease: "easeInOut" }
            }}
          >
            <i className="fa-brands fa-github"></i>
          </motion.a>
        </div>
        <div style={{
          gridArea: "4 / 1 / 8 / -1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          color: "#884587"
        }}>
          {description}
        </div>
        <div style={{
          gridArea: "8 / 1 / -1 / -1",
          justifySelf: "end",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 4,
          paddingRight: "1rem",
          maxWidth: "100%",
          width: "fit-content",
        }}>
          {languages?.map((l, idx) => (
            <LanguageBadge key={idx} lan={l} />
          ))}
        </div>
      </div>
    </>
  )
}

export default PortCarousel