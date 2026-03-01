import { useNavigate } from "react-router-dom"

const Button = () => {
    const navigate = useNavigate();
  return (
    <button
        className="w-full asym-btn bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-4 hover:shadow-blue-500/40 font-semibold mt-8"
        onClick={() => navigate("/class-form")}
        >
        Register
    </button>
  )
}

export default Button
