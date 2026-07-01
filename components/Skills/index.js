import React from "react";
import data from "../../data/portfolio.json";
import { Code2 } from "lucide-react";

const SkillBadge = ({ title }) => (
  <div className="px-5 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-sm font-medium hover:bg-[#004aad] hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-md">
    {title}
  </div>
);

const Skills = () => {
  const { resume } = data;
  
  if (!resume) return null;

  return (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      <h1 className="text-2xl text-bold flex items-center gap-2">
        <Code2 className="w-6 h-6 text-[#004aad] dark:text-blue-400" />
        Skills.
      </h1>
      
      <div className="mt-5 laptop:mt-10 flex flex-col gap-8">
        <div>
          <h2 className="text-xl opacity-70 mb-4">Languages</h2>
          <div className="flex flex-wrap gap-3">
            {resume.languages.map((lang, idx) => (
              <SkillBadge key={idx} title={lang} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl opacity-70 mb-4">Frameworks & Libraries</h2>
          <div className="flex flex-wrap gap-3">
            {resume.frameworks.map((fw, idx) => (
              <SkillBadge key={idx} title={fw} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl opacity-70 mb-4">Tools & Databases</h2>
          <div className="flex flex-wrap gap-3">
            {resume.others.map((other, idx) => (
              <SkillBadge key={idx} title={other} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
