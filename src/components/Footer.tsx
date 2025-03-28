
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-blinkit-green">blink<span className="text-blinkit-yellow">it</span></span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-xs">
              Get your groceries and daily essentials delivered to your doorstep in minutes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                <Facebook size={20} className="text-gray-700" />
              </a>
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                <Twitter size={20} className="text-gray-700" />
              </a>
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                <Instagram size={20} className="text-gray-700" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green">Fruits & Vegetables</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green">Dairy & Breakfast</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green">Snacks & Beverages</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green">Instant Foods</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green">Personal Care</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-blinkit-green">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blinkit-green">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blinkit-green">Contact Us</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">Blinkit HQ, Sector 62, Noida, UP, India</li>
              <li><a href="tel:+911800202020" className="text-gray-600 hover:text-blinkit-green">+91 1800 2020 20</a></li>
              <li><a href="mailto:care@blinkit.com" className="text-gray-600 hover:text-blinkit-green">care@blinkit.com</a></li>
            </ul>
          </div>
        </div>

        {/* App Download */}
        <div className="border-t border-gray-200 pt-8 pb-4 mt-4 text-center">
          <h3 className="font-semibold mb-4">Download the App</h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              <Smartphone size={20} />
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              <Smartphone size={20} />
              <div>
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 mt-6 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Blinkit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
