import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Head from "next/head";
import Button from "../components/Button";



// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const skillsRef = useRef();
  const experienceRef = useRef();
  const servicesRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSkillsScroll = () => {
    window.scrollTo({
      top: skillsRef.current.offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleExperienceScroll = () => {
    window.scrollTo({
      top: experienceRef.current.offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleServicesScroll = () => {
    window.scrollTo({
      top: servicesRef.current.offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>{data.name}</title>
        <link rel="icon" type="image/png" href="/images/PP.png" />
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10 pt-24 px-4 sm:px-6">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleSkillsScroll={handleSkillsScroll}
          handleExperienceScroll={handleExperienceScroll}
          handleServicesScroll={handleServicesScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />
        <div className="laptop:mt-20 mt-10 flex flex-col laptop:flex-row items-center justify-between gap-10">
          <div className="w-full laptop:w-3/5">
            <div className="mt-5">
              <h1
                ref={textOne}
                className="text-3xl tablet:text-5xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="text-3xl tablet:text-5xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full"
              >
                {data.headerTaglineTwo}
              </h1>
              <h1
                ref={textThree}
                className="text-3xl tablet:text-5xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full"
              >
                {data.headerTaglineThree}
              </h1>
              <h1
                ref={textFour}
                className="text-3xl tablet:text-5xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full"
              >
                {data.headerTaglineFour}
              </h1>
            </div>

            <Socials className="mt-2 laptop:mt-5" />
          </div>

          <div className="w-full laptop:w-2/5 flex justify-center laptop:justify-end mt-10 laptop:mt-0">
            <div className="relative w-72 h-72 laptop:w-[500px] laptop:h-[500px]">
              <img 
                src="/images/PP.png" 
                alt="Mahmoud El-Tohamy" 
                className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-all duration-500 ease-out z-10 relative"
                style={{ WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br from-[#004aad] to-blue-500 rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                githubUrl={project.githubUrl}
                previewUrl={project.previewUrl}
              />
            ))}
          </div>
        </div>

        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={servicesRef}>
          <h1 className=" text-2xl text-bold">Services.</h1>
          <div className="mt-5 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer contactRef={contactRef} />
      </div>
    </div>
  );
}
