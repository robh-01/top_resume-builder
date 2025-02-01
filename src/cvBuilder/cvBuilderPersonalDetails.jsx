function Input({ inputTitle, value, type, onChange }) {
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

export default function Personal({ ...props }) {
  return (
    <>
      <section className="cv__section personal">
        <h1 className="cv__section__title">Person details</h1>
        <div className="cv__section__form ">
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
            type="text"
            onChange={(e) => {
              props.changeCvData((draft) => {
                draft.personal = draft.personal || {};
                draft.personal.firstName = e.target.value;
              });
            }}
          ></Input>
          <Input
            inputTitle="Last Name"
            value={props.cvData?.personal?.lastName ?? ""}
            type="text"
            onChange={(e) => {
              props.changeCvData((draft) => {
                draft.personal = draft.personal || {};
                draft.personal.lastName = e.target.value;
              });
            }}
          ></Input>
          <Input
            inputTitle="Email"
            value={props.cvData?.personal?.email ?? ""}
            type="email"
            onChange={(e) => {
              props.changeCvData((draft) => {
                draft.personal = draft.personal || {};
                draft.personal.email = e.target.value;
              });
            }}
          ></Input>
          <Input
            inputTitle="Phone"
            value={props.cvData?.personal?.phone ?? ""}
            type="tel"
            onChange={(e) => {
              props.changeCvData((draft) => {
                draft.personal = draft.personal || {};
                draft.personal.phone = e.target.value;
              });
            }}
          ></Input>
          <Input
            inputTitle="Country"
            value={props.cvData?.personal?.country ?? ""}
            type="text"
            onChange={(e) => {
              props.changeCvData((draft) => {
                draft.personal = draft.personal || {};
                draft.personal.country = e.target.value;
              });
            }}
          ></Input>
          <Input
            inputTitle="City"
            value={props.cvData?.personal?.city ?? ""}
            type="text"
            onChange={(e) => {
              props.changeCvData((draft) => {
                draft.personal = draft.personal || {};
                draft.personal.city = e.target.value;
              });
            }}
          ></Input>
        </div>
      </section>
    </>
  );
}
