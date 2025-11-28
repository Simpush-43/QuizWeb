import React from 'react'
import { useNavigate } from 'react-router-dom'
const GetStartedScreen : React.FC= () => {
  const navigate = useNavigate();
  return (
    <>
    <div style={styles.container}>
      <div style={styles.avatarCircle}>
        <span style={styles.avatarText}>🧒</span>
      </div>
      <h1 style={styles.title}>Welcome, kiddo!</h1>
      <p style={styles.subtitle}> Let's play a fun quiz and become a quiz champion</p>
      <button style={styles.button} onClick={()=>navigate('/details')}>Get Started</button>
    </div> 
    </>
  )
}

export default GetStartedScreen
const styles : {[key:string]:React.CSSProperties}={
   container: {
    height: '100vh',
    backgroundColor: '#f5f7ff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatarCircle: {
    width: 140,
    height: 140,
    borderRadius: '50%',
    backgroundColor: '#ffeaa7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  avatarText: {
    fontSize: 70,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d3436',
  },
  subtitle: {
    fontSize: 16,
    color: '#636e72',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0984e3',
    color: '#fff',
    border: 'none',
    padding: '12px 35px',
    borderRadius: 30,
    fontSize: 18,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}