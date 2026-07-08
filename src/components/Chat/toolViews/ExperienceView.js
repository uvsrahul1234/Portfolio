import React from "react";

function ExperienceView({ data }) {
  const experience = data?.experience ?? [];
  if (!experience.length) return null;

  return (
    <div className="tool-view tool-experience">
      {experience.map((exp) => (
        <div key={`${exp.role}-${exp.company}`} className="tool-exp-card">
          <div className="tool-exp-head">
            <div>
              <div className="tool-exp-role">{exp.role}</div>
              <div className="tool-exp-company">
                {exp.company} · {exp.dates}
              </div>
            </div>
            {exp.status && (
              <span className="tool-exp-status">{exp.status}</span>
            )}
          </div>
          {exp.bullets?.length > 0 && (
            <ul className="tool-exp-bullets">
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default ExperienceView;
