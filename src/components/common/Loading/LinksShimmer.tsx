const LinksShimmer = () => {
    return (
        <div className="w-full mx-auto">
            {/* Price Table Carousel */}
            <div className="w-full relative overflow-hidden rounded-lg">
                <div className="grid grid-rows-1 gap-[10px] w-full max-w-[1200px] mx-auto ">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
                        <div
                            key={i}
                            className={`w-full h-[50px] animate-pulse rounded-lg ${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>


            </div>
        </div>
    )

}

export default LinksShimmer