const buttonStyle = "p-4 rounded-xl shadow-md text-xl font-semibold";
const DeleteConfirmation = ({ item, setConfirmDelete, closeDeleteModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 max-h-screen overflow-y-scroll">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
        <h1>Are you sure you want to delete {item}</h1>
        <div className="flex">
          <button
            onClick={() => {
              setConfirmDelete(true);
              closeDeleteModal();
            }}
            className={`${buttonStyle} bg-blue-600`}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setConfirmDelete(false);
              closeDeleteModal();
            }}
            className={`${buttonStyle} bg-blue-600`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
