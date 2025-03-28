
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
          <p className="text-xl max-w-2xl mx-auto">We'd love to hear from you! Reach out with your questions, feedback, or partnership inquiries.</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Form */}
            <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input id="subject" placeholder="Subject" required />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    className="w-full min-h-[150px] px-3 py-2 text-base border border-input rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                    placeholder="Your message" 
                    required 
                  />
                </div>
                <Button type="submit" className="bg-blinkit-green hover:bg-blinkit-green/90 w-full md:w-auto">
                  Submit Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="md:w-1/3">
              <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
                <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                      <MapPin className="text-blinkit-green" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Our Location</h3>
                      <p className="text-gray-600">
                        Blinkit HQ, Sector 62<br />
                        Noida, Uttar Pradesh 201301<br />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                      <Phone className="text-blinkit-green" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+91 1800 2020 20</p>
                      <p className="text-gray-600">Monday-Friday: 9am-5pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                      <Mail className="text-blinkit-green" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">care@blinkit.com</p>
                      <p className="text-gray-600">business@blinkit.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <Facebook className="text-blinkit-green" size={24} />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <Twitter className="text-blinkit-green" size={24} />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <Instagram className="text-blinkit-green" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 px-4 mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3039512882643!2d77.3652132!3d28.619379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f25ac323c5%3A0x8b1b0ec348c8b0f!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1654612345678!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Blinkit Office Location"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
