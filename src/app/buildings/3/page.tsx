"use client"

import { useState } from "react";
import { FiHeart, FiShare2, FiEye, FiUser } from "react-icons/fi";
import Link from "next/link";

export default function BuildingDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTourFormOpen, setIsTourFormOpen] = useState(false);
  const [isQuestionFormOpen, setIsQuestionFormOpen] = useState(false);
  const [activeLocationTab, setActiveLocationTab] = useState("transit");
  const [tourForm, setTourForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [questionForm, setQuestionForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: ""
  });
  
  // Function to handle image load errors
  const handleImageError = (index: number) => {
    setImageErrors(prev => ({...prev, [index]: true}));
  };

  // Function to get alternative image URL if needed
  const getImageUrl = (path: string) => {
    // If the path already ends with .jpeg, return it as is
    if (path.toLowerCase().endsWith('.jpeg')) return path;
    
    // If the path ends with .jpg, but we had an error loading it,
    // try the .jpeg extension instead
    if (path.toLowerCase().endsWith('.jpg') && imageErrors[currentImageIndex]) {
      return path.replace(/\.jpg$/i, '.jpeg');
    }
    
    return path;
  };
  
  // Data for building ID 3
  const building = {
    id: 3,
    title: "Spacious Broadway Medical Office",
    location: "556 West 140th St, New York",
    altAddress: "3430 Broadway",
    price: 4625,
    size: 1234,
    rooms: {
      offices: 6,
      bathrooms: 2
    },
    images: [
      "/3430-54/0Building.png",
      "/3430-54/floorplan.png",
    ],
    daysOnMarket: 30,
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
      "Excellent public transportation access",
      "Prime Broadway location",
      "High visibility in Harlem",
    ],
    buildingAmenities: [
      { icon: "🚲", name: "Bike room" },
      { icon: "🏊", name: "Swimming pool" },
      { icon: "🛗", name: "Elevator" },
      { icon: "🅿️", name: "Parking" },
      { icon: "🧺", name: "Laundry in building" },
    ],
    outdoorSpaces: [
      { icon: "🏡", name: "Deck" },
      { icon: "🌳", name: "Garden" },
    ]
  };

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

    const invokeUrl = "https://pr2psoj8pk.execute-api.us-east-1.amazonaws.com/ProdApi/sendTourEmail";

    console.log("Sending payload:", JSON.stringify(tourForm, null, 2));

    try {
      const response = await fetch(invokeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tourForm),
      });

      const data = await response.json();
      console.log("Tour request response:", data);

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! Status: ${response.status}`);
      }

      setIsTourFormOpen(false);
      setTourForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      alert("Tour request submitted successfully!");
    } catch (error) {
      console.error("Error submitting tour request:", error);
      alert(`Failed to submit tour request: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };
  
  // Handle question form input changes
  const handleQuestionInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuestionForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle question form submission
  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // The Invoke URL from your API Gateway
    const invokeUrl = "https://pr2psoj8pk.execute-api.us-east-1.amazonaws.com/ProdApi/sendQuestionEmail";

    try {
      // Make the fetch request to the API Gateway
      const response = await fetch(invokeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(questionForm),
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Question submission response:", data);

      // Close the form and reset it
      setIsQuestionFormOpen(false);
      setQuestionForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        question: "",
      });

      // Show a success message to the user
      alert("Your question has been submitted successfully!");
    } catch (error) {
      console.error("Error submitting question:", error);
      // Show an error message to the user
      alert("Failed to submit your question. Please try again.");
    }
  };

  // Location data for each tab
  const locationData = {
    transit: [
      { icon: <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm mr-2">1</div>, name: "at Broadway & 137th St", distance: "0.2 miles" },
      { icon: <><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm mr-2">A</div><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm mr-2">C</div></>, name: "at 135th St", distance: "0.3 miles" }
    ],
    schools: [
      { icon: "🏫", name: "PS 192 Jacob H. Schiff", distance: "0.3 miles" },
      { icon: "🏫", name: "Hamilton Heights School", distance: "0.5 miles" },
      { icon: "🎓", name: "City College of New York", distance: "0.8 miles" }
    ],
    parks: [
      { icon: "🌳", name: "Riverside Park", distance: "0.4 miles" },
      { icon: "🌳", name: "St. Nicholas Park", distance: "0.5 miles" },
      { icon: "🌳", name: "Jackie Robinson Park", distance: "0.7 miles" }
    ],
    restaurants: [
      { icon: "🍽️", name: "Bono Trattoria", distance: "0.3 miles" },
      { icon: "🍽️", name: "Fumo", distance: "0.4 miles" },
      { icon: "☕", name: "Hamilton's Bakery", distance: "0.5 miles" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modal/Lightbox */}
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
                src={getImageUrl(building.images[currentImageIndex])}
                alt={`${building.title} - ${currentImageIndex + 1}`}
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
              <div 
                className="w-full h-[500px] relative rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <img 
                  src={getImageUrl(building.images[currentImageIndex])} 
                  alt={building.title}
                  className="object-cover w-full h-full"
                  onError={() => handleImageError(currentImageIndex)}
                />
              </div>
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
                <div 
                  key={index}
                  className={`w-full h-20 relative rounded cursor-pointer ${
                    index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => {
                    setCurrentImageIndex(index);
                  }}
                >
                  <img
                    src={getImageUrl(image)}
                    alt={`${building.title} - ${index + 1}`}
                    className="object-cover w-full h-full"
                    onError={() => handleImageError(index)}
                  />
                </div>
              ))}
            </div>

            {/* Building Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h1 className="text-2xl font-bold mb-4">{building.title}</h1>
              
              {/* Two-column layout for details and map */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left column - Building details */}
                <div>
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
                  <div className="grid grid-cols-3 gap-4 mb-6">
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
                  
                  {/* Transit information */}
                  <div className="mt-4">
                    <h2 className="font-bold mb-4">Nearby Transit</h2>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm mr-2">1</div>
                          <span>at Broadway & 137th St</span>
                        </div>
                        <span className="text-gray-600">0.2 miles</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm mr-2">A</div>
                          <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm mr-2">C</div>
                          <span>at 135th St</span>
                        </div>
                        <span className="text-gray-600">0.3 miles</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right column - Map */}
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm h-[350px]">
                  {/* Tabs */}
                  <div className="bg-white px-4 pt-4">
                    <div className="flex space-x-6 border-b border-gray-100">
                      <div 
                        className={`pb-3 px-1 cursor-pointer transition-colors ${activeLocationTab === 'transit' ? 'font-medium text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                        onClick={() => setActiveLocationTab('transit')}
                      >
                        Transit
                      </div>
                      <div 
                        className={`pb-3 px-1 cursor-pointer transition-colors ${activeLocationTab === 'schools' ? 'font-medium text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                        onClick={() => setActiveLocationTab('schools')}
                      >
                        Schools
                      </div>
                      <div 
                        className={`pb-3 px-1 cursor-pointer transition-colors ${activeLocationTab === 'parks' ? 'font-medium text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                        onClick={() => setActiveLocationTab('parks')}
                      >
                        Parks
                      </div>
                      <div 
                        className={`pb-3 px-1 cursor-pointer transition-colors ${activeLocationTab === 'restaurants' ? 'font-medium text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                        onClick={() => setActiveLocationTab('restaurants')}
                      >
                        Restaurants
                      </div>
                    </div>
                  </div>
                  
                  {/* Map */}
                  <div className="relative h-[calc(100%-56px)]">
                    <iframe 
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBJEFvZoonkzDQ2iDeHkRTRmR-GV1E9pkw&q=${encodeURIComponent(building.location)}&zoom=15&maptype=roadmap`}
                      className="w-full h-full border-0" 
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    
                    {/* Map controls */}
                    <div className="absolute top-3 right-3 flex flex-col space-y-2">
                      <button className="bg-white rounded-md shadow-sm p-1.5 hover:bg-gray-50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                      <button className="bg-white rounded-md shadow-sm p-1.5 hover:bg-gray-50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm rounded px-2 py-1 text-xs text-gray-600 shadow-sm">
                      Map data ©2023 Google
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional location information below the two columns */}
              <div className="mt-6">
                <h2 className="font-bold mb-4">Explore {activeLocationTab.charAt(0).toUpperCase() + activeLocationTab.slice(1)}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {locationData[activeLocationTab as keyof typeof locationData].map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center">
                        {typeof item.icon === 'string' ? (
                          <span className="text-xl mr-2">{item.icon}</span>
                        ) : (
                          item.icon
                        )}
                        <span>{item.name}</span>
                      </div>
                      <span className="text-gray-600">{item.distance}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <a 
                    href={`https://www.google.com/maps/search/${activeLocationTab}/${encodeURIComponent(building.location)}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-sm text-blue-500 hover:text-blue-700 hover:underline inline-flex items-center"
                  >
                    View more {activeLocationTab} on Google Maps
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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
              <button 
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsQuestionFormOpen(true)}
              >
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

      {/* Ask a Question Form Modal */}
      {isQuestionFormOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-sm bg-blue-900/30 z-50 flex items-center justify-center"
          onClick={() => setIsQuestionFormOpen(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Ask a Question</h2>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsQuestionFormOpen(false)}
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">
              Have a question about {building.title}? We're here to help!
            </p>
            
            <form onSubmit={handleQuestionSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={questionForm.firstName}
                    onChange={handleQuestionInputChange}
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
                    value={questionForm.lastName}
                    onChange={handleQuestionInputChange}
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
                  value={questionForm.email}
                  onChange={handleQuestionInputChange}
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
                  value={questionForm.phone}
                  onChange={handleQuestionInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Question*
                </label>
                <textarea
                  id="question"
                  name="question"
                  value={questionForm.question}
                  onChange={handleQuestionInputChange}
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What would you like to know about this property?"
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsQuestionFormOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Submit Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}