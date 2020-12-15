import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import img from "../../images/Picture1.png";
import "./Relatability.css";

const Relatability = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();

  const handleClick = () => {
    history.push("/resonance");
  };

  const [answer, setAnswer] = useState({
    Not_Demonstrated: "false",
    Early_Awareness: "false",
    Selective_appliation: "false",
    Well_Manifested: "false",
    Clear_sttrength: "false",
  });

  const handleChange = (e) => {
    const newAnswer = { ...answer };
    newAnswer[e.target.value] = "true";
    setAnswer(newAnswer);
  };

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/relatabilityQuestion`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  return (
    <section>
      <div>
        <img src={img} width="100%" alt="" />
      </div>
      <div className="container mt-5 border border-dark ">
        <div>
          <div className="row border-dark">
            <div className="col-md-12 bg-light border border-dark ">
              {" "}
              <span className="text-uppercase">
                1. Relatability (Ability to Relate)
              </span>
              - Appreciating where someone is coming from .....{" "}
            </div>
          </div>
          <div className="row">
            <div className="text-center text-uppercase col border border-dark ">
              Rating
            </div>
          </div>
          <div className="row text-center text-uppercase">
            <div className="col border border-dark ">Not Demonstrated</div>
            <div className="col border border-dark ">Early Awareness</div>
            <div className="col border border-dark ">Selective appliation</div>
            <div className="col border border-dark ">Well-Manifested</div>
            <div className="col border border-dark ">Clear sttrength</div>
          </div>
          <div className="row text-center">
            <div className="col border border-dark">(ND)</div>
            <div className="col border border-dark">(EA)</div>
            <div className="col border border-dark">(SA)</div>
            <div className="col border border-dark">(WM)</div>
            <div className="col border border-dark">(CS)</div>
          </div>
          <div className="row text-center">
            <div className="col border border-dark"></div>
            <div className="col border border-dark"></div>
            <div className="col border border-dark"></div>
            <div
              className="col border border-dark "
              style={{
                backgroundColor: "greenyellow",
                width: "100px",
                height: "20px",
              }}
            ></div>
            <div className="col border border-dark"></div>
          </div>
          <div className="row bg-dark ">
            <div className="col text-center text-uppercase text-light">
              Behavioural Inputs
            </div>
          </div>
          <div className="row border border-dark ">
            <div className="col-md-6 border border-dark "></div>
            <div className="row col-md-6 text-center ">
              <div className="col border border-dark ">ND</div>
              <div className="col border border-dark ">EA</div>
              <div className="col border border-dark ">SA</div>
              <div className="col border border-dark ">WM</div>
              <div className="col ">CS</div>
            </div>
          </div>
          {questions.map((question) => (
            <div className="row">
              <div className="col-md-6 border border-dark ">
                {" "}
                {question.question}{" "}
              </div>

              <div className="col-md-6 border border-dark ">
                <form className="row text-center p-1" action="">
                  <div className="col">
                    <input
                      className="radio"
                      value="Not_Demonstrated"
                      onChange={handleChange}
                      type="radio"
                      name="option"
                      id="1"
                    />
                  </div>
                  <div className="col">
                    <input
                      className="radio"
                      value="Early_Awareness"
                      onChange={handleChange}
                      type="radio"
                      name="option"
                      id="1"
                    />
                  </div>
                  <div className="col">
                    <input
                      className="radio"
                      value="Selective_appliation"
                      onChange={handleChange}
                      type="radio"
                      name="option"
                      id="1"
                    />
                  </div>
                  <div className="col">
                    <input
                      className="radio"
                      onChange={handleChange}
                      value="Well_Manifested"
                      type="radio"
                      name="option"
                      id="1"
                    />
                  </div>
                  <div className="col">
                    <input
                      className="radio"
                      value="Clear_sttrength"
                      onChange={handleChange}
                      type="radio"
                      name="option"
                      id="1"
                    />
                  </div>
                </form>
              </div>
            </div>
          ))}
          <div className="row bg-dark ">
            <div style={{ width: "100px", height: "20px" }}></div>
          </div>
        </div>
      </div>
      <div
        className="container border border-dark my-5"
        style={{ height: "100px" }}
      >
        <p>Key Reflections</p>
      </div>
      <div
        className="container border border-dark my-5 "
        style={{ height: "100px" }}
      >
        <p>Key Actions</p>
      </div>
      <div className="container d-flex justify-content-end ">
        <button className="btn btn-primary " onClick={handleClick}>
          Next
        </button>
      </div>
      <footer className="mt-5 px-5 text-muted">
        © {new Date().getFullYear()} Centre of Strategic Mindset, All Rights
        Reserved
      </footer>
    </section>
  );
};

export default Relatability;
