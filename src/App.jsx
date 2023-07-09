import React, { useState } from 'react';
import './App.css';
import logo from '../public/logo.png';

const App = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = [
    {
      question: 'Is HTML a programming language?',
      answer: false
    },
    {
      question: 'Can JavaScript be used for both front-end and back-end development?',
      answer: true
    },
    {
      question: 'Does CSS handle the layout and styling of web pages?',
      answer: true
    },
    {
      question: 'Can AI completely replace human creativity in artistic endeavors?',
      answer: false
    },
    {
      question: 'Can AI be used to analyze and process large amounts of data?',
      answer: true
    },
    {
      question: 'Is React a JavaScript library commonly used for building user interfaces?',
      answer: true
    },
    {
      question: 'Is CSS used for server-side scripting?',
      answer: false
    },
    {
      question: 'Can AI algorithms learn from data and improve their performance over time?',
      answer: true
    },
    {
      question: 'Does AI have the ability to perform tasks that typically require human intelligence?',
      answer: true
    },
    {
      question: 'Can AI be used to automate repetitive tasks in web development?',
      answer: true
    },
    {
      question: 'Is machine learning the same as artificial intelligence?',
      answer: false
    }
  ];

  const handleAnswer = (isCorrect) => {
    const currentQuestionObj = questions[currentQuestion];
    const correctAnswer = currentQuestionObj.answer;
  
    if (isCorrect === correctAnswer) {
      setScore(score + 1);
    }
  
    if (currentQuestion === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const renderResultMessage = () => {
    if (score < 5) {
      return "";
    } else {
      return "";
    }
  };

  const handleRetry = () => {
    setScore(0);
    setCurrentQuestion(0);
    setQuizFinished(false);
  };

  return (
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      {!quizFinished ? (
        <div className="question-container">
          <h2 className="question">{questions[currentQuestion].question}</h2>
          <button className="yes" onClick={() => handleAnswer(true)}>Yes</button>
          <button className="no" onClick={() => handleAnswer(false)}>No</button>
        </div>
      ) : (
        <div className="result-container">
          <p className="result-message">{renderResultMessage()}</p>
          {score < 5 ? (
            <p className="result-suggestion">Don't call yourself a coder!</p>
          ) : (
            <p className="result-suggestion">Good job! Now you should hit the gym!</p>
          )}
          <button className="retry-button" onClick={handleRetry}>Retry</button>
        </div>
      )}
      <div className="score-container">
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default App;
