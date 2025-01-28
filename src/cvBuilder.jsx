import Personal from "./cvBuilderPersonalDetails";

export default function CvBuilder({...props}) {
  return (
    <>
      <div className="cv__builder">
        <form>
          <Personal {...props}></Personal>
        </form>
      </div>
    </>
  );
}
