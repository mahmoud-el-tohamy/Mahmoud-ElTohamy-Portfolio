import React from "react";
import { MonitorSmartphone, ServerCog, Database, GraduationCap } from "lucide-react";

const iconMap = {
  MonitorSmartphone: <MonitorSmartphone className="w-10 h-10 text-blue-500 mb-4" strokeWidth={1.5} />,
  ServerCog: <ServerCog className="w-10 h-10 text-blue-500 mb-4" strokeWidth={1.5} />,
  Database: <Database className="w-10 h-10 text-blue-500 mb-4" strokeWidth={1.5} />,
  GraduationCap: <GraduationCap className="w-10 h-10 text-blue-500 mb-4" strokeWidth={1.5} />
};

const ServiceCard = ({ name, description, icon }) => {
  return (
    <article
      className={`w-full p-4 tablet:p-6 rounded-2xl transition-all ease-out duration-500 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:shadow-[0_0_25px_rgba(0,112,243,0.2)] hover:border-blue-500/50 hover:-translate-y-1 group`}
    >
      {icon && iconMap[icon]}
      <h1 className="text-2xl tablet:text-3xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {name ? name : "Heading"}
      </h1>
      <p className="mt-4 opacity-70 text-lg tablet:text-xl leading-relaxed">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text."}
      </p>
    </article>
  );
};

export default ServiceCard;
