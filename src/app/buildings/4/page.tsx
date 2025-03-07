"use client"

import { useState } from "react";
import { FiHeart, FiShare2, FiEye, FiUser } from "react-icons/fi";
import Link from "next/link";

export default function BuildingDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Data for building ID 4
  const building = {
    id: 4,
    title: "Compact Broadway Office",
    location: "556 West 140th St, New York",
    altAddress: "3430 Broadway",
    price: 2885,
    size: 770,
    rooms: {
      offices: 3,
      bathrooms: 1
    },
    images: [
        "/3430-770/0Building.png",
        "/3430-770/3430BrdwySpace26O1.png",
        "/3430-770/3430BrdwySpace26O2.png",
        "/3430-770/3430BrdwySpace26O3.png",
          "/3430-770/3430BrdwySpace26.png",
        "/3430-770/Screenshot2023-03-07020307.png"
      ],
    daysOnMarket: 45,
    lastPriceChange: "No changes",
    agent: {
      name: "Stellar Management",
      company: "Stellar Management",
      office: "Leasing/Sales Office",
      image: "/image.png"
    },
    features: [
      "Up to 3 offices",
      "Natural light throughout",
      "Windows in every room",
      "Convenient public transportation",
      "High foot traffic area",
      "Prime Broadway visibility",
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
                className="w-full h-[500px] object-cover rounded-lg"
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