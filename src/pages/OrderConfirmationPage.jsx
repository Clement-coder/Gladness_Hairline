import { useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Home } from 'lucide-react';

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  const orderNumber = '#ORD-' + Date.now();

  return (
    <div className="min-h-screen bg-gray-50 py-16 animate-fadeIn">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white p-8 md:p-12 asym-card shadow-lg text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center animate-fadeInUp">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-green-600 animate-fadeInUp">Order Confirmed!</h1>
          <p className="text-xl text-gray-700 mb-2 animate-fadeInUp">Thank you for your purchase</p>
          <p className="text-gray-600 mb-8 animate-fadeInUp">Your order has been successfully placed</p>

          <div className="bg-gray-50 p-6 asym-card mb-8 animate-fadeInUp">
            <p className="text-sm text-gray-600 mb-2">Order Number</p>
            <p className="text-2xl font-bold text-[#4169E1]">{orderNumber}</p>
          </div>

          <div className="text-left mb-8 space-y-4 animate-fadeInUp">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#4169E1] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Order Confirmation</h3>
                <p className="text-gray-600 text-sm">You'll receive a confirmation email shortly with your order details.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#4169E1] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Processing</h3>
                <p className="text-gray-600 text-sm">We'll process your order within 1-2 business days.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#4169E1] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Shipping</h3>
                <p className="text-gray-600 text-sm">You'll receive tracking information once your order ships.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#4169E1] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Delivery</h3>
                <p className="text-gray-600 text-sm">Your order will arrive within 5-7 business days.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp">
            <button
              onClick={() => navigate('/track-order')}
              className="flex-1 bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] text-white py-3 asym-btn font-semibold hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Package className="w-5 h-5" />
              Track Order
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex-1 border-2 border-[#4169E1] text-[#4169E1] py-3 asym-btn font-semibold hover:bg-[#4169E1] hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Continue Shopping
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600 animate-fadeInUp">
          <p>Need help? <a href="/contact" className="text-[#4169E1] hover:underline font-semibold">Contact us</a></p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
