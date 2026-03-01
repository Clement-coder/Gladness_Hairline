import { useState, useEffect } from "react";
import { Clock, X, ShoppingCart, Heart, Star } from "lucide-react";
import Glad from "../assets/Glad.jpeg";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 2,
    minutes: 41,
    seconds: 21,
  });
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        } else {
          clearInterval(timer);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };
  const products = [
    {
      name: "Straight Hair Wig - 24 inches",
      image: "path-to-image1",
      originalPrice: "$199.82",
      salePrice: "$139.87",
      discount: "30%",
      shipping: "Ship In 24 Hours",
      description: "Premium quality straight hair wig with natural shine. Perfect for everyday wear and special occasions.",
      features: ["100% Human Hair", "HD Lace", "Pre-plucked Hairline", "Natural Black Color"],
      rating: 4.8,
      reviews: 156,
    },
    {
      name: "Glueless Wig - Natural Black",
      image: "path-to-image2",
      originalPrice: "$360.00",
      salePrice: "$108.00",
      discount: "70%",
      description: "Easy to install glueless wig with secure fit. No adhesive needed for a comfortable all-day wear.",
      features: ["Glueless Installation", "Breathable Cap", "Adjustable Straps", "Pre-styled"],
      rating: 4.9,
      reviews: 203,
    },
    {
      name: "Curly Hair Wig - 20 inches",
      image: "path-to-image3",
      originalPrice: "$141.07",
      salePrice: "$98.75",
      discount: "30%",
      shipping: "Ship In 24 Hours",
      description: "Beautiful curly texture with bouncy curls. Maintains curl pattern after washing.",
      features: ["Virgin Hair", "Deep Wave Curls", "Full Density", "Tangle-free"],
      rating: 4.7,
      reviews: 89,
    },
    {
      name: "Body Wave Wig - 22 inches",
      image: "path-to-image4",
      originalPrice: "$360.00",
      salePrice: "$108.00",
      discount: "70%",
      description: "Soft body wave pattern for a natural look. Versatile styling options.",
      features: ["Soft Texture", "Natural Wave", "Heat Resistant", "Long Lasting"],
      rating: 4.6,
      reviews: 124,
    },
    {
      name: "V Part Wig - 18 inches",
      image: "path-to-image5",
      originalPrice: "$201.07",
      salePrice: "$140.75",
      discount: "30%",
      description: "V-part design for natural scalp appearance. Easy to blend with your natural hair.",
      features: ["V-Part Design", "Natural Scalp", "Easy Install", "Beginner Friendly"],
      rating: 4.8,
      reviews: 178,
    },
  ];


  return (
    <div className="bg-gradient-to-br from-neutral-50 to-blue-50 h-auto min-h-auto px-4 py-6 md:py-10">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#4169E1]" />
          <h1 className="text-2xl md:text-3xl font-bold text-[#4169E1]">FLASH SALE!</h1>
        </div>
        <div className="flex items-center justify-center font-serif space-x-1 md:space-x-2">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white asym-card text-lg md:text-2xl shadow-lg">
              {formatTime(timeLeft.days)}
            </div>
            <span className="text-[10px] md:text-xs mt-1">Days</span>
          </div>
          <span className="text-xl md:text-2xl font-bold">:</span>
          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white asym-card text-lg md:text-2xl shadow-lg">
              {formatTime(timeLeft.hours)}
            </div>
            <span className="text-[10px] md:text-xs mt-1">Hours</span>
          </div>
          <span className="text-xl md:text-2xl font-bold">:</span>
          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white asym-card text-lg md:text-2xl shadow-lg">
              {formatTime(timeLeft.minutes)}
            </div>
            <span className="text-[10px] md:text-xs mt-1">Minutes</span>
          </div>
          <span className="text-xl md:text-2xl font-bold">:</span>
          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white asym-card text-lg md:text-2xl shadow-lg">
              {formatTime(timeLeft.seconds)}
            </div>
            <span className="text-[10px] md:text-xs mt-1">Seconds</span>
          </div>
        </div>
        {/* Product List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => setSelectedProduct(product)}
            className="relative bg-white/60 backdrop-blur-sm border border-white/40 asym-card shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            {/* Product Image */}
            <div className="relative">
              <img
                src={Glad}
                alt={product.name}
                className="w-full h-40 md:h-56 object-cover"
              />
              {product.discount && (
                <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] md:text-xs px-2 md:px-3 py-1 asym-btn font-bold shadow-lg">
                  -{product.discount}
                </div>
              )}
              {product.shipping && (
                <div className="absolute bottom-2 left-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-[10px] md:text-xs px-2 md:px-3 py-1 asym-btn font-bold shadow-lg">
                  {product.shipping}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-2 md:p-4 text-center">
              <p className="text-xs md:text-sm text-gray-700 mb-1 line-clamp-2">{product.name}</p>
              <div className="text-gray-700 font-semibold text-sm md:text-lg">
                {product.salePrice}
              </div>
              <div className="text-gray-400 line-through text-xs md:text-sm">
                {product.originalPrice}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <button className="asym-btn bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-4 md:px-6 hover:shadow-blue-500/40 text-sm md:text-base font-semibold">
          View More
        </button>
      </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto asym-card shadow-2xl animate-slideUp" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm asym-btn flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                {/* Product Image */}
                <div className="relative">
                  <img src={Glad} alt={selectedProduct.name} className="w-full h-[300px] md:h-[500px] object-cover asym-card" />
                  {selectedProduct.discount && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 asym-btn font-bold text-lg shadow-xl">
                      -{selectedProduct.discount} OFF
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{selectedProduct.name}</h2>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className={i < Math.floor(selectedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl md:text-4xl font-bold text-blue-600">{selectedProduct.salePrice}</span>
                      <span className="text-xl text-gray-400 line-through">{selectedProduct.originalPrice}</span>
                    </div>
                    {selectedProduct.shipping && (
                      <p className="text-green-600 font-semibold mt-2 flex items-center gap-2">
                        ✓ {selectedProduct.shipping}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">{selectedProduct.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-800 mb-2">Key Features:</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 asym-btn bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 font-bold text-lg hover:shadow-orange-500/40 flex items-center justify-center gap-2">
                      <ShoppingCart size={20} />
                      Add to Cart
                    </button>
                    <button className="w-12 h-12 asym-btn bg-gray-100 hover:bg-red-50 flex items-center justify-center hover:text-red-500 transition-colors duration-300">
                      <Heart size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashSale;
