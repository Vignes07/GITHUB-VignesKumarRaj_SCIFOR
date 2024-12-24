import React from "react";

export default function Results({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="results">
      <h2>Quiz Results</h2>
      <p>
        You scored {score} out of {totalQuestions} ({percentage}%)
      </p>
      <button onClick={onRestart} className="btn">
        Try Again
      </button>
    </div>
  );
}
