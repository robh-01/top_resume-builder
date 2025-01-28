function Input({ inputTitle, value, onChange }) {
  return (
    <>
      <h2 className="input-title">{inputTitle + ": "}</h2>
      <input className="input-field" value={value} onChange={onChange}></input>
    </>
  );
}

export default function Personal({...props}) {
  return (
    <>
      <section className="cv__section personal">
        <h1 className="cv__section__title">Person details</h1>
        <Input
          inputTitle="Job Title"
          value={props.cvData?.personal?.title ?? ""}
          onChange={(e) => {
            props.changeCvData((draft) => {
              draft.personal = draft.personal || {};
              draft.personal.title = e.target.value;
            });
          }}
        ></Input>
        <Input
          inputTitle="First Name"
          value={props.cvData?.personal?.firstName ?? ""}
          onChange={(e) => {
            props.changeCvData((draft) => {
              draft.personal = draft.personal || {};
              draft.personal.firstName = e.target.value;
            });
          }}
        ></Input>
        {/* <Input
          inputTitle="Last Name"
          value={cvData?.personal?.lastName ?? ""}
          onChange={(e) => {
            changeCvData((draft) => {
              draft.personal = draft.personal || {};
              draft.personal.lastName = e.target.value;
            });
          }}
        ></Input>
        <Input
          inputTitle="Email"
          value={cvData?.personal?.email ?? ""}
          onChange={(e) => {
            changeCvData((draft) => {
              draft.personal = draft.personal || {};
              draft.personal.email = e.target.value;
            });
          }}
        ></Input> */}
      </section>
    </>
  );
}
