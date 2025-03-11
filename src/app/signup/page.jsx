import React from 'react';
import Link from 'next/link';
import { FaRegSadTear, FaNewspaper, FaArrowLeft } from 'react-icons/fa';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center space-y-6">
        <div className="flex justify-center">
          <FaRegSadTear className="text-6xl text-blue-500 animate-bounce" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800">Oops! Not Quite Ready Yet</h1>
        
        <p className="text-lg text-gray-600">
          We're still brewing the perfect sign-up experience for you! 
          <span className="block mt-2"> Our digital potion isn't quite ready yet. </span>
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-700 flex items-center justify-center gap-2">
            <FaNewspaper className="text-blue-600" />
            Stay in the Loop!
          </h2>
          <p className="mt-2 text-gray-700">
            Be the first to know when accounts are available by signing up for our newsletter!
          </p>
          
          <div className="mt-4">
            <Link 
              href="/newsletter" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              Join Our Newsletter
            </Link>
          </div>
        </div>
        
        <p className="text-gray-500 italic">
          "Good things come to those who wait... but we're working as fast as we can!"
        </p>
        
        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium gap-1 transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
