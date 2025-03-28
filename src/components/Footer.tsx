
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Smartphone, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto pt-10 pb-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">blink<span className="text-blinkit-yellow">it</span></h3>
            <p className="text-gray-600 mb-4">
              Instant grocery delivery service bringing everything from groceries to essentials at your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-blinkit-green">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blinkit-green">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blinkit-green">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blinkit-green">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blinkit-green">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blinkit-green">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-blinkit-green">FAQs</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-blinkit-green">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-blinkit-green">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green">Fruits & Vegetables</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green">Dairy & Breakfast</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green">Snacks & Beverages</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green">Instant Foods</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green">Personal Care</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green">Home Essentials</a></li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <p className="text-gray-600 mb-4">Get our mobile application for a better experience</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                <Download size={20} />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                <Smartphone size={20} />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Blinkit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
