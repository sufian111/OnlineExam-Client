import React, { useContext } from "react";
import { UserContext } from "../../../App";
import "./ProfileDetails.css";

const ProfileDetails = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="container profile-page">
      <div className="col-md-10 row mx-auto mt-4 py-4 py-md-5 px-md-5 info-card">
        <div className="col-md-4 col-lg-3 text-center">
          <img
            className="img-fluid profile-photo"
            src={loggedInUser.photo}
            alt=""
          />
        </div>
        <div className="col-md-8 col-lg-9 pl-md-5 pb-5 pt-3">
          <div className="form-group">
            <label htmlFor="Full Name">Full Name</label>
            <p>{loggedInUser.name} </p>
          </div>

          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <p>{loggedInUser.email} </p>
          </div>

          <div className="form-group">
            <label htmlFor="Phone">Phone</label>
            <p>{loggedInUser.phone} </p>
          </div>

          <div className="form-group">
            <label htmlFor="Designation">Designation</label>
            <p>{loggedInUser.designation} </p>
          </div>

          <div className="form-group">
            <label htmlFor="Organization">Organization</label>
            <p>{loggedInUser.organization} </p>
          </div>

          <div className="form-group">
            <label htmlFor="Work-Experiences">Work-Experiences</label>
            <p>{loggedInUser.experiences} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
