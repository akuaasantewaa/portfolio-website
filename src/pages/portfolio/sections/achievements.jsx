import React from "react";
import { useUser } from "../../../contexts/UserContext";
import { FaTrophy, FaCertificate, FaStar } from "react-icons/fa"; // Importing icons
import SectionHeader from "../components/SectionHeader";

const Achievements = () => {
  const { userDetails } = useUser();
  const { achievements } = userDetails;

  return (
    <div className="container py-20 flex flex-col gap-10 mx-auto w-screen text-center">
      <SectionHeader title="My Achievements" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            {achievement.image && (
              <div className="mb-4 w-full">
                <img
                  src={achievement.image}
                  alt={achievement.award}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {achievement.award}
            </h3>
            <p className="text-gray-700 mb-4">{achievement.description}</p>
            <p className="text-sm text-gray-500 mb-2">{achievement.date}</p>
            <p className="text-sm text-gray-500">
              {achievement.nameOfInstitution}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
