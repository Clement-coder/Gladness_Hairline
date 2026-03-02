import { useForm } from "react-hook-form";
import { User, Mail, Phone, GraduationCap, Calendar } from "lucide-react";

const ClassRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted: ", data);
    alert("Your class registration has been submitted!");
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-purple-600 asym-card flex items-center justify-center">
              <GraduationCap className="text-white" size={28} />
            </div>
            <h1 className="text-4xl font-bold text-purple-600 italic">Register for Class</h1>
          </div>
          <p className="text-gray-600">Join our professional wig installation training course</p>
        </div>

        <div className="bg-white asym-card shadow-2xl p-6 md:p-8 border-2 border-gray-200">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <User size={18} className="text-purple-600" />
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
                  className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-500 ${
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
                <Mail size={18} className="text-purple-600" />
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
                  className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-500 ${
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
                <Phone size={18} className="text-purple-600" />
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
                  className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-500 ${
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

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Calendar size={18} className="text-purple-600" />
                Preferred Start Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="date"
                  {...register("startDate", { required: "Start date is required" })}
                  className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-500 ${
                    errors.startDate ? 'input-error border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.startDate && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.startDate.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full asym-btn bg-purple-600 text-white py-3 font-bold text-lg hover:shadow-lg transition-all duration-500 flex items-center justify-center gap-2"
            >
              <GraduationCap size={20} />
              Register for Class
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            Course fee: $100 | Duration: 1 Month
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassRegistrationForm;
