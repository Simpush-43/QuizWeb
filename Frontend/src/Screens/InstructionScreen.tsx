// src/pages/Instructions.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Player } from '../App';

type Props = {
  player: Player;
};

const InstructionScreen: React.FC<Props> = ({ player }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <div style={styles.container}>
      <p style={styles.greet}>Hi {player.name} 👋</p>
      <h1 style={styles.title}>How to play?</h1>

      <div style={styles.card}>
        <p style={styles.rule}>🟢 Correct Answer: +2 points</p>
        <p style={styles.rule}>🔴 Wrong Answer: -1 point</p>
        <p style={styles.rule}>⭐ Try to score as high as you can!</p>
      </div>

      <button style={styles.button} onClick={handleStart}>
        Let&apos;s Start!
      </button>
    </div>
  );
};

export default InstructionScreen;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '100vh',
    backgroundColor: '#a29bfe',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  greet: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    marginBottom: 30,
  },
  rule: {
    fontSize: 16,
    color: '#2d3436',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#6c5ce7',
    borderRadius: 30,
    padding: '12px 40px',
    border: 'none',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
