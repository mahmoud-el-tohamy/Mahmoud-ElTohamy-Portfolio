import { Popover, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect, Fragment } from "react";
import Button from "../Button";
import { Globe } from "lucide-react";

const Header = ({
  data,
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
      <Popover
        as="nav"
        className="block tablet:hidden fixed top-0 left-0 right-0 z-50 px-4 py-4 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800"
      >
        {({ open, close }) => (
          <>
            <div className="flex items-center justify-between p-2 relative z-50">
              <Link href="/">
                <a
                  aria-label="Home"
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg flex items-center"
                >
                  <img
                    src="/images/logo.webp"
                    alt={name}
                    className="h-10 cursor-pointer link"
                  />
                </a>
              </Link>

              <div className="flex items-center gap-2">
                {data.darkMode && (
                  <Button
                    aria-label="Toggle Dark Mode"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    classes="!p-2"
                  >
                    <img
                      className="h-6 dark:hidden"
                      src="/images/sun.svg"
                      alt="Sun"
                    />
                    <img
                      className="h-6 hidden dark:block"
                      src="/images/moon.svg"
                      alt="Moon"
                    />
                  </Button>
                )}

                <button
                  aria-label="Switch Language"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    router.push(router.pathname, router.asPath, {
                      locale: router.locale === "en" ? "ar" : "en",
                      scroll: true,
                    });
                  }}
                  className="relative before:absolute before:content-[''] before:w-full before:h-full before:min-w-[48px] before:min-h-[48px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 p-2 flex items-center gap-1.5 rounded-lg text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors font-bold text-xs"
                >
                  <Globe className="w-4 h-4" />
                  <span className="leading-[0]">{router.locale === "en" ? "AR" : "EN"}</span>
                </button>

                <Popover.Button
                  aria-label="Toggle Menu"
                  className="p-2 outline-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg"
                >
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
                className="fixed inset-0 z-40 flex flex-col items-center justify-start overflow-y-auto bg-white/95 dark:bg-black/95 backdrop-blur-2xl h-screen w-screen"
                style={{ paddingTop: "6rem", paddingBottom: "2rem" }}
              >
                <div className="flex flex-col items-center gap-4 w-full px-8 text-xl font-medium">
                  {!isBlog ? (
                    <>
                      <Button
                        onClick={() => {
                          handleWorkScroll();
                          close();
                        }}
                        classes={`w-full justify-center py-3 text-center hover:scale-110 ${getActiveClass("work")}`}
                      >
                        {data.labels?.work?.replace(".", "") || "Work"}
                      </Button>
                      <Button
                        onClick={() => {
                          handleSkillsScroll();
                          close();
                        }}
                        classes={`w-full justify-center py-3 text-center hover:scale-110 ${getActiveClass("skills")}`}
                      >
                        {data.labels?.skills?.replace(".", "") || "Skills"}
                      </Button>
                      <Button
                        onClick={() => {
                          handleExperienceScroll();
                          close();
                        }}
                        classes={`w-full justify-center py-3 text-center hover:scale-110 ${getActiveClass("experience")}`}
                      >
                        {data.labels?.experience?.replace(".", "") ||
                          "Experience"}
                      </Button>
                      <Button
                        onClick={() => {
                          handleVolunteeringScroll();
                          close();
                        }}
                        classes={`w-full justify-center py-3 text-center hover:scale-110 ${getActiveClass("volunteering")}`}
                      >
                        {data.labels?.volunteering?.replace(".", "") ||
                          "Volunteering"}
                      </Button>
                      <Button
                        onClick={() => {
                          handleServicesScroll();
                          close();
                        }}
                        classes={`w-full justify-center py-3 text-center hover:scale-110 ${getActiveClass("services")}`}
                      >
                        {data.labels?.services?.replace(".", "") || "Services"}
                      </Button>
                      <Button
                        onClick={() => {
                          handleAboutScroll();
                          close();
                        }}
                        classes={`w-full justify-center py-3 text-center hover:scale-110 ${getActiveClass("about")}`}
                      >
                        {data.labels?.about?.replace(".", "") || "About"}
                      </Button>
                      {showBlog && (
                        <Button
                          onClick={() => {
                            router.push("/blog");
                            close();
                          }}
                          classes="w-full justify-center py-3 text-center hover:scale-110"
                        >
                          {data.labels?.blog || "Blog"}
                        </Button>
                      )}
                      <Button
                        onClick={() => {
                          handleContactScroll
                            ? handleContactScroll()
                            : window.scrollTo(0, 0);
                          close();
                        }}
                        classes={`w-full justify-center py-3 text-center hover:scale-110 ${getActiveClass("contact")}`}
                      >
                        {data.labels?.contact?.replace(".", "") || "Contact"}
                      </Button>
                      <Button
                        type="primary"
                        onClick={() => {
                          window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank");
                          close();
                        }}
                        classes="w-full justify-center py-4 mt-2 shadow-xl !text-xl"
                      >
                        {data.labels?.downloadCV || "Download CV"}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        onClick={() => {
                          router.push("/");
                          close();
                        }}
                        classes="w-full justify-center py-3 text-center hover:scale-110"
                      >
                        {data.labels?.home || "Home"}
                      </Button>
                      {showBlog && (
                        <Button
                          onClick={() => {
                            router.push("/blog");
                            close();
                          }}
                          classes="w-full justify-center py-3 text-center hover:scale-110"
                        >
                          {data.labels?.blog || "Blog"}
                        </Button>
                      )}
                      <Button
                        onClick={() => {
                          handleContactScroll
                            ? handleContactScroll()
                            : window.scrollTo(0, 0);
                          close();
                        }}
                        classes="w-full justify-center py-3 text-center hover:scale-110"
                      >
                        {data.labels?.contact?.replace(".", "") || "Contact"}
                      </Button>
                      <Button
                        type="primary"
                        onClick={() => {
                          window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank");
                          close();
                        }}
                        classes="w-full justify-center py-4 mt-2 shadow-xl !text-xl"
                      >
                        {data.labels?.downloadCV || "Download CV"}
                      </Button>
                    </>
                  )}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <nav className="hidden flex-row items-center justify-between fixed top-0 left-0 right-0 z-50 px-4 tablet:px-20 py-3 backdrop-blur-lg bg-white/80 dark:bg-black/80 border-b border-gray-200/50 dark:border-gray-800/50 dark:text-white tablet:flex shadow-sm">
        <Link href="/">
          <a
            aria-label="Home"
            className="focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg flex items-center hover:scale-105 transition-transform"
          >
            <img
              src="/images/logo.webp"
              alt={name}
              className="h-10 laptop:h-14 cursor-pointer"
            />
          </a>
        </Link>
        {!isBlog ? (
          <div className="flex items-center gap-1">
            <Button onClick={handleWorkScroll} classes={getActiveClass("work")}>
              {data.labels?.work?.replace(".", "") || "Work"}
            </Button>
            <Button
              onClick={handleSkillsScroll}
              classes={getActiveClass("skills")}
            >
              {data.labels?.skills?.replace(".", "") || "Skills"}
            </Button>
            <Button
              onClick={handleExperienceScroll}
              classes={getActiveClass("experience")}
            >
              {data.labels?.experience?.replace(".", "") || "Experience"}
            </Button>
            <Button
              onClick={handleVolunteeringScroll}
              classes={getActiveClass("volunteering")}
            >
              {data.labels?.volunteering?.replace(".", "") || "Volunteering"}
            </Button>
            <Button
              onClick={handleServicesScroll}
              classes={getActiveClass("services")}
            >
              {data.labels?.services?.replace(".", "") || "Services"}
            </Button>
            <Button
              onClick={handleAboutScroll}
              classes={getActiveClass("about")}
            >
              {data.labels?.about?.replace(".", "") || "About"}
            </Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>
                {data.labels?.blog || "Blog"}
              </Button>
            )}
            <Button
              onClick={handleContactScroll || (() => window.scrollTo(0, 0))}
              classes={getActiveClass("contact")}
            >
              {data.labels?.contact?.replace(".", "") || "Contact"}
            </Button>
            <Button
              type="primary"
              onClick={() => window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank")}
              classes="ms-4"
            >
              {data.labels?.downloadCV || "Download CV"}
            </Button>
            {data.darkMode && (
              <Button
                aria-label="Toggle Dark Mode"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                classes="!p-2 ms-2"
              >
                <img
                  className="h-6 dark:hidden"
                  src="/images/sun.svg"
                  alt="Sun"
                />
                <img
                  className="h-6 hidden dark:block"
                  src="/images/moon.svg"
                  alt="Moon"
                />
              </Button>
            )}
            <button
              aria-label="Switch Language"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                router.push(router.pathname, router.asPath, {
                  locale: router.locale === "en" ? "ar" : "en",
                  scroll: true,
                });
              }}
              className="relative before:absolute before:content-[''] before:w-full before:h-full before:min-w-[48px] before:min-h-[48px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 p-2 ms-2 flex items-center gap-1.5 rounded-lg text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors font-bold text-sm"
            >
              <Globe className="w-4 h-4" />
              <span className="leading-[0]">
                {router.locale === "en" ? "AR" : "EN"}
              </span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <Button onClick={() => router.push("/")}>
              {data.labels?.home || "Home"}
            </Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>
                {data.labels?.blog || "Blog"}
              </Button>
            )}
            <Button
              onClick={handleContactScroll || (() => window.scrollTo(0, 0))}
            >
              {data.labels?.contact?.replace(".", "") || "Contact"}
            </Button>
            <Button
              type="primary"
              onClick={() => window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank")}
              classes="ms-4"
            >
              {data.labels?.downloadCV || "Download CV"}
            </Button>
            {data.darkMode && (
              <Button
                aria-label="Toggle Dark Mode"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                classes="!p-2 ms-2"
              >
                <img
                  className="h-6 dark:hidden"
                  src="/images/sun.svg"
                  alt="Sun"
                />
                <img
                  className="h-6 hidden dark:block"
                  src="/images/moon.svg"
                  alt="Moon"
                />
              </Button>
            )}
            <Button
              aria-label="Switch Language"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                router.push(router.pathname, router.asPath, {
                  locale: router.locale === "en" ? "ar" : "en",
                  scroll: true,
                });
              }}
              classes="!px-4 !py-2 ms-2 flex items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 hover:bg-[#004aad] hover:text-white dark:hover:bg-[#004aad] dark:hover:text-white hover:border-[#004aad] dark:hover:border-[#004aad] transition-all shadow-sm font-bold text-sm"
            >
              <Globe className="w-4 h-4" />
              <span className="leading-[0]">{router.locale === "en" ? "AR" : "EN"}</span>
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
