import Personal from "./cvBuilderPersonalDetails";
import Professional from "./cvBuilderProfessionalSummary";
import Employment from "./cvBuilderEmploymentHistory";
import Education from "./cvBuilderEducation";
import ContactLinks from "./cvBuilderLinks";
import Skills from "./cvBuilderSkills";

export default function CvBuilder({ ...props }) {
  return (
    <>
      <div className="cv-builder">
        {props.children}
        <form>
          <Personal {...props}></Personal>
          <Professional {...props}></Professional>
          <Employment {...props}></Employment>
          <Education {...props}></Education>
          <ContactLinks {...props}></ContactLinks>
          <Skills {...props}></Skills>
        </form>
      </div>
    </>
  );
}
