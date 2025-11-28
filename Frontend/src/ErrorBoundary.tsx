// src/components/ErrorBoundary.tsx
import React from "react";
import type { ErrorInfo } from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  message?: string;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.container}>
          <h2 style={styles.title}>Oops! Something went wrong 🤕</h2>
          <p style={styles.message}>{this.state.message}</p>
          <button style={styles.button} onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#ffeaa7",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#d63031",
  },
  message: {
    fontSize: 16,
    color: "#2d3436",
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    padding: "10px 20px",
    borderRadius: 8,
    border: "none",
    background: "#0984e3",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    cursor: "pointer",
  },
};
