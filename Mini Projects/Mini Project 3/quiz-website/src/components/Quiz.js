import { useState, useEffect } from "react";

function Quiz({ category, onQuizEnd }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const retryFetch = async (retries = 3, delay = 1000) => {
        try {
          const response = await fetch(
            `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`
          );
          if (response.status === 429 && retries > 0) {
            await new Promise((resolve) => setTimeout(resolve, delay));
            return retryFetch(retries - 1, delay * 2);
          }
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setQuestions(data.results);
          setLoading(false);
        } catch (e) {
          setError("Failed to load questions. Please try again later.");
          setLoading(false);
        }
      };

      await retryFetch();
    };

    fetchQuestions();
  }, [category]);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onQuizEnd(
        score + (answer === questions[currentQuestion].correct_answer ? 1 : 0),
        questions.length
      );
    }
  };

  if (loading) return <div className="loading">Loading questions...</div>;
  if (error) return <div className="error">{error}</div>;

  const question = questions[currentQuestion];
  const answers = [...question.incorrect_answers, question.correct_answer].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="quiz-container">
      <h2>
        Question {currentQuestion + 1} of {questions.length}
      </h2>
      <p dangerouslySetInnerHTML={{ __html: question.question }}></p>
      <div className="grid answer-grid">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer)}
            className="btn"
            dangerouslySetInnerHTML={{ __html: answer }}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Quiz