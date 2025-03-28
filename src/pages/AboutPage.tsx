
import React from 'react';
import { Award, Users, TrendingUp, Heart } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: 'Cities', value: '25+' },
    { label: 'Dark Stores', value: '400+' },
    { label: 'Products', value: '5000+' },
    { label: 'Daily Orders', value: '1M+' },
  ];

  const values = [
    { 
      icon: <TrendingUp className="text-blinkit-green" size={32} />,
      title: 'Speed', 
      description: 'We believe in delivering products at lightning fast speed, ensuring our customers never have to wait.' 
    },
    { 
      icon: <Award className="text-blinkit-green" size={32} />,
      title: 'Quality', 
      description: 'We never compromise on quality. All our products undergo strict quality checks before reaching customers.' 
    },
    { 
      icon: <Users className="text-blinkit-green" size={32} />,
      title: 'Customer First', 
      description: 'Our customers are at the center of everything we do. Their satisfaction is our priority.' 
    },
    { 
      icon: <Heart className="text-blinkit-green" size={32} />,
      title: 'Community', 
      description: 'We aim to create positive impact in the communities we serve through sustainable practices.' 
    }
  ];

  const timelineEvents = [
    { year: '2013', title: 'Founded as Grofers', description: 'Started as a hyperlocal delivery service in Gurgaon.' },
    { year: '2018', title: 'Expansion Phase', description: 'Expanded to 10+ cities across India and raised significant funding.' },
    { year: '2021', title: 'Rebranded to Blinkit', description: 'Pivoted to quick commerce with a promise of delivery in minutes.' },
    { year: '2022', title: 'Joined Zomato', description: 'Became part of Zomato to revolutionize e-commerce in India.' },
    { year: '2023', title: 'Nationwide Presence', description: 'Reached over 25 cities with 400+ dark stores across India.' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blinkit-green text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            To deliver anything consumers need in <span className="text-blinkit-yellow font-semibold">their daily lives within minutes</span> at the best prices.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
                <div className="text-4xl font-bold text-blinkit-green mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Blinkit (formerly Grofers) was founded with a simple mission: to make grocery shopping more convenient. 
                What started as a small hyperlocal delivery service has now transformed into India's leading quick commerce platform.
              </p>
              <p className="text-gray-600 mb-4">
                In 2021, we pivoted to the quick commerce model with a promise to deliver groceries and essentials in just minutes. 
                This revolutionary approach changed how India shops for daily needs.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve millions of customers across India, making their lives easier one delivery at a time. 
                Our journey continues as we strive to bring convenience to every doorstep in the country.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none/layout-engine/2022-06/about-us.jpg" 
                alt="Blinkit Team" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 mb-6 md:mb-0 flex md:justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 max-w-md">
                      <div className="text-blinkit-green font-bold mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center relative">
                    <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blinkit-green z-10"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - Simple version */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Led by experienced professionals who are passionate about transforming how India shops for groceries and essentials.
          </p>
          <div className="flex justify-center">
            <a href="#" className="text-blinkit-green hover:underline font-medium">
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
