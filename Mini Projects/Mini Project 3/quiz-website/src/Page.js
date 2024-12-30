

export default function Home() {
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
  );
}
