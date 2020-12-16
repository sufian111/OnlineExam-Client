import React from "react";
import "./NavBarSection.css";
import logo from "../../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../App";

const NavBarSection = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  const handleLogOut = () => {
    window.location.reload("Refresh");
  };

  return (
    <div className="NavSection">
      <div className=" container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/home">
            <img style={{ width: "100px" }} src={logo} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <NavLink className="nav-link linkColor" to="/profile">
                  <strong>My Profile</strong>
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink className="nav-link linkColor" to="/home">
                  <strong>All Assessments</strong>
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink className="nav-link linkColor" to="/activeAssessment">
                  <strong>Active</strong>
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  className="nav-link linkColor"
                  to="/completeAssessment"
                >
                  <strong>Completed</strong>
                </NavLink>
              </li>

              <li class="nav-item">
                <Link
                  onClick={handleLogOut}
                  className="nav-link linkColor"
                  to="dashboard"
                >
                  <p style={{ color: "red" }}>Logout</p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBarSection;
