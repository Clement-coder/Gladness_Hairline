import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Mail, Eye, EyeOff, Gift, Truck, Award } from "lucide-react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Login successful!" : "Registration successful!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 asym-card flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-[#4169E1] italic">GLADNESS HAIRLINE</h1>
          </div>
          <p className="text-gray-600">Your journey to beautiful hair starts here</p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl asym-card shadow-2xl p-8 border-2 border-white/50 transition-all duration-700">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            {isLogin ? "Welcome Back!" : "Join Our Family"}
          </h2>
          <p className="text-center text-gray-600 mb-6">
            {isLogin ? "Sign in to access your account" : "Create an account to get started"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <User size={18} className="text-blue-600" />
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Mail size={18} className="text-blue-600" />
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Lock size={18} className="text-blue-600" />
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full pl-10 pr-12 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full asym-btn bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-3 font-bold text-lg hover:shadow-blue-500/40 transition-all duration-700"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:text-blue-700 font-bold text-lg transition-colors duration-300"
            >
              {isLogin ? "Register Now →" : "Sign In →"}
            </button>
          </div>

          {!isLogin && (
            <p className="text-xs text-gray-500 text-center mt-4">
              By creating an account, you agree to our Terms of Service and Privacy Policy
            </p>
          )}
        </div>

        {/* Benefits Section */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-white/60 backdrop-blur-sm asym-card p-4 text-center hover:shadow-lg transition-all duration-500">
            <Gift className="mx-auto text-orange-500 mb-2" size={32} />
            <p className="text-xs font-semibold text-gray-700">Exclusive Deals</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm asym-card p-4 text-center hover:shadow-lg transition-all duration-500">
            <Truck className="mx-auto text-blue-500 mb-2" size={32} />
            <p className="text-xs font-semibold text-gray-700">Fast Shipping</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm asym-card p-4 text-center hover:shadow-lg transition-all duration-500">
            <Award className="mx-auto text-purple-500 mb-2" size={32} />
            <p className="text-xs font-semibold text-gray-700">Rewards Points</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
