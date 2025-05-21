const CommonShimmer = () => {
    return (
        <div className="w-full mx-auto">
            <div className="w-full relative overflow-hidden rounded-lg">
                <div className="grid w-full max-w-[1200px] mx-auto ">
                    <div className="w-full h-[500px] bg-gray-200 animate-pulse rounded-lg" />
                </div>
            </div>
        </div>
    );
};
export default CommonShimmer;