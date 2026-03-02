import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PayPalLogo from "../assets/paypall.png";
import VisaLogo from "../assets/visa.png";
import MasterCardLogo from "../assets/mastercard.png";
import {
    faFacebookF,
    faPinterest,
    faInstagram,
    faYoutube,
    faTwitter,
    faTiktok,
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 md:py-8 px-4">
      {/* Subscription Section */}
      <div className="text-center mb-6">
        <h2 className="text-sm md:text-lg font-semibold mb-2">
          To Subscribe, You Will Receive The Latest Discounts.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-4 py-3 asym-input text-gray-700 text-sm border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-500"
          />
          <button className="asym-btn bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 hover:shadow-blue-500/40 font-semibold transition-all duration-500">
            Subscribe
          </button>
        </div>
        <p className="text-[10px] md:text-xs text-gray-400 mt-2 px-2">
          By Clicking The Button, You Agree To Gladness Hairline{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          And{" "}
          <a href="#" className="underline">
            Terms Of Use
          </a>
          . <br /> You May Unsubscribe At Any Time. Reply HELP For Help Or STOP To Opt
          Out.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-3 md:space-x-4 mb-6">
  <a href="https://www.facebook.com/share/19pKHBQXhp/?mibextid=wwXIfr" className="text-white">
    <FontAwesomeIcon icon={faFacebookF} className="text-xl md:text-2xl" />
  </a>
  <a href="#" className="text-white">
    <FontAwesomeIcon icon={faPinterest} className="text-xl md:text-2xl" />
  </a>
  <a href="#" className="text-white">
    <FontAwesomeIcon icon={faInstagram} className="text-xl md:text-2xl" />
  </a>
  <a href="#" className="text-white">
    <FontAwesomeIcon icon={faYoutube} className="text-xl md:text-2xl" />
  </a>
  <a href="#" className="text-white">
    <FontAwesomeIcon icon={faTwitter} className="text-xl md:text-2xl" />
  </a>
  <a href="#" className="text-white">
    <FontAwesomeIcon icon={faTiktok} className="text-xl md:text-2xl" />
  </a>
</div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-xs md:text-sm mb-6">
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <ul className="space-y-1">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Shop</h3>
          <ul className="space-y-1">
            <li>
              <a href="/shop" className="hover:underline">
                All Products
              </a>
            </li>
            <li>
              <a href="/installation" className="hover:underline">
                Installation Services
              </a>
            </li>
            <li>
              <a href="/track-order" className="hover:underline">
                Track Order
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Customer Service</h3>
          <ul className="space-y-1">
            <li>
              <a href="/shipping-policy" className="hover:underline">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">My Account</h3>
          <ul className="space-y-1">
            <li>
              <a href="/login" className="hover:underline">
                Sign In
              </a>
            </li>
            <li>
              <a href="/register" className="hover:underline">
                Register
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:underline">
                My Orders
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Payment Methods</h3>
          <div className="flex gap-2 flex-wrap">
            <img src={VisaLogo} alt="Visa" className="h-6 md:h-8" />
            <img src={MasterCardLogo} alt="MasterCard" className="h-6 md:h-8" />
            <img src={PayPalLogo} alt="PayPal" className="h-6 md:h-8" />
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-base md:text-lg font-bold mb-4">Payment Methods</h3>
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
          <img
            src={PayPalLogo}
            alt="PayPal"
            className="h-5 md:h-6 object-contain"
          />
          <img
            src={VisaLogo}
            alt="Visa"
            className="h-5 md:h-6 object-contain"
          />
          <img
            src={MasterCardLogo}
            alt="MasterCard"
            className="h-5 md:h-6 object-contain"
          />
          <div className="text-xs md:text-sm">
            <p>Account no.: 7042421322</p>
            <p>Name: Gladness Raymond</p>
            <p>Opay</p>
          </div>
          <div className="text-xs md:text-sm">
            <p>Account no.: 7042421322</p>
            <p>Name: Gladness Raymond</p>
            <p>GTbank</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 text-xs md:text-sm text-gray-400">
        ©2025 Gladness Hairline. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
