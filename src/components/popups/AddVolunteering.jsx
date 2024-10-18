/* eslint-disable react/prop-types */

const AddVolunteering = (props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 max-h-screen overflow-y-scroll">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">
          {props?.isEditing ? "Edit Volunteering" : "Add Volunteering"}
        </h2>
        <form onSubmit={props.handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="organisation"
            >
              Organisation
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="organisation"
              name="organisation"
              type="text"
              placeholder="Organisation"
              value={props.volunteering.organisation}
              onChange={props.handleChange}
            />
            {props.errors.organisation && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.organisation}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="projectName"
            >
              Project Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="projectName"
              name="projectName"
              type="text"
              placeholder="Project Name"
              value={props.volunteering.projectName}
              onChange={props.handleChange}
            />
            {props.errors.projectName && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.projectName}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="role"
            >
              Role
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              name="role"
              type="text"
              placeholder="Role"
              value={props.volunteering.role}
              onChange={props.handleChange}
            />
            {props.errors.role && (
              <p className="text-red-500 text-sm mt-1">{props.errors.role}</p>
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="skills"
              name="skills"
              type="text"
              placeholder="Skills"
              value={props.volunteering.skills}
              onChange={props.handleChange}
            />
            {props.errors.skills && (
              <p className="text-red-500 text-sm mt-1">{props.errors.skills}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="responsibility"
            >
              Responsibility
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="responsibility"
              name="responsibility"
              placeholder="Responsibility"
              value={props.volunteering.responsibility}
              onChange={props.handleChange}
            ></textarea>
            {props.errors.responsibility && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.responsibility}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              name="location"
              type="text"
              placeholder="Location"
              value={props.volunteering.location}
              onChange={props.handleChange}
            />
            {props.errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.location}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="startDate"
              name="startDate"
              type="date"
              value={props.volunteering.startDate}
              onChange={props.handleChange}
            />
            {props.errors.startDate && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.startDate}
              </p>
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="endDate"
              name="endDate"
              type="date"
              value={props.volunteering.endDate}
              onChange={props.handleChange}
            />
            {props.errors.endDate && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.endDate}
              </p>
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              placeholder="Description"
              value={props.volunteering.description}
              onChange={props.handleChange}
            ></textarea>
            {props.errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.description}
              </p>
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
              {props?.isEditing ? "Update Volunteering" : "Add Volunteering"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteering;
