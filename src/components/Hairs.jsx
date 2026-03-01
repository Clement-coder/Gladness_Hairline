import { useState } from "react";
import { X, ShoppingCart, Star } from "lucide-react";
import Hair2 from "../assets/hair2.jpeg";

const Hairs = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { 
      name: "Bye Bye knots", 
      image: "path-to-image1", 
      tag: "HOT",
      price: "$149.99",
      description: "Revolutionary knot-free wig for the most natural look. No visible knots on the hairline.",
      features: ["Invisible knots", "Natural hairline", "HD lace", "Pre-plucked"],
    },
    { 
      name: "Put On&Go Wig", 
      image: "path-to-image2",
      price: "$139.99",
      description: "Ready to wear in seconds. No glue, no tape, just put on and go!",
      features: ["Instant wear", "Secure fit", "Adjustable straps", "Beginner friendly"],
    },
    { 
      name: "13x4 Pre-Everything", 
      image: "path-to-image3",
      price: "$159.99",
      description: "Pre-plucked, pre-bleached, and pre-styled. Ready to wear straight out of the box.",
      features: ["13x4 lace frontal", "Pre-plucked", "Pre-bleached", "Pre-styled"],
    },
    { 
      name: "Trendy Colored Wig", 
      image: "path-to-image4",
      price: "$169.99",
      description: "Stand out with vibrant colors. High-quality dyed hair that lasts.",
      features: ["Vibrant colors", "Color-safe", "Fade resistant", "Multiple shades"],
    },
    { 
      name: "Bundles&Closure", 
      image: "path-to-image5",
      price: "$199.99",
      description: "Complete bundle set with closure for a full, natural look.",
      features: ["3 bundles + closure", "Virgin hair", "Full density", "Natural texture"],
    },
    { 
      name: "Glueless Wigs", 
      image: "path-to-image6",
      price: "$144.99",
      description: "No adhesive needed. Comfortable and secure all-day wear.",
      features: ["No glue needed", "Breathable cap", "Secure grip", "Easy removal"],
    },
    { 
      name: "V Part Wigs", 
      image: "path-to-image7",
      price: "$154.99",
      description: "V-shaped parting for natural scalp appearance. Easy to install.",
      features: ["V-part design", "Natural scalp", "Leave out blend", "Quick install"],
    },
    { 
      name: "Glueless HD Lace", 
      image: "path-to-image8",
      price: "$179.99",
      description: "Ultra-thin HD lace that melts into any skin tone. Invisible hairline.",
      features: ["HD lace", "Invisible", "Glueless", "All skin tones"],
    },
    { 
      name: "Clearance Sale", 
      image: "path-to-image9",
      price: "$99.99",
      description: "Premium wigs at clearance prices. Limited stock available!",
      features: ["Discounted price", "Limited stock", "Quality guaranteed", "Final sale"],
    },
    { 
      name: "Fast Delivery", 
      image: "path-to-image10", 
      tag: "24 HRS",
      price: "$134.99",
      description: "Get your wig delivered within 24 hours. Express shipping included.",
      features: ["24hr delivery", "Express shipping", "Track order", "Priority handling"],
    },
  ];

  return (
    <div className="h-auto min-h-auto bg-white py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="relative flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-full aspect-square asym-card overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img
                  src={Hair2}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {item.tag && (
                <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs md:text-sm px-2 md:px-3 py-1 asym-btn font-bold shadow-lg">
                  {item.tag}
                </div>
              )}
              <div className="mt-3 text-gray-700 font-semibold text-sm md:text-base lg:text-lg line-clamp-2">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedItem(null)}>
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto asym-card shadow-2xl animate-slideUp" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm asym-btn flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                {/* Product Image */}
                <div className="relative">
                  <img src={Hair2} alt={selectedItem.name} className="w-full h-[300px] md:h-[400px] object-cover asym-card" />
                  {selectedItem.tag && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 asym-btn font-bold text-lg shadow-xl">
                      {selectedItem.tag}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">{selectedItem.name}</h2>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{selectedItem.description}</p>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-600">{selectedItem.price}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-800 mb-3">Features:</h3>
                    <ul className="space-y-2">
                      {selectedItem.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <button className="w-full asym-btn bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 font-bold text-lg hover:shadow-orange-500/40 flex items-center justify-center gap-2 mt-auto">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hairs;
