import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, Lock, CheckCircle, Mail, User, Phone, MapPin } from 'lucide-react';
import Visa from '../assets/visa.png';
import Mastercard from '../assets/mastercard.png';
import Paypal from '../assets/paypall.png';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    paymentMethod: 'card',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      // Process order
      localStorage.removeItem('cart');
      navigate('/order-confirmation');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                step >= s ? 'bg-[#4169E1] text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`w-20 h-1 ${step > s ? 'bg-[#4169E1]' : 'bg-gray-300'}`}></div>}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 asym-card shadow-lg space-y-6">
              {step === 1 && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <Truck className="w-6 h-6 text-[#4169E1]" />
                    <h2 className="text-2xl font-bold">Shipping Information</h2>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      <Mail className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        <User className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="John"
                        className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        <User className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Doe"
                        className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      <MapPin className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="123 Main Street"
                      className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        placeholder="New York"
                        className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        placeholder="NY"
                        className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">ZIP Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        placeholder="10001"
                        className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      <Phone className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+1 (234) 567-8900"
                      className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="w-6 h-6 text-[#4169E1]" />
                    <h2 className="text-2xl font-bold">Payment Method</h2>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-center gap-3 p-4 border-2 asym-card cursor-pointer hover:border-[#4169E1] transition-all">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="w-5 h-5"
                      />
                      <span className="font-semibold">Credit/Debit Card</span>
                      <div className="flex gap-2 ml-auto">
                        <img src={Visa} alt="Visa" className="h-6" />
                        <img src={Mastercard} alt="Mastercard" className="h-6" />
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 asym-card cursor-pointer hover:border-[#4169E1] transition-all">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleInputChange}
                        className="w-5 h-5"
                      />
                      <span className="font-semibold">PayPal</span>
                      <img src={Paypal} alt="PayPal" className="h-6 ml-auto" />
                    </label>
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <div className="space-y-4 mt-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          <CreditCard className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                          Card Number *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          <User className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-gray-700">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-gray-700">
                            <Lock className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                            placeholder="123"
                            className="w-full px-4 py-3 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {step === 3 && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-6 h-6 text-[#4169E1]" />
                    <h2 className="text-2xl font-bold">Review Order</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="border-2 border-gray-200 asym-card p-4">
                      <h3 className="font-bold mb-2">Shipping Address</h3>
                      <p>{formData.firstName} {formData.lastName}</p>
                      <p>{formData.address}</p>
                      <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                      <p>{formData.phone}</p>
                    </div>

                    <div className="border-2 border-gray-200 asym-card p-4">
                      <h3 className="font-bold mb-2">Payment Method</h3>
                      <p className="capitalize">{formData.paymentMethod === 'card' ? 'Credit/Debit Card' : 'PayPal'}</p>
                      {formData.paymentMethod === 'card' && (
                        <p>**** **** **** {formData.cardNumber.slice(-4)}</p>
                      )}
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-4 pt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 py-3 border-2 border-gray-300 asym-btn font-semibold hover:border-[#4169E1] transition-all"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] text-white py-3 asym-btn font-semibold hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5" />
                  {step === 3 ? 'Place Order' : 'Continue'}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 asym-card shadow-lg h-fit">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex gap-3 pb-4 border-b">
                  <img src={item.image || 'https://via.placeholder.com/80x80'} alt={item.name} className="w-16 h-16 object-cover asym-card" />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity || 1}</p>
                    <p className="text-[#4169E1] font-bold">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-semibold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t-2">
                <span>Total:</span>
                <span className="text-[#4169E1]">${total.toFixed(2)}</span>
              </div>
            </div>

            {shipping === 0 && (
              <div className="mt-4 p-3 bg-green-50 border-2 border-green-500 asym-card text-green-700 text-sm">
                🎉 You got FREE shipping!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
