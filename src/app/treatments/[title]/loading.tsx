const Loading = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto p-4">
            {/* Shimmer for top treatment section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 animate-pulse">

                {/* Left side: Text and rating */}
                <div className="flex flex-col gap-4 flex-1 w-full">
                    <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
                    <div className="h-6 w-1/3 bg-gray-200 rounded"></div>

                    <div className="flex gap-4 items-center mt-2">
                        <div className="h-5 w-24 bg-gray-200 rounded"></div>
                        <div className="h-5 w-16 bg-gray-200 rounded"></div>
                    </div>

                    <div className="h-10 w-32 bg-gray-200 rounded mt-4"></div>
                </div>

                {/* Right side: Image shimmer */}
                <div className="w-full md:w-[300px] h-[250px] bg-gray-200 rounded-lg"></div>
            </div>

            {/* Shimmer for input booking form */}
            <div className="flex flex-col md:flex-row gap-4 mt-8 animate-pulse">
                <div className="h-12 w-full md:w-1/4 bg-gray-200 rounded"></div>
                <div className="h-12 w-full md:w-1/4 bg-gray-200 rounded"></div>
                <div className="h-12 w-full md:w-1/4 bg-gray-200 rounded"></div>
                <div className="h-12 w-full md:w-1/4 bg-gray-300 rounded"></div>
            </div>

            {/* Shimmer for title below */}
            <div className="mt-12">
                <div className="h-6 w-1/2 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            </div>
        </div>
    );
};

export default Loading;
