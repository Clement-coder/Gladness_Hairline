import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import TrackOrderPage from './pages/TrackOrderPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import NotFoundPage from './pages/NotFoundPage';
import InstallationPage from './pages/InstallationPage';
import BookingForm from './components/Hair_installations page/BookingForm';
import ClassRegistrationForm from './components/Hair_installations page/ClassRegistrationForm';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/cart" element={<ShoppingCartPage/>} />
            <Route path="/track-order" element={<TrackOrderPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/faq" element={<FAQPage/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} />
            <Route path="/shipping-policy" element={<ShippingPolicyPage/>} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage/>} />
            <Route path="/installation" element={<InstallationPage />} />
            <Route path="/booking-form" element={<BookingForm/>} />
            <Route path="/class-form" element={<ClassRegistrationForm/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </div>
        <Footer/>
      </div>      
    </Router>
  )
}

export default App
