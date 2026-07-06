import React from "react";
import { Layers } from "lucide-react";

const TimelineItem = ({
  dates,
  position,
  type,
  bullets,
  isEducation = false,
  universityName,
}) => (
  <div className="relative py-6 group">
    {/* Timeline Line */}
    <div className="hidden tablet:block absolute left-[150px] rtl:left-auto rtl:right-[150px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800"></div>
    {/* Timeline Dot */}
    <div className="hidden tablet:block absolute left-[143px] rtl:left-auto rtl:right-[143px] top-8 w-4 h-4 rounded-full border-2 border-white dark:border-black bg-[#004aad] dark:bg-white shadow-sm z-10"></div>

    <div className="flex flex-col tablet:flex-row gap-4 tablet:gap-8 items-start">
      <div className="tablet:w-[130px] flex-shrink-0 pt-1 ">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {dates}
        </span>
        {!isEducation && type && (
          <span className="block mt-1 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md w-max">
            {type}
          </span>
        )}
      </div>

      <div className="flex-1 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300 shadow-sm w-full ml-5 rtl:ml-0 rtl:mr-5">
        <h3 className="text-xl font-bold mb-2">
          {isEducation ? universityName : position}
        </h3>
        {bullets && (
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {bullets}
          </p>
        )}
      </div>
    </div>
  </div>
);

const Experience = ({ data }) => {
  const { resume } = data;
  
  if (!resume) return null;

  return (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      <div className="flex items-center gap-2 mb-8">
        <Layers className="w-6 h-6 text-[#004aad] dark:text-blue-400" />
        <h2 className="text-2xl font-bold text-black dark:text-white">{data.labels?.experience || "Experience & Education."}</h2>
      </div>
      
      <div className="relative">
        {resume.experiences.map((exp) => (
          <TimelineItem 
            key={exp.id} 
            dates={exp.dates} 
            position={exp.position} 
            type={exp.type} 
            bullets={exp.bullets} 
          />
        ))}
        
        {resume.education && (
          <TimelineItem 
            isEducation={true}
            dates={resume.education.universityDate}
            universityName={resume.education.universityName}
            bullets={resume.education.universityPara}
          />
        )}
      </div>
    </div>
  );
};

export default Experience;
