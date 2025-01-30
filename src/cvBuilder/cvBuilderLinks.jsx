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

function LinkCard({ ...props }) {
  const isOpen = props.contactLink.id === props.openCardId;
  return (
    <>
      <div className="card card--contact">
        <div className="card__head">
          <span className="card__head__title">
            {props.contactLink.label || "(Not specified)"}
          </span>
          <span className="card__head__buttons">
            <button
              className="card__head__button"
              type="button"
              onClick={() => {
                props.changeCvData((draft) => {
                  draft.contactLinks = draft.contactLinks.filter((link) => {
                    return link.id !== props.contactLink.id;
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
                  props.changeOpenCardId(props.contactLink.id);
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
              inputTitle="Label"
              value={props.contactLink?.label ?? ""}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetContactLink = draft.contactLinks.find((link) => {
                    return link.id === props.contactLink.id;
                  });
                  if (targetContactLink) {
                    targetContactLink.label = e.target.value;
                  }
                });
              }}
            ></Input>
            <Input
              inputTitle="Link"
              value={props.contactLink?.link ?? ""}
              onChange={(e) => {
                props.changeCvData((draft) => {
                  const targetContactLink = draft.contactLinks.find((link) => {
                    return link.id === props.contactLink.id;
                  });
                  if (targetContactLink) {
                    targetContactLink.link = e.target.value;
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

export default function ContactLinks({ ...props }) {
  const [openCardId, setOpenCardId] = useState(null);

  const contactLinks = props.cvData?.contactLinks ?? [];

  return (
    <>
      <section className="cv__section contact">
        <h1 className="cv__section__title">Website & Social Links</h1>
        <h2 className="input-label">
          You can add links to websites you want hiring managers to see! Perhaps
          It will be a link to your portfolio, LinkedIn profile, or personal
          website A varied education on your resume sums up the value that your
          learnings and background will bring to job.
        </h2>
        {contactLinks.map((link) => {
          return (
            <LinkCard
              key={link.id}
              openCardId={openCardId}
              changeOpenCardId={setOpenCardId}
              contactLink={link}
              changeCvData={props.changeCvData}
            ></LinkCard>
          );
        })}
        <button
          className="add-Button"
          type="button"
          onClick={() => {
            const randomId = crypto.randomUUID();
            props.changeCvData((draft) => {
              draft.contactLinks = draft.contactLinks || [];
              draft.contactLinks.push({
                id: randomId,
              });
            });
            setOpenCardId(randomId);
          }}
        >
          + Add {contactLinks.length > 0 ? "one more " : ""}link
        </button>
      </section>
    </>
  );
}
