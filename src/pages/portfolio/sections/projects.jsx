import { Link } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import SectionHeader from "../components/SectionHeader";

const Projects = () => {
  const { userDetails } = useUser();
  return (
    <div className="container py-20 flex flex-col gap-10 mx-auto w-screen text-center">
      <SectionHeader
        title="Projects"
        description="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      />
      <div className="space-y-4">
        {userDetails.projects.map((project, index) => {
          return (
            <div key={index} className="grid md:grid-cols-5 items-center">
              <div className="col-span-3 flex justify-center  rounded-lg overflow-hidden  transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <img
                  className=" object-cover"
                  src={project.image}
                  alt={project.projectName}
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center items-start gap-6 text-left px-5 md:px-0 md:w-[80%]">
                <h4 className="text-2xl font-bold text-gray-800">
                  {project.projectName}
                </h4>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex justify-start gap-4">
                  {/* <Link
                    to={`/projects/${project.id}/case-study`}
                    className="border bg-blue-600 py-2 px-6 text-xl text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-colors duration-300"
                  >
                    Case Study
                  </Link> */}
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border bg-blue-600 py-2 px-6 text-xl text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-colors duration-300"
                  >
                    Case Study
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
