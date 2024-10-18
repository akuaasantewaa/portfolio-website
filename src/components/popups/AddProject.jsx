/* eslint-disable react/prop-types */
import { useState } from "react";

const AddProject = (props) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.handleChange(name, value);
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  const validate = () => {
    const {
      projectName,
      description,
      contribution,
      skills,
      link,
      nameOfInstitution,
      startDate,
      endDate,
    } = props.project;
    const newErrors = {};
    if (!projectName) newErrors.projectName = "Project name is required";
    if (!description) newErrors.description = "Description is required";
    if (!contribution) newErrors.contribution = "Contribution is required";
    if (!skills) newErrors.skills = "Skills are required";
    if (!link) newErrors.link = "Link is required";
    if (!nameOfInstitution)
      newErrors.nameOfInstitution = "Name of institution is required";
    if (!startDate) newErrors.startDate = "Start date is required";
    if (!endDate) newErrors.endDate = "End date is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      props.handleSubmit(e); // Proceed with adding the project
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 max-h-screen overflow-y-scroll">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Add Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="projectName"
            >
              Project Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.projectName ? "border-red-500" : ""
              }`}
              id="projectName"
              name="projectName"
              type="text"
              placeholder="Project Name"
              value={props.project.projectName}
              onChange={handleChange}
            />
            {errors.projectName && (
              <p className="text-red-500 text-sm mt-1">{errors.projectName}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.description ? "border-red-500" : ""
              }`}
              id="description"
              name="description"
              placeholder="Description"
              value={props.project.description}
              onChange={handleChange}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="contribution"
            >
              Contribution
            </label>
            <textarea
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.contribution ? "border-red-500" : ""
              }`}
              id="contribution"
              name="contribution"
              placeholder="Individual Contribution"
              value={props.project.contribution}
              onChange={handleChange}
            />
            {errors.contribution && (
              <p className="text-red-500 text-sm mt-1">{errors.contribution}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="skills"
            >
              Skills
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.skills ? "border-red-500" : ""
              }`}
              id="skills"
              name="skills"
              type="text"
              placeholder="Skills"
              value={props.project.skills}
              onChange={handleChange}
            />
            {errors.skills && (
              <p className="text-red-500 text-sm mt-1">{errors.skills}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="link"
            >
              Link
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.link ? "border-red-500" : ""
              }`}
              id="link"
              name="link"
              type="text"
              placeholder="Link"
              value={props.project.link}
              onChange={handleChange}
            />
            {errors.link && (
              <p className="text-red-500 text-sm mt-1">{errors.link}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="nameOfInstitution"
            >
              Name of Institution
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.nameOfInstitution ? "border-red-500" : ""
              }`}
              id="nameOfInstitution"
              name="nameOfInstitution"
              type="text"
              placeholder="Name of Institution"
              value={props.project.nameOfInstitution}
              onChange={handleChange}
            />
            {errors.nameOfInstitution && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nameOfInstitution}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="startDate"
            >
              Start Date
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.startDate ? "border-red-500" : ""
              }`}
              id="startDate"
              name="startDate"
              type="date"
              value={props.project.startDate}
              onChange={handleChange}
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="endDate"
            >
              End Date
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.endDate ? "border-red-500" : ""
              }`}
              id="endDate"
              name="endDate"
              type="date"
              value={props.project.endDate}
              onChange={handleChange}
            />
            {errors.endDate && (
              <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>
            )}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={props.closeModal}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {props.isEdit ? "Update Project" : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
