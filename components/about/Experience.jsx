import React from 'react';

function Experience() {
  return (
    <section className="mt-10 sm:mt-20">
      <h2 className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mb-8">
        Experience
      </h2>
      <div className="bg-secondary-light dark:bg-ternary-dark rounded-lg shadow p-6 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-2">
          Programming Instructor – Digital Egypt Cubs Initiative (DECI)
        </h3>
        <p className="text-md text-gray-700 dark:text-gray-200 mb-1">
          Ministry of Communications and Information Technology (MCIT) – Egypt, in collaboration with Udacity
        </p>
        <p className="text-md text-gray-700 dark:text-gray-200 mb-1">
          <span className="font-medium">Aug 2021 – [Present]</span>
        </p>
        <ul className="list-disc pl-5 text-md text-gray-700 dark:text-gray-200 mb-2">
          <li>Taught 60+ students, helping 90% of them complete projects successfully, enhancing their logical thinking and problem-solving skills through interactive exercises.</li>
          <li>Delivered and structured training sessions on Python, algorithm thinking, and coding basics.</li>
          <li>Designed practical challenges and co-projects to reinforce technical concepts and promote teamwork.</li>
          <li>Provided one-on-one mentorship, guiding students through real-world coding challenges.</li>
          <li>Developed and delivered comprehensive learning materials, ensuring content aligns with industry standards and educational best practices.</li>
        </ul>
        <p className="text-md text-gray-700 dark:text-gray-200 mt-2">
          <span className="font-medium">About DECI:</span> The Digital Egypt Cubs Initiative (DECI) is a government-led educational program providing top-tier technical support for students from middle to high school, aiming to enhance their ICT skills. (More at <a href="https://deci.gov.eg" className="text-primary-dark dark:text-primary-light underline" target="_blank" rel="noopener noreferrer">deci.gov.eg</a>)
        </p>
      </div>
    </section>
  );
}

export default Experience; 