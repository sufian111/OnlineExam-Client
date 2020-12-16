import React from "react";
import { Link } from "react-router-dom";
import "./SingleAssessment.css";

const SingleAssessment = ({ service }) => {
  return (
    <div className="col-md-6 mb-3 mt-3">
      <div className="bg card border-0 mb-1 shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-md-5">
              <div>
                <img
                  className="card-img-top w-100 lazy-image"
                  src={service.img}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-7">
              <h5 className="card-title">{service.title} </h5>
              <p className="card-text">Admin</p>
              <div>
                <Link to={`/assessment/${service.id}`}>
                  <button className="btn btn-rounded">Start Test</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAssessment;
