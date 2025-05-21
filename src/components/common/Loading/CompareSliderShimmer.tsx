

const CompareSliderShimmer = () => {
    return (
        <div className="w-full mx-auto">
            {/* Shimmer Carousel */}
            <div className="w-full relative overflow-hidden rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-[1200px] mx-auto py-[50px]">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="w-full h-[500px] bg-gray-200 animate-pulse rounded-lg"
                        />
                    ))}
                </div>


            </div>
        </div>

    );
};

export default CompareSliderShimmer;