import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleSkillsScroll, handleExperienceScroll, handleServicesScroll, handleAboutScroll, handleContactScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden fixed top-0 left-0 right-0 z-50 px-4 py-4 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleSkillsScroll}>Skills</Button>
                  <Button onClick={handleExperienceScroll}>Experience</Button>
                  <Button onClick={handleServicesScroll}>Services</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  <Button
                    onClick={handleContactScroll || (() => window.scrollTo(0,0))}
                  >
                    Contact
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank")}
                  >
                    Download CV
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  <Button
                    onClick={handleContactScroll || (() => window.scrollTo(0,0))}
                  >
                    Contact
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank")}
                    classes="first:ml-1"
                  >
                    Download CV
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`hidden flex-row items-center justify-between fixed top-0 left-0 right-0 z-50 px-4 tablet:px-10 py-4 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800 dark:text-white tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleSkillsScroll}>Skills</Button>
            <Button onClick={handleExperienceScroll}>Experience</Button>
            <Button onClick={handleServicesScroll}>Services</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            <Button onClick={handleContactScroll || (() => window.scrollTo(0,0))}>
              Contact
            </Button>
            <Button
              type="primary"
              onClick={() => window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank")}
              classes="first:ml-1"
            >
              Download CV
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            <Button onClick={handleContactScroll || (() => window.scrollTo(0,0))}>
              Contact
            </Button>
            <Button
              type="primary"
              onClick={() => window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank")}
              classes="first:ml-1"
            >
              Download CV
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
