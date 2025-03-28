
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, MapPin, Menu, X, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="text-blinkit-green font-bold text-3xl">
              blink<span className="text-blinkit-yellow">it</span>
            </div>
          </NavLink>

          {/* Location selector - visible on md and above */}
          <div className="hidden md:flex items-center gap-1 text-sm border-b border-gray-300 py-1 px-2">
            <MapPin size={16} className="text-blinkit-green" />
            <span className="font-medium">Delivery to:</span>
            <span className="text-gray-600 truncate max-w-[200px]">New Delhi, India</span>
          </div>

          {/* Search - visible on md and above */}
          <div className="hidden md:flex flex-1 max-w-md mx-5">
            <div className="relative w-full">
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search for products" 
                className="pl-10 bg-gray-100 border-none focus-visible:ring-blinkit-green"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            <NavLink to="/login" className="text-sm flex items-center gap-1 hover:text-blinkit-green transition-colors">
              <User size={18} />
              <span>Login</span>
            </NavLink>
            <Button className="bg-blinkit-green hover:bg-blinkit-green/90 text-white flex items-center gap-2">
              <ShoppingCart size={18} />
              <span>My Cart</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 animate-slide-in">
          <div className="flex items-center gap-1 text-sm border-b border-gray-300 py-2 mb-4">
            <MapPin size={16} className="text-blinkit-green" />
            <span className="font-medium">Delivery to:</span>
            <span className="text-gray-600 truncate max-w-[200px]">New Delhi, India</span>
          </div>

          <div className="relative w-full mb-4">
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search for products" 
              className="pl-10 bg-gray-100 border-none focus-visible:ring-blinkit-green"
            />
          </div>

          <nav className="flex flex-col gap-4">
            <NavLink to="/" className="hover:text-blinkit-green py-2 transition-colors">Home</NavLink>
            <NavLink to="/about" className="hover:text-blinkit-green py-2 transition-colors">About Us</NavLink>
            <NavLink to="/contact" className="hover:text-blinkit-green py-2 transition-colors">Contact Us</NavLink>
            <NavLink to="/login" className="hover:text-blinkit-green py-2 transition-colors">Login</NavLink>
            <Button className="bg-blinkit-green hover:bg-blinkit-green/90 text-white flex items-center gap-2 w-full justify-center">
              <ShoppingCart size={18} />
              <span>My Cart</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
