import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({
  handleWorkScroll,
  handleSkillsScroll,
  handleExperienceScroll,
  handleServicesScroll,
  handleAboutScroll,
  handleContactScroll,
  isBlog,
}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { name, showBlog } = data;

  return (
    <>
      <Popover className="block tablet:hidden fixed top-0 left-0 right-0 z-50 px-4 py-4 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <img
                onClick={() => router.push("/")}
                src="/images/logo.png"
                alt={name}
                className="h-10 laptop:h-14 cursor-pointer p-2 laptop:p-0 link"
              />

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6 dark:hidden"
                      src="/images/sun.svg"
                    ></img>
                    <img
                      className="h-6 hidden dark:block"
                      src="/images/moon.svg"
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5 dark:hidden"
                    src={`/images/${!open ? "menu.svg" : "cancel.svg"}`}
                  ></img>
                  <img
                    className="h-5 hidden dark:block"
                    src={`/images/${!open ? "menu-white.svg" : "cancel-white.svg"}`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 bg-white dark:bg-slate-800 shadow-md rounded-md`}
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
                    onClick={
                      handleContactScroll || (() => window.scrollTo(0, 0))
                    }
                  >
                    Contact
                  </Button>
                  <Button
                    type="primary"
                    onClick={() =>
                      window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank")
                    }
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
                    onClick={
                      handleContactScroll || (() => window.scrollTo(0, 0))
                    }
                  >
                    Contact
                  </Button>
                  <Button
                    type="primary"
                    onClick={() =>
                      window.open("/Mahmoud_ElTohamy_CV.pdf", "_blank")
                    }
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
        className={`hidden flex-row items-center justify-between fixed top-0 left-0 right-0 z-50 px-4 tablet:px-20 py-2 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800 dark:text-white tablet:flex `}
      >
        <img
          onClick={() => router.push("/")}
          src="/images/logo.png"
          alt={name}
          className="h-10 laptop:h-14 cursor-pointer mob:p-2 laptop:p-0"
        />
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
            <Button
              onClick={handleContactScroll || (() => window.scrollTo(0, 0))}
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
            {data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6 dark:hidden"
                  src="/images/sun.svg"
                ></img>
                <img
                  className="h-6 hidden dark:block"
                  src="/images/moon.svg"
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
            <Button
              onClick={handleContactScroll || (() => window.scrollTo(0, 0))}
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

            {data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6 dark:hidden"
                  src="/images/sun.svg"
                ></img>
                <img
                  className="h-6 hidden dark:block"
                  src="/images/moon.svg"
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
