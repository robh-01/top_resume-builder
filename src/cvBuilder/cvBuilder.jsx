import Personal from "./cvBuilderPersonalDetails";
import Professional from "./cvBuilderProfessionalSummary";
import Employment from "./cvBuilderEmploymentHistory";

export default function CvBuilder({ ...props }) {
  return (
    <>
      <div className="cv__builder">
        <form>
          <Personal {...props}></Personal>
          <Professional {...props}></Professional>
          <Employment {...props}></Employment>
        </form>
      </div>
    </>
  );
}
