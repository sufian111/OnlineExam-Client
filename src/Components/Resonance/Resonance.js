import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import img from "../../images/Picture1.png";
import "./Resonance.css";

const Resonance = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/reframing");
  };

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/resonanceQuestion`)
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
                2. Resonance (Ability to resonate)
              </span>
              - Finding Common Ground.....{" "}
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
                    <input className="radio" type="radio" name="nd" id="1" />
                  </div>
                  <div className="col">
                    <input className="radio" type="radio" name="nd" id="1" />
                  </div>
                  <div className="col">
                    <input className="radio" type="radio" name="nd" id="1" />
                  </div>
                  <div className="col">
                    <input className="radio" type="radio" name="nd" id="1" />
                  </div>
                  <div className="col">
                    <input className="radio" type="radio" name="nd" id="1" />
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
      <footer className="mt-5 px-5">
        © {new Date().getFullYear()} Centre of Strategic Mindset, All Rights
        Reserved
      </footer>
    </section>
  );
};

export default Resonance;
