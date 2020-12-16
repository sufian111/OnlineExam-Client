import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBarSection from "../NavBarSection/NavBarSection";

import SingleStatement from "./SingleStatement";

const AssessmentById = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <NavBarSection></NavBarSection>
      <SingleStatement></SingleStatement>
    </div>
  );
};

export default AssessmentById;
