import SectionHeader from "../components/SectionHeader";
import { useUser } from "../../../contexts/UserContext";
import { Link } from "react-router-dom";

const About = () => {
  const { userDetails } = useUser();
  const handleScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -80; // Adjust this value to the desired offset (negative value moves the element down)
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
      // setDrawerOpen(false);
    }
  };
  return (
    <div className="bg-[#FAFAFA] py-20">
      <div className="container flex flex-col gap-20 mx-auto w-screen text-center">
        <SectionHeader
          title="About Me"
          description={userDetails.userProfile.about}
        />
        <div className="grid grid-cols-1 md:grid-cols-5 space-y-14 md:space-y-0 md:space-x-14 text-left">
          {/* Left Column */}
          <div className="md:col-span-2 flex flex-col gap-6 justify-center w-full">
            <h4 className="text-3xl font-bold text-gray-800">
              Get to know me!
            </h4>
            <div className="text-lg text-gray-600 leading-relaxed">
              {userDetails.userProfile.bio.length > 50 ? (
                <p>{userDetails.userProfile.bio}</p>
              ) : (
                <div className="flex flex-col gap-4">
                  <p>
                  I&apos;m a Backend-Focused Web Developer, building and managing the server-side of websites and web applications to ensure seamless performance and functionality. Check out some of my work in the.
                    <Link
                      to="/projects"
                      className="text-blue-600 hover:underline"
                    >
                      Projects
                    </Link>{" "}
                    section.
                  </p>
                  <p>
                  I enjoy sharing insights on backend development and programming concepts I&apos;ve learned over the years. Feel free to connect or follow me on
                    <Link
                      to="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      LinkedIn
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Instagram
                    </Link>{" "}
                    where I share useful content related to web development.
                  </p>
                  <p>
                    I&apos;m open to job opportunities where I can contribute,
                    learn, and grow. If you have a great opportunity that
                    matches my skills and experience, don&apos;t hesitate to
                    contact me.
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* Right Column */}
          <div id="skills" className="md:col-span-3 flex flex-col gap-6">
            <h4 className="text-3xl font-bold text-gray-800">My Skills</h4>
            <div className="flex flex-wrap gap-4 justify-start items-center">
              {userDetails.skills.map((skill, index) => {
                return (
                  <span
                    key={index}
                    className="p-3 px-6 rounded-full bg-gray-300 text-gray-700 hover:text-white hover:bg-gray-600 cursor-default transition-all duration-300"
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <button
          onClick={handleScroll}
          className="border w-3/4 md:w-1/4 lg:w-1/6 bg-blue-600 p-4 px-8 text-xl text-white font-bold shadow-sm rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default About;
