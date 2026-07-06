import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import ContactForm from "../ContactForm";
import { Mail } from "lucide-react";

const Footer = ({ data, contactRef }) => {
  return (
    <>
      <div id="contact" className="mt-5 laptop:mt-40 p-2 laptop:p-0" ref={contactRef}>
        <div>
          <div className="mt-10 flex flex-col-reverse laptop:flex-row items-center justify-between gap-10 laptop:gap-20">
            {/* Decorative Graphics (Left) */}
            <div className="hidden laptop:flex w-full laptop:w-2/5 justify-center relative items-center h-full">
              <div className="w-64 h-64 bg-[#004aad] rounded-full blur-3xl opacity-40 animate-pulse absolute"></div>
              <div className="w-56 h-56 bg-gradient-to-tr from-[#004aad]/80 to-blue-600/80 rounded-3xl shadow-2xl animate-float backdrop-blur-md border border-white/20 transform -rotate-6 flex items-center justify-center">
                <span className="text-8xl text-white font-bold opacity-80 drop-shadow-lg">
                  <img
                    src="/images/at-symbol.svg"
                    alt="at symbol"
                    className="w-28 h-28 object-contain brightness-0 invert opacity-90 drop-shadow-md"
                  />{" "}
                </span>
              </div>
              <div
                className="w-32 h-32 bg-gradient-to-br from-blue-500/80 to-[#004aad]/80 rounded-full shadow-xl animate-float backdrop-blur-md border border-white/20 absolute -top-5 -right-5"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Content (Right) */}
            <div className="w-full laptop:w-3/5">
              <h1 className="text-2xl text-bold mb-5 flex items-center gap-2">
                <Mail className="w-6 h-6 text-[#004aad] dark:text-blue-400" />
                {data.labels.contact}
              </h1>
              <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
                {data.labels.letsWork}
              </h1>
              <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
                {data.labels.together}
              </h1>

              <ContactForm labels={data.labels} />

            </div>
          </div>
          
          {/* Centered Socials across full page */}
          <div className="mt-20 w-full flex justify-center pb-10">
            <Socials data={data} className="justify-center" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
