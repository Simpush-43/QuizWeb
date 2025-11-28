import React, { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SplashScreen from "./Screens/SplashScreen";
import GetStartedScreen from "./Screens/GetStartedScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import InstructionScreen from "./Screens/InstructionScreen";
import QuizScreen from "./Screens/QuizScreen";
import ResultScreen from "./Screens/ResultScreen";

export type Player = {
  name: string;
  age?: string;
};
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
const App: React.FC = () => {
  const [player, setplayer] = useState<Player | null>(null);
  const [score, setscore] = useState<number>(0);
  const [totalQuestions, settotalQuestions] = useState<number>(0);
  const handleSavePlayer = (p: Player) => {
    setplayer(p);
  };
  const handleQuizEnd = (finalScore: number, tottalQ: number) => {
    setscore(finalScore);
    settotalQuestions(tottalQ);
  };
  const handleStart = () => {
    setscore(0);
    settotalQuestions(0);
  };
  return (
    <>
    <ErrorBoundary>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/get-started" element={<GetStartedScreen />} />
          <Route
            path="/details"
            element={<DetailsScreen onSavePlayer={handleSavePlayer} />}
          />
          <Route
            path="/instructions"
            element={
              player ? (
                <InstructionScreen player={player} />
              ) : (
                <Navigate to="/details" replace />
              )
            }
          />
          <Route
            path="/quiz"
            element={
              player ? (
                <QuizScreen player={player} onQuizEnd={handleQuizEnd} />
              ) : (
                <Navigate to="/details" replace />
              )
            }
          />
          <Route
          path="/result"
          element={
            player ? (
              <ResultScreen
                player={player}
                score={score}
                totalQuestions={totalQuestions}
                onRestart={handleStart}
              />
            ) : (
              <Navigate to="/details" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </ErrorBoundary>
    </>
  );
};

export default App;
