import React from "react";
import Button from "../Button";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
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
      case "instagram":
        return <FaInstagram className="w-5 h-5" />;
      case "facebook":
        return <FaFacebook className="w-5 h-5" />;
      case "whatsapp":
        return <FaWhatsapp className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link gap-3`}>
      {yourData.socials.map((social, index) => {
        const isEmail = social.link.startsWith("mailto:");
        return (
          <a
            key={index}
            href={social.link}
            target={isEmail ? "_self" : "_blank"}
            rel={isEmail ? undefined : "me noopener noreferrer"}
            aria-label={`Visit my ${social.title} profile`}
            className="text-sm tablet:text-base m-1 laptop:m-2 flex items-center gap-2 transition-all ease-out duration-300 text-black dark:text-white hover:opacity-70 active:scale-100 tablet:first:ml-0 px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-xl hover:bg-gray-200 dark:hover:bg-white/20 border border-transparent dark:border-white/5 link cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            {getIcon(social.title)}
            {social.title}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
