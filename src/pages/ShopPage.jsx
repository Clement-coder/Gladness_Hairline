import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlidersHorizontal, Grid, List, Heart, ShoppingCart } from 'lucide-react';

const ShopPage = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    texture: [],
    length: []
  });
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    { id: 1, name: "Brazilian Straight Hair", price: 89.99, originalPrice: 129.99, rating: 4.8, reviews: 234, image: "https://via.placeholder.com/300x300", texture: "Straight", inStock: true },
    { id: 2, name: "Curly Hair Bundle", price: 79.99, originalPrice: 119.99, rating: 4.6, reviews: 189, image: "https://via.placeholder.com/300x300", texture: "Curly", inStock: true },
    { id: 3, name: "Body Wave Bundle", price: 84.99, originalPrice: 124.99, rating: 4.7, reviews: 201, image: "https://via.placeholder.com/300x300", texture: "Wavy", inStock: true },
    { id: 4, name: "Deep Wave Bundle", price: 94.99, originalPrice: 139.99, rating: 4.9, reviews: 312, image: "https://via.placeholder.com/300x300", texture: "Wavy", inStock: false },
    { id: 5, name: "Kinky Straight Bundle", price: 89.99, originalPrice: 129.99, rating: 4.5, reviews: 156, image: "https://via.placeholder.com/300x300", texture: "Straight", inStock: true },
    { id: 6, name: "Water Wave Bundle", price: 99.99, originalPrice: 149.99, rating: 4.8, reviews: 278, image: "https://via.placeholder.com/300x300", texture: "Wavy", inStock: true },
    { id: 7, name: "Loose Wave Bundle", price: 87.99, originalPrice: 127.99, rating: 4.6, reviews: 198, image: "https://via.placeholder.com/300x300", texture: "Wavy", inStock: true },
    { id: 8, name: "Yaki Straight Bundle", price: 92.99, originalPrice: 132.99, rating: 4.7, reviews: 223, image: "https://via.placeholder.com/300x300", texture: "Straight", inStock: true }
  ];

  const textures = ['Straight', 'Curly', 'Wavy'];
  const lengths = ['10"', '12"', '14"', '16"', '18"', '20"', '22"', '24"'];

  const toggleFilter = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value]
    }));
  };

  const filteredProducts = products.filter(product => {
    if (filters.texture.length && !filters.texture.includes(product.texture)) return false;
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Shop All Hair</h1>
          <p className="text-gray-600">Discover our premium collection of hair bundles</p>
        </div>

        {/* Filters & Sort Bar */}
        <div className="bg-white p-4 asym-card shadow-md mb-6 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 asym-card hover:border-[#4169E1] transition-all"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>

          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 asym-card border-2 ${viewMode === 'grid' ? 'border-[#4169E1] bg-[#4169E1] text-white' : 'border-gray-300'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 asym-card border-2 ${viewMode === 'list' ? 'border-[#4169E1] bg-[#4169E1] text-white' : 'border-gray-300'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          <span className="text-gray-600">{sortedProducts.length} Products</span>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters */}
          {showFilters && (
            <div className="w-64 bg-white p-6 asym-card shadow-lg h-fit animate-fadeInLeft">
              <h3 className="text-xl font-bold mb-4">Filters</h3>

              {/* Texture Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Texture</h4>
                {textures.map(texture => (
                  <label key={texture} className="flex items-center gap-2 mb-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.texture.includes(texture)}
                      onChange={() => toggleFilter('texture', texture)}
                      className="w-4 h-4"
                    />
                    <span>{texture}</span>
                  </label>
                ))}
              </div>

              {/* Length Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Length</h4>
                <div className="grid grid-cols-2 gap-2">
                  {lengths.map(length => (
                    <button
                      key={length}
                      onClick={() => toggleFilter('length', length)}
                      className={`py-1 px-2 text-sm asym-card border-2 transition-all ${
                        filters.length.includes(length)
                          ? 'border-[#4169E1] bg-[#4169E1] text-white'
                          : 'border-gray-300'
                      }`}
                    >
                      {length}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Price Range</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [0, parseInt(e.target.value)] }))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${filters.priceRange[0]}</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setFilters({ priceRange: [0, 500], texture: [], length: [] })}
                className="w-full py-2 border-2 border-gray-300 asym-card hover:border-red-500 hover:text-red-500 transition-all"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Products Grid/List */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map(product => (
                  <div key={product.id} className="bg-white asym-card shadow-lg hover:shadow-xl transition-all group animate-fadeInUp">
                    <div className="relative overflow-hidden asym-card">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                        onClick={() => navigate(`/product/${product.id}`)}
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-bold">Out of Stock</span>
                        </div>
                      )}
                      <button className="absolute top-3 right-3 p-2 bg-white asym-card shadow-lg hover:bg-red-50 transition-all">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 cursor-pointer hover:text-[#4169E1]" onClick={() => navigate(`/product/${product.id}`)}>{product.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-orange-400' : 'text-gray-300'}`}>★</span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl font-bold text-[#4169E1]">${product.price}</span>
                        <span className="text-gray-400 line-through">${product.originalPrice}</span>
                      </div>
                      <button
                        onClick={() => navigate(`/product/${product.id}`)}
                        disabled={!product.inStock}
                        className="w-full bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] text-white py-2 asym-btn font-semibold flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts.map(product => (
                  <div key={product.id} className="bg-white p-4 asym-card shadow-lg hover:shadow-xl transition-all flex gap-4 animate-fadeInUp">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-32 object-cover asym-card cursor-pointer"
                      onClick={() => navigate(`/product/${product.id}`)}
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 cursor-pointer hover:text-[#4169E1]" onClick={() => navigate(`/product/${product.id}`)}>{product.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`${i < Math.floor(product.rating) ? 'text-orange-400' : 'text-gray-300'}`}>★</span>
                          ))}
                        </div>
                        <span className="text-gray-600">({product.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl font-bold text-[#4169E1]">${product.price}</span>
                        <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                      </div>
                      <button
                        onClick={() => navigate(`/product/${product.id}`)}
                        disabled={!product.inStock}
                        className="bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] text-white px-6 py-2 asym-btn font-semibold flex items-center gap-2 hover:shadow-lg disabled:opacity-50"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
