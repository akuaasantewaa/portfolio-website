import { useUser } from "../../../contexts/UserContext";
import { FaBriefcase } from "react-icons/fa"; // Icon for the company role
import SectionHeader from "../components/SectionHeader";

const Experience = () => {
  const { userDetails } = useUser();
  const { experience } = userDetails;

  return (
    <div className="container py-20 flex flex-col gap-10 mx-auto w-screen text-center">
      <SectionHeader title="Work Experience" />
      <div className="relative md:w-1/2 mx-auto">
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="flex relative justify-between items-center w-full mx-auto"
            >
              <div className="md:w-2/3 mx-auto relative">
                <div className="absolute left-0 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center">
                    <FaBriefcase className="text-blue-600 mr-4" size={24} />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {exp.role} at {exp.companyName}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="mt-4 text-gray-700">{exp.responsibility}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <strong>Location:</strong> {exp.location}
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    <strong>Skills:</strong> {exp.skills}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
