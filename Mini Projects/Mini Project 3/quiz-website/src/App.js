import { useState } from "react";
import CategoriesComponent from "./components/Categories";
import QuizComponent from "./components/Quiz";
import ResultsComponent from "./components/Results";
import "./App.css";

function App() {
  const [stage, setStage] = useState("categories");
  const [category, setCategory] = useState(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const startQuiz = (selectedCategory) => {
    setCategory(selectedCategory);
    setStage("quiz");
  };

  const endQuiz = (finalScore, total) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setStage("results");
  };

  const restartQuiz = () => {
    setStage("categories");
    setCategory(null);
    setScore(0);
    setTotalQuestions(0);
  };

  return (
    <>
      <nav>
        <h1>Quiz Master</h1>
      </nav>
      <main className="container">
        {stage === "categories" && (
          <CategoriesComponent onSelectCategory={startQuiz} />
        )}
        {stage === "quiz" && (
          <QuizComponent category={category} onQuizEnd={endQuiz} />
        )}
        {stage === "results" && (
          <ResultsComponent
            score={score}
            totalQuestions={totalQuestions}
            onRestart={restartQuiz}
          />
        )}
      </main>
    </>
  );
}

export default App;
