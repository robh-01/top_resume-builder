function EmploymentItem({ employment }) {
  const titleParts = [
    employment.jobTitle,
    employment.employer,
    employment.city,
  ].filter(Boolean);

  const dateParts = [employment.startDate, employment.endDate].filter(Boolean);

  return (
    <div className="section__item">
      <h2 className="section__item__title">{titleParts.join(", ")}</h2>
      <h3 className="section__item__secondary__title">
        {dateParts.join(" - ")}
      </h3>
      <p className="section__item__content" style={{ whiteSpace: "pre-line" }}>
        {employment.description || ""}
      </p>
    </div>
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

function ContactLinkItem({ contactLink }) {
  return (
    <>
      <a href={contactLink.link} target="_blank" className="link contact-link">
        {contactLink.label}
      </a>
    </>
  );
}

function SkillItem({ skill }) {
  return (
    <>
      <span className="skill__name">{skill.name}</span>
    </>
  );
}

export default function CvPreview({ cvData }) {
  const personal = cvData.personal || {};
  const employmentHistory = cvData.employmentHistory || [];
  const educationList = cvData.educationList || [];
  const contactLinks = cvData.contactLinks || [];
  const skills = cvData.skills || [];

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
            <section className="details cv__body__section">
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
            <section className="profile cv__body__section">
              <h2 className="section__title">profile</h2>
              <div className="section__content">
                <p style={{ whiteSpace: "pre-line" }}>
                  {personal.professionalSummary}
                </p>
              </div>
            </section>
            <section className="employment-items cv__body__section">
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
            <section className="education-items cv__body__section">
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
            <section className="contact-links cv__body__section">
              <h2 className="section__title">links</h2>
              <div className="section__content">
                {contactLinks.map((link) => {
                  return (
                    <ContactLinkItem
                      key={link.id}
                      contactLink={link}
                    ></ContactLinkItem>
                  );
                })}
              </div>
            </section>
            <section className="skills cv__body__section">
              <h2 className="section__title">skills</h2>
              <div className="section__content">
                {skills.map((skill) => {
                  return <SkillItem key={skill.id} skill={skill}></SkillItem>;
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
