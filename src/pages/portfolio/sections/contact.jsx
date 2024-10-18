import { useUser } from "../../../contexts/UserContext";
import SectionHeader from "../components/SectionHeader";

const inputStyle =
  "w-full p-4 mt-2 bg-gray-100 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

const labelStyle = "block text-left text-lg font-medium text-gray-600";
const Contact = () => {
  const { userDetails } = useUser();
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      <div className="container flex flex-col gap-10 mx-auto w-full md:w-3/4 lg:w-1/2 text-center">
        <SectionHeader
          title="Get In Touch!"
          description="Feel free to contact me by submitting the form below. I will get back to you as soon as possible."
        />
        <div className="w-full mx-auto">
          <form className="p-8 bg-white shadow-2xl rounded-2xl">
            <div className="w-full mb-6">
              <label className={`${labelStyle}`}>Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className={`${inputStyle}`}
              />
            </div>
            <div className="w-full mb-6">
              <label className={`${labelStyle}`}>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className={`${inputStyle}`}
              />
            </div>
            <div className="w-full mb-6">
              <label className={`${labelStyle}`}>Message</label>
              <textarea
                placeholder="Enter your Message"
                rows="5"
                className={`${inputStyle}`}
              ></textarea>
            </div>
            <div className="flex w-full justify-end items-center">
              <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
