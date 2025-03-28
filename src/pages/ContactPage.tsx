
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
      <section className="bg-green-500 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">Have questions or feedback? We'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea id="message" placeholder="How can we help you?" rows={5} required />
                </div>
                <Button type="submit" className="bg-green-500 hover:bg-green-600 w-full">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="md:w-1/2 mt-12 md:mt-0">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Office</h3>
                    <p className="text-gray-600 mt-1">Blinkit HQ, Sector 62, Noida, UP, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600 mt-1">+91 1800 2020 20</p>
                    <p className="text-gray-600">Monday to Sunday, 8am to 10pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600 mt-1">care@blinkit.com</p>
                    <p className="text-gray-600">We'll respond as soon as possible</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors">
                      <Facebook size={20} className="text-green-500" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors">
                      <Twitter size={20} className="text-green-500" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors">
                      <Instagram size={20} className="text-green-500" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
