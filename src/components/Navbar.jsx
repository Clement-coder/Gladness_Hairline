import { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes, FaHome, FaStore, FaInfoCircle, FaEnvelope, FaQuestionCircle, FaBox, FaChalkboardTeacher, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState(["Straight Hair", "Curly Wig", "Glueless Wig"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);

  const currencies = [
    { code: 'USD', flag: 'us', symbol: '$' },
    { code: 'EUR', flag: 'eu', symbol: '€' },
    { code: 'GBP', flag: 'gb', symbol: '£' },
    { code: 'NGN', flag: 'ng', symbol: '₦' },
    { code: 'CAD', flag: 'ca', symbol: 'C$' }
  ];

  const currentCurrency = currencies.find(c => c.code === currency);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
    const savedCurrency = localStorage.getItem('currency') || 'USD';
    setCurrency(savedCurrency);
  }, []);

  const handleCurrencyChange = (code) => {
    setCurrency(code);
    localStorage.setItem('currency', code);
    setShowCurrencyMenu(false);
  };

  const handleSearch = (query) => {
    if (query.trim() && !recentSearches.includes(query)) {
      setRecentSearches([query, ...recentSearches.slice(0, 4)]);
    }
  };

  return (
    <div className="bg-white shadow-md w-full relative sticky top-0 z-[100]">
      <div className="flex justify-between items-center px-4 md:px-6 h-16 text-xs md:text-sm w-full">
        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <a href="/" className="text-sm md:text-2xl font-bold tracking-wide text-[#4169E1] italic hover:opacity-80 transition-opacity logo">
          GLADNESS HAIRLINE
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <a className="flex items-center space-x-1" href="https://wa.me/message/R7Q6PQE3WCETP1">
            <FaWhatsapp className="text-green-500" />
            <span>WhatsApp</span>
          </a>
          <div className="relative">
            <button 
              onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
              className="flex items-center space-x-1 hover:text-[#4169E1] transition-colors"
            >
              <img src={`https://flagcdn.com/${currentCurrency.flag}.svg`} alt={currency} className="w-5 h-5" />
              <span>{currency}</span>
            </button>
            {showCurrencyMenu && (
              <div className="absolute top-full mt-2 right-0 bg-white shadow-lg asym-card p-2 min-w-[120px] z-[110] animate-fadeIn">
                {currencies.map((curr) => (
                  <button
                    key={curr.code}
                    onClick={() => handleCurrencyChange(curr.code)}
                    className={`w-full flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 transition-colors ${currency === curr.code ? 'bg-blue-50 text-[#4169E1]' : ''}`}
                  >
                    <img src={`https://flagcdn.com/${curr.flag}.svg`} alt={curr.code} className="w-5 h-5" />
                    <span className="font-semibold">{curr.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3">
          <a href="/" className="flex items-center space-x-1 hover:text-[#4169E1] transition-colors" title="Home">
            <FaHome className="text-lg" />
            <span className="text-sm">Home</span>
          </a>
          
          <a href="/shop" className="flex items-center space-x-1 hover:text-[#4169E1] transition-colors" title="Shop All Products">
            <FaStore className="text-lg" />
            <span className="text-sm font-semibold">Shop</span>
          </a>
          
          {/* Pages Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowPagesDropdown(true)}
            onMouseLeave={() => setShowPagesDropdown(false)}
          >
            <button className="flex items-center space-x-1 hover:text-[#4169E1] transition-colors">
              <FaInfoCircle className="text-lg" />
              <span className="text-sm">Pages</span>
              <FaChevronDown className={`text-xs transition-transform duration-300 ${showPagesDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showPagesDropdown && (
              <div className="absolute top-full left-0 pt-2 z-[110]">
                <div className="bg-white shadow-2xl asym-card p-3 min-w-[220px] animate-slideDown border-2 border-gray-100">
                  <a href="/about" className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors asym-card text-base">
                    <FaInfoCircle className="text-[#4169E1] text-lg" />
                    <span className="font-medium">About Us</span>
                  </a>
                  <a href="/contact" className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors asym-card text-base">
                    <FaEnvelope className="text-[#4169E1] text-lg" />
                    <span className="font-medium">Contact</span>
                  </a>
                  <a href="/faq" className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors asym-card text-base">
                    <FaQuestionCircle className="text-[#4169E1] text-lg" />
                    <span className="font-medium">FAQ</span>
                  </a>
                  <a href="/installation" className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors asym-card text-base">
                    <FaChalkboardTeacher className="text-[#4169E1] text-lg" />
                    <span className="font-medium">Installation</span>
                  </a>
                </div>
              </div>
            )}
          </div>
          
          {/* Account Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowAccountDropdown(true)}
            onMouseLeave={() => setShowAccountDropdown(false)}
          >
            <button className="flex items-center space-x-1 hover:text-[#4169E1] transition-colors">
              <FaUser className="text-lg" />
              <span className="text-sm">{isLoggedIn ? 'Account' : 'Sign In'}</span>
              <FaChevronDown className={`text-xs transition-transform duration-300 ${showAccountDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showAccountDropdown && (
              <div className="absolute top-full right-0 pt-2 z-[110]">
                <div className="bg-white shadow-2xl asym-card p-3 min-w-[200px] animate-slideDown border-2 border-gray-100">
                  {isLoggedIn ? (
                    <>
                      <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors asym-card text-base">
                        <FaUser className="text-[#4169E1] text-lg" />
                        <span className="font-medium">Dashboard</span>
                      </a>
                      <a href="/track-order" className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors asym-card text-base">
                        <FaBox className="text-[#4169E1] text-lg" />
                        <span className="font-medium">Track Order</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <a href="/login" className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors asym-card text-base">
                        <FaUser className="text-[#4169E1] text-lg" />
                        <span className="font-medium">Sign In</span>
                      </a>
                      <a href="/register" className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors asym-card text-base">
                        <FaUser className="text-[#4169E1] text-lg" />
                        <span className="font-medium">Register</span>
                      </a>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <a href="/cart" className="flex items-center space-x-1 hover:text-[#4169E1] transition-colors" title="Shopping Cart">
            <FaShoppingCart className="text-lg" />
            <span className="text-sm">Cart</span>
          </a>
          <button onClick={() => setSearchModalOpen(true)} className="flex items-center border border-gray-300 asym-input px-2 py-1 hover:border-[#4169E1]">
            <span className="text-sm text-gray-500">I'm shopping for</span>
            <FaSearch className="text-gray-500 ml-2" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-lg w-full animate-slideDown">
          <a href="/" className="flex items-center space-x-2 hover:text-[#4169E1] transition-colors w-3/4 justify-center">
            <FaHome className="text-lg" />
            <span className="font-semibold">Home</span>
          </a>
          
          <a href="/shop" className="flex items-center space-x-2 hover:text-[#4169E1] transition-colors w-3/4 justify-center">
            <FaStore className="text-lg" />
            <span className="font-semibold">Shop</span>
          </a>
          
          <a href="/installation" className="flex items-center space-x-2 hover:text-[#4169E1] transition-colors w-3/4 justify-center">
            <FaChalkboardTeacher className="text-lg" />
            <span className="font-semibold">Installation</span>
          </a>
          
          <a href="/about" className="flex items-center space-x-2 hover:text-[#4169E1] transition-colors w-3/4 justify-center">
            <FaInfoCircle className="text-lg" />
            <span className="font-semibold">About</span>
          </a>
          
          <a href="/contact" className="flex items-center space-x-2 hover:text-[#4169E1] transition-colors w-3/4 justify-center">
            <FaEnvelope className="text-lg" />
            <span className="font-semibold">Contact</span>
          </a>
          
          <a href="/faq" className="flex items-center space-x-2 hover:text-[#4169E1] transition-colors w-3/4 justify-center">
            <FaQuestionCircle className="text-lg" />
            <span className="font-semibold">FAQ</span>
          </a>
          
          <div className="border-t w-3/4 my-2"></div>
          
          <a href="https://wa.me/message/R7Q6PQE3WCETP1" className="flex items-center space-x-2 hover:text-green-600 transition-colors">
            <FaWhatsapp className="text-green-500 text-lg" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Log in/Dashboard */}
          {isLoggedIn ? (
            <a href="/dashboard" className="flex items-center space-x-2 hover:text-[#4169E1] transition-colors">
              <FaUser className="text-lg" />
              <span className="font-semibold">Dashboard</span>
            </a>
          ) : (
            <a href="/login" className="flex items-center space-x-2 hover:text-[#4169E1] transition-colors">
              <FaUser className="text-lg" />
              <span>Log in</span>
            </a>
          )}

          <a href="/track-order" className="flex items-center space-x-2 hover:text-[#4169E1] transition-colors">
            <FaBox className="text-lg" />
            <span>Track Order</span>
          </a>
          
          <a href="/cart" className="flex items-center space-x-2 hover:text-[#4169E1] transition-colors">
            <FaShoppingCart className="text-lg" />
            <span>Shopping Cart</span>
          </a>
          
          <button onClick={() => setSearchModalOpen(true)} className="flex items-center border border-gray-300 asym-input px-4 py-2 w-3/4 hover:border-[#4169E1] justify-center">
            <FaSearch className="text-gray-500 mr-2" />
            <span className="text-sm text-gray-500">Search products</span>
          </button>
        </div>
      )}

      {/* Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 animate-fadeIn" onClick={() => setSearchModalOpen(false)}>
          <div className="bg-white w-full max-w-2xl mx-4 asym-card shadow-2xl animate-slideDown" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b">
              <div className="flex items-center space-x-2">
                <FaSearch className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for wigs, hair extensions..."
                  className="flex-1 outline-none text-lg asym-input p-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                  autoFocus
                />
                <button onClick={() => setSearchModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <FaTimes size={20} />
                </button>
              </div>
            </div>

            <div className="p-4 max-h-96 overflow-y-auto">
              {searchQuery ? (
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">Search Results</h3>
                  <div className="space-y-2">
                    <a href="/hairs" className="p-3 hover:bg-gray-50 asym-card cursor-pointer flex items-center space-x-3 block" onClick={() => setSearchModalOpen(false)}>
                      <div className="w-12 h-12 bg-gray-200 asym-card"></div>
                      <div>
                        <p className="font-medium">Straight Hair Wig</p>
                        <p className="text-sm text-gray-500">$139.87</p>
                      </div>
                    </a>
                    <a href="/hairs" className="p-3 hover:bg-gray-50 asym-card cursor-pointer flex items-center space-x-3 block" onClick={() => setSearchModalOpen(false)}>
                      <div className="w-12 h-12 bg-gray-200 asym-card"></div>
                      <div>
                        <p className="font-medium">Glueless Wig</p>
                        <p className="text-sm text-gray-500">$108.00</p>
                      </div>
                    </a>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">Recent Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(search)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 asym-btn text-sm"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-gray-600 mb-3">Popular Searches</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Bye Bye Knots", "V Part Wigs", "Trendy Colors", "Fast Delivery"].map((item, index) => (
                        <button
                          key={index}
                          onClick={() => setSearchQuery(item)}
                          className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-[#4169E1] asym-btn text-sm"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
