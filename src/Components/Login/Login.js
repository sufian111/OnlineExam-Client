import React, { useContext, useState } from "react";
import img from "../../images/logo.png";
import bg from "../../images/bg2.jpg";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const style = {
  backgroundImage: `url("${bg}")`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100%",
  width: "100%",
  position: "fixed",
  overflow: "auto",
  height: "100%",
};

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [newUser, setNewUser] = useState(false);
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/home");
  };

  const handleChange = (e) => {
    const newUser = { ...loggedInUser };
    newUser[e.target.name] = e.target.value;
    setLoggedInUser(newUser);
  };

  return (
    <section style={style}>
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center m-2 p-3">
          <div className=" mt-5 p-3 " style={{ backgroundColor: "white" }}>
            <div className="row d-flex align-items-center">
              <div className="col-md-8 col-sm-6 text-md-left text-center ">
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  <h2>Know Thyself</h2>
                </div>

                <p className="text-muted text-center">
                  Sign in to start your session
                </p>
              </div>
              <div className="col-md-4 text-md-left text-center ">
                <img src={img} style={{ width: "100px" }} alt="" />
              </div>
            </div>

            <form className="my-3 text-md-left text-center ">
              {newUser && (
                <div className="form-group">
                  <input
                    className="form-control mb-2"
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    required
                  />
                </div>
              )}

              {newUser && (
                <div className=" form-group">
                  <input
                    className="form-control mb-2"
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <input
                  className="form-control mb-2"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control mb-2"
                  type="password"
                  onChange={handleChange}
                  name="password"
                  placeholder="Enter password"
                />
              </div>

              <div className="row ">
                <div className="col-md-8">
                  {newUser ? (
                    <div className="d-flex justify-content-start">
                      <p className="forgot-password ">
                        <span
                          className="text-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => setNewUser(!newUser)}
                        >
                          Already registered?
                        </span>
                      </p>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-start">
                      <p className="forgot-password ">
                        <span
                          className="text-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => setNewUser(!newUser)}
                        >
                          Not yet registered?
                        </span>
                      </p>
                    </div>
                  )}

                  <div className="d-flex justify-content-start">
                    <p className="forgot-password ">
                      <span
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => setNewUser(!newUser)}
                      >
                        Are you an admin?
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                  {newUser ? (
                    <div>
                      <input
                        className="form-control text-light btn btn-danger"
                        type="submit"
                        value="Sign Up"
                      />
                    </div>
                  ) : (
                    <div>
                      <input
                        className="form-control text-light btn btn-danger"
                        type="submit"
                        onClick={handleSubmit}
                        value="Sign in"
                      />
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center d-flex justify-content-center">
          <figure
            style={{ color: "#810202" }}
            className="quote text-center mt-5 p-1"
          >
            <blockquote>
              <strong>
                Knowing Self is an endless pursuit that gets you closer to
                excellence
              </strong>
            </blockquote>
            <figcaption>&mdash; Himanshu </figcaption>
          </figure>
        </div>
        <div>
          <p className="m-2" style={{ color: "white", textAlign: "center" }}>
            {" "}
            © 2020 Centre of Strategic Mindset, All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
