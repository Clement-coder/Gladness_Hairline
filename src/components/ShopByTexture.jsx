import { useState } from "react";
import { Star, X, ShoppingCart } from "lucide-react";
import Glad from "../assets/Glad.jpeg";
import CeoInstallation from "../assets/V pad-wig.webp";
import Hair1 from "../assets/hair1.jpeg";
import Hair2 from "../assets/hair2.jpeg";

const hairTextures = [
  { 
    name: "Straight Hair", 
    image: Hair1,
    description: "Sleek and smooth straight hair for a polished, elegant look. Perfect for professional settings.",
    features: ["Silky smooth texture", "Easy to maintain", "Heat resistant", "Natural shine"],
    price: "$129.99",
  },
  { 
    name: "Wavy Hair", 
    image: CeoInstallation,
    description: "Beautiful waves that add volume and movement. Versatile for any occasion.",
    features: ["Natural wave pattern", "Bouncy texture", "Low maintenance", "Tangle-free"],
    price: "$139.99",
  },
  { 
    name: "Curly Hair", 
    image: Glad,
    description: "Gorgeous curls with defined pattern. Makes a bold, beautiful statement.",
    features: ["Defined curls", "Full volume", "Long-lasting pattern", "Soft texture"],
    price: "$149.99",
  },
  { 
    name: "Textured", 
    image: Hair2,
    description: "Unique textured style for a natural, effortless look. Perfect for everyday wear.",
    features: ["Natural texture", "Versatile styling", "Lightweight", "Breathable"],
    price: "$134.99",
  },
];

const ShopByTexture = () => {
  const [selectedTexture, setSelectedTexture] = useState(null);
  return (
    <div className="relative p-4 md:p-6 text-center bg-gradient-to-br from-white to-blue-50">
      <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
        <Star className="w-5 h-5 md:w-7 md:h-7 text-blue-600" />
        <h2 className="text-xl md:text-3xl font-semibold">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 asym-btn shadow-lg">SHOP</span> BY TEXTURE
        </h2>
      </div>

      <div className="mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {hairTextures.map((texture, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedTexture(texture)}
            className="relative group overflow-hidden asym-card shadow-lg hover:shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={texture.image}
                alt={texture.name}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute top-2 right-2">
                <span className="bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 asym-btn text-white font-semibold text-xs md:text-sm shadow-xl">
                  {texture.name.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block absolute top-1/3 right-0 transform translate-x-2/4 rotate-90">
        <div className="asym-btn bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold px-6 py-3 shadow-xl">
          20% OFF
        </div>
      </div>

      {/* Texture Modal */}
      {selectedTexture && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedTexture(null)}>
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto asym-card shadow-2xl animate-slideUp" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedTexture(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm asym-btn flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                {/* Texture Image */}
                <div className="relative">
                  <img src={selectedTexture.image} alt={selectedTexture.name} className="w-full h-[300px] md:h-[400px] object-cover asym-card" />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 asym-btn font-bold shadow-xl">
                    20% OFF
                  </div>
                </div>

                {/* Texture Details */}
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">{selectedTexture.name}</h2>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{selectedTexture.description}</p>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-600">{selectedTexture.price}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-800 mb-3">Features:</h3>
                    <ul className="space-y-2">
                      {selectedTexture.features.map((feature, index) => (
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
                      Shop Now
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

export default ShopByTexture;
