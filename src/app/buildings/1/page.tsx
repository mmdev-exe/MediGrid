"use client"

import { useState } from "react";
import { FiHeart, FiShare2, FiEye, FiUser } from "react-icons/fi";
import Link from "next/link";

export default function BuildingDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTourFormOpen, setIsTourFormOpen] = useState(false);
  const [isQuestionFormOpen, setIsQuestionFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<'tour' | 'question'>('tour');
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
  
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Function to handle sharing
  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTitle = `${building.title} - MediGrid`;
    const shareText = `Check out this property: ${building.title} at ${building.location}`;

    // Use Web Share API if available
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }

    // If Web Share API is not available, open our custom share modal
    setIsShareModalOpen(true);
  };

  // Function to copy URL to clipboard
  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('Link copied to clipboard!');
        setIsShareModalOpen(false);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
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
  
      // Show different message based on form mode
      if (formMode === 'tour') {
        alert("Tour request submitted successfully!");
      } else {
        alert("Your question has been submitted successfully!");
      }
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

  // Location data for each tab
  const locationData = {
    transit: [
      { icon: <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm mr-2">1</div>, name: "at Broadway & 139th St", distance: "0.1 miles" },
      { icon: <><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm mr-2">A</div><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm mr-2">C</div></>, name: "at 145th St", distance: "0.3 miles" }
    ],
    schools: [
      { icon: "🏫", name: "PS 153 Adam Clayton Powell", distance: "0.2 miles" },
      { icon: "🏫", name: "Hamilton Grange Middle School", distance: "0.4 miles" },
      { icon: "🎓", name: "City College of New York", distance: "0.7 miles" }
    ],
    parks: [
      { icon: "🌳", name: "St. Nicholas Park", distance: "0.3 miles" },
      { icon: "🌳", name: "Jackie Robinson Park", distance: "0.5 miles" },
      { icon: "🌳", name: "Riverbank State Park", distance: "0.8 miles" }
    ],
    restaurants: [
      { icon: "🍽️", name: "Harlem Public", distance: "0.2 miles" },
      { icon: "🍽️", name: "The Grange Bar & Eatery", distance: "0.3 miles" },
      { icon: "☕", name: "The Chipped Cup", distance: "0.4 miles" }
    ]
  };

  // Function to render the content based on active tab
  const renderTabContent = () => {
    const items = locationData[activeLocationTab as keyof typeof locationData];
    
    return (
      <div className="space-y-3 mb-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
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
    );
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
                <button 
                  className="bg-white p-2 rounded-full shadow-lg"
                  onClick={handleShare}
                >
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
                          <span>at Broadway & 139th St</span>
                        </div>
                        <span className="text-gray-600">0.1 miles</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm mr-2">A</div>
                          <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm mr-2">C</div>
                          <span>at 145th St</span>
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
                onClick={() => {
                  setFormMode('tour');
                  setIsTourFormOpen(true);
                }}
              >
                REQUEST A TOUR
              </button>
              <button 
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => {
                  setFormMode('question');
                  setIsTourFormOpen(true);
                }}
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
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
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

            {/* Google Ad Placeholder */}
            <div className="bg-gray-100 rounded-lg p-4 mb-6 border border-dashed border-gray-300">
              <div className="flex flex-col items-center justify-center h-60 text-gray-500">
                <p className="text-center mb-2 font-medium">Google AdSense</p>
                <p className="text-sm text-center"></p>
                {/* Uncomment and replace with your actual Google AdSense code when ready */}
                {/* 
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
                  crossOrigin="anonymous"></script>
                <ins className="adsbygoogle"
                  style={{ display: 'block' }}
                  data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                  data-ad-slot="YOUR_AD_SLOT_ID"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
                <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
                */}
              </div>
            </div>

            {/* Second Google Ad Placeholder */}
            <div className="bg-gray-100 rounded-lg p-4 mb-6 border border-dashed border-gray-300">
              <div className="flex flex-col items-center justify-center h-60 text-gray-500">
                <p className="text-center mb-2 font-medium">Google AdSense</p>
                <p className="text-sm text-center"></p>
                {/* Uncomment and replace with your actual Google AdSense code when ready */}
                {/* 
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
                  crossOrigin="anonymous"></script>
                <ins className="adsbygoogle"
                  style={{ display: 'block' }}
                  data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                  data-ad-slot="YOUR_SECOND_AD_SLOT_ID"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
                <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
                */}
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
              <h2 className="text-xl font-bold">
                {formMode === 'tour' ? 'Schedule a Tour' : 'Ask a Question'}
              </h2>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsTourFormOpen(false)}
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">
              {formMode === 'tour' 
                ? `Complete the form below to request a tour of ${building.title}`
                : `Complete the form below to ask a question about ${building.title}`
              }
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

      {/* Share Modal */}
      {isShareModalOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-sm bg-blue-900/30 z-50 flex items-center justify-center"
          onClick={() => setIsShareModalOpen(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Share this property</h2>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsShareModalOpen(false)}
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <button 
                onClick={copyToClipboard}
                className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Link</span>
              </button>
              
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <span>Share on Facebook</span>
              </a>
              
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this property: ${building.title} at ${building.location}`)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                <span>Share on Twitter</span>
              </a>
              
              <a 
                href={`mailto:?subject=${encodeURIComponent(`Check out this property: ${building.title}`)}&body=${encodeURIComponent(`I found this property and thought you might be interested: ${building.title} at ${building.location}\n\n${window.location.href}`)}`}
                className="w-full flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Share via Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 