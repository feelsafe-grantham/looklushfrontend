export const ReelContainerShimmer = () => {
    return (
        <div className="w-full mx-auto">
            {/* Shimmer Carousel */}
            <div className="w-full mx-auto py-[50px] relative bg-[var(--bg-section-color)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-[1200px] mx-auto ">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="w-full max-w-[300px] mx-auto aspect-[5/8] bg-gray-200 animate-pulse rounded-lg"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};