function EmploymentItem({ employment }) {
  const titleParts = [
    employment.jobTitle,
    employment.employer,
    employment.city,
  ].filter(Boolean);

  const dateParts = [employment.startDate, employment.endDate].filter(Boolean);

  return (
    <>
      <h2 className="section__item__title">{titleParts.join(", ")}</h2>
      <h3 className="section__item__secondary__title">
        {dateParts.join(" - ")}
      </h3>
      <p className="section__item__content" style={{ whiteSpace: "pre-line" }}>
        {employment.description || ""}
      </p>
    </>
  );
}

function EducationItem({ education }) {
  const titleParts = [
    education.degree,
    education.school,
    education.country,
  ].filter(Boolean);

  const dateParts = [education.startDate, education.endDate].filter(Boolean);

  return (
    <>
      <h2 className="section__item__title">{titleParts.join(", ")}</h2>
      <h3 className="section__item__secondary__title">
        {dateParts.join(" - ")}
      </h3>
      <p className="section__item__content" style={{ whiteSpace: "pre-line" }}>
        {education.description || ""}
      </p>
    </>
  );
}

export default function CvPreview({ cvData }) {
  const personal = cvData.personal || {};
  const employmentHistory = cvData.employmentHistory || [];
  const educationList = cvData.educationList || [];

  return (
    <>
      <div className="cv-preview">
        <div className="cv-preview__file">
          <div className="cv__header">
            <div className="cv__header__img"></div>
            <div className="cv__header__text">
              <h1 className="cv__header__title">
                {personal.firstName || ""}
                <br />
                {personal.lastName || ""}
              </h1>
              <p className="cv__header__role">{personal.title || ""}</p>
            </div>
          </div>
          <div className="cv__body">
            <section className="details">
              <h2 className="section__title">Details</h2>
              <div className="section__content">
                <p>
                  {(personal.city || "") +
                    (personal.city && personal.country ? ", " : "") +
                    (personal.country || "")}
                </p>
                <a
                  target="_blank"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=roshan.bhusal911@gmail.com"
                  className="link"
                >
                  {personal.email}
                </a>
                <p>{personal.phone || ""}</p>
              </div>
            </section>
            <section className="profile">
              <h2 className="section__title">profile</h2>
              <div className="section__content">
                <p style={{ whiteSpace: "pre-line" }}>
                  {personal.professionalSummary}
                </p>
              </div>
            </section>
            <section className="employment__items">
              <h2 className="section__title">employment history</h2>
              <div className="section__content">
                {employmentHistory.map((employment) => {
                  return (
                    <EmploymentItem
                      key={employment.id}
                      employment={employment}
                    ></EmploymentItem>
                  );
                })}
              </div>
            </section>
            <section className="education__items">
              <h2 className="section__title">education</h2>
              <div className="section__content">
                {educationList.map((education) => {
                  return (
                    <EducationItem
                      key={education.id}
                      education={education}
                    ></EducationItem>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
