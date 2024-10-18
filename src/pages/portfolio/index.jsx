/* eslint-disable react/prop-types */
import "./portfolio.css";

import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Achievements from "./sections/achievements";
import Volunteers from "./sections/volunteers";
import Contact from "./sections/contact";
import { useUser } from "../../contexts/UserContext";

const Portfolio = () => {
  const { userDetails } = useUser();
  return (
    <div className="flex flex-col w-full  justify-center items-center align-middle bg-[#fafafa]">
      <div id="hero" className="portfolio-hero flex flex-col h-[90vh] w-full">
        <Hero />
      </div>
      <div id="profile" className="about-section flex flex-col w-full">
        <About />
      </div>
      {userDetails?.projects && userDetails.projects.length > 0 && (
        <div id="projects">
          <Projects />
        </div>
      )}
      {userDetails?.education && userDetails.education.length > 0 && (
        <div id="education">
          <Education />
        </div>
      )}
      {userDetails?.experience && userDetails.experience.length > 0 && (
        <div id="experience">
          <Experience />
        </div>
      )}
      {userDetails?.achievements && userDetails.achievements.length > 0 && (
        <div id="achievements">
          <Achievements />
        </div>
      )}
      {userDetails?.volunteering && userDetails.volunteering.length > 0 && (
        <div id="volunteers">
          <Volunteers />
        </div>
      )}
      <div id="contact" className="portfolio-contact flex flex-col w-full">
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;
