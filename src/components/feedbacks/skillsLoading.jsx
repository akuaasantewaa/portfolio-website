const SkillsLoading = () => {
  return (
    <div className="space-y-4 max-w-4xl p-5 mx-auto bg-white rounded-xl">
      <h1 className="text-3xl font-bold mt-16 mb-5">Skills</h1>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 bg-white rounded-lg shadow"
        >
          <div className="w-1/2 h-4 shimmer rounded"></div>
          <div className="w-1/4 h-4 shimmer rounded"></div>
          <div className="flex space-x-2">
            <div className="w-6 h-6 shimmer rounded"></div>
            <div className="w-6 h-6 shimmer rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsLoading;
