import React from 'react';
import '../App.css';

// Placeholder images (replace with actual image paths)

const ServicesPage = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Header */}
      

      {/* Services Section */}
      <section className="p-10">
        <h1 className="text-4xl font-bold mb-10">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Towing Services */}
          <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">Towing Services</h2>
              <p className="text-gray-600 mb-5">
                Roadside assistance is crucial for drivers in unexpected situations.
                Our prompt and reliable service ensures your safety and peace of mind
                on the road. Get help from our experienced team today.
              </p>
              <button className="border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-100">
                Explore Service
              </button>
            </div>
            
          </div>

          {/* Flat Tire Assistance */}
          <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">Flat Tire Assistance</h2>
              <p className="text-gray-600 mb-5">Battery Jump-Start</p>
              <button className="text-blue-500 hover:underline">Help Now</button>
            </div>
            <div className="relative">
              
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-md">
                Help
              </button>
            </div>
          </div>

          {/* Lockout Service */}
          <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">Lockout Service</h2>
              <p className="text-gray-600 mb-5">Fuel Delivery</p>
              <button className="border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-100">
                Order Now
              </button>
            </div>
            
          </div>

          {/* Vehicle Inspection */}
          <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">Vehicle Inspection</h2>
              <p className="text-gray-600 mb-5">Emergency Repair</p>
              <button className="border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-100">
                Assistance
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Chatbot Button */}
      <div className="fixed bottom-5 right-5">
        <button className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center gap-2">
          How can I help you?
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;