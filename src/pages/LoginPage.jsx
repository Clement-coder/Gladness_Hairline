import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
      case 'password':
        return value.length < 6 ? 'Password must be at least 6 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    localStorage.setItem('user', JSON.stringify(formData));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#4169E1] asym-card flex items-center justify-center mx-auto mb-4">
            <LogIn className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-[#4169E1] mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <div className="bg-white asym-card shadow-2xl p-8 border-2 border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Mail size={18} className="text-[#4169E1]" />
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                    errors.email ? 'input-error border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Lock size={18} className="text-[#4169E1]" />
                Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full pl-10 pr-12 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                    errors.password ? 'input-error border-red-500' : 'border-gray-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full asym-btn bg-[#4169E1] text-white py-3 font-bold text-lg hover:shadow-lg transition-all duration-500"
            >
              Sign In
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-[#4169E1] font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
