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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 asym-card flex items-center justify-center">
              <Calendar className="text-white" size={28} />
            </div>
            <h1 className="text-4xl font-bold text-[#4169E1] italic">Book an Installation</h1>
          </div>
          <p className="text-gray-600">Schedule your professional wig installation service</p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl asym-card shadow-2xl p-6 md:p-8 border-2 border-white/50 transition-all duration-700">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <User size={18} className="text-blue-600" />
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  {...register("name", { required: "Full Name is required" })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500"
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Mail size={18} className="text-blue-600" />
                Email Address (Optional)
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  {...register("email", {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500"
                  placeholder="your.email@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Phone size={18} className="text-blue-600" />
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,}$/,
                      message: "Phone number must be at least 10 digits",
                    },
                  })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500"
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <Calendar size={18} className="text-blue-600" />
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="date"
                    {...register("date", { required: "Date is required" })}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500"
                  />
                </div>
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <Clock size={18} className="text-blue-600" />
                  Preferred Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="time"
                    {...register("time", { required: "Time is required" })}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500"
                  />
                </div>
                {errors.time && (
                  <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <MessageSquare size={18} className="text-blue-600" />
                Additional Comments
              </label>
              <textarea
                {...register("comments")}
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500"
                placeholder="Any special requests or questions?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full asym-btn bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white py-3 font-bold text-lg hover:shadow-orange-500/40 transition-all duration-700"
            >
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
