const FaqCatShimmer = () => {
    return (
        <div className="w-full mx-auto">
            {/* Shimmer Carousel */}
            <div className="w-full relative overflow-hidden rounded-lg">
                <div className="flex  items-center justify-center gap-20 flex-wrap w-full">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="w-[120px] h-[120px] bg-gray-200 animate-pulse rounded-full"
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default FaqCatShimmer;