import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Package, Heart, MapPin, Settings, LogOut, ShoppingBag, Mail, Phone } from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const [profileData, setProfileData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    phone: user.phone || ''
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim().length < 2 ? 'Must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
      case 'phone':
        return !/^\+?[\d\s-()]{10,}$/.test(value) ? 'Invalid phone number' : '';
      default:
        return '';
    }
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(profileData).forEach(key => {
      const error = validateField(key, profileData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    localStorage.setItem('user', JSON.stringify(profileData));
    alert('Profile updated successfully!');
  };

  const orders = [
    { id: '#ORD-2024-001', date: '2024-02-28', status: 'Delivered', total: 189.99, items: 2 },
    { id: '#ORD-2024-002', date: '2024-02-25', status: 'In Transit', total: 249.99, items: 3 },
    { id: '#ORD-2024-003', date: '2024-02-20', status: 'Processing', total: 89.99, items: 1 }
  ];

  const wishlist = [
    { id: 1, name: "Brazilian Straight Hair", price: 89.99, image: "https://via.placeholder.com/100x100" },
    { id: 2, name: "Curly Hair Bundle", price: 79.99, image: "https://via.placeholder.com/100x100" },
    { id: 3, name: "Body Wave Bundle", price: 84.99, image: "https://via.placeholder.com/100x100" }
  ];

  const addresses = [
    { id: 1, type: 'Home', name: 'John Doe', address: '123 Main St, New York, NY 10001', phone: '+1 234 567 8900', isDefault: true },
    { id: 2, type: 'Work', name: 'John Doe', address: '456 Office Blvd, New York, NY 10002', phone: '+1 234 567 8900', isDefault: false }
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'text-green-600 bg-green-50';
      case 'In Transit': return 'text-blue-600 bg-blue-50';
      case 'Processing': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="bg-white p-6 asym-card shadow-lg h-fit">
            <div className="text-center mb-6 pb-6 border-b">
              <div className="w-20 h-20 bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                {user.firstName?.[0]}{user.lastName?.[0]}
              </div>
              <h3 className="font-bold text-lg">{user.firstName} {user.lastName}</h3>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-3 px-4 py-3 asym-card transition-all ${
                  activeTab === 'orders' ? 'bg-[#4169E1] text-white' : 'hover:bg-gray-100'
                }`}
              >
                <Package className="w-5 h-5" />
                <span>My Orders</span>
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`w-full flex items-center gap-3 px-4 py-3 asym-card transition-all ${
                  activeTab === 'wishlist' ? 'bg-[#4169E1] text-white' : 'hover:bg-gray-100'
                }`}
              >
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
              </button>
              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full flex items-center gap-3 px-4 py-3 asym-card transition-all ${
                  activeTab === 'addresses' ? 'bg-[#4169E1] text-white' : 'hover:bg-gray-100'
                }`}
              >
                <MapPin className="w-5 h-5" />
                <span>Addresses</span>
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-3 px-4 py-3 asym-card transition-all ${
                  activeTab === 'profile' ? 'bg-[#4169E1] text-white' : 'hover:bg-gray-100'
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 asym-card hover:bg-red-50 hover:text-red-600 transition-all"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === 'orders' && (
              <div className="bg-white p-6 asym-card shadow-lg animate-fadeIn">
                <h2 className="text-2xl font-bold mb-6">My Orders</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border-2 border-gray-200 asym-card p-4 hover:border-[#4169E1] transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <p className="font-bold text-lg">{order.id}</p>
                          <p className="text-sm text-gray-600">Placed on {order.date}</p>
                          <p className="text-sm text-gray-600">{order.items} items</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-[#4169E1]">${order.total}</p>
                          <span className={`inline-block px-3 py-1 asym-btn text-sm font-semibold ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <button
                          onClick={() => navigate(`/track-order?id=${order.id}`)}
                          className="px-6 py-2 border-2 border-[#4169E1] text-[#4169E1] asym-btn font-semibold hover:bg-[#4169E1] hover:text-white transition-all"
                        >
                          Track Order
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="bg-white p-6 asym-card shadow-lg animate-fadeIn">
                <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {wishlist.map((item) => (
                    <div key={item.id} className="border-2 border-gray-200 asym-card p-4 hover:border-[#4169E1] transition-all">
                      <div className="flex gap-4">
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover asym-card" />
                        <div className="flex-1">
                          <h3 className="font-bold mb-2">{item.name}</h3>
                          <p className="text-[#4169E1] font-bold text-xl mb-3">${item.price}</p>
                          <button
                            onClick={() => navigate(`/product/${item.id}`)}
                            className="w-full bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] text-white py-2 asym-btn text-sm font-semibold hover:shadow-lg flex items-center justify-center gap-2"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="bg-white p-6 asym-card shadow-lg animate-fadeIn">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Saved Addresses</h2>
                  <button className="px-4 py-2 bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] text-white asym-btn font-semibold hover:shadow-lg">
                    Add New Address
                  </button>
                </div>
                <div className="space-y-4">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="border-2 border-gray-200 asym-card p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="px-3 py-1 bg-gray-100 asym-btn text-sm font-semibold">{addr.type}</span>
                        {addr.isDefault && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 asym-btn text-sm font-semibold">Default</span>
                        )}
                      </div>
                      <p className="font-bold mb-1">{addr.name}</p>
                      <p className="text-gray-600 mb-1">{addr.address}</p>
                      <p className="text-gray-600 mb-3">{addr.phone}</p>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 border-2 border-[#4169E1] text-[#4169E1] asym-btn text-sm font-semibold hover:bg-[#4169E1] hover:text-white transition-all">
                          Edit
                        </button>
                        <button className="px-4 py-2 border-2 border-red-500 text-red-500 asym-btn text-sm font-semibold hover:bg-red-500 hover:text-white transition-all">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white p-6 asym-card shadow-lg animate-fadeIn">
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                <form onSubmit={handleProfileSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        <User className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleProfileChange}
                        placeholder="John"
                        className={`w-full px-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                          errors.firstName ? 'input-error border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.firstName && (
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
                      <input
                        type="text"
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleProfileChange}
                        placeholder="Doe"
                        className={`w-full px-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                          errors.lastName ? 'input-error border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <span>⚠</span> {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      <Mail className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                        errors.email ? 'input-error border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <span>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      <Phone className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      placeholder="+1 (234) 567-8900"
                      className={`w-full px-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                        errors.phone ? 'input-error border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <span>⚠</span> {errors.phone}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-[#4169E1] text-white px-8 py-3 asym-btn font-semibold hover:shadow-lg"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
