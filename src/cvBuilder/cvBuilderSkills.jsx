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
              Delete
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
              {isOpen ? "Close edit" : "Edit"}
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
