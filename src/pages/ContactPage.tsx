
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { toast } from "sonner";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blinkit-green text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">We're here to help! Send us a message and we'll get back to you as soon as possible.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white shadow-sm rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Contact Info */}
              <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="text-blinkit-green h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Head Office</p>
                      <p className="text-gray-600">Building 2, Floor 4, Sector 62, Noida, Uttar Pradesh 201301</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="text-blinkit-green h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Customer Support</p>
                      <p className="text-gray-600">+91 6232 000000</p>
                      <p className="text-gray-600">Available 7 AM - 12 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Mail className="text-blinkit-green h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-gray-600">care@blinkit.com</p>
                      <p className="text-gray-600">business@blinkit.com</p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-6 mt-6 border-t border-gray-200">
                    <p className="font-semibold mb-4">Follow Us</p>
                    <div className="flex gap-4">
                      <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
                        <Facebook className="text-blinkit-green h-5 w-5" />
                      </a>
                      <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
                        <Twitter className="text-blinkit-green h-5 w-5" />
                      </a>
                      <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
                        <Instagram className="text-blinkit-green h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>

                  <div>
                    <Button type="submit" className="bg-blinkit-green hover:bg-blinkit-green/90">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white shadow-sm rounded-lg p-4 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.111090444144!2d77.37386107537625!3d28.626288175642396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456d1e20fb%3A0x9581f430323ebfea!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1695212435275!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              loading="lazy" 
              title="Blinkit office location"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
