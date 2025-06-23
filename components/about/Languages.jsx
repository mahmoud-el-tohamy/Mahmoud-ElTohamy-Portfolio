import React, { useEffect, useState } from 'react';

function Languages() {
  return (
    <section className="mt-10 sm:mt-20">
      <div className="max-w-2xl mx-auto bg-secondary-light dark:bg-ternary-dark rounded-xl p-8 shadow">
        <h2 className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mb-8">
          Languages
        </h2>
        <ul className="divide-y divide-ternary-light dark:divide-ternary-dark">
          <li className="py-4 flex justify-between items-center">
            <span className="text-lg font-semibold text-primary-dark dark:text-primary-light">Arabic</span>
            <span className="text-md text-secondary-dark dark:text-secondary-light font-medium">Native</span>
          </li>
          <li className="py-4 flex justify-between items-center">
            <span className="text-lg font-semibold text-primary-dark dark:text-primary-light">English</span>
            <span className="text-md text-secondary-dark dark:text-secondary-light font-medium">Upper-Intermediate</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Languages; 