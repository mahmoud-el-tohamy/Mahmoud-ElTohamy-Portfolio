import { Popover, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useState, useEffect, Fragment } from "react";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Header = ({
  handleWorkScroll,
  handleSkillsScroll,
  handleExperienceScroll,
  handleVolunteeringScroll,
  handleServicesScroll,
  handleAboutScroll,
  handleContactScroll,
  isBlog,
}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { name, showBlog } = data;
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["work", "skills", "experience", "volunteering", "services", "about", "contact"];
      let currentSection = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getActiveClass = (section) => {
    return activeSection === section 
      ? "text-[#004aad] dark:text-blue-400 font-bold bg-blue-50/50 dark:bg-blue-900/20" 
      : "";
  };

  return (
    <>
      <Popover className="block tablet:hidden fixed top-0 left-0 right-0 z-50 px-4 py-4 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
        {({ open, close }) => (
          <>
            <div className="flex items-center justify-between p-2 relative z-50">
              <img
                onClick={() => router.push("/")}
                src="/images/logo.webp"
                alt={name}
                className="h-10 cursor-pointer link"
              />

              <div className="flex items-center gap-2">
                {data.darkMode && (
                  <Button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    classes="!p-2"
                  >
                    <img className="h-6 dark:hidden" src="/images/sun.svg" alt="Sun" />
                    <img className="h-6 hidden dark:block" src="/images/moon.svg" alt="Moon" />
                  </Button>
                )}

                <Popover.Button className="p-2 outline-none">
                  <img
                    className="h-6 dark:hidden transition-transform duration-300"
                    src={`/images/${!open ? "menu.svg" : "cancel.svg"}`}
                    alt="Menu"
                  />
                  <img
                    className="h-6 hidden dark:block transition-transform duration-300"
                    src={`/images/${!open ? "menu-white.svg" : "cancel-white.svg"}`}
                    alt="Menu"
                  />
                </Popover.Button>
              </div>
            </div>
            
            <Transition
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 -translate-y-10"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-10"
            >
              <Popover.Panel
                className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/95 dark:bg-black/95 backdrop-blur-2xl h-screen w-screen"
              >
                <div className="flex flex-col items-center gap-8 w-full px-8 text-2xl font-medium">
                  {!isBlog ? (
                    <>
                      <Button onClick={() => { handleWorkScroll(); close(); }} classes={`w-full justify-center py-4 text-center hover:scale-110 ${getActiveClass('work')}`}>Work</Button>
                      <Button onClick={() => { handleSkillsScroll(); close(); }} classes={`w-full justify-center py-4 text-center hover:scale-110 ${getActiveClass('skills')}`}>Skills</Button>
                      <Button onClick={() => { handleExperienceScroll(); close(); }} classes={`w-full justify-center py-4 text-center hover:scale-110 ${getActiveClass('experience')}`}>Experience</Button>
                      <Button onClick={() => { handleVolunteeringScroll(); close(); }} classes={`w-full justify-center py-4 text-center hover:scale-110 ${getActiveClass('volunteering')}`}>Volunteering</Button>
                      <Button onClick={() => { handleServicesScroll(); close(); }} classes={`w-full justify-center py-4 text-center hover:scale-110 ${getActiveClass('services')}`}>Services</Button>
                      <Button onClick={() => { handleAboutScroll(); close(); }} classes={`w-full justify-center py-4 text-center hover:scale-110 ${getActiveClass('about')}`}>About</Button>
                      {showBlog && (
                        <Button onClick={() => { router.push("/blog"); close(); }} classes="w-full justify-center py-4 text-center hover:scale-110">Blog</Button>
                      )}
                      <Button
                        onClick={() => {
                          handleContactScroll ? handleContactScroll() : window.scrollTo(0, 0);
                          close();
                        }}
                        classes={`w-full justify-center py-4 text-center hover:scale-110 ${getActiveClass('contact')}`}
                      >
                        Contact
                      </Button>
                      <Button
                        type="primary"
                        onClick={() => { window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank"); close(); }}
                        classes="w-full justify-center py-4 mt-6 shadow-xl !text-xl"
                      >
                        Download CV
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={() => { router.push("/"); close(); }} classes="w-full justify-center py-4 text-center hover:scale-110">Home</Button>
                      {showBlog && (
                        <Button onClick={() => { router.push("/blog"); close(); }} classes="w-full justify-center py-4 text-center hover:scale-110">Blog</Button>
                      )}
                      <Button
                        onClick={() => {
                          handleContactScroll ? handleContactScroll() : window.scrollTo(0, 0);
                          close();
                        }}
                        classes="w-full justify-center py-4 text-center hover:scale-110"
                      >
                        Contact
                      </Button>
                      <Button
                        type="primary"
                        onClick={() => { window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank"); close(); }}
                        classes="w-full justify-center py-4 mt-6 shadow-xl !text-xl"
                      >
                        Download CV
                      </Button>
                    </>
                  )}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <div
        className="hidden flex-row items-center justify-between fixed top-0 left-0 right-0 z-50 px-4 tablet:px-20 py-3 backdrop-blur-lg bg-white/80 dark:bg-black/80 border-b border-gray-200/50 dark:border-gray-800/50 dark:text-white tablet:flex shadow-sm"
      >
        <img
          onClick={() => router.push("/")}
          src="/images/logo.webp"
          alt={name}
          className="h-10 laptop:h-14 cursor-pointer hover:scale-105 transition-transform"
        />
        {!isBlog ? (
          <div className="flex items-center gap-1">
            <Button onClick={handleWorkScroll} classes={getActiveClass('work')}>Work</Button>
            <Button onClick={handleSkillsScroll} classes={getActiveClass('skills')}>Skills</Button>
            <Button onClick={handleExperienceScroll} classes={getActiveClass('experience')}>Experience</Button>
            <Button onClick={handleVolunteeringScroll} classes={getActiveClass('volunteering')}>Volunteering</Button>
            <Button onClick={handleServicesScroll} classes={getActiveClass('services')}>Services</Button>
            <Button onClick={handleAboutScroll} classes={getActiveClass('about')}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            <Button onClick={handleContactScroll || (() => window.scrollTo(0, 0))} classes={getActiveClass('contact')}>
              Contact
            </Button>
            <Button
              type="primary"
              onClick={() => window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank")}
              classes="ml-4"
            >
              Download CV
            </Button>
            {data.darkMode && (
              <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} classes="!p-2 ml-2">
                <img className="h-5 dark:hidden" src="/images/sun.svg" alt="Sun" />
                <img className="h-5 hidden dark:block" src="/images/moon.svg" alt="Moon" />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            <Button onClick={handleContactScroll || (() => window.scrollTo(0, 0))}>
              Contact
            </Button>
            <Button
              type="primary"
              onClick={() => window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank")}
              classes="ml-4"
            >
              Download CV
            </Button>
            {data.darkMode && (
              <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} classes="!p-2 ml-2">
                <img className="h-5 dark:hidden" src="/images/sun.svg" alt="Sun" />
                <img className="h-5 hidden dark:block" src="/images/moon.svg" alt="Moon" />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
