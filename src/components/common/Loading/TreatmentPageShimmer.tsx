const TreatmentPageShimmer = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto py-1">
      <div className="flex flex-col gap-4">
        <div className="h-4 flex gap-5 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-[250px] rounded-xl p-4 bg-white shadow-sm animate-pulse"
            >
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              </div>
              <div className="h-10 bg-gray-300 rounded-md w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreatmentPageShimmer;
