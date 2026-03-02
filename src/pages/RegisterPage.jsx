import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim().length < 2 ? 'Must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
      case 'phone':
        return !/^\+?[\d\s-()]{10,}$/.test(value) ? 'Invalid phone number' : '';
      case 'password':
        return value.length < 6 ? 'Password must be at least 6 characters' : '';
      case 'confirmPassword':
        return value !== formData.password ? 'Passwords do not match' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name] && errors[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 animate-fadeIn">
      <div className="bg-white p-8 md:p-12 asym-card shadow-2xl max-w-md w-full animate-slideUp border-2 border-gray-200">
        <h1 className="text-4xl font-bold text-center mb-2 text-[#4169E1]">Create Account</h1>
        <p className="text-center text-gray-600 mb-8">Join Gladness Hairline today</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                <User className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                First Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John"
                  className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                    touched.firstName && errors.firstName ? 'input-error border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {touched.firstName && errors.firstName && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                <User className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                Last Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Doe"
                  className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                    touched.lastName && errors.lastName ? 'input-error border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {touched.lastName && errors.lastName && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.lastName}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              <Mail className="inline w-4 h-4 mr-1 text-[#4169E1]" />
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="john.doe@example.com"
                className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                  touched.email && errors.email ? 'input-error border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <span>⚠</span> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              <Phone className="inline w-4 h-4 mr-1 text-[#4169E1]" />
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+1 (234) 567-8900"
                className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                  touched.phone && errors.phone ? 'input-error border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {touched.phone && errors.phone && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <span>⚠</span> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              <Lock className="inline w-4 h-4 mr-1 text-[#4169E1]" />
              Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter a strong password"
                className={`w-full pl-10 pr-12 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                  touched.password && errors.password ? 'input-error border-red-500' : 'border-gray-300'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {touched.password && errors.password && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <span>⚠</span> {errors.password}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              <Lock className="inline w-4 h-4 mr-1 text-[#4169E1]" />
              Confirm Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Re-enter your password"
                className={`w-full pl-10 pr-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                  touched.confirmPassword && errors.confirmPassword ? 'input-error border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <span>⚠</span> {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#4169E1] text-white py-3 asym-btn font-semibold hover:shadow-lg"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-[#4169E1] font-semibold hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
