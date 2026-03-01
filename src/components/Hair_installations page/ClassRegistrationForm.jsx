import { useForm } from 'react-hook-form';
import { User, Mail, Phone, Calendar, Upload, MessageSquare, GraduationCap } from "lucide-react";

const ClassRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted: ", data);
    alert("Your registration for the Intensive Installation Class has been submitted!");
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 asym-card flex items-center justify-center">
              <GraduationCap className="text-white" size={28} />
            </div>
            <h1 className="text-4xl font-bold text-[#4169E1] italic">Register for Class</h1>
          </div>
          <p className="text-gray-600">Join our intensive wig installation training program</p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl asym-card shadow-2xl p-6 md:p-8 border-2 border-white/50 transition-all duration-700">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <User size={18} className="text-purple-600" />
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  {...register("fullName", { required: "Full Name is required" })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-500"
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Mail size={18} className="text-purple-600" />
                Email Address (Optional) <span className="text-red-500">*</span>
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
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-500"
                  placeholder="your.email@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Phone size={18} className="text-purple-600" />
                Phone Number <span className="text-red-500">*</span>
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
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-500"
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Calendar size={18} className="text-purple-600" />
                Preferred Start Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="date"
                  {...register("preferredDate", { required: "Preferred Date is required" })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-500"
                />
              </div>
              {errors.preferredDate && (
                <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Upload size={18} className="text-purple-600" />
                Upload Payment Receipt <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  {...register("receipt", { required: "Receipt upload is required" })}
                  className="hidden"
                  id="receipt-upload"
                  accept="image/*,.pdf"
                />
                <label
                  htmlFor="receipt-upload"
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-dashed border-gray-300 asym-card cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-all duration-500"
                >
                  <Upload className="text-gray-400" size={24} />
                  <span className="text-gray-600 font-medium">Click to upload receipt</span>
                </label>
              </div>
              {errors.receipt && (
                <p className="text-red-500 text-sm mt-1">{errors.receipt.message}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">Upload proof of payment ($100) - JPG, PNG or PDF</p>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <MessageSquare size={18} className="text-purple-600" />
                Additional Comments
              </label>
              <textarea
                {...register("comments")}
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-500"
                placeholder="Any questions or special requirements?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full asym-btn bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-3 font-bold text-lg hover:shadow-blue-500/40 transition-all duration-700 flex items-center justify-center gap-2"
            >
              <GraduationCap size={20} />
              Submit Registration
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            You'll receive a confirmation email within 24 hours with class details
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassRegistrationForm;
