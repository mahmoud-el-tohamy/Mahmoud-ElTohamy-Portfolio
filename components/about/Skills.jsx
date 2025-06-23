import React from 'react';

const skills = [
  'Front-End Development: HTML, CSS, JavaScript, Bootstrap, React.js, TypeScript, Next.js, Responsive Design',
  'Programming Languages: C++, Python',
  'Computer Science: Data Structures & Algorithms, OOP',
  'Version Control: Git, GitHub',
  'Soft Skills: Communication, Teamwork, Problem-Solving, Event Management, Event Organization',
];

function Skills() {
  return (
    <section className="mt-10 sm:mt-20">
      <h2 className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mb-8">
        Skills
      </h2>
      <ul className="flex flex-col gap-4 items-center">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-primary-light px-4 py-2 rounded-lg shadow text-lg font-medium w-full max-w-2xl text-center"
          >
            {skill}
          </li>
        ))}
      </ul>
      {/* TODO: Add icons or badges for each skill in the future */}
    </section>
  );
}

export default Skills; 