import React from "react";

function EducationView({ data }) {
  const education = data?.education ?? [];
  if (!education.length) return null;

  return (
    <div className="tool-view tool-education">
      {education.map((e) => (
        <div key={`${e.degree}-${e.school}`} className="tool-edu-card">
          <div className="tool-edu-degree">{e.degree}</div>
          <div className="tool-edu-school">
            {e.school} · {e.year}
          </div>
          {e.status && <div className="tool-edu-status">{e.status}</div>}
        </div>
      ))}
    </div>
  );
}

export default EducationView;
