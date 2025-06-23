import React from 'react';

const leadershipRoles = [
  {
    title: 'Vice Team Leader – Youth Leading Youth (YLY)',
    period: 'Jan 2023 – Present',
    bullets: [
      'Leading and managing operations for one of the largest youth initiatives.',
      'Coordinating cross-functional teams to execute events and programs.',
      'Enhancing organizational efficiency and fostering team collaboration.',
    ],
  },
  {
    title: 'Head of Operations Committee (Dec 2024 – Jan 2025)',
    bullets: [
      'Managed all logistics and operational aspects of the initiative.',
      'Supervised event execution and ensured smooth workflow within teams.',
      'Worked with event planners and contributed to content planning.',
    ],
  },
  {
    title: 'Vice Head of Operations Committee (Jun 2024 – Dec 2024)',
    bullets: [
      'Assisted in managing meetings logistics and content planning.',
      'Supervised event planning teams and contributed to problem-solving during events.',
    ],
  },
  {
    title: 'Contributor to Committee (Aug 2023 – Jun 2024)',
    bullets: [
      'Contributed to organizing various events and handling logistics.',
    ],
  },
  {
    title: 'Event Manager – Flash Event "New Way" (S6)',
    bullets: [
      'Fully organized and managed the "Flash" photography event, overseeing logistics, planning, and team coordination.',
    ],
  },
  {
    title: 'Official World Coordinator',
    bullets: [
      "Organized a 14-day visit for Egypt's Minister of Youth and Sports in Matuah.",
      "Coordinated with the Governor of Matuah, the Undersecretary of the Ministry, and other key figures.",
      "Managed event logistics, guest reception, and scheduling.",
    ],
  },
  {
    title: 'Event Organizer – Various Events & Camps',
    bullets: [
      'Led the organization of major events, including Learn 7, Sin1, and multiple governmental and community activities.',
      'Worked directly with Matuah Governorate and the Directorate of Youth and Sports to manage logistics and planning.',
      'Participated in several leadership and development camps across Egypt.',
    ],
  },
];

function Leadership() {
  return (
    <section className="mt-10 sm:mt-20">
      <div className="max-w-2xl mx-auto bg-secondary-light dark:bg-ternary-dark rounded-xl p-8 shadow">
        <h2 className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mb-8">
          Volunteering & Leadership
        </h2>
        <ul className="divide-y divide-ternary-light dark:divide-ternary-dark">
          {leadershipRoles.map((role) => (
            <li key={role.title} className="py-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <span className="text-lg font-semibold text-primary-dark dark:text-primary-light">{role.title}</span>
                {role.period && (
                  <span className="text-md text-secondary-dark dark:text-secondary-light font-medium">{role.period}</span>
                )}
              </div>
              <ul className="list-disc pl-5 text-md text-secondary-dark dark:text-secondary-light">
                {role.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Leadership; 