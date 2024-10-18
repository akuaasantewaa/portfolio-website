const OverviewLoading = () => {
  return (
    <div className="space-y-4 w-full p-5 mx-auto bg-gray-100 rounded-xl ">
      <h1 className="text-3xl font-bold mt-16 mb-5 shimmer h-8 w-1/3"></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-10 items-center p-4 bg-white rounded-lg shadow space-y-2"
          >
            <div className="h-[90px] w-[90px] p-5 flex justify-center items-center border-8 border-gray-400 rounded-full shimmer"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded shimmer"></div>
            <div className="h-4 w-1/3 bg-gray-200 rounded shimmer"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewLoading;
