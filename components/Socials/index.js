import React from "react";
import Button from "../Button";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = ({ data, className }) => {
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case "github":
        return <FaGithub className="w-4 h-4 tablet:w-5 tablet:h-5" />;
      case "linkedin":
        return <FaLinkedin className="w-4 h-4 tablet:w-5 tablet:h-5" />;
      case "email":
        return <MdEmail className="w-4 h-4 tablet:w-5 tablet:h-5" />;
      case "instagram":
        return <FaInstagram className="w-4 h-4 tablet:w-5 tablet:h-5" />;
      case "facebook":
        return <FaFacebook className="w-4 h-4 tablet:w-5 tablet:h-5" />;
      case "whatsapp":
        return <FaWhatsapp className="w-4 h-4 tablet:w-5 tablet:h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className={`${className} flex flex-wrap justify-center tablet:justify-start link gap-1.5 tablet:gap-2`}>
      {data.socials.map((social, index) => {
        const isEmail = social.link.startsWith("mailto:");
        return (
          <a
            key={index}
            href={social.link}
            target={isEmail ? "_self" : "_blank"}
            rel={isEmail ? undefined : "me noopener noreferrer"}
            aria-label={`Visit my ${social.title} profile`}
            className="m-0 flex items-center justify-center gap-2 transition-all ease-out duration-300 text-black dark:text-white hover:opacity-70 active:scale-100 tablet:first:ml-0 w-9 h-9 tablet:w-auto tablet:h-auto tablet:px-3 tablet:py-1.5 bg-gray-100 dark:bg-white/10 rounded-full tablet:rounded-xl hover:bg-gray-200 dark:hover:bg-white/20 border border-transparent dark:border-white/5 link cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            {getIcon(social.title)}
            <span className="hidden tablet:block text-sm font-medium">{social.title}</span>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
