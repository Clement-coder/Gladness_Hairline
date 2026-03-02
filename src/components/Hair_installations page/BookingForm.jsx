import { useForm } from "react-hook-form";
import { User, Mail, Phone, Calendar, Clock, MessageSquare } from "lucide-react";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted: ", data);
    alert("Your installation booking has been submitted!");
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-[#4169E1] asym-card flex items-center justify-center">
              <Calendar className="text-white" size={28} />
            </div>
            <h1 className="text-4xl font-bold text-[#4169E1] italic">Book an Installation</h1>
          </div>
          <p className="text-gray-600">Schedule your professional wig installation service</p>
        </div>

        <div className="bg-white asym-card shadow-2xl p-6 md:p-8 border-2 border-gray-200">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <User size={18} className="text-[#4169E1]" />
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  {...register("name", { 
                    required: "Name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" }
                  })}
                  placeholder="Enter your full name"
                  className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                    errors.name ? 'input-error border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Mail size={18} className="text-[#4169E1]" />
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address"
                    }
                  })}
                  placeholder="your@email.com"
                  className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                    errors.email ? 'input-error border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Phone size={18} className="text-[#4169E1]" />
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="tel"
                  {...register("phone", { 
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[\d\s-()]{10,}$/,
                      message: "Invalid phone number"
                    }
                  })}
                  placeholder="+1 (234) 567-8900"
                  className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                    errors.phone ? 'input-error border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.phone.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <Calendar size={18} className="text-[#4169E1]" />
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="date"
                    {...register("date", { required: "Date is required" })}
                    className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                      errors.date ? 'input-error border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.date.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <Clock size={18} className="text-[#4169E1]" />
                  Preferred Time *
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
                  <select
                    {...register("time", { required: "Time is required" })}
                    className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                      errors.time ? 'input-error border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>
                {errors.time && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.time.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <MessageSquare size={18} className="text-[#4169E1]" />
                Additional Notes
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                <textarea
                  {...register("message")}
                  rows="4"
                  placeholder="Any special requests or notes..."
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full asym-btn bg-[#4169E1] text-white py-3 font-bold text-lg hover:shadow-lg transition-all duration-500 flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Submit Booking
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            We'll contact you within 24 hours to confirm your appointment
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
