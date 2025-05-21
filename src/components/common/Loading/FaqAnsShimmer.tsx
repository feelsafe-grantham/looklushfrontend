const FaqAnsShimmer = () => {
    return (
        <div className="w-full mx-auto">
            {/* Shimmer Carousel */}
            <div className="w-full relative overflow-hidden rounded-lg">
                <div className="grid grid-cols-2 gap-5 w-full max-w-[1200px] mx-auto">
                    <div className="flex flex-col gap-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className="h-[60px] bg-gray-200 animate-pulse "
                            />
                        ))}
                    </div>
                    <div className="bg-gray-200 animate-pulse " />
                </div>

            </div>
        </div>
    )
};

export default FaqAnsShimmer