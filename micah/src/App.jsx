import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css'
import HomePage from './pages/HomePage';

function App() {

  return (
      <div className={styles.body}>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/about' element={<h1>About page</h1>} />
          <Route exact path='/gallery' element={<h1>Gallery page</h1>} />
        </Routes>
      </div>
  )
}

export default App
