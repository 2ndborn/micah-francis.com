import React, { useRef, useState } from 'react'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom';
import useClickOutside from '../hooks/useClickOutside';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleOpen = () => setIsOpen(prev => !prev)

  useClickOutside([menuRef, buttonRef], () => {
    setIsOpen(false);
  })

  return (
    <div>
      <div
        ref={menuRef}
        className={isOpen ? styles.menuOpen : styles.menu}
        style={{zIndex: 99}}
      >
        <ul>
          <li><NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>About</NavLink></li>
          <li><NavLink to="/portfolio" className={({isActive}) => (isActive ? styles.active : "")}>Portfolio</NavLink></li>
        </ul>
      </div>
      <div
        ref={buttonRef}
        onClick={handleOpen}
        className={`${styles.barsContainer} ${isOpen ? styles.open : ""}`}
        style={{zIndex: 999}}
      >
        <span className={styles.bars}></span>
        <span className={styles.bars}></span>
        <span className={styles.bars}></span>
      </div>
    </div>
  )
}

export default NavBar