"use client"

import { useState } from "react";
import Footer from "@/components/Footer";
import { FiMapPin, FiTrendingUp, FiUsers, FiDollarSign, FiArrowRight } from "react-icons/fi";

export default function NeighborhoodsPage() {
  const [activeTab, setActiveTab] = useState("popular");
  
  // Mock data for neighborhoods
  const neighborhoods = [
    {
      id: 1,
      name: "Midtown",
      city: "New York",
      image: "/images/midtown.jpg",
      description: "The heart of Manhattan with excellent transit access and high foot traffic.",
      medicalDensity: "High",
      averagePrice: "$65/sq ft",
      popularSpecialties: ["Primary Care", "Dermatology", "Psychiatry"],
      availableSpaces: 24,
      trending: true,
    },
    {
      id: 2,
      name: "Financial District",
      city: "New York",
      image: "/images/fidi.jpg",
      description: "Modern office spaces in prestigious buildings with views of the harbor.",
      medicalDensity: "Medium",
      averagePrice: "$72/sq ft",
      popularSpecialties: ["Plastic Surgery", "Executive Health", "Specialty Care"],
      availableSpaces: 18,
      trending: true,
    },
    {
      id: 3,
      name: "Upper East Side",
      city: "New York",
      image: "/images/ues.jpg",
      description: "Upscale neighborhood with a high concentration of medical professionals.",
      medicalDensity: "Very High",
      averagePrice: "$80/sq ft",
      popularSpecialties: ["Cosmetic Surgery", "Pediatrics", "Orthopedics"],
      availableSpaces: 15,
      trending: false,
    },
    {
      id: 4,
      name: "Chelsea",
      city: "New York",
      image: "/images/chelsea.jpg",
      description: "Trendy area with a mix of historic buildings and modern developments.",
      medicalDensity: "Medium",
      averagePrice: "$58/sq ft",
      popularSpecialties: ["Mental Health", "Alternative Medicine", "Physical Therapy"],
      availableSpaces: 22,
      trending: true,
    },
    {
      id: 5,
      name: "Brooklyn Heights",
      city: "New York",
      image: "/images/brooklyn-heights.jpg",
      description: "Historic neighborhood with charming brownstones and a growing medical presence.",
      medicalDensity: "Low-Medium",
      averagePrice: "$52/sq ft",
      popularSpecialties: ["Family Medicine", "Pediatrics", "Psychology"],
      availableSpaces: 12,
      trending: true,
    },
    {
      id: 6,
      name: "SoHo",
      city: "New York",
      image: "/images/soho.jpg",
      description: "Fashionable district with upscale clientele and boutique medical practices.",
      medicalDensity: "Medium",
      averagePrice: "$70/sq ft",
      popularSpecialties: ["Aesthetics", "Nutrition", "Concierge Medicine"],
      availableSpaces: 9,
      trending: false,
    },
  ];

  const filteredNeighborhoods = activeTab === "trending" 
    ? neighborhoods.filter(n => n.trending) 
    : neighborhoods;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Explore Medical Neighborhoods</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Discover the best locations for your medical practice with our comprehensive neighborhood guides.
            </p>
          </div>
        </div>
        
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("popular")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "popular"
                    ? "border-blue-400 text-blue-500"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Popular Neighborhoods
              </button>
              <button
                onClick={() => setActiveTab("trending")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "trending"
                    ? "border-blue-400 text-blue-500"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Trending Areas
              </button>
              <button
                onClick={() => setActiveTab("affordable")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "affordable"
                    ? "border-blue-400 text-blue-500"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Most Affordable
              </button>
            </nav>
          </div>
          
          {/* Neighborhood cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNeighborhoods.map((neighborhood) => (
              <div key={neighborhood.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={neighborhood.image || `https://via.placeholder.com/400x200?text=${neighborhood.name}`} 
                    alt={neighborhood.name}
                    className="w-full h-full object-cover"
                  />
                  {neighborhood.trending && (
                    <div className="absolute top-3 right-3 bg-blue-400 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <FiTrendingUp className="mr-1" />
                      Trending
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <FiMapPin className="text-blue-400 mr-2" />
                    <h3 className="font-semibold text-xl text-navy-800">{neighborhood.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{neighborhood.city}</p>
                  
                  <p className="text-gray-700 mb-4">{neighborhood.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <FiUsers className="mr-1" />
                        <span>Medical Density</span>
                      </div>
                      <p className="font-medium">{neighborhood.medicalDensity}</p>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <FiDollarSign className="mr-1" />
                        <span>Average Price</span>
                      </div>
                      <p className="font-medium">{neighborhood.averagePrice}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Popular Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {neighborhood.popularSpecialties.map((specialty) => (
                        <span key={specialty} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-navy-600 font-medium">
                      {neighborhood.availableSpaces} spaces available
                    </span>
                    <button className="flex items-center text-navy-600 hover:text-navy-800 font-medium">
                      Explore
                      <FiArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Neighborhood insights */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Neighborhood Insights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-medium text-navy-700 mb-3">Highest Patient Volume</h3>
                <ol className="space-y-3">
                  {["Midtown", "Upper East Side", "Financial District", "Gramercy Park", "Murray Hill"].map((area, index) => (
                    <li key={area} className="flex items-center">
                      <span className="bg-navy-100 text-navy-800 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm font-medium">
                        {index + 1}
                      </span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-navy-700 mb-3">Fastest Growing</h3>
                <ol className="space-y-3">
                  {["Chelsea", "Brooklyn Heights", "Williamsburg", "Long Island City", "Hudson Yards"].map((area, index) => (
                    <li key={area} className="flex items-center">
                      <span className="bg-navy-100 text-navy-800 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm font-medium">
                        {index + 1}
                      </span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-navy-700 mb-3">Best Value</h3>
                <ol className="space-y-3">
                  {["Astoria", "Washington Heights", "Harlem", "Bushwick", "Sunset Park"].map((area, index) => (
                    <li key={area} className="flex items-center">
                      <span className="bg-navy-100 text-navy-800 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm font-medium">
                        {index + 1}
                      </span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          
          {/* CTA section */}
          <div className="mt-16 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between border border-blue-200 hover:border-blue-300 transition-colors">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Need help finding the perfect neighborhood?</h2>
              <p className="text-gray-700 max-w-2xl">
                Our neighborhood specialists can provide personalized recommendations based on your practice needs.
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
