import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, User } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
      case 'subject':
        return value.trim().length < 3 ? 'Subject must be at least 3 characters' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero */}
      <div className="bg-[#4169E1] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We'd love to hear from you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 asym-card shadow-lg animate-fadeInLeft">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  <User className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                    errors.name ? 'input-error border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.name}
                  </p>
                )}
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
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                    errors.email ? 'input-error border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                    errors.subject ? 'input-error border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.subject}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  <Send className="inline w-4 h-4 mr-1 text-[#4169E1]" />
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full px-4 py-3 border-2 asym-input focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all duration-500 ${
                    errors.message ? 'input-error border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us more..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-[#4169E1] text-white py-3 asym-btn font-semibold hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fadeInRight">
            <div className="bg-white p-6 asym-card shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4169E1] asym-card flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (234) 567-8900</p>
                    <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4169E1] asym-card flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">support@gladnesshairline.com</p>
                    <p className="text-gray-600">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 asym-card flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">WhatsApp</h3>
                    <a href="https://wa.me/message/R7Q6PQE3WCETP1" className="text-[#4169E1] hover:underline">
                      Chat with us instantly
                    </a>
                    <p className="text-gray-600">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4169E1] asym-card flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-600">123 Hair Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4169E1] asym-card flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 asym-card shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-[#4169E1] asym-card flex items-center justify-center text-white hover:shadow-lg transition-all">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#4169E1] asym-card flex items-center justify-center text-white hover:shadow-lg transition-all">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#4169E1] asym-card flex items-center justify-center text-white hover:shadow-lg transition-all">
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
