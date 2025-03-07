"use client"

import { useState } from "react";
import Footer from "@/components/Footer";
import { FiSearch, FiFilter, FiMapPin, FiDollarSign, FiMaximize } from "react-icons/fi";

export default function SearchPage() {
  const [filters, setFilters] = useState({
    location: "",
    priceMin: "",
    priceMax: "",
    size: "",
    amenities: [],
  });
  
  // Mock data for medical spaces
  const spaces = [
    {
      id: 1,
      title: "Modern Medical Office in Midtown",
      location: "Midtown, New York",
      price: 4500,
      size: 1200,
      image: "/images/space-1.jpg",
      amenities: ["Reception area", "3 exam rooms", "Private office", "ADA compliant"],
      rating: 4.8,
      reviews: 24,
    },
    {
      id: 2,
      title: "Dental Suite with Equipment",
      location: "Financial District, New York",
      price: 5200,
      size: 1500,
      image: "/images/space-2.jpg",
      amenities: ["Dental chairs", "X-ray room", "Sterilization area", "Waiting room"],
      rating: 4.6,
      reviews: 18,
    },
    {
      id: 3,
      title: "Therapy Office with Natural Light",
      location: "Chelsea, New York",
      price: 3200,
      size: 800,
      image: "/images/space-3.jpg",
      amenities: ["Sound insulation", "Waiting area", "Kitchenette", "Storage"],
      rating: 4.9,
      reviews: 32,
    },
    // Add more mock spaces as needed
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow pt-6">
        {/* Search bar section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <FiMapPin className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                />
              </div>
              
              <div className="flex-grow flex gap-2">
                <div className="relative flex-1">
                  <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Min Price"
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    value={filters.priceMin}
                    onChange={(e) => setFilters({...filters, priceMin: e.target.value})}
                  />
                </div>
                <div className="relative flex-1">
                  <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Max Price"
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    value={filters.priceMax}
                    onChange={(e) => setFilters({...filters, priceMax: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="relative flex-grow">
                <FiMaximize className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Size (sq ft)"
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  value={filters.size}
                  onChange={(e) => setFilters({...filters, size: e.target.value})}
                />
              </div>
              
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-xl flex items-center justify-center transition-colors shadow-sm hover:shadow-md">
                <FiSearch className="mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
        
        {/* Results section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters sidebar */}
            <div className="w-full md:w-64 bg-white p-6 rounded-xl shadow-sm h-fit">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Filters</h2>
                <FiFilter className="text-blue-400" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Space Type</h3>
                  <div className="space-y-2">
                    {["Medical Office", "Dental Suite", "Therapy Room", "Surgical Center", "Lab Space"].map((type) => (
                      <label key={type} className="flex items-center">
                        <input type="checkbox" className="rounded text-blue-400 focus:ring-blue-400 mr-2" />
                        <span className="text-sm text-gray-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Amenities</h3>
                  <div className="space-y-2">
                    {["Reception area", "Waiting room", "Private office", "ADA compliant", "Parking"].map((amenity) => (
                      <label key={amenity} className="flex items-center">
                        <input type="checkbox" className="rounded text-blue-400 focus:ring-blue-400 mr-2" />
                        <span className="text-sm text-gray-600">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Availability</h3>
                  <div className="space-y-2">
                    {["Available Now", "Available Soon", "Long-term Lease", "Short-term Lease"].map((option) => (
                      <label key={option} className="flex items-center">
                        <input type="checkbox" className="rounded text-blue-400 focus:ring-blue-400 mr-2" />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results grid */}
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {spaces.length} spaces available
                </h2>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                  <select className="border rounded-lg py-2 px-3 text-sm focus:ring-blue-400 focus:border-blue-400">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Size: Large to Small</option>
                    <option>Highest Rated</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {spaces.map((space) => (
                  <div key={space.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-blue-200">
                    <div className="relative h-48 bg-gray-200">
                      <img 
                        src={space.image || "https://via.placeholder.com/400x300?text=Medical+Space"} 
                        alt={space.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow-sm">
                        ${space.price}/mo
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="font-medium text-lg mb-1 text-gray-800 hover:text-blue-500 transition-colors">{space.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{space.location}</p>
                      <p className="text-gray-600 text-sm mb-3">{space.size} sq ft</p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {space.amenities.slice(0, 3).map((amenity) => (
                          <span key={amenity} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                            {amenity}
                          </span>
                        ))}
                        {space.amenities.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                            +{space.amenities.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-4 h-4 ${i < Math.floor(space.rating) ? "fill-current" : "fill-gray-300"}`} viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs text-gray-600 ml-1">({space.reviews})</span>
                        </div>
                        <button className="bg-blue-50 hover:bg-blue-100 text-blue-500 hover:text-blue-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-10 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-50 transition-colors">Previous</button>
                  <button className="px-4 py-2 rounded-lg border bg-blue-400 text-white">1</button>
                  <button className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-50 transition-colors">2</button>
                  <button className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-50 transition-colors">3</button>
                  <span className="px-2 text-gray-600">...</span>
                  <button className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-50 transition-colors">10</button>
                  <button className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-50 transition-colors">Next</button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
