import { useUser } from "../../../contexts/UserContext";
import { FaGraduationCap } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import SectionHeader from "../components/SectionHeader";

const Education = () => {
  const { userDetails } = useUser();
  const { education } = userDetails;

  return (
    <div className="py-20">
      {/* <div className="container mx-auto px-4"> */}
      <div className="container py-20 flex flex-col gap-10 mx-auto w-screen text-center">
        <SectionHeader
          title="Educational Background"
          // description="Don't just take my word for it. See my works for yourself!"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                <img
                  src={edu.image}
                  alt={`${edu.schoolName} logo`}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {edu.schoolName}
                  </h3>
                  <p className="text-lg text-gray-600 font-semibold">
                    {edu.program}
                  </p>
                  <div className="flex items-center text-gray-500 mt-2">
                    <MdLocationOn size={20} className="mr-2" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    {edu.startDate} - {edu.endDate}
                  </div>
                  <p className="text-gray-600 mt-4">{edu.description}</p>
                  <div className="mt-4 flex items-center">
                    <FaGraduationCap size={20} className="mr-2 text-blue-600" />
                    <span className="text-gray-800 font-semibold">
                      {edu.grade}
                    </span>
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

export default Education;
