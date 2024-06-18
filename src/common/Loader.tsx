const Loader = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-black-opacity-19 to-black-opacity-215 z-3">
            <div className="w-200 h-200 inline-block overflow-hidden" role="loader">
                <div className="relative animate-spin-linear infinite w-160 h-160 top-20 left-20 border-4 border-blue-600 rounded-full" />
            </div>
        </div>
    );
};

export default Loader;
