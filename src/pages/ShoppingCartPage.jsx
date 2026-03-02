import { useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag, Tag, CreditCard, Truck, Shield } from "lucide-react";
import Glad from "../assets/Glad.jpeg";

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Straight Hair Wig - 24 inches", price: 139.87, quantity: 1, image: Glad, inStock: true },
    { id: 2, name: "Glueless Wig - Natural Black", price: 108.00, quantity: 2, image: Glad, inStock: true },
    { id: 3, name: "V Part Wig - Curly", price: 98.75, quantity: 1, image: Glad, inStock: true },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "GLAD10") {
      setDiscount(10);
      alert("Coupon applied! 10% discount");
    } else {
      alert("Invalid coupon code");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * discount) / 100;
  const shipping = subtotal > 200 ? 0 : 15.00;
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-2">Shopping Cart</h1>
          <p className="text-gray-600">Review your items and proceed to checkout</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <div className="bg-white/70 backdrop-blur-xl asym-card shadow-lg p-8 md:p-12 text-center border-2 border-white/50">
                <ShoppingBag className="mx-auto text-gray-400 mb-4" size={64} />
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
                <p className="text-sm md:text-base text-gray-600 mb-6">Add some beautiful wigs to get started!</p>
                <a href="/" className="asym-btn bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 md:px-8 py-2 md:py-3 font-semibold hover:shadow-blue-500/40 inline-block text-sm md:text-base">
                  Continue Shopping
                </a>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white/70 backdrop-blur-xl asym-card shadow-lg hover:shadow-2xl p-4 md:p-6 border-2 border-white/50">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <img src={item.image} alt={item.name} className="w-full sm:w-24 md:w-28 h-24 md:h-28 object-cover asym-card" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-800">{item.name}</h3>
                            {item.inStock ? (
                              <p className="text-xs md:text-sm text-green-600 font-semibold">✓ In Stock</p>
                            ) : (
                              <p className="text-xs md:text-sm text-red-600 font-semibold">Out of Stock</p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 p-2 asym-btn hover:bg-red-50"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        
                        <p className="text-xl md:text-2xl text-blue-600 font-bold mb-3">${item.price.toFixed(2)}</p>
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs md:text-sm text-gray-600 font-medium">Quantity:</span>
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 md:w-10 md:h-10 asym-btn bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-10 md:w-12 text-center font-bold text-base md:text-lg">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 md:w-10 md:h-10 asym-btn bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <div className="text-left sm:text-right">
                            <p className="text-xs md:text-sm text-gray-600">Subtotal</p>
                            <p className="text-lg md:text-xl font-bold text-gray-800">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Coupon Section */}
                <div className="bg-white/70 backdrop-blur-xl asym-card shadow-lg p-4 md:p-6 border-2 border-white/50">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                    <Tag size={18} className="text-blue-600" />
                    Have a Coupon Code?
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-1 px-3 md:px-4 py-2 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                    <button
                      onClick={applyCoupon}
                      className="asym-btn bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 md:px-6 py-2 font-semibold hover:shadow-green-500/40 text-sm md:text-base"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">💡 Try code "GLAD10" for 10% off</p>
                </div>
              </>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-xl asym-card shadow-lg hover:shadow-2xl p-4 md:p-6 sticky top-20 border-2 border-white/50">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Order Summary</h2>
              
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <div className="flex justify-between text-sm md:text-base text-gray-700">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-sm md:text-base text-green-600">
                    <span>Discount ({discount}%)</span>
                    <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm md:text-base text-gray-700">
                  <span className="flex items-center gap-2">
                    <Truck size={16} className="md:w-5 md:h-5" />
                    Shipping
                  </span>
                  <span className="font-semibold">
                    {shipping === 0 ? <span className="text-green-600">FREE</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                {subtotal < 200 && shipping > 0 && (
                  <p className="text-xs text-gray-600 bg-blue-50 p-2 asym-card">
                    💡 Add ${(200 - subtotal).toFixed(2)} more for FREE shipping!
                  </p>
                )}
                
                <div className="border-t-2 pt-3 md:pt-4 flex justify-between text-lg md:text-xl">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <a
                href="/checkout"
                className={`block w-full asym-btn bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white py-3 md:py-4 font-bold text-base md:text-lg hover:shadow-orange-500/40 text-center mb-3 md:mb-4 ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
              >
                <CreditCard className="inline mr-2" size={18} />
                Proceed to Checkout
              </a>

              <a href="/" className="block text-center text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base">
                ← Continue Shopping
              </a>

              {/* Trust Badges */}
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t space-y-2 md:space-y-3">
                <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600">
                  <Shield className="text-green-600" size={18} />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600">
                  <Truck className="text-blue-600" size={18} />
                  <span>Fast & Free Shipping over $200</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600">
                  <Tag className="text-purple-600" size={18} />
                  <span>Best Price Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
