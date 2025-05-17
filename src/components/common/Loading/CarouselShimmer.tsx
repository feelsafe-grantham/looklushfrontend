const CarouselShimmer = () => {
    return (
        <div className="w-full mx-auto">
            {/* Shimmer Carousel */}
            <div className="w-full relative overflow-hidden rounded-lg">
                <div className="grid w-full">
                    {[1].map((i) => (
                        <div
                            key={i}
                            className="w-full aspect-[3/1] bg-gray-200 animate-pulse rounded-lg"
                        />
                    ))}
                </div>

                {/* Stepper Dots */}
                <div className="flex justify-center mt-4 space-x-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                            key={dot}
                            className="w-[10px] h-[10px] bg-gray-900 rounded-full animate-pulse"
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default CarouselShimmer;
