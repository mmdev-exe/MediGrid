"use client"

import { useState } from "react";
import { FiHeart, FiShare2, FiEye, FiUser } from "react-icons/fi";
import Link from "next/link";
// Replace Next.js Image with standard img tag
// import Image from "next/image";

export default function BuildingDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
  
  // Data for building ID 2
  const building = {
    id: 2,
    title: "Versatile Professional Office",
    location: "620 West 152nd St, New York",
    altAddress: "N/A",
    price: 2325,
    size: 619,
    rooms: {
      offices: 3,
      bathrooms: 1
    },
    images: [

        "/620w152/Building-2.png",

        "/620w152/620W152ndfloorplan.jpg",
  
        "/620w152/STELLAR620W15215-1.jpeg",
        "/620w152/STELLAR620W15215-2.jpeg",
        "/620w152/STELLAR620W15215-3.jpeg",
        "/620w152/STELLAR620W15215-4.jpeg",
        "/620w152/STELLAR620W15215-5.jpeg",
        "/620w152/STELLAR620W15215-6.jpeg",
        "/620w152/STELLAR620W15215-7.jpeg",
        "/620w152/STELLAR620W15215-8.jpeg",
        "/620w152/STELLAR620W15215-9.jpeg",
        "/620w152/STELLAR620W15215-10.jpeg",
        "/620w152/STELLAR620W15215-11.jpeg",
        "/620w152/STELLAR620W15215-12.jpeg",
        "/620w152/STELLAR620W15215-13.jpeg",
        "/620w152/STELLAR620W15215-14.jpeg",

        

      ],
    daysOnMarket: 15,
    lastPriceChange: "No changes",
    agent: {
      name: "Stellar Management",
      company: "Stellar Management",
      office: "Leasing/Sales Office",
      image: "/image.png"
    },
    features: [
      "Up to 3 private offices",
      "Flexible layout",
      "Close to Columbia University",
      "Near NewYork-Presbyterian Hospital",
      "Strong foot traffic",
      "Built-in residential client base",
    ],
    buildingAmenities: [
      { icon: "🚲", name: "Bike room" },
      { icon: "🛗", name: "Elevator" },
      { icon: "🅿️", name: "Parking" },
      { icon: "🧺", name: "Laundry in building" },
    ],
    outdoorSpaces: [
      { icon: "🏡", name: "Deck" },
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
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-600">Location</p>
                  <p className="font-medium">{building.location}</p>
                  {building.altAddress !== "N/A" && (
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
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg mb-3">
                REQUEST A TOUR
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg">
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
    </div>
  );
} 