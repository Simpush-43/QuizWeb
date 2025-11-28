import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/get-started");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>Kids Quiz</h1>
        <div style={styles.loader} />
      </div>
    </>
  );
};
export default SplashScreen;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "100vh",
    backgroundColor: "#4b7bec",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "36px",
    color: "#fff",
    fontWeight: "bold",
  },
  loader: {
    marginTop: 20,
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "4px solid #fff",
    borderTopColor: "transparent",
    animation: "spin 0.8s linear infinite",
  },
};
