// import { useState } from "react";
import { useImmer } from "use-immer";
import "./App.css";

import Cv from "./cv-preview/cv-preview";
import CvBuilder from "./cvBuilder/cvBuilder";
import demoData from "./assets/demoData/demoData.json";

function App() {
  const [cvData, setCvData] = useImmer({});
  return (
    <>
      <button
        onClick={() => {
          setCvData(demoData);
        }}
      >
        Load Demo Data
      </button>
      <button
        onClick={() => {
          setCvData({});
        }}
      >
        Clear all fields
      </button>
      <div className="cv-wrapper">
        <div className="container flex">
          <CvBuilder cvData={cvData} changeCvData={setCvData}></CvBuilder>
          <Cv cvData={cvData}></Cv>
        </div>
      </div>
    </>
  );
}

export default App;
