import Gladhair from '../assets/gladhair.mp4';
function Banner() {
  return (
    <div className="relative bg-[#4169E1] text-white h-[300px] md:h-[550px] flex items-center overflow-hidden p-4">

      {/* Left Content */}
      <div className="flex flex-col justify-center pl-4 md:pl-8 space-y-2 md:space-y-4 z-10 max-w-[50%] md:max-w-none">
        <h1 className="text-xl md:text-5xl font-bold italic">Welcome to <span className="block text-lg md:text-4xl">GLADNESS HAIRLINE</span></h1>
        <p className="text-sm md:text-lg">Queen of affordable Hairs</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium w-fit">
          Shop Now
        </button>
      </div>

      {/* Right Image Section */}
      <div className="absolute right-0 bottom-0 h-full w-1/2 md:w-1/2">
      <video
          src={Gladhair}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          style={{ pointerEvents: 'none' }}
        >
          Your browser does not support the video tag.
      </video>
      </div>

     
    </div>
  );
}

export default Banner;
