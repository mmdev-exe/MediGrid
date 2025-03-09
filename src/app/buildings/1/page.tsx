"use client"

import { useState } from "react";
import { FiHeart, FiShare2, FiEye, FiUser } from "react-icons/fi";
import Link from "next/link";

export default function BuildingDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTourFormOpen, setIsTourFormOpen] = useState(false);
  const [tourForm, setTourForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTourForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleTourSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // The Invoke URL from your API Gateway
    const invokeUrl = "https://pr2psoj8pk.execute-api.us-east-1.amazonaws.com/ProdApi/sendTourEmail";
  
    try {
      // Make the fetch request to the API Gateway
      const response = await fetch(invokeUrl, {
        method: "POST", // Assuming your API Gateway is set up to handle POST requests
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tourForm), // Send the tourForm data as JSON
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Tour request response:", data);
  
      // Close the form and reset it
      setIsTourFormOpen(false);
      setTourForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
  
      // Optionally, show a success message to the user
      alert("Tour request submitted successfully!");
    } catch (error) {
      console.error("Error submitting tour request:", error);
      // Optionally, show an error message to the user
      alert("Failed to submit tour request. Please try again.");
    }
  };
  
  // Data for building ID 1
  const building = {
    id: 1,
    title: "Premium Broadway Office Space",
    location: "571 West 139th Street, New York",
    altAddress: "3420 Broadway",
    price: 4860,
    size: 1215,
    rooms: {
      offices: 6,
      bathrooms: 2
    },
    images: [
        "/3420-1215/0Building-1.png",
        "/3420-1215/IMG_0315.jpg",
        "/3420-1215/IMG_0316.jpg",
        
        "/3420-1215/IMG_0318.jpg",
        
        "/3420-1215/IMG_0320.jpg",
        
        "/3420-1215/IMG_0322.jpg",
        "/3420-1215/IMG_0323.jpg",
        
        "/3420-1215/IMG_0325.jpg",
        "/3420-1215/IMG_0326.jpg",

      ],
    daysOnMarket: 22,
    lastPriceChange: "No changes",
    agent: {
      name: "Stellar Management",
      company: "Stellar Management",
      office: "Leasing/Sales Office",
      image: "/image.png"
    },
    features: [
      "Up to 6 offices",
      "Windows in every room",
      "Natural light throughout",
      "Easy access to public transportation",
      "High foot traffic location",
      "Prime Broadway visibility",
    ],
    buildingAmenities: [
      { icon: "🚲", name: "Bike room" },
      { icon: "🏊", name: "Swimming pool" },
      { icon: "🛗", name: "Elevator" },
      { icon: "🅿️", name: "Parking" },
      { icon: "🧺", name: "Laundry in building" },
      { icon: "📦", name: "Storage space" },
    ],
    outdoorSpaces: [
      { icon: "🏡", name: "Deck" },
      { icon: "🌳", name: "Garden" },
      { icon: "🏢", name: "Roof deck" },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="text-sm">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="text-blue-500 hover:underline">Rentals</Link></li>
            <li className="text-gray-500">&gt;</li>
            <li><Link href="/buildings" className="text-blue-500 hover:underline">Buildings</Link></li>
            <li className="text-gray-500">&gt;</li>
            <li className="text-gray-500">{building.location}</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="md:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-6">
              <img 
                src={building.images[currentImageIndex]} 
                alt={building.title}
                className="w-full h-[500px] object-cover rounded-lg cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              />
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {building.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-blue-500 w-5' : 'bg-white'
                    }`}
                  />
                ))}
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white p-2 rounded-full shadow-lg">
                  <FiHeart className="w-5 h-5" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-lg">
                  <FiShare2 className="w-5 h-5" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-lg">
                  <FiEye className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-2 mb-6">
              {building.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${building.title} - ${index + 1}`}
                  className={`w-full h-20 object-cover rounded cursor-pointer ${
                    index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>

            {/* Building Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h1 className="text-2xl font-bold mb-4">{building.title}</h1>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-600">Location</p>
                  <p className="font-medium">{building.location}</p>
                  {building.altAddress && (
                    <p className="text-sm text-gray-500">Alt: {building.altAddress}</p>
                  )}
                </div>
                <div>
                  <p className="text-gray-600">Price</p>
                  <p className="font-medium">${building.price}/month</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-gray-600">Size</p>
                  <p className="font-medium">{building.size} sq ft</p>
                </div>
                <div>
                  <p className="text-gray-600">Days on Market</p>
                  <p className="font-medium">{building.daysOnMarket} days</p>
                </div>
                <div>
                  <p className="text-gray-600">Last Price Change</p>
                  <p className="font-medium">{building.lastPriceChange}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact and Additional Info */}
          <div>
            {/* Contact Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <FiUser className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">{building.agent.name}</p>
                  <p className="text-sm text-gray-600">{building.agent.office}</p>
                  <p className="text-sm text-gray-600">{building.agent.company}</p>
                </div>
              </div>
              <button 
                className="w-full bg-blue-500 text-white py-3 rounded-lg mb-3 hover:bg-blue-600 transition-colors"
                onClick={() => setIsTourFormOpen(true)}
              >
                REQUEST A TOUR
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                ASK A QUESTION
              </button>
            </div>

            {/* Building Features */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="font-bold mb-4">Building Features</h2>
              <div className="space-y-2">
                {building.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Building Amenities */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="font-bold mb-4">Building Amenities</h2>
              <div className="grid grid-cols-2 gap-3">
                {building.buildingAmenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2">{amenity.icon}</span>
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Request Form Modal */}
      {isTourFormOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-sm bg-blue-900/30 z-50 flex items-center justify-center"
          onClick={() => setIsTourFormOpen(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Schedule a Tour</h2>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsTourFormOpen(false)}
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">
              Complete the form below to request a tour of {building.title}
            </p>
            
            <form onSubmit={handleTourSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={tourForm.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={tourForm.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={tourForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={tourForm.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Add a note (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={tourForm.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your preferred tour time or any questions you have..."
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsTourFormOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-sm bg-blue-900/30 z-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-[95vw] max-h-[95vh] relative">
              <button 
                className="absolute -top-3 -right-3 text-gray-600 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
              >
                ×
              </button>
              <img
                src={building.images[currentImageIndex]}
                alt={building.title}
                className="max-h-[85vh] max-w-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                <button 
                  className="bg-white/90 hover:bg-white text-blue-600 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev === 0 ? building.images.length - 1 : prev - 1));
                  }}
                >
                  ‹
                </button>
                <button 
                  className="bg-white/90 hover:bg-white text-blue-600 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev === building.images.length - 1 ? 0 : prev + 1));
                  }}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 