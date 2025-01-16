import React, { useState } from "react";
import "./App.css";
import questions from "./questions";


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSubmitted(true);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setSelectedOption("");
    setSubmitted(false);
  };

  return (
    <div className="app">
     
      <h1>Quiz App</h1>
      {!submitted ? (
        <>
          <div className="question-section">
            <h2>
              Question {currentQuestion + 1}/{questions.length}
            </h2>
            <p>{questions[currentQuestion].question}</p>
          </div>
          <div className="options-section">
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div className="actions-section">
            {currentQuestion < questions.length - 1 ? (
              <button
                disabled={!selectedOption}
                onClick={handleNextQuestion}
              >
                Next
              </button>
            ) : (
              <button
                disabled={!selectedOption}
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="results-section">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score}/{questions.length}</p>
          <h3>Correct Answers:</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                {question.question} - <strong>{question.correctAnswer}</strong>
              </li>
            ))}
          </ul>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

export default App;
