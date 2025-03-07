"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  return (
    <header className="bg-white backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-1">
            <Link href="/" className="flex items-center">
              <span className="text-blue-700 text-xl font-bold">MediGrid</span>
              <svg className="h-6 w-6 ml-1 text-black -mt-0.5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
              </svg>
            </Link>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium rounded-full hover:bg-gray-100 transition-all">
              Log in
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition-all"
            >
              List Your Space
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              className="text-gray-700 hover:text-blue-600 rounded-full p-1 hover:bg-gray-100 transition-all"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, toggle with state */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} animate-fade-in-down`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white backdrop-blur-sm border-b border-gray-200 shadow-md">
          {/* Tools section in mobile menu */}
          <div className="block px-4 py-2 text-base font-medium text-gray-700">
            <div className="font-medium mb-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Tools
            </div>
            <div className="pl-6 space-y-1">
              <Link href="/search" className="block py-1 text-sm text-gray-700 hover:text-blue-600">
                Find Spaces
              </Link>
              <Link href="/neighborhoods" className="block py-1 text-sm text-gray-700 hover:text-blue-600">
                Neighborhoods
              </Link>
              <Link href="/featured" className="block py-1 text-sm text-gray-700 hover:text-blue-600">
                Featured
              </Link>
              <Link href="/blog" className="block py-1 text-sm text-gray-700 hover:text-blue-600">
                Resources
              </Link>
            </div>
          </div>
          
          <Link href="/login" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all">
            Log in
          </Link>
          <Link 
            href="/contact" 
            className="block px-4 py-2 text-base font-medium bg-blue-600 text-white rounded-lg mt-3 shadow-md hover:bg-blue-700"
          >
            List Your Space
          </Link>
        </div>
      </div>
    </header>
  );
}