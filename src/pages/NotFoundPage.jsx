import { useNavigate } from 'react-router-dom';
import { Home, Search, ShoppingBag } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4169E1] to-[#5a7fd6] flex items-center justify-center px-4 animate-fadeIn">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold mb-4 animate-fadeInUp">404</h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Page Not Found</h2>
        <p className="text-xl mb-8 animate-fadeInUp">Oops! The page you're looking for doesn't exist.</p>
        
        <div className="flex flex-wrap gap-4 justify-center animate-fadeInUp">
          <button
            onClick={() => navigate('/')}
            className="bg-white text-[#4169E1] px-6 py-3 asym-btn font-semibold hover:shadow-lg flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Go Home
          </button>
          <button
            onClick={() => navigate('/shop')}
            className="bg-white text-[#4169E1] px-6 py-3 asym-btn font-semibold hover:shadow-lg flex items-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            Shop Now
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-[#4169E1] px-6 py-3 asym-btn font-semibold hover:shadow-lg flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
