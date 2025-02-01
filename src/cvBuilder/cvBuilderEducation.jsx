import { useState } from "react";
import formattedTodayDate from "../todayDate";

function Input({ inputTitle, value, type = "text", onChange }) {
  return (
    <div className="cv__section__form-item">
      <h2 className="input-label">{inputTitle + ": "}</h2>
      <input
        type={type}
        className="input-field"
        value={value}
        onChange={onChange}
      ></input>
    </div>
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
              <svg
                className="delete icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentcolor"
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
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
              {isOpen ? (
                <svg
                  className="show-more icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentcolor"
                >
                  <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                </svg>
              ) : (
                <svg
                  className="show-more icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentcolor"
                >
                  <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
              )}
            </button>
          </span>
        </div>
        {isOpen && (
          <div className="cv__section__form">
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
            <div className="cv__section__form-item textarea">
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
