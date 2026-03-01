import { useForm } from "react-hook-form";

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
    reset(); // Clear the form after submission
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm asym-card shadow-lg hover:shadow-2xl mt-4 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Book an Installation
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Full Name is required" })}
            className="w-full border border-gray-300 asym-input p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Address (Optional) */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Email Address (Optional)
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

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Phone Number
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="w-full border border-gray-300 asym-input p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Preferred Time
            </label>
            <input
              type="time"
              {...register("time", { required: "Time is required" })}
              className="w-full border border-gray-300 asym-input p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>
        </div>

        {/* Additional Comments */}
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

        <button
          type="submit"
          className="w-full asym-btn bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2 px-4 hover:shadow-orange-500/40 font-semibold"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
