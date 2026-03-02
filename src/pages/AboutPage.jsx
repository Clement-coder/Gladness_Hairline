import { Award, Users, Heart, TrendingUp } from 'lucide-react';
import CEO from '../assets/CEO.jpeg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInUp">About Gladness Hairline</h1>
          <p className="text-xl md:text-2xl animate-fadeInUp">Queen of Affordable Hairs</p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded with a passion for providing premium quality hair at affordable prices, Gladness Hairline has become a trusted name in the hair industry. We believe that everyone deserves to look and feel their best without breaking the bank.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our journey began with a simple mission: to source the finest virgin human hair and make it accessible to women everywhere. Today, we serve thousands of satisfied customers worldwide, delivering confidence one bundle at a time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every product we offer is carefully selected and quality-tested to ensure you receive nothing but the best. From Brazilian straight to deep wave textures, we have something for every style and preference.
            </p>
          </div>
          <div className="animate-fadeInRight">
            <img src={CEO} alt="CEO" className="w-full h-[500px] object-cover asym-card shadow-2xl" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, value: '50K+', label: 'Happy Customers' },
            { icon: Award, value: '100%', label: 'Quality Guarantee' },
            { icon: TrendingUp, value: '5 Years', label: 'In Business' },
            { icon: Heart, value: '4.9/5', label: 'Customer Rating' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 asym-card shadow-lg text-center hover:shadow-xl transition-all animate-fadeInUp">
              <stat.icon className="w-12 h-12 mx-auto mb-3 text-[#4169E1]" />
              <p className="text-3xl font-bold text-[#4169E1] mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Our Values */}
        <div className="bg-white p-8 md:p-12 asym-card shadow-lg">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                Q
              </div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-700">We never compromise on quality. Every product is 100% virgin human hair, carefully sourced and tested.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                A
              </div>
              <h3 className="text-xl font-bold mb-3">Affordability</h3>
              <p className="text-gray-700">Premium quality shouldn't mean premium prices. We make luxury hair accessible to everyone.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                C
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Care</h3>
              <p className="text-gray-700">Your satisfaction is our priority. We're here to support you every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
