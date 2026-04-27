import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css'
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import NotFoundComponent from './components/NotFoundComponent';

function App() {

  return (
      <div className={styles.body}>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/about' element={<AboutMe />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route path='*' element={<NotFoundComponent />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
