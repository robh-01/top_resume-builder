import demoData from "./assets/demoData/demoData.json";

function CvBuilderHeader({ setCvData }) {
  return (
    <div className="cv-builder__header">
      <div className="logo">Resume Builder</div>
      <div className="data-btns">
        <button
          className="data-btn load-demo"
          onClick={() => {
            setCvData(demoData);
          }}
        >
          Load Demo Data
        </button>
        <button
          className="data-btn clear-all"
          onClick={() => {
            setCvData({});
          }}
        >
          Clear all fields
        </button>
      </div>
    </div>
  );
}

export default CvBuilderHeader;
