import { useState } from "react";
import { Search, Package, Truck, CheckCircle, MapPin, Clock, Phone, Mail } from "lucide-react";

const TrackOrderPage = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderData, setOrderData] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    // Simulate order tracking
    setOrderData({
      orderNumber: orderNumber,
      status: "In Transit",
      estimatedDelivery: "March 5, 2026",
      currentLocation: "Lagos Distribution Center",
      items: [
        { name: "Straight Hair Wig", quantity: 1, price: "$139.87" },
        { name: "Glueless Wig", quantity: 2, price: "$216.00" },
      ],
      timeline: [
        { status: "Order Placed", date: "Feb 28, 2026 10:30 AM", completed: true, icon: Package },
        { status: "Payment Confirmed", date: "Feb 28, 2026 10:35 AM", completed: true, icon: CheckCircle },
        { status: "Processing", date: "Feb 29, 2026 09:00 AM", completed: true, icon: Package },
        { status: "Shipped", date: "Mar 1, 2026 02:15 PM", completed: true, icon: Truck },
        { status: "In Transit", date: "Mar 2, 2026 08:00 AM", completed: true, icon: Truck },
        { status: "Out for Delivery", date: "Mar 5, 2026", completed: false, icon: Truck },
        { status: "Delivered", date: "Mar 5, 2026", completed: false, icon: CheckCircle },
      ],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4169E1] mb-2">Track Your Order</h1>
          <p className="text-sm md:text-base text-gray-600 px-4">Enter your order number to see real-time tracking updates</p>
        </div>

        {/* Search Box */}
        <div className="bg-white/70 backdrop-blur-xl asym-card shadow-lg hover:shadow-2xl p-4 md:p-6 mb-6 md:mb-8 border-2 border-white/50">
          <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-3 md:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 md:left-4 top-3 md:top-4 text-gray-400" size={20} />
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Enter your order number (e.g., ORD-12345)"
                required
                className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-blue-500 text-base md:text-lg"
              />
            </div>
            <button
              type="submit"
              className="asym-btn bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 md:px-8 py-2 md:py-3 font-bold text-base md:text-lg hover:shadow-blue-500/40"
            >
              Track Order
            </button>
          </form>
          <p className="text-xs md:text-sm text-gray-500 mt-3">💡 Tip: You can find your order number in your confirmation email</p>
        </div>

        {orderData && (
          <div className="space-y-4 md:space-y-6">
            {/* Order Summary */}
            <div className="bg-white/70 backdrop-blur-xl asym-card shadow-lg hover:shadow-2xl p-4 md:p-6 border-2 border-white/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">Order #{orderData.orderNumber}</h2>
                  <p className="text-sm md:text-base text-gray-600 flex items-center gap-2">
                    <Package size={16} className="md:w-5 md:h-5 text-blue-600" />
                    Status: <span className="text-blue-600 font-bold">{orderData.status}</span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 md:px-6 py-2 md:py-3 asym-card text-center">
                  <p className="text-xs md:text-sm font-medium">Estimated Delivery</p>
                  <p className="text-lg md:text-xl font-bold">{orderData.estimatedDelivery}</p>
                </div>
              </div>

              {/* Current Location */}
              <div className="bg-blue-50 asym-card p-3 md:p-4 mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <div>
                    <p className="text-sm md:text-base font-semibold text-gray-800">Current Location</p>
                    <p className="text-xs md:text-sm text-gray-600">{orderData.currentLocation}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-sm md:text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Package size={18} className="text-blue-600" />
                  Order Items
                </h3>
                <div className="space-y-2">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-50 asym-card p-2 md:p-3">
                      <div>
                        <p className="text-sm md:text-base font-medium text-gray-800">{item.name}</p>
                        <p className="text-xs md:text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-sm md:text-base font-bold text-blue-600">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="bg-white/70 backdrop-blur-xl asym-card shadow-lg hover:shadow-2xl p-4 md:p-6 border-2 border-white/50">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-2">
                <Clock size={20} className="md:w-6 md:h-6 text-blue-600" />
                Tracking Timeline
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                {orderData.timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 md:gap-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 asym-card flex items-center justify-center flex-shrink-0 ${item.completed ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 'bg-gray-300'}`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className={`font-bold text-base md:text-lg ${item.completed ? 'text-gray-800' : 'text-gray-500'}`}>
                          {item.status}
                        </p>
                        <p className="text-xs md:text-sm text-gray-600">{item.date}</p>
                        {item.completed && index === orderData.timeline.findIndex(t => t.completed) && (
                          <p className="text-xs text-green-600 font-semibold mt-1">✓ Completed</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white asym-card shadow-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Need Help?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <Phone size={18} />
                  <div>
                    <p className="text-sm md:text-base font-semibold">Call Us</p>
                    <p className="text-xs md:text-sm">+234 (070) 424-21322</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <Mail size={18} />
                  <div>
                    <p className="text-sm md:text-base font-semibold">Email Us</p>
                    <p className="text-xs md:text-sm">support@gladnesshairline.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrderPage;
