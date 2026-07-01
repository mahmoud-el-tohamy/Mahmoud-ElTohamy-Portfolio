import React from "react";
import Button from "../Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case "github":
        return <FaGithub className="w-5 h-5" />;
      case "linkedin":
        return <FaLinkedin className="w-5 h-5" />;
      case "email":
        return <MdEmail className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link gap-3`}>
      {yourData.socials.map((social, index) => (
        <Button 
          key={index} 
          onClick={() => window.open(social.link)}
          classes="px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-xl hover:bg-gray-200 dark:hover:bg-white/20 border border-transparent dark:border-white/5"
        >
          {getIcon(social.title)}
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
