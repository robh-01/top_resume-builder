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
                  props.changeOpenCardId(props.contactLink.id);
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
