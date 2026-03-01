
const NewArrivalBanner = () => {
  return (
    <div className="relative bg-green-600 h-[300px] md:h-[450px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
       
        {/* Right Tree */}
        <div className="absolute top-0 right-0 h-full w-[20%]">
          <img
            src="path-to-right-tree-image.png"
            alt="Right Tree"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative text-center px-4">
        <h1 className="text-2xl md:text-5xl text-white font-bold italic mb-2">New Arrival</h1>
        <p className="text-white text-sm md:text-lg mb-4">
          Color Your Xmas With New-In Wigs
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 md:px-6 rounded-full font-semibold text-sm md:text-base">
          Shop Now
        </button>
      </div>

      {/* Model */}
      <div className="absolute right-4 md:right-20 top-1/2 transform -translate-y-1/2 hidden sm:block">
        <img
          src="path-to-model-image.png"
          alt="Model"
          className="h-[250px] md:h-[400px] object-cover"
        />
      </div>

      {/* Subscribe Now Button */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 rotate-90 origin-left bg-pink-600 text-white text-xs md:text-sm font-bold py-2 px-3 md:px-4">
        Subscribe now!
      </div>
    </div>
  );
};

export default NewArrivalBanner;
