import React, { useContext } from "react";
import { UserContext } from "../../../App";
import SingleAssessment from "../SingleAssessment/SingleAssessment";
import "./AllAssessments.css";

const AllAssessments = () => {
  const services = [
    {
      id: "1",
      img: "https://i.ibb.co/NxBrtJt/rela.png",
      title: "EMPATHY",
      progress: "100",
    },
    {
      id: "2",
      img: "https://i.ibb.co/NxBrtJt/rela.png",
      title: "EMPATHY",
      progress: "100",
    },
    {
      id: "3",
      img: "https://i.ibb.co/NxBrtJt/rela.png",
      title: "EMPATHY",
      progress: "100",
    },
  ];

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="allAssessments container">
      <div className="mt-3 text-center">
        <h3 className="hello">
          Welcome back{" "}
          <span style={{ color: "#767EE6" }}>{loggedInUser.name}, </span>
          ready for your next assessment ?
        </h3>
      </div>
      <div className="row d-flex justify-content-between ">
        {services.map((service) => (
          <SingleAssessment service={service}></SingleAssessment>
        ))}
      </div>
    </div>
  );
};

export default AllAssessments;
