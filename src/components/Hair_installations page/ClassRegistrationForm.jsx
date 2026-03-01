import { useForm } from 'react-hook-form';

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
    <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm asym-card shadow-lg hover:shadow-2xl p-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Register for Class
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("fullName", { required: "Full Name is required" })}
            className="w-full border border-gray-300 asym-input p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Email Address (Optional)<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            className="w-full border border-gray-300 asym-input p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            })}
            className="w-full border border-gray-300 asym-input p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Preferred Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            {...register("preferredDate", { required: "Preferred Date is required" })}
            className="w-full border border-gray-300 asym-input p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.preferredDate && (
            <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>
          )}
        </div>

        {/* Upload Receipt */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Upload Payment Receipt <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            {...register("receipt", { required: "Receipt upload is required" })}
            className="w-full border border-gray-300 asym-input p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.receipt && (
            <p className="text-red-500 text-sm mt-1">{errors.receipt.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Additional Comments
          </label>
          <textarea
            {...register("comments")}
            rows="4"
            className="w-full border border-gray-300 asym-input p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full asym-btn bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-4 hover:shadow-blue-500/40 font-semibold"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default ClassRegistrationForm;
