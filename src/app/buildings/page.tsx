"use client"

import { useState } from "react";
import Footer from "@/components/Footer";
import { FiStar, FiClock, FiMapPin, FiCheck, FiArrowRight, FiMaximize, FiDollarSign, FiHome, FiEye, FiShare2 } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  
  // Updated data for featured spaces with multiple images
  const featuredSpaces = [
    {
      id: 1,
      title: "Premium Broadway Office Space",
      location: "571 West 139th Street, New York",
      altAddress: "3420 Broadway Apt #XX",
      price: 4860,
      size: 1215,
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
      category: "premium",
      features: [
        "Up to 6 offices",
        "Windows in every room",
        "Natural light throughout",
        "Easy access to public transportation",
        "High foot traffic location",
        "Prime Broadway visibility",
      ],
      availableFrom: "Immediate",
      virtualTour: true,
      description: "Discover a prime office opportunity at 571 West 139th St, located in the heart of vibrant Harlem. This spacious and well-appointed space sits right on Broadway, offering unparalleled visibility and accessibility in one of New York City's most dynamic neighborhoods. Ideal for medical and educational tenants, this versatile space includes up to 6 offices, providing ample room for a variety of uses.",
      fullDescription: "Discover a prime office opportunity at 571 West 139th St, located in the heart of vibrant Harlem. This spacious and well-appointed space sits right on Broadway, offering unparalleled visibility and accessibility in one of New York City's most dynamic neighborhoods. Ideal for medical and educational tenants, this versatile space includes up to 6 offices, providing ample room for a variety of uses.\n\nThe expansive layout offers flexibility and comfort, with windows in every room allowing for natural light throughout the space, creating a welcoming and uplifting environment for your clients. The building is easily accessible by public transportation, with several bus and subway lines just steps away, making it convenient for both staff and clients.\n\nHarlem is a neighborhood known for its rich history and strong community ties, making it the perfect setting for a tenant dedicated to serving the local population. Situated on Broadway, this location benefits from heavy foot traffic and the energy of one of New York's most iconic streets, ensuring your facility will be a well-known resource in the area.\n\nDon't miss this unique opportunity to lease a high-quality space in a high demand neighborhood with boundless potential for growth and impact. Contact us today to learn more about this exceptional offering at 571 West 139th St, New York, NY."
    },
    {
      id: 2,
      title: "Versatile Professional Office",
      location: "620 West 152nd St, New York",
      altAddress: "Apt #15",
      price: 2325,
      size: 619,
      images: [
        "/620w152/0Building-2.png",

       //"/620w152/620W152nd15pic1.jpg",
        //"/620w152/620W152nd15pic2.jpg",
        //"/620w152/620W152nd15pic3.jpg",
        //"/620w152/620W152nd15pic4.jpg",
        //"/620w152/620W152nd15pic5.jpg",
        "/620w152/620w152ndfloorplan.jpg",
  
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
      category: "compact",
      features: [
        "Up to 3 private offices",
        "Flexible layout",
        "Close to Columbia University",
        "Near NewYork-Presbyterian Hospital",
        "Strong foot traffic",
        "Built-in residential client base",
      ],
      availableFrom: "Next Month",
      virtualTour: true,
      description: "Unlock the potential of this versatile professional office space at 620 West 152nd St, just off Broadway in Hamilton Heights! Situated in a thriving residential neighborhood with easy access to public transportation, this space is perfect for medical, therapy, educational, legal, or other professional uses.",
      fullDescription: "Unlock the potential of this versatile professional office space at 620 West 152nd St, just off Broadway in Hamilton Heights! Situated in a thriving residential neighborhood with easy access to public transportation, this space is perfect for medical, therapy, educational, legal, or other professional uses.\n\nFeaturing a flexible layout with up to three private offices, this location offers an excellent opportunity for businesses seeking a convenient, community-oriented setting. The surrounding area boasts strong foot traffic, a built-in residential client base, and proximity to Columbia University and NewYork-Presbyterian Hospital, making it especially ideal for medical and educational services.\n\nDon't miss this opportunity to establish your practice or business in a high-demand and easily accessible location."
    },
    {
      id: 3,
      title: "Spacious Broadway Medical Office",
      location: "556 West 140th St, New York",
      altAddress: "3430 Broadway Apt #05",
      price: 4625,
      size: 1234,
      images: [
        "/3430-54/0Building.png",
        "/3430-54/floorplan.png",
      ],
      category: "premium",
      features: [
        "Up to 6 offices",
        "Windows in every room",
        "Natural light throughout",
        "Excellent public transportation access",
        "Prime Broadway location",
        "High visibility in Harlem",
      ],
      availableFrom: "Immediate",
      virtualTour: false,
      description: "Discover a prime office opportunity at 556 West 140th St, located in the heart of vibrant Harlem. This spacious and well-appointed space sits right on Broadway, offering unparalleled visibility and accessibility in one of New York City's most dynamic neighborhoods. Ideal for medical and educational tenants.",
      fullDescription: "Discover a prime office opportunity at 556 West 140th St, located in the heart of vibrant Harlem. This spacious and well-appointed space sits right on Broadway, offering unparalleled visibility and accessibility in one of New York City's most dynamic neighborhoods. Ideal for medical and educational tenants, this versatile space includes up to 6 offices, providing ample room for a variety of uses.\n\nThe expansive layout offers flexibility and comfort, with windows in every room allowing for natural light throughout the space, creating a welcoming and uplifting environment for your clients. The building is easily accessible by public transportation, with several bus and subway lines just steps away, making it convenient for both staff and clients.\n\nHarlem is a neighborhood known for its rich history and strong community ties, making it the perfect setting for a tenant dedicated to serving the local population. Situated on Broadway, this location benefits from heavy foot traffic and the energy of one of New York's most iconic streets, ensuring your facility will be a well-known resource in the area.\n\nDon't miss this unique opportunity to lease a high-quality space in a high demand neighborhood with boundless potential for growth and impact. Contact us today to learn more about this exceptional offering at 556 West 140th St, New York, NY."
    },
    {
      id: 4,
      title: "Compact Broadway Office",
      location: "556 West 140th St, New York",
      altAddress: "3430 Broadway Apt #26",
      price: 2885,
      size: 770,
      images: [
        "/3430-770/0Building.png",
        "/3430-770/3430BrdwySpace26O1.PNG",
        "/3430-770/3430BrdwySpace26O2.PNG",
        "/3430-770/3430BrdwySpace26O3.PNG",
        "/3430-770/3430BrdwySpace26.PNG",
        "/3430-770/3430770.png",
      ],
      category: "compact",
      features: [
        "Up to 3 offices",
        "Natural light throughout",
        "Windows in every room",
        "Convenient public transportation",
        "High foot traffic area",
        "Prime Broadway visibility",
      ],
      availableFrom: "2 Months",
      virtualTour: true,
      description: "Discover a prime office opportunity at 556 West 140th St, located in the heart of vibrant Harlem. This well-appointed space sits right on Broadway, offering unparalleled visibility and accessibility in one of New York City's most dynamic neighborhoods. Ideal for medical and educational tenants.",
      fullDescription: "Discover a prime office opportunity at 556 West 140th St, located in the heart of vibrant Harlem. This spacious and well-appointed space sits right on Broadway, offering unparalleled visibility and accessibility in one of New York City's most dynamic neighborhoods. Ideal for medical and educational tenants, this versatile space includes up to 3 offices, providing ample room for a variety of uses.\n\nThe expansive layout offers flexibility and comfort, with windows in every room allowing for natural light throughout the space, creating a welcoming and uplifting environment for your clients. The building is easily accessible by public transportation, with several bus and subway lines just steps away, making it convenient for both staff and clients.\n\nHarlem is a neighborhood known for its rich history and strong community ties, making it the perfect setting for a tenant dedicated to serving the local population. Situated on Broadway, this location benefits from heavy foot traffic and the energy of one of New York's most iconic streets, ensuring your facility will be a well-known resource in the area.\n\nDon't miss this unique opportunity to lease a high-quality space in a high demand neighborhood with boundless potential for growth and impact. Contact us today to learn more about this exceptional offering at 556 West 140th St, New York, NY."
    },
    {
      id: 5,
      title: "Large Broadway Professional Suite",
      location: "556 West 140th St, New York",
      altAddress: "3430 Broadway Apt #54",
      price: 5255,
      size: 1314,
      images: [
        "/3430-54/0Building.png",
        "/3430-54/3430BrdwySpace-1.png",
        "/3430-54/3430BrdwySpace-2.png",
        "/3430-54/floorplan.png",

      ],
      category: "premium",
      features: [
        "Up to 6 offices",
        "Natural light throughout",
        "Windows in every room",
        "Multiple transit options nearby",
        "High visibility location",
        "Prime Broadway frontage",
      ],
      availableFrom: "Immediate",
      virtualTour: true,
      description: "Discover a prime office opportunity at 556 West 140th St, located in the heart of vibrant Harlem. This spacious and well-appointed space sits right on Broadway, offering unparalleled visibility and accessibility in one of New York City's most dynamic neighborhoods. Ideal for medical and educational tenants.",
      fullDescription: "Discover a prime office opportunity at 556 West 140th St, located in the heart of vibrant Harlem. This spacious and well-appointed space sits right on Broadway, offering unparalleled visibility and accessibility in one of New York City's most dynamic neighborhoods. Ideal for medical and educational tenants, this versatile space includes up to 6 offices, providing ample room for a variety of uses.\n\nThe expansive layout offers flexibility and comfort, with windows in every room allowing for natural light throughout the space, creating a welcoming and uplifting environment for your clients. The building is easily accessible by public transportation, with several bus and subway lines just steps away, making it convenient for both staff and clients.\n\nHarlem is a neighborhood known for its rich history and strong community ties, making it the perfect setting for a tenant dedicated to serving the local population. Situated on Broadway, this location benefits from heavy foot traffic and the energy of one of New York's most iconic streets, ensuring your facility will be a well-known resource in the area.\n\nDon't miss this unique opportunity to lease a high-quality space in a high demand neighborhood with boundless potential for growth and impact. Contact us today to learn more about this exceptional offering at 556 West 140th St, New York, NY."
    },
    {
      id: 6,
      title: "Office Near Central Park Gardens",
      location: "50 West 97th Street, New York",
      altAddress: "Apt #01E",
      price: 4545,
      size: 606,
      images: [
        "/50w97-01E/0Building.png",
        "/50w97-01E/image.jpg",
        

      ],
      category: "premium",
      features: [
        "Prime Upper West Side location",
        "Near Central Park",
        "Natural light throughout",
        "Multiple transit options nearby",
        "High visibility location",
        "Close to major medical institutions",
      ],
      availableFrom: "Immediate",
      virtualTour: true,
      description: "Discover a prime office opportunity at 50 West 97th Street, located in the desirable Upper West Side neighborhood. This well-appointed space offers excellent accessibility and visibility in one of New York City's most sought-after areas, just steps from Central Park. Ideal for medical and professional tenants.",
      fullDescription: "Discover a prime office opportunity at 50 West 97th Street, located in the desirable Upper West Side neighborhood. This well-appointed space offers excellent accessibility and visibility in one of New York City's most sought-after areas, just steps from Central Park. Ideal for medical and professional tenants seeking a prestigious address with convenient access to the entire city.\n\nThe thoughtfully designed layout offers flexibility and comfort, with natural light creating a welcoming and uplifting environment for your clients. The building is easily accessible by public transportation, with several bus and subway lines nearby, making it convenient for both staff and clients.\n\nThe Upper West Side is known for its cultural institutions, excellent schools, and proximity to Central Park, making it the perfect setting for a tenant dedicated to serving this affluent community. This location benefits from steady foot traffic and proximity to major medical institutions, ensuring your facility will be a well-known resource in the area.\n\nDon't miss this unique opportunity to lease a high-quality space in a high-demand neighborhood with boundless potential for growth and impact. Contact us today to learn more about this exceptional offering at 50 West 97th Street, New York, NY."
    },
    {
      id: 7,
      title: "Compact Upper West Side Office",
      location: "50 West 97th Street, New York",
      altAddress: "Apt #01I",
      price: 3705, // 494 sq ft × $90/RSF = $44,460/year ÷ 12 = $3,705/month
      size: 494,
      images: [
        "/50w97-01I/0Building.png",
        "/50w97-01I/image.jpg",
      ],
      category: "compact",
      features: [
        "Prime Upper West Side location",
        "Steps from Central Park",
        "Efficient layout",
        "Excellent transit access",
        "High foot traffic area",
        "Near major medical institutions",
      ],
      availableFrom: "Immediate",
      virtualTour: false,
      description: "Discover this compact professional office at 50 West 97th Street in the prestigious Upper West Side. This efficiently designed space offers the perfect balance of location and functionality, just steps from Central Park. Ideal for medical practitioners and professionals seeking a premium Manhattan address.",
      fullDescription: "Discover this compact professional office at 50 West 97th Street in the prestigious Upper West Side. This efficiently designed space offers the perfect balance of location and functionality, just steps from Central Park. Ideal for medical practitioners and professionals seeking a premium Manhattan address without excess square footage.\n\nThe thoughtfully designed layout maximizes every square foot, creating a productive environment for your practice. The building is easily accessible by public transportation, with several bus and subway lines nearby, making it convenient for both staff and clients.\n\nThe Upper West Side is known for its cultural institutions, excellent schools, and proximity to Central Park, making it the perfect setting for a tenant dedicated to serving this affluent community. This location benefits from steady foot traffic and proximity to major medical institutions, ensuring your facility will be a well-known resource in the area.\n\nDon't miss this unique opportunity to lease a high-quality space in a high-demand neighborhood with boundless potential for growth and impact. Contact us today to learn more about this exceptional offering at 50 West 97th Street, New York, NY."
    },
    {
      id: 8,
      title: "Spacious Upper West Side Suite",
      location: "50 West 97th Street, New York",
      altAddress: "Apt #01C",
      price: 6488, // 865 sq ft × $90/RSF = $77,850/year ÷ 12 = $6,487.50/month
      size: 865,
      images: [
        "/50w97-01C/0Building.png",
        "/50w97-01C/image.jpg",
      ],
      category: "premium",
      features: [
        "Prime Upper West Side location",
        "Near Central Park",
        "Generous square footage",
        "Multiple transit options",
        "High visibility location",
        "Close to major medical institutions",
      ],
      availableFrom: "Immediate",
      virtualTour: false,
      description: "Secure this spacious professional suite at 50 West 97th Street in the coveted Upper West Side. This well-proportioned space offers ample room for your growing practice, just steps from Central Park. Perfect for medical specialists and professionals requiring a prestigious Manhattan address with room to expand.",
      fullDescription: "Secure this spacious professional suite at 50 West 97th Street in the coveted Upper West Side. This well-proportioned space offers ample room for your growing practice, just steps from Central Park. Perfect for medical specialists and professionals requiring a prestigious Manhattan address with room to expand.\n\nThe generous layout provides flexibility for multiple configurations, allowing you to create the ideal environment for your clients and staff. The building is easily accessible by public transportation, with several bus and subway lines nearby, making it convenient for everyone.\n\nThe Upper West Side is known for its cultural institutions, excellent schools, and proximity to Central Park, making it the perfect setting for a tenant dedicated to serving this affluent community. This location benefits from steady foot traffic and proximity to major medical institutions, ensuring your facility will be a well-known resource in the area.\n\nDon't miss this unique opportunity to lease a high-quality space in a high-demand neighborhood with boundless potential for growth and impact. Contact us today to learn more about this exceptional offering at 50 West 97th Street, New York, NY."
    },
  ];

  const filteredSpaces = activeCategory === "all" 
    ? featuredSpaces 
    : featuredSpaces.filter(space => space.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Function to handle image navigation
  const navigateImage = (spaceId: number, direction: 'next' | 'prev') => {
    setCurrentImageIndex(prev => {
      const currentIndex = prev[spaceId] || 0;
      const space = featuredSpaces.find(s => s.id === spaceId);
      const imageCount = space?.images?.length || 1;
      
      let newIndex;
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % imageCount;
      } else {
        newIndex = (currentIndex - 1 + imageCount) % imageCount;
      }
      
      return { ...prev, [spaceId]: newIndex };
    });
  };

  return (
    <div className="min-w-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Hero section - updated with more subtle blue */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <nav className="flex mb-4" aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-2 text-sm text-gray-500">
                    <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                    <li className="flex items-center">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <Link href="/buildings" className="ml-2 hover:text-blue-500">Buildings</Link>
                    </li>
                  </ol>
                </nav>
                <h1 className="text-3xl font-bold text-gray-900">Featured Buildings</h1>
                <p className="mt-2 text-gray-600 max-w-3xl">
                  Browse our selection of premium medical and professional buildings in Manhattan's most sought-after neighborhoods.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link 
                  href="/contact"
                  className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full flex items-center text-sm font-medium transition-colors"
                >
                  Request Information
                  <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Category filters - updated with more subtle blue */}
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-4 py-4 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveCategory("all")}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === "all"
                    ? "bg-blue-400 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                All Spaces
              </button>
              <button
                onClick={() => setActiveCategory("premium")}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === "premium"
                    ? "bg-blue-400 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Premium Suites
              </button>
              <button
                onClick={() => setActiveCategory("compact")}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === "compact"
                    ? "bg-blue-400 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Compact Offices
              </button>
            </div>
          </div>
        </div>
        
        {/* Featured listings - updated with more subtle styling and hover effects */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredSpaces.map((space) => {
              const currentIndex = currentImageIndex[space.id] || 0;
              const images = space.images || [`https://via.placeholder.com/800x500?text=${encodeURIComponent(space.title)}`];
              
              return (
                <motion.div 
                  key={space.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-blue-200"
                  variants={itemVariants}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={images[currentIndex]} 
                      alt={`${space.title} - Image ${currentIndex + 1}`}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    
                    {/* Image navigation controls - updated for better visibility */}
                    {images.length > 1 && (
                      <>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            navigateImage(space.id, 'prev');
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-500 p-2.5 rounded-full shadow-md transition-all"
                          aria-label="Previous image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            navigateImage(space.id, 'next');
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-500 p-2.5 rounded-full shadow-md transition-all"
                          aria-label="Next image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        
                        {/* Image indicators - updated for better visibility */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
                          {images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentImageIndex(prev => ({ ...prev, [space.id]: idx }));
                              }}
                              className={`w-2.5 h-2.5 rounded-full transition-all ${
                                idx === currentIndex ? 'bg-blue-500 w-5' : 'bg-white/80 hover:bg-white'
                              }`}
                              aria-label={`Go to image ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    
                    {/* Updated badges for better visibility */}
                    <div className="absolute top-4 left-4 bg-blue-500/90 text-white px-3 py-1 text-sm font-medium rounded-full flex items-center shadow-sm">
                      <FiStar className="mr-1" />
                      Featured
                    </div>
                    {space.virtualTour && (
                      <div className="absolute bottom-4 left-4 bg-white/90 text-blue-500 px-3 py-1 rounded-full text-sm font-medium shadow-sm backdrop-blur-sm">
                        Virtual Tour Available
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-500 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                      ${space.price}/mo
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-2 hover:text-blue-500 transition-colors">{space.title}</h3>
                    
                    {/* Location card */}
                    <div className="mb-4 bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors">
                      <div className="flex flex-wrap gap-y-2 text-gray-600">
                        <div className="w-full flex items-center">
                          <FiHome className="mr-2 text-blue-400" />
                          <span>{space.location}</span>
                        </div>
                        {space.altAddress !== "N/A" && (
                          <div className="w-full flex items-center pl-6 text-sm text-gray-500">
                            Alt: {space.altAddress}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Details card */}
                    <div className="mb-4 bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center">
                          <FiMaximize className="mr-2 text-blue-400" />
                          <span className="text-gray-700">{space.size} sq ft</span>
                        </div>
                        <div className="flex items-center">
                          <FiClock className="mr-2 text-blue-400" />
                          <span className="text-gray-700">Available: {space.availableFrom}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      {space.description}
                    </p>
                    
                    {/* Features card */}
                    <div className="mb-4 bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                        {space.features.slice(0, 6).map((feature) => (
                          <div key={feature} className="flex items-start">
                            <FiCheck className="text-blue-400 mt-1 mr-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        ID: MG-{space.id.toString().padStart(4, '0')}
                      </span>
                      <Link 
                        href={`/buildings/${space.id}`}
                        className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full flex items-center text-sm font-medium transition-colors"
                      >
                        View Details
                        <FiArrowRight className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Featured insights - updated with more subtle styling */}
          <motion.div 
            className="mt-16 bg-white rounded-xl shadow-sm p-8 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Choose Our Featured Spaces?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Premium Locations</h3>
                <p className="text-gray-600">
                  Our spaces are situated in vibrant neighborhoods with excellent visibility on Broadway and surrounding areas.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Excellent Accessibility</h3>
                <p className="text-gray-600">
                  All our spaces offer convenient access to public transportation, making them easily accessible for staff and clients.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Flexible Layouts</h3>
                <p className="text-gray-600">
                  Our spaces offer versatile configurations with multiple offices, natural light, and adaptable designs for various medical uses.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* CTA section - updated with more subtle styling */}
          <motion.div 
            className="mt-16 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-8 text-gray-800 border border-blue-200 hover:border-blue-300 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Looking for something specific?</h2>
                <p className="text-gray-700 max-w-2xl">
                  Our team can help you find the perfect medical space in Harlem or customize an existing one to meet your requirements.
                </p>
              </div>
              <Link 
                href="/contact"
                className="mt-6 md:mt-0 bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Contact a Specialist
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}