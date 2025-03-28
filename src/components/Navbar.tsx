
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blinkit-green">blink<span className="text-blinkit-yellow">it</span></span>
          </Link>

          {/* Location Selector */}
          <div className="hidden md:flex items-center gap-2 ml-8">
            <MapPin size={18} className="text-blinkit-green" />
            <span className="text-sm">Deliver to: <span className="font-semibold">Sector 62, Noida</span></span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search for products..." 
                className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg" 
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-blinkit-green font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blinkit-green font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blinkit-green font-medium">Contact</Link>
            <Button variant="outline" className="border-blinkit-green text-blinkit-green hover:bg-blinkit-green/10">
              <ShoppingCart size={18} className="mr-2" />
              Cart
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              type="text" 
              placeholder="Search for products..." 
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg" 
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Home</Link>
              <Link to="/about" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">About</Link>
              <Link to="/contact" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Contact</Link>
              <div className="px-4 py-2 flex items-center gap-2">
                <MapPin size={18} className="text-blinkit-green" />
                <span className="text-sm">Sector 62, Noida</span>
              </div>
              <Button className="mx-4 bg-blinkit-green hover:bg-blinkit-green/90">
                <ShoppingCart size={18} className="mr-2" />
                View Cart
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
