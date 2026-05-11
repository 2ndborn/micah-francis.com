import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';

const NotFoundComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const card = {
        maxWidth: 720,
        width: "100%",
        textAlign: "center",
        padding: '2rem',
        borderRadius: "10px",
        boxShadow: "0px 2px 8px rgba(204, 0, 204, 0.7), 0px 4px 16px rgba(77, 5, 76, 0.9)"
    }
    return (
        <div style={{ height: "50vh", display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
            <div style={card}>
                <h1 style={{ fontSize: '4.5rem', margin: 0, lineHeight: 1 }}>404</h1>
                <p>We couldn't find the page you're looking for.</p>
                <p>Attempted Path: <span style={{ background: '#b3b3b3', padding: '0.15rem 0.5rem', borderRadius: 6, fontFamily: 'monospace' }}>{location.pathname}</span></p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                    <button className={styles.ctaBtn} onClick={() => navigate(-1)} aria-label='Go back'>Back</button>
                    <Link to='/'>
                        <button 
                            aria-label='Go to home page'
                            className={styles.btn}
                        >
                            Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundComponent