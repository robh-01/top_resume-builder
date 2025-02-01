import { useState } from "react";

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

function SkillCard({ ...props }) {
  const isOpen = props.skill.id === props.openCardId;
  return (
    <>
      <div className="card card--skill">
        <div className="card__head">
          <span className="card__head__title">
            {props.skill.name || "(Not specified)"}
          </span>
          <span className="card__head__buttons">
            <button
              className="card__head__button"
              type="button"
              onClick={() => {
                props.changeCvData((draft) => {
                  draft.skills = draft.skills.filter((skl) => {
                    return skl.id !== props.skill.id;
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
                  props.changeOpenCardId(props.skill.id);
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
          <div className="card__body">
            <Input
              inputTitle="Skill"
              value={props.skill?.name ?? ""}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetSkill = draft.skills.find((skl) => {
                    return skl.id === props.skill.id;
                  });
                  if (targetSkill) {
                    targetSkill.name = e.target.value;
                  }
                });
              }}
            ></Input>
          </div>
        )}
      </div>
    </>
  );
}

export default function Skills({ ...props }) {
  const [openCardId, setOpenCardId] = useState(null);

  const skills = props.cvData?.skills ?? [];

  return (
    <>
      <section className="cv__section skills">
        <h1 className="cv__section__title">Skills</h1>
        <h2 className="input-label">
          Keep 5(recommended) important skills that show you fit the position.
          Make sure they match the key skills mentioned in the job listing
          (especially when applying via an online system).
        </h2>
        {skills.map((skill) => {
          return (
            <SkillCard
              key={skill.id}
              openCardId={openCardId}
              changeOpenCardId={setOpenCardId}
              skill={skill}
              changeCvData={props.changeCvData}
            ></SkillCard>
          );
        })}
        <button
          className="add-Button"
          type="button"
          onClick={() => {
            const randomId = crypto.randomUUID();
            props.changeCvData((draft) => {
              draft.skills = draft.skills || [];
              draft.skills.push({
                id: randomId,
              });
            });
            setOpenCardId(randomId);
          }}
        >
          + Add {skills.length > 0 ? "one more " : ""}skill
        </button>
      </section>
    </>
  );
}
