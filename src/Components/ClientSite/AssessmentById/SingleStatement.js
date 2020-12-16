import React, { useState } from "react";
import { questionsBank } from "../../../FakeData/QuestionBank/OuestionBank";
import "./SingleStatement.css";

const SingleStatement = () => {
  const [count, setCount] = useState(3);

  const handleNext = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const question = questionsBank.find(
    (question) => question.questionId === count
  );

  const [currentQuestion, setCurrentQuestion] = useState(question);
  console.log(currentQuestion);
  console.log(count);

  return (
    <div>
      <div className="row d-flex justify-content-center mt-5 p-2">
        <div className="card col-md-6 question-card shadow">
          <div className="card-body">
            <div className="container  quiz-container text-center">
              <h2 className="statement">
                Statement:- {currentQuestion.statement}
              </h2>
            </div>
            <div>
              <form>
                <label>
                  <input type="radio" name="radio" checked />
                  <span>ALWAYS</span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>MOSTLY</span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>OFTEN</span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>RARELY</span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>NEVER </span>
                </label>
              </form>
            </div>
            <div>
              <button onClick={handleNext} className="btn btn-rounded">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStatement;
