
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Truck, 
  Clock, 
  Shield, 
  ShoppingCart, 
  Download, 
  Smartphone 
} from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const Index = () => {
  // Sample categories data
  const categories = [
    { name: "Fruits & Vegetables", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=280,w=280,metadata=none/assets/category-images/fruits_vegetables.png", link: "/category/fruits-vegetables" },
    { name: "Dairy & Breakfast", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=280,w=280,metadata=none/assets/category-images/dairy_breakfast.png", link: "/category/dairy-breakfast" },
    { name: "Snacks & Beverages", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=280,w=280,metadata=none/assets/category-images/snacks_beverages.png", link: "/category/snacks-beverages" },
    { name: "Instant Foods", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=280,w=280,metadata=none/assets/category-images/instant_foods.png", link: "/category/instant-foods" },
    { name: "Home Essentials", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=280,w=280,metadata=none/assets/category-images/home_essentials.png", link: "/category/home-essentials" },
    { name: "Personal Care", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=280,w=280,metadata=none/assets/category-images/personal_care.png", link: "/category/personal-care" }
  ];

  // Sample products data
  const products = [
    { id: "1", name: "Fresh Spinach", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb", price: 45, originalPrice: 60, weight: "250g" },
    { id: "2", name: "Amul Butter", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d", price: 125, weight: "500g" },
    { id: "3", name: "Maggi Noodles", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841", price: 42, originalPrice: 48, weight: "Pack of 4" },
    { id: "4", name: "Tata Salt", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655", price: 24, weight: "1kg" },
  ];

  // FAQs data
  const faqs = [
    { 
      question: "How does Blinkit ensure quick delivery?", 
      answer: "We have a network of dark stores located strategically to ensure we can deliver within minutes. Our algorithm optimizes rider routes for the quickest delivery possible." 
    },
    { 
      question: "What are the delivery charges?", 
      answer: "Delivery charges vary based on order value and distance. Orders above ₹199 typically qualify for free delivery. You can see the exact delivery charges at checkout." 
    },
    { 
      question: "What if an item is out of stock?", 
      answer: "If an item is unavailable, we'll notify you and refund for that particular item. We do not substitute items without your permission." 
    },
    { 
      question: "How do I track my order?", 
      answer: "Once your order is placed, you can track its real-time status on our app or website. You'll receive notifications about order confirmation, preparation, and when it's out for delivery." 
    },
    { 
      question: "What is the return policy?", 
      answer: "If you receive damaged or incorrect items, you can report it within 24 hours and we'll arrange a refund. For perishable items, please report within 2 hours of delivery." 
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-500 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Groceries delivered in <span className="text-yellow-300">10 minutes</span></h1>
              <p className="text-lg md:text-xl mb-6">Get your daily essentials, fruits, vegetables, and more delivered at lightning speed.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-300 hover:bg-yellow-400 text-black">
                  Download App
                  <Download size={20} />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Explore Products
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Blinkit Delivery"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Choose Blinkit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm border border-gray-100 bg-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Clock size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">10 Minute Delivery</h3>
              <p className="text-gray-600">Get your groceries and essentials delivered in just 10 minutes.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm border border-gray-100 bg-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Truck size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Delivery</h3>
              <p className="text-gray-600">Free delivery on orders above ₹199. No minimum order value.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm border border-gray-100 bg-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Quality</h3>
              <p className="text-gray-600">All products are carefully selected to ensure freshness and quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-green-500 hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Download the Blinkit app</h2>
              <p className="text-gray-600 mb-8">Get groceries delivered in minutes. Fresh fruits, vegetables, dairy, and more at the best prices.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                  <Download size={24} />
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-base font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                  <Smartphone size={24} />
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="text-base font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Blinkit App" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Index;
