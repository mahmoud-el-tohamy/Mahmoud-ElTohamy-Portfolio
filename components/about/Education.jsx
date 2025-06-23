import React from 'react';

function Education() {
  return (
    <section className="mt-10 sm:mt-20">
      <h2 className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mb-8">
        Education
      </h2>
      <div className="bg-secondary-light dark:bg-ternary-dark rounded-lg shadow p-6 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-2">
          Bachelors in Computer Science
        </h3>
        <p className="text-md text-gray-700 dark:text-gray-200 mb-1">
          Mansoura University | Expected Graduation: 2025
        </p>
      </div>
    </section>
  );
}

export default Education; 