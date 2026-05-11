import NavBar from './components/NavBar';
import { Routes, Route, useLocation } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';
import styles from './App.module.css'
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import NotFoundComponent from './components/NotFoundComponent';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

function App() {
  const [loader, setLoader] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setLoader(true)
    const timer = setTimeout(() => {
      setLoader(false)
    }, 1000);
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
      <div className={styles.body}>
        <AnimatePresence mode='wait'>
        {loader ? (
          <Loader />
          // <div style={{position: 'absolute', inset: 0, height: "100vh", width: '100%', background: '#fff'}}></div>
        ) : (
          <>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about' element={<AboutMe />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route path='*' element={<NotFoundComponent />} />
          </Routes>
          <Footer />
          </>
        )}
        </AnimatePresence>
      </div>
  )
}

export default App
