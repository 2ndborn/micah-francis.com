import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter as Router} from 'react-router-dom';
import './index.css'
import App from './App.jsx'

const isDev = import.meta.env.DEV;
const AppWrapper = isDev ? StrictMode : Fragment; 

createRoot(document.getElementById('root')).render(
  <AppWrapper>
    <Router>
      <App />
    </Router>
  </AppWrapper>,
)
