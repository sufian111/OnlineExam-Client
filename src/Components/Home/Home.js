import React from "react";
import AllAssessments from "../ClientSite/AllAssessments/AllAssessments";
import NavBarSection from "../ClientSite/NavBarSection/NavBarSection";
import Relatability from "../Relatability/Relatability";

const Home = () => {
  return (
    <div>
      <NavBarSection></NavBarSection>
      <AllAssessments></AllAssessments>
      {/* <Relatability></Relatability> */}
    </div>
  );
};

export default Home;
