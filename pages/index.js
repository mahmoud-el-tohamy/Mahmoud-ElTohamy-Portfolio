import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";

import { FadeUp, StaggerContainer, StaggerItem } from "../components/Animations";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Head from "next/head";
import Button from "../components/Button";
import BackToTop from "../components/BackToTop";
import { GraduationCap, Trophy, Users } from "lucide-react";



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

  return (
    <div className="relative">
      <Head>
        <title>{data.name} | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Mahmoud El-Tohamy, a Full Stack Developer specializing in MERN Stack and Next.js." />
        <meta name="keywords" content="Mahmoud El-Tohamy, Full Stack Developer, MERN, Next.js, React, Node.js, Web Development, Portfolio" />
        <link rel="icon" type="image/png" href="/images/PP.png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mahmoud-el-tohamy-portfolio.vercel.app/" />
        <meta property="og:title" content={`${data.name} | Full Stack Developer`} />
        <meta property="og:description" content="Portfolio of Mahmoud El-Tohamy, a Full Stack Developer specializing in MERN Stack and Next.js." />
        <meta property="og:image" content="https://mahmoud-el-tohamy-portfolio.vercel.app/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mahmoud-el-tohamy-portfolio.vercel.app/" />
        <meta property="twitter:title" content={`${data.name} | Full Stack Developer`} />
        <meta property="twitter:description" content="Portfolio of Mahmoud El-Tohamy, a Full Stack Developer specializing in MERN Stack and Next.js." />
        <meta property="twitter:image" content="https://mahmoud-el-tohamy-portfolio.vercel.app/images/og-image.jpg" />
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
            <StaggerContainer className="mt-5">
              <StaggerItem>
                <h1 className="text-3xl tablet:text-5xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full">
                  {data.headerTaglineOne}
                </h1>
              </StaggerItem>
              <StaggerItem>
                <h1 className="text-3xl tablet:text-5xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full">
                  {data.headerTaglineTwo}
                </h1>
              </StaggerItem>
              <StaggerItem>
                <h1 className="text-3xl tablet:text-5xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full">
                  {data.headerTaglineThree}
                </h1>
              </StaggerItem>
              <StaggerItem>
                <h1 className="text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full text-gray-500 dark:text-gray-400">
                  {data.headerTaglineFour}
                </h1>
              </StaggerItem>
            </StaggerContainer>

            <FadeUp delay={0.8}>
              <Socials className="mt-2 laptop:mt-5" />
            </FadeUp>
          </div>

          <FadeUp delay={0.4} className="w-full laptop:w-2/5 flex justify-center laptop:justify-end mt-10 laptop:mt-0">
            <div className="relative w-72 h-72 laptop:w-[500px] laptop:h-[500px]">
              <img 
                src="/images/PP.png" 
                alt="Mahmoud El-Tohamy" 
                className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-all duration-500 ease-out z-10 relative"
                style={{ WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br from-[#004aad] to-blue-500 rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>
          </FadeUp>
        </div>
        <div id="work" className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <FadeUp>
            <h1 className="text-2xl text-bold">Work.</h1>
          </FadeUp>

          <StaggerContainer className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <StaggerItem key={project.id}>
                <WorkCard
                  img={project.imageSrc}
                  name={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  githubUrl={project.githubUrl}
                  previewUrl={project.previewUrl}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div id="skills" ref={skillsRef}>
          <FadeUp>
            <Skills />
          </FadeUp>
        </div>
        <div id="experience" ref={experienceRef}>
          <FadeUp>
            <Experience />
          </FadeUp>
        </div>

        <div id="services" className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={servicesRef}>
          <FadeUp>
            <h1 className="text-2xl text-bold">Services.</h1>
          </FadeUp>
          <StaggerContainer className="mt-5 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <StaggerItem key={index}>
                <ServiceCard
                  name={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div id="about" className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <FadeUp>
            <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          </FadeUp>
          <div className="tablet:m-10 mt-5 flex flex-col laptop:flex-row items-center justify-between gap-20">
            <FadeUp className="w-full laptop:w-3/5 p-6 tablet:p-10 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-xl backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,74,173,0.15)]">
              <div className="flex flex-col gap-6 text-black/80 dark:text-gray-300">
                <p className="text-xl tablet:text-2xl laptop:text-3xl font-medium leading-relaxed">
                  <span className="font-bold text-[#004aad] dark:text-blue-400">Full Stack Developer</span> with hands-on experience building scalable, high-performance web applications.
                </p>
                <p className="text-lg tablet:text-xl laptop:text-2xl leading-relaxed opacity-90">
                  Currently completing the <span className="font-bold text-[#004aad] dark:text-blue-400">ITI 9-Month Open Source Program</span> following an NTI MEAN Stack government scholarship.
                </p>
                <p className="text-lg tablet:text-xl laptop:text-2xl leading-relaxed opacity-90">
                  Combines solid engineering fundamentals with real-world teaching experience, having trained <span className="font-bold text-[#004aad] dark:text-blue-400">100+ students</span> in Programming and Front-End Development through government-backed initiatives.
                </p>
                
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    { text: "CS Graduate '25", icon: <GraduationCap className="w-4 h-4" />, color: "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/20" },
                    { text: "Hackathon Winner", icon: <Trophy className="w-4 h-4" />, color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-300 border-yellow-500/20" },
                    { text: "Mentored 100+ Students", icon: <Users className="w-4 h-4" />, color: "bg-green-500/10 text-green-600 dark:text-green-300 border-green-500/20" },
                  ].map((badge, index) => (
                    <span key={index} className={`px-4 py-2 flex items-center gap-2 text-sm tablet:text-base font-medium rounded-full border shadow-sm hover:scale-105 transition-transform duration-300 cursor-default ${badge.color}`}>
                      {badge.icon}
                      {badge.text}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
            <div className="hidden laptop:flex w-full laptop:w-2/5 justify-center relative items-center h-full">
              <div className="w-64 h-64 bg-[#004aad] rounded-full blur-3xl opacity-40 animate-pulse absolute"></div>
              <div className="w-56 h-56 bg-gradient-to-br from-[#004aad]/80 to-blue-600/80 rounded-3xl shadow-2xl animate-float backdrop-blur-md border border-white/20 transform rotate-6 flex items-center justify-center">
                <img src="/images/programming.svg" alt="Programming" className="w-28 h-28 object-contain brightness-0 invert opacity-90 drop-shadow-md" />
              </div>
              <div className="w-32 h-32 bg-gradient-to-tl from-blue-500/80 to-[#004aad]/80 rounded-full shadow-xl animate-float backdrop-blur-md border border-white/20 absolute -bottom-5 -left-5" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
        <Footer contactRef={contactRef} />
      </div>
      <BackToTop />
    </div>
  );
}
