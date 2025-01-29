export default function Cv({ cvData }) {
  return (
    <>
      <div className="cv__file">
        <h1>{cvData?.personal?.title ?? ""}</h1>
        <h1>{cvData?.personal?.firstName ?? ""}</h1>
        <h1>{cvData?.personal?.lastName ?? ""}</h1>
        <h1>{cvData?.personal?.email ?? ""}</h1>
        <h1>{cvData?.personal?.phone ?? ""}</h1>
        <h1>{cvData?.personal?.country ?? ""}</h1>
        <h1>{cvData?.personal?.city ?? ""}</h1>
        <h1>{cvData?.personal?.professionalSummary ?? ""}</h1>
      </div>
    </>
  );
}
