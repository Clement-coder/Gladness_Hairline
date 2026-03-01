import { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState(["Straight Hair", "Curly Wig", "Glueless Wig"]);

  const handleSearch = (query) => {
    if (query.trim() && !recentSearches.includes(query)) {
      setRecentSearches([query, ...recentSearches.slice(0, 4)]);
    }
  };

  return (
    <div className="bg-white shadow-md w-full overflow-x-hidden relative sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-6 py-4 text-xs md:text-sm w-full">
        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <a href="/" className="text-sm md:text-2xl font-bold tracking-wide text-[#4169E1] italic hover:opacity-80 transition-opacity">
          GLADNESS HAIRLINE
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <a className="flex items-center space-x-1" href="https://wa.me/message/R7Q6PQE3WCETP1">
            <FaWhatsapp className="text-green-500" />
            <span>WhatsApp</span>
          </a>
          <div className="flex items-center space-x-1">
            <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-5 h-5" />
            <span>USD</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Log in Button */}
          <a href="/login" className="flex items-center space-x-2">
            <FaUser />
            <span className="hover:text-[#4169E1] cursor-pointer">Log in</span>
          </a>

          <div className="flex items-center space-x-2">
            <span>➕</span>
            <a href="/track-order" className="hover:text-[#4169E1]">Track order</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaShoppingCart />
            <a href="/cart" className="hover:text-[#4169E1]">Shopping cart</a>
          </div>
          <button onClick={() => setSearchModalOpen(true)} className="flex items-center border border-gray-300 asym-input px-2 py-1 hover:border-[#4169E1]">
            <span className="text-sm text-gray-500">I'm shopping for</span>
            <FaSearch className="text-gray-500 ml-2" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-lg w-full">
          <a href="https://wa.me/message/R7Q6PQE3WCETP1" className="flex items-center space-x-1">
            <FaWhatsapp className="text-green-500" />
            <span>WhatsApp</span>
          </a>
          <div className="flex items-center space-x-1">
            <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-5 h-5" />
            <span>USD</span>
          </div>

          {/* Mobile Log in Dropdown */}
          <a href="/login" className="flex items-center space-x-2">
            <FaUser />
            <span className="hover:text-[#4169E1]">Log in</span>
          </a>

          <div className="flex items-center space-x-2">
            <span>➕</span>
            <a href="/track-order" className="hover:text-[#4169E1]">Track order</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaShoppingCart />
            <a href="/cart" className="hover:text-[#4169E1]">Shopping cart</a>
          </div>
          <button onClick={() => setSearchModalOpen(true)} className="flex items-center border border-gray-300 asym-input px-2 py-2 w-3/4 hover:border-[#4169E1]">
            <span className="text-sm text-gray-500">I'm shopping for</span>
            <FaSearch className="text-gray-500 ml-auto" />
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
