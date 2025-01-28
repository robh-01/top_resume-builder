export default function Cv({ cvData }) {
  return (
    <>
      <div className="cv__file">
        <h1>{cvData?.personal?.title ?? ""}</h1>
      </div>
    </>
  );
}
