import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Clock, DollarSign, Calendar } from "lucide-react";

import Instl1 from "../assets/installation1.jpeg";
import Instl2 from "../assets/ceo_installation.jpeg";
import Instl3 from "../assets/installation2.jpeg";
const InstallationPage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  
  const handleClick = (title) => {
    navigate(`/booking-form?title=${title}`);
  };

  const installations = [
    {
      title: "Basic Wig Installation",
      image: Instl1,
      price: "#12000",
      duration: "30 mins",
      description: "Perfect for beginners. Quick and professional installation with basic styling.",
      includes: ["Wig placement", "Basic styling", "Hairline customization", "Aftercare tips"],
    },
    {
      title: "Custom Wig Installation",
      image: Instl2,
      price: "#15000",
      duration: "1 hour",
      description: "Personalized installation with custom styling to match your preferences.",
      includes: ["Custom placement", "Advanced styling", "Lace tinting", "Baby hair creation", "Full consultation"],
    },
    {
      title: "Premium Wig Styling & Installation",
      image: Instl3,
      price: "#20000",
      duration: "1.5 hours",
      description: "Complete premium service with expert styling and long-lasting results.",
      includes: ["Premium installation", "Professional styling", "Lace melting", "Custom coloring", "Maintenance guide", "Follow-up support"],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-50 min-h-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#4169E1]">
        Wig Installation Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {installations.map((installation, index) => (
          <div
            key={index}
            onClick={() => setSelectedService(installation)}
            className="bg-white/60 backdrop-blur-sm asym-card shadow-lg hover:shadow-2xl p-4 text-center cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={installation.image}
              alt={installation.title}
              className="w-full h-52 object-cover asym-card mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">
              {installation.title}
            </h2>
            <p className="text-gray-600 flex items-center justify-center gap-2 mt-2">
              <Clock size={16} />
              {installation.duration}
            </p>
            <p className="text-green-500 font-semibold text-xl mt-2">{installation.price}</p>
            <button className="asym-btn bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white mt-4 py-2 px-4 hover:shadow-blue-500/40 w-full">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedService(null)}>
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto asym-card shadow-2xl animate-slideUp" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm asym-btn flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <X size={24} />
              </button>

              <div className="p-6 md:p-8">
                {/* Service Image */}
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-[300px] md:h-[400px] object-cover asym-card mb-6" />

                {/* Service Details */}
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedService.title}</h2>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 asym-card">
                    <Clock className="text-blue-600" size={20} />
                    <span className="font-semibold">{selectedService.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 px-4 py-2 asym-card">
                    <DollarSign className="text-green-600" size={20} />
                    <span className="font-semibold text-green-600">{selectedService.price}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">{selectedService.description}</p>

                {/* What's Included */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">What's Included:</h3>
                  <ul className="space-y-2">
                    {selectedService.includes.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700">
                        <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleClick(selectedService.title)}
                  className="w-full asym-btn bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-4 font-bold text-lg hover:shadow-orange-500/40 flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default InstallationPage;
