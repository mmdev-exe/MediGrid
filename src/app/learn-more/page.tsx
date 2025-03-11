import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LearnMore() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Reimagining Medical Office Space in NYC
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Where healthcare meets affordability in the heart of the city
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to MediGrid</h2>
          <p className="text-lg text-gray-700 mb-4">
            MediGrid is the premier marketplace connecting healthcare providers with affordable medical office spaces 
            in converted residential buildings throughout New York City.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We believe that the future of healthcare isn't about expensive medical complexes—it's 
            about finding professional medical spaces in your neighborhood, creating a more accessible, 
            patient-centered approach to care.
          </p>
          <p className="text-lg text-gray-700">
            Our platform helps you discover thoughtfully designed medical office spaces that meet regulatory standards 
            while maintaining the comfort and character of the neighborhoods we serve, all at a fraction of traditional costs.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-2xl relative h-[450px] group transition-all duration-300 hover:shadow-blue-200/50">
          {/* Container for images */}
          <div className="relative w-full h-full">
            {/* Base image (After) */}
            <Image 
              src="/620w152/AI.png" 
              alt="After transformation" 
              fill
              className="object-cover"
              priority
            />
            
            {/* Overlay image (Before) */}
            <div 
              id="overlay-image" 
              className="absolute top-0 left-0 w-full h-full transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
            >
              <Image 
                src="/620w152/STELLAR620W15215-5.jpeg" 
                alt="Before transformation" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">Before</div>
            <div className="absolute top-4 right-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">After</div>
          </div>
          
          {/* Slider below the image */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4">
            <div className="relative w-full h-6 bg-gray-200 rounded-full">
              <div 
                id="slider-handle" 
                className="absolute top-0 bottom-0 w-6 h-6 bg-blue-600 rounded-full cursor-pointer transform -translate-y-0 -translate-x-1/2 shadow-md hover:bg-blue-700 transition-colors duration-300"
                style={{ left: '50%', touchAction: 'none' }}
              ></div>
              
              
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Patient-Centered</h3>
            <p className="text-gray-700">
              We're creating spaces where healthcare providers can establish practices closer to the communities they serve,
              making quality care more accessible to all New Yorkers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Affordable Practice</h3>
            <p className="text-gray-700">
              By repurposing residential spaces, we're offering medical professionals significant cost savings
              that can be passed on to patients or reinvested in better care.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Neighborhood Healthcare</h3>
            <p className="text-gray-700">
              Our spaces bring essential medical services to residential areas, supporting community health
              and creating more equitable access to healthcare across the city.
            </p>
          </div>
        </div>
      </div>

     

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1">
            <ol className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold mr-4">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Browse Our Marketplace</h3>
                  <p className="text-gray-700">
                    Just like searching for a property, browse our curated listings of 
                    converted residential spaces that now offer compliant medical office environments throughout NYC.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold mr-4">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Find Your Perfect Match</h3>
                  <p className="text-gray-700">
                    Filter by neighborhood, medical specialization requirements, price, and space size to find the ideal 
                    medical office that fits your practice needs and budget constraints.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold mr-4">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure Your Space</h3>
                  <p className="text-gray-700">
                    Connect directly with property owners through our platform to lease your medical office space
                    and start providing care in an affordable environment close to your patient base.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/workspace.png"
              alt="NYC street with brownstone buildings" 
              width={600} 
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What Our Providers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700 mb-4">
              "MediGrid has allowed me to open my own practice at half the cost of traditional medical office space. 
              My patients love the residential feel and convenient neighborhood location."
            </p>
            <p className="font-semibold">— Dr. Sarah K., Family Physician</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700 mb-4">
              "The space meets all regulatory requirements while feeling warm and inviting. 
              I've been able to grow my practice faster due to the significant cost savings."
            </p>
            <p className="font-semibold">— Dr. Michael T., Psychiatrist</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700 mb-4">
              "As a specialist, having an affordable, ADA-compliant space in a residential neighborhood 
              has helped me reach patients who previously had limited access to care."
            </p>
            <p className="font-semibold">— Dr. Aisha R., Pediatric Therapist</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Join the MediGrid Network</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          We're expanding across NYC neighborhoods, bringing affordable medical office spaces to every community.
          Be part of the movement to reimagine healthcare accessibility in New York.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/buildings" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Explore Locations
          </Link>
          <Link 
            href="/pricing" 
            className="inline-block bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            View Pricing Options
          </Link>
        </div>
      </div>
      
      {/* Add this script for the image slider functionality */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const sliderHandle = document.getElementById('slider-handle');
          const overlayImage = document.getElementById('overlay-image');
          const sliderTrack = sliderHandle.parentElement;
          
          let isDragging = false;
          
          function updateSliderPosition(clientX) {
            const trackRect = sliderTrack.getBoundingClientRect();
            let position = ((clientX - trackRect.left) / trackRect.width) * 100;
            
            // Constrain position between 0 and 100
            position = Math.max(0, Math.min(100, position));
            
            // Update slider handle position
            sliderHandle.style.left = \`\${position}%\`;
            
            // Update clip path of the overlay image
            overlayImage.style.clipPath = \`polygon(0 0, \${position}% 0, \${position}% 100%, 0 100%)\`;
          }
          
          // Mouse events
          sliderHandle.addEventListener('mousedown', function(e) {
            isDragging = true;
            e.preventDefault(); // Prevent text selection during drag
            updateSliderPosition(e.clientX); // Update immediately on click
          });
          
          sliderTrack.addEventListener('mousedown', function(e) {
            isDragging = true;
            updateSliderPosition(e.clientX); // Allow clicking anywhere on track
          });
          
          document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            updateSliderPosition(e.clientX);
          });
          
          document.addEventListener('mouseup', function() {
            isDragging = false;
          });
          
          // Touch events for mobile
          sliderHandle.addEventListener('touchstart', function(e) {
            isDragging = true;
            e.preventDefault(); // Prevent scrolling while dragging
            updateSliderPosition(e.touches[0].clientX);
          });
          
          sliderTrack.addEventListener('touchstart', function(e) {
            updateSliderPosition(e.touches[0].clientX);
          });
          
          document.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            e.preventDefault(); // Prevent page scrolling during drag
            updateSliderPosition(e.touches[0].clientX);
          }, { passive: false });
          
          document.addEventListener('touchend', function() {
            isDragging = false;
          });
          
          // Initialize slider position
          sliderHandle.style.left = '50%';
          overlayImage.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';
        });
      ` }}/>
    </div>
  );
}
