export default function Professional({ ...props }) {
  return (
    <>
      <section className="cv__section professional">
        <h1 className="cv__section__title">Professional Description</h1>
        <h2 className="input-label">
          Write 2-4 short, energetic sentences about how great you are. Mention
          the role and what you did. What were the big achievements? Describe
          your motivation and list your skills.
        </h2>
        <textarea
          value={props.cvData?.personal?.professionalSummary ?? ""}
          onChange={(e) => {
            props.changeCvData((draft) => {
              draft.personal = draft.personal || {};
              draft.personal.professionalSummary = e.target.value;
            });
          }}
        ></textarea>
      </section>
    </>
  );
}
