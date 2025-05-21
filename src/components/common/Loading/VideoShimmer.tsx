const VideoShimmer = () => {
    return (

        <div className="w-full mx-auto">
            {/* Shimmer Carousel */}
            <div className="w-full relative overflow-hidden rounded-lg">
                <div className="grid w-full">
                    {[1].map((i) => (
                        <div
                            key={i}
                            className="w-full max-w-[800px] mx-auto aspect-[2/1] bg-gray-200 animate-pulse rounded-lg"
                        />
                    ))}
                </div>


            </div>
        </div>

    )
}

export default VideoShimmer;