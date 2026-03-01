import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag, Star } from "lucide-react";
import Gladhair from "../assets/gladhair.mp4";
import Hair from "../assets/Hair.mp4";
import Model from "../assets/new-arrival.jpg";
import Training from "../assets/styled-by-Glad.jpeg";
import Button from "./Button";

const slides = [
  {
    id: 1,
    content: (
      <div className="relative bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] text-white h-[500px] md:h-[700px] flex items-center overflow-hidden">
        <div className="pl-4 md:pl-12 z-10 max-w-[50%] md:max-w-none">
          <div className="bg-white/20 backdrop-blur-xl rounded-tl-[60px] rounded-br-[60px] rounded-tr-[20px] rounded-bl-[20px] p-4 md:p-8 border-2 border-white/40 shadow-2xl transition-all duration-500 hover:rounded-tr-[60px] hover:rounded-bl-[60px] hover:rounded-tl-[20px] hover:rounded-br-[20px] hover:bg-white/25">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 md:w-8 md:h-8 text-orange-400" />
              <h1 className="text-xl md:text-7xl font-bold italic drop-shadow-2xl text-white">
                Welcome to
              </h1>
            </div>
            <span className="block text-lg md:text-5xl text-orange-400 font-bold italic drop-shadow-2xl">GLADNESS HAIRLINE</span>
            <p className="text-xs md:text-xl font-light mt-2 text-white drop-shadow-lg">Queen of affordable Hairs</p>
            <button className="mt-4 asym-btn bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 md:px-8 py-2 md:py-3 text-xs md:text-base font-semibold hover:shadow-orange-500/40 w-fit flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              Shop Now
            </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 h-full w-1/2 md:w-1/2 opacity-90">
          <video
            src={Gladhair}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
            style={{ pointerEvents: 'none' }}
          ></video>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="relative bg-gradient-to-br from-[#4169E1] via-[#5a7fd6] to-[#6b8dd8] h-[500px] md:h-[700px] flex items-center justify-center md:justify-start p-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        <div className="bg-white/10 backdrop-blur-md w-[90%] md:w-[380px] asym-card shadow-2xl p-3 md:p-6 z-10 border border-white/20">
          <div className="relative overflow-hidden asym-card mb-3">
            <img src={Training} alt="" className="h-[140px] md:h-[260px] w-full object-cover" />
            <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 asym-btn font-bold shadow-lg">HOT</div>
          </div>
          <h3 className="text-base md:text-xl font-bold text-white mb-2">Wig Installation Course</h3>
          <p className="text-white/90 text-xs md:text-sm mb-2">
            Join our 1-Month intensive course and become a certified wig installation expert!
          </p>
          <p className="text-orange-400 font-bold text-sm md:text-lg mb-3">Cost: $100</p>
          <Button />
        </div>
        <div className="absolute right-4 md:right-20 top-1/2 transform -translate-y-1/2 hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-30"></div>
            <img
              src={Model}
              alt="Model"
              className="h-[200px] md:h-[480px] rounded-full object-cover shadow-2xl relative z-10 border-4 border-white/20"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="relative bg-gradient-to-br from-[#2d4a9e] via-[#4169E1] to-[#5a7fd6] h-[500px] md:h-[700px] flex items-center overflow-hidden">
        <div className="relative p-4 md:p-12 z-10 max-w-[50%] md:max-w-none animate-fadeInLeft">
          <div className="bg-white/10 backdrop-blur-md rounded-tl-[60px] rounded-br-[60px] rounded-tr-[20px] rounded-bl-[20px] p-4 md:p-8 border border-white/20 shadow-2xl transition-all duration-500 hover:rounded-tr-[60px] hover:rounded-bl-[60px] hover:rounded-tl-[20px] hover:rounded-br-[20px]">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-6 h-6 md:w-10 md:h-10 text-orange-400" />
              <h1 className="text-2xl md:text-6xl text-white font-bold italic drop-shadow-lg">
                <span className="text-3xl md:text-8xl bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">New</span> Arrival
              </h1>
            </div>
            <p className="text-white text-xs md:text-xl mb-4 font-light">Queen of Affordable Hairs</p>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-2 md:py-3 px-4 md:px-8 asym-btn font-semibold text-xs md:text-base hover:shadow-pink-500/40 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              Shop Now
            </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 h-full w-1/2 md:w-1/2">
          <video
            src={Hair}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover opacity-90"
            style={{ pointerEvents: 'none' }}
          ></video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d4a9e] via-transparent to-transparent pointer-events-none"></div>
      </div>
    ),
  },
];

const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="flex-shrink-0 w-full h-full">
            {slide.content}
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 md:p-2 rounded-full shadow-lg"
      >
        <ChevronLeft size={16} className="md:w-6 md:h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 md:p-2 rounded-full shadow-lg"
      >
        <ChevronRight size={16} className="md:w-6 md:h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              currentSlide === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;