import { useState } from "react";
import formattedTodayDate from "./todayDate";

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

function EmploymentCard({ ...props }) {
  const isOpen = props.employment.id === props.openCardId;
  return (
    <>
      <div className="card card--employment">
        <div className="card__head">
          <span className="card__head__title">
            {props.employment.jobTitle || "(Not Specified)"}
            {props.employment.employer && ` at ${props.employment.employer}`}
          </span>
          <span className="card__head__buttons">
            <button
              className="card__head__button"
              type="button"
              onClick={() => {
                props.changeCvData((draft) => {
                  draft.employmentHistory = draft.employmentHistory.filter(
                    (emp) => {
                      return emp.id !== props.employment.id;
                    }
                  );
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
                  props.changeOpenCardId(props.employment.id);
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
              inputTitle="Job Title"
              value={props.employment?.jobTitle ?? ""}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetEmployment = draft.employmentHistory.find(
                    (emp) => {
                      return emp.id === props.employment.id;
                    }
                  );
                  if (targetEmployment) {
                    targetEmployment.jobTitle = e.target.value;
                  }
                });
              }}
            ></Input>
            <Input
              inputTitle="Employer"
              value={props?.employment?.employer ?? ""}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetEmployment = draft.employmentHistory.find(
                    (emp) => {
                      return emp.id === props.employment.id;
                    }
                  );
                  if (targetEmployment) {
                    targetEmployment.employer = e.target.value;
                  }
                });
              }}
            ></Input>
            <Input
              inputTitle="Start Date"
              type="date"
              value={props.employment?.startDate ?? formattedTodayDate}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetEmployment = draft.employmentHistory.find(
                    (emp) => {
                      return emp.id === props.employment.id;
                    }
                  );
                  if (targetEmployment) {
                    targetEmployment.startDate = e.target.value;
                  }
                });
              }}
            ></Input>
            <Input
              inputTitle="End Date"
              type="date"
              value={props.employment?.endDate ?? formattedTodayDate}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetEmployment = draft.employmentHistory.find(
                    (emp) => {
                      return emp.id === props.employment.id;
                    }
                  );
                  if (targetEmployment) {
                    targetEmployment.endDate = e.target.value;
                  }
                });
              }}
            ></Input>
            <Input
              inputTitle="City"
              value={props.employment?.city ?? ""}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetEmployment = draft.employmentHistory.find(
                    (emp) => {
                      return emp.id === props.employment.id;
                    }
                  );
                  if (targetEmployment) {
                    targetEmployment.city = e.target.value;
                  }
                });
              }}
            ></Input>
            <h2 className="input-label">Description: </h2>
            <textarea
              value={props.employment?.description ?? ""}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetEmployment = draft.employmentHistory.find(
                    (emp) => {
                      return emp.id === props.employment.id;
                    }
                  );
                  if (targetEmployment) {
                    targetEmployment.description = e.target.value;
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

export default function Employment({ ...props }) {
  const [openCardId, setOpenCardId] = useState(null);

  const employmentHistory = props.cvData?.employmentHistory ?? [];

  return (
    <>
      <section className="cv__section employment">
        <h1 className="cv__section__title">Employment History</h1>
        <h2 className="input-label">
          Show your relevant experience (last 10 years). Use bullet points to
          note your achievements, if possible - use numbers/facts (Achieved X,
          measured by Y, by doing Z).
        </h2>
        {employmentHistory.map((employment) => {
          return (
            <EmploymentCard
              key={employment.id}
              openCardId={openCardId}
              changeOpenCardId={setOpenCardId}
              employment={employment}
              changeCvData={props.changeCvData}
            ></EmploymentCard>
          );
        })}
        <button
          className="add-Button"
          type="button"
          onClick={() => {
            const randomId = crypto.randomUUID();
            props.changeCvData((draft) => {
              draft.employmentHistory = draft.employmentHistory || [];
              draft.employmentHistory.push({
                id: randomId,
              });
            });
            setOpenCardId(randomId);
          }}
        >
          + Add {employmentHistory.length > 0 ? "one more " : ""}employment
        </button>
      </section>
    </>
  );
}
