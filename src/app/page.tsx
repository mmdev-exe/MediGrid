"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import backgroundImage from './Sky1.svg';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("lease"); // Changed from "rent" to "lease"
  const [neighborhood, setNeighborhood] = useState(""); // Add state for neighborhood selection
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (neighborhood) {
      router.push('/buildings');
    }
  };

  const handleListClick = () => {
    router.push('/list');
  };

  return (
    <div className="min-h-screen text-gray-900 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Links */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8">
            {/* Logo/Image container */}

            <Link href="/signin" className="px-3 py-4 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300">LOG IN</Link>
            <Link href="/list" className="px-3 py-4 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300">LIST YOUR SPACE</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src={backgroundImage}
          alt="NYC Background"
          fill
          className="absolute inset-0 object-cover z-0"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-start pt-48 pb-24 md:pb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            The premier platform for medical office space in <span className="text-blue-600">NYC</span>
          </h1>
          
          {/* Search Box */}
          <div 
            className="max-w-4xl mx-auto rounded-xl shadow-lg p-6 mt-8 relative bg-transparent"
          >
            {/* Background Image */}
            <Image 
              src="/Sky1.svg"
              alt="NYC Skyline"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="absolute inset-0 z-0"
            />
            
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-white bg-opacity-80 z-10"></div>
            
            {/* Content */}
            <div className="relative z-20">
              <div className="flex justify-center space-x-2 mb-6">
                <button 
                  className={`px-8 py-3 rounded-md font-medium transition-colors ${
                    searchType === 'lease' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setSearchType('lease')}
                >
                  Lease
                </button>
                <button 
                  className={`px-8 py-3 rounded-md font-medium transition-colors ${
                    searchType === 'list' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => {
                    setSearchType('list');
                    handleListClick();
                  }}
                >
                  List
                </button>
              </div>
              
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <label className="block text-xs font-medium text-gray-600 mb-2 text-left">LOCATION</label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                  >
                    <option value="">Select Neighborhood</option>
                    <option value="upper-west-side">Upper West Side</option>
                  </select>
                </div>
                
                <div className="w-full md:w-48">
                  <label className="block text-xs font-medium text-gray-600 mb-2 text-left">MINIMUM PRICE</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                    <option>Min</option>
                    <option>$2,000</option>
                    <option>$5,000</option>
                    <option>$10,000</option>
                  </select>
                </div>
                
                <div className="w-full md:w-48">
                  <label className="block text-xs font-medium text-gray-600 mb-2 text-left">MAXIMUM PRICE</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                    <option>Max</option>
                    <option>$15,000</option>
                    <option>$25,000</option>
                    <option>$50,000</option>
                  </select>
                </div>
                
                <div className="w-full md:w-auto flex items-end">
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-sm text-gray-600">
                Find the perfect medical office space faster: <Link href="/signup" className="text-blue-600 hover:underline font-medium">sign up</Link> or <Link href="/signin" className="text-blue-600 hover:underline font-medium">sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Commercial Leasing Guidelines: <Link href="/leasing-guidelines" className="text-blue-400 hover:underline">Learn more about medical office leasing in NYC</Link>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
