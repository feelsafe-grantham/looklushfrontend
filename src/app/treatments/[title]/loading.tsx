const Loading = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto ">

            {/* Shimmer Carousel */}
            <div className="relative overflow-hidden rounded-lg">
                <div className="grid">
                    {[1].map((i) => (
                        <div
                            key={i}
                            className="w-full h-48 bg-gray-200 animate-pulse rounded-lg"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Loading;
