"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              href="/list" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition-all"
            >
              List Your Space
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} animate-fade-in-down`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white backdrop-blur-sm border-b border-gray-200 shadow-md">
          <Link 
            href="/login" 
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
          >
            Log in
          </Link>
          <Link 
            href="/list" 
            className="block px-4 py-2 text-base font-medium bg-blue-600 text-white rounded-lg mt-3 shadow-md hover:bg-blue-700"
          >
            List Your Space
          </Link>
        </div>
      </div>
    </header>
  );
}