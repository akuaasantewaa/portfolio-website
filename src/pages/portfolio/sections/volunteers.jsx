import { FaHandsHelping } from "react-icons/fa"; // Importing icons for a default option
import { useUser } from "../../../contexts/UserContext";
import SectionHeader from "../components/SectionHeader";

// Since you have only one type of volunteer data, you might not need multiple icons
const defaultIcon = <FaHandsHelping className="text-green-500" size={30} />;

const Volunteers = () => {
  const { userDetails } = useUser();
  const { volunteering } = userDetails; // Corrected the field name

  return (
    <div className="container py-20 flex flex-col gap-10 mx-auto w-screen text-center">
      <SectionHeader title="Volunteering" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {volunteering.map((volunteer, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <div className="mb-4">
              {defaultIcon} {/* Use a default icon for now */}
            </div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {volunteer.projectName}
            </h3>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">
              {volunteer.role} at {volunteer.organisation}
            </h4>
            <p className="text-gray-700 mb-4">{volunteer.responsibility}</p>
            <p className="text-sm text-gray-500">
              {volunteer.startDate} - {volunteer.endDate}
            </p>
            <div className="mt-4 text-sm text-gray-500">
              <strong>Skills:</strong> {volunteer.skills}
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <strong>Location:</strong> {volunteer.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
