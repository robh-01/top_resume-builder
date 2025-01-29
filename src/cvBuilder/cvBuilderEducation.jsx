import { useState } from "react";
import formattedTodayDate from "../todayDate";

function Input({ inputTitle, value, type = "text", onChange }) {
  return (
    <>
      <h2 className="input-label">{inputTitle + ": "}</h2>
      <input
        type={type}
        className="input-field"
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
}

function EducationCard({ ...props }) {
  const isOpen = props.education.id === props.openCardId;
  return (
    <>
      <div className="card card--education">
        <div className="card__head">
          <span className="card__head__title">
            {props.education.degree
              ? props.education.school
                ? `${props.education.degree} at ${props.education.school}`
                : props.education.degree
              : props.education.school
              ? props.education.school
              : "(Not specified)"}
          </span>
          <span className="card__head__buttons">
            <button
              className="card__head__button"
              type="button"
              onClick={() => {
                props.changeCvData((draft) => {
                  draft.educationList = draft.educationList.filter((edu) => {
                    return edu.id !== props.education.id;
                  });
                });
              }}
            >
              Delete
            </button>
            <button
              type="button"
              className="card__head__button"
              onClick={() => {
                if (isOpen) {
                  props.changeOpenCardId(null);
                } else {
                  props.changeOpenCardId(props.education.id);
                }
              }}
            >
              {isOpen ? "Close edit" : "Edit"}
            </button>
          </span>
        </div>
        {isOpen && (
          <div className="card__body">
            <Input
              inputTitle="School"
              value={props.education?.school ?? ""}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetEducation = draft.educationList.find((emp) => {
                    return emp.id === props.education.id;
                  });
                  if (targetEducation) {
                    targetEducation.school = e.target.value;
                  }
                });
              }}
            ></Input>
            <Input
              inputTitle="Degree"
              value={props?.education?.degree ?? ""}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetEducation = draft.educationList.find((emp) => {
                    return emp.id === props.education.id;
                  });
                  if (targetEducation) {
                    targetEducation.degree = e.target.value;
                  }
                });
              }}
            ></Input>
            <Input
              inputTitle="Start Date"
              type="date"
              value={props.education?.startDate ?? formattedTodayDate}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetEducation = draft.educationList.find((emp) => {
                    return emp.id === props.education.id;
                  });
                  if (targetEducation) {
                    targetEducation.startDate = e.target.value;
                  }
                });
              }}
            ></Input>
            <Input
              inputTitle="End Date"
              type="date"
              value={props.education?.endDate ?? formattedTodayDate}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetEducation = draft.educationList.find((emp) => {
                    return emp.id === props.education.id;
                  });
                  if (targetEducation) {
                    targetEducation.endDate = e.target.value;
                  }
                });
              }}
            ></Input>
            <Input
              inputTitle="Country"
              value={props.education?.country ?? ""}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetEducation = draft.educationList.find((emp) => {
                    return emp.id === props.education.id;
                  });
                  if (targetEducation) {
                    targetEducation.country = e.target.value;
                  }
                });
              }}
            ></Input>
            <h2 className="input-label">Description: </h2>
            <textarea
              value={props.education?.description ?? ""}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetEducation = draft.educationList.find((emp) => {
                    return emp.id === props.education.id;
                  });
                  if (targetEducation) {
                    targetEducation.description = e.target.value;
                  }
                });
              }}
            ></textarea>
          </div>
        )}
      </div>
    </>
  );
}

export default function Education({ ...props }) {
  const [openCardId, setOpenCardId] = useState(null);

  const educationList = props.cvData?.educationList ?? [];

  return (
    <>
      <section className="cv__section education">
        <h1 className="cv__section__title">Education</h1>
        <h2 className="input-label">
          A varied education on your resume sums up the value that your
          learnings and background will bring to job.
        </h2>
        {educationList.map((education) => {
          return (
            <EducationCard
              key={education.id}
              openCardId={openCardId}
              changeOpenCardId={setOpenCardId}
              education={education}
              changeCvData={props.changeCvData}
            ></EducationCard>
          );
        })}
        <button
          className="add-Button"
          type="button"
          onClick={() => {
            const randomId = crypto.randomUUID();
            props.changeCvData((draft) => {
              draft.educationList = draft.educationList || [];
              draft.educationList.push({
                id: randomId,
              });
            });
            setOpenCardId(randomId);
          }}
        >
          + Add {educationList.length > 0 ? "one more " : ""}education
        </button>
      </section>
    </>
  );
}
