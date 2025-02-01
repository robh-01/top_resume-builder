// import { useState } from "react";
import { useImmer } from "use-immer";
import "./App.css";

import CvPreview from "./cv-preview/cv-preview";
import CvBuilder from "./cvBuilder/cvBuilder";
import CvBuilderHeader from "./cvBuilderHeader";

function App() {
  const [cvData, setCvData] = useImmer({});
  return (
    <>
      <div className="cv-wrapper">
        <div className="container flex">
          <CvBuilder cvData={cvData} changeCvData={setCvData}>
            <CvBuilderHeader setCvData={setCvData}></CvBuilderHeader>
            <hr className="section-divider" />
          </CvBuilder>
          <CvPreview cvData={cvData}></CvPreview>
        </div>
      </div>
    </>
  );
}

export default App;
