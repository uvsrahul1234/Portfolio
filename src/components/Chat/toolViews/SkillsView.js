import React from "react";

function SkillsView({ data }) {
  const skills = data?.skills ?? [];
  if (!skills.length) return null;

  // Group by category, preserving the first-seen order.
  const grouped = skills.reduce((acc, s) => {
    if (!acc.has(s.category)) acc.set(s.category, []);
    acc.get(s.category).push(s);
    return acc;
  }, new Map());

  return (
    <div className="tool-view tool-skills">
      {[...grouped.entries()].map(([category, list]) => (
        <div key={category} className="tool-skill-group">
          <div className="tool-skill-category">{category}</div>
          <div className="tool-skill-pills">
            {list.map((s) => (
              <span key={s.name} className="tool-skill-pill" title={s.description}>
                {s.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsView;
