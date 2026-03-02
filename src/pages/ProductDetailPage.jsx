import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Truck, Shield, RotateCcw, Share2, Minus, Plus } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedLength, setSelectedLength] = useState('14"');
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - replace with API call
  const product = {
    id: id,
    name: "Brazilian Straight Hair Bundle",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 234,
    inStock: true,
    images: [
      "https://via.placeholder.com/600x600?text=Hair+1",
      "https://via.placeholder.com/600x600?text=Hair+2",
      "https://via.placeholder.com/600x600?text=Hair+3",
      "https://via.placeholder.com/600x600?text=Hair+4"
    ],
    description: "Premium quality Brazilian straight hair bundle. 100% virgin human hair with natural shine and softness. Perfect for any occasion.",
    features: [
      "100% Virgin Human Hair",
      "Can be dyed and styled",
      "Tangle-free and minimal shedding",
      "Natural shine and softness",
      "Double weft for fullness"
    ],
    lengths: ['10"', '12"', '14"', '16"', '18"', '20"', '22"', '24"'],
    specifications: {
      "Hair Type": "Brazilian Virgin Hair",
      "Texture": "Straight",
      "Material": "100% Human Hair",
      "Can Be Permed": "Yes",
      "Color": "Natural Black"
    }
  };

  const relatedProducts = [
    { id: 1, name: "Curly Hair Bundle", price: 79.99, image: "https://via.placeholder.com/200x200" },
    { id: 2, name: "Body Wave Bundle", price: 84.99, image: "https://via.placeholder.com/200x200" },
    { id: 3, name: "Deep Wave Bundle", price: 94.99, image: "https://via.placeholder.com/200x200" },
    { id: 4, name: "Kinky Straight Bundle", price: 89.99, image: "https://via.placeholder.com/200x200" }
  ];

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
      selectedLength
    };
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    existingCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm mb-6 text-gray-600">
          <a href="/" className="hover:text-[#4169E1]">Home</a> / 
          <a href="/shop" className="hover:text-[#4169E1]"> Shop</a> / 
          <span className="text-gray-900"> {product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 bg-white p-6 md:p-8 asym-card shadow-lg">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden asym-card bg-gray-100">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">Out of Stock</span>
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`asym-card overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-[#4169E1]' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-gray-600 ml-2">({product.reviews} reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-[#4169E1]">${product.price}</span>
                <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
                <span className="bg-red-500 text-white px-3 py-1 asym-btn text-sm font-bold">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              </div>
            </div>

            {/* Length Selection */}
            <div>
              <label className="block text-sm font-semibold mb-2">Select Length:</label>
              <div className="grid grid-cols-4 gap-2">
                {product.lengths.map((length) => (
                  <button
                    key={length}
                    onClick={() => setSelectedLength(length)}
                    className={`py-2 px-4 asym-card border-2 transition-all ${
                      selectedLength === length
                        ? 'border-[#4169E1] bg-[#4169E1] text-white'
                        : 'border-gray-300 hover:border-[#4169E1]'
                    }`}
                  >
                    {length}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold mb-2">Quantity:</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 asym-card">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-100">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-100">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-gray-600">
                  {product.inStock ? (
                    <span className="text-green-600 font-semibold">In Stock</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Out of Stock</span>
                  )}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] text-white py-4 asym-btn font-semibold flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 border-2 asym-card transition-all ${
                  isWishlisted ? 'bg-red-50 border-red-500 text-red-500' : 'border-gray-300 hover:border-red-500'
                }`}
              >
                <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-red-500' : ''}`} />
              </button>
              <button className="p-4 border-2 border-gray-300 asym-card hover:border-[#4169E1]">
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            {/* Features */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Truck className="w-5 h-5 text-[#4169E1]" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Shield className="w-5 h-5 text-[#4169E1]" />
                <span>100% Secure Payment</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <RotateCcw className="w-5 h-5 text-[#4169E1]" />
                <span>30-Day Return Policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-8 bg-white p-6 md:p-8 asym-card shadow-lg">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-[#4169E1] rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Specifications</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((item) => (
              <div key={item.id} className="bg-white p-4 asym-card shadow-lg hover:shadow-xl transition-all cursor-pointer" onClick={() => navigate(`/product/${item.id}`)}>
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover asym-card mb-3" />
                <h3 className="font-semibold text-sm mb-2">{item.name}</h3>
                <p className="text-[#4169E1] font-bold">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
