import { useNavigate } from "react-router-dom";
import Training from "../../assets/Training.jpg";

const InstallationClass = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/class-form?title");
  }

  return (
    <div className="bg-gray-100 min-h-screen py-4 mb-8 px-4">
      {/* Header Section */}
      <div className="text-center bg-[#4169E1] text-white p-4 asym-card">
        <h1 className="text-4xl font-bold">Intensive Installation Class</h1>
        <p className="text-lg mt-4">
          Master the art of wig installation with hands-on training from top Professionals!
        </p>
      </div>

      {/* Details Section */}
      <div className="max-w-6xl h-auto mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10">
        {/* Course Details */}
        <div className="asym-card overflow-hidden">
          <img
            src={Training}
            alt="Intensive Installation Class"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="asym-card p-2">
          <h2 className="text-2xl font-bold text-gray-800">What You’ll Learn</h2>
          <ul className="mt-4 md:space-y-5 text-gray-700">
            <li>✅ Basics of wig installation</li>
            <li>✅ Advanced styling techniques</li>
            <li>✅ Custom wig fitting</li>
            <li>✅ Proper hair care and maintenance</li>
            <li>✅ Tools and product recommendations</li>
            <li>✅ Different curling techniques</li>
            <li>✅ Revamping and Styling</li>
            <li>✅ How to match lace to skin color </li>
            <li>✅ How to bleach lace </li>
            <li>✅ How to Attach band </li>
            <li>✅ Closure wig installation </li>
            <li>✅ Frontal ponytail installation </li>
            <li>✅ Bridal hair installation </li>

          </ul>
          <p className="text-gray-600 mt-4">
            Join our 1-Month intensive course and become a certified wig installation expert!
          </p>
          <p className="text-orange-500 font-bold mt-4">Cost: $100</p>
          <button className="w-full bg-blue-500 text-white py-2 px-4 asym-card hover:bg-blue-400 font-semibold mt-8" onClick={handleClick} >Register Now</button>
        </div>        
      </div>
    </div>
  );
};

export default InstallationClass;
