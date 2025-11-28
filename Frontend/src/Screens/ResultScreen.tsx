// src/pages/Result.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Player } from '../App';

type Props = {
  player: Player;
  score: number;
  totalQuestions: number;
  onRestart: () => void;
};

const ResultScreen: React.FC<Props> = ({ player, score, totalQuestions, onRestart }) => {
  const navigate = useNavigate();
  const maxScore = totalQuestions * 2;

  let message = 'Good try!';
  if (score >= maxScore * 0.8) {
    message = 'Excellent! You are a star! ⭐';
  } else if (score >= maxScore * 0.5) {
    message = 'Nice! Keep practicing! 💪';
  }

  const handlePlayAgain = () => {
    onRestart();
    navigate('/quiz');
  };

  const handleGoHome = () => {
    onRestart();
    navigate('/get-started');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Quiz Finished!</h1>
      <p style={styles.subtitle}>
        {player.name}, your score is
      </p>
      <div style={styles.score}>{score}</div>
      <p style={styles.outOf}>out of {maxScore}</p>
      <p style={styles.message}>{message}</p>

      <div style={styles.buttonRow}>
        <button style={styles.primaryBtn} onClick={handlePlayAgain}>
          Play Again
        </button>
        <button style={styles.secondaryBtn} onClick={handleGoHome}>
          Home
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '100vh',
    backgroundColor: '#74b9ff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#d63031',
  },
  outOf: {
    fontSize: 16,
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    margin: '15px 0 25px',
    textAlign: 'center',
  },
  buttonRow: {
    display: 'flex',
    gap: 10,
  },
  primaryBtn: {
    padding: '10px 18px',
    borderRadius: 25,
    border: 'none',
    backgroundColor: '#0984e3',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  secondaryBtn: {
    padding: '10px 18px',
    borderRadius: 25,
    border: '1px solid #2d3436',
    backgroundColor: '#fff',
    color: '#2d3436',
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
