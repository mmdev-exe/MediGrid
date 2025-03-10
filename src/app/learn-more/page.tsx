import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LearnMore() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Reimagining Office Space in NYC
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Where community meets productivity in the heart of the city
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to MediGrid</h2>
          <p className="text-lg text-gray-700 mb-4">
            MediGrid is the premier marketplace connecting New Yorkers with community-focused office spaces 
            in converted residential buildings throughout the city.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We believe that the future of work isn't about commuting to distant office towers—it's 
            about finding professional spaces in your neighborhood, creating a more balanced, 
            sustainable way to work.
          </p>
          <p className="text-lg text-gray-700">
            Our platform helps you discover thoughtfully designed workspaces that foster creativity, 
            collaboration, and community while maintaining the comfort and character of the neighborhoods we serve.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-2xl relative h-[450px] group transition-all duration-300 hover:shadow-blue-200/50">
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
          
          {/* Slider handle */}
          <div 
            id="slider-handle" 
            className="absolute top-0 bottom-0 w-0.5 bg-white/80 cursor-ew-resize group-hover:bg-blue-400 transition-colors duration-300"
            style={{ left: '50%', touchAction: 'none' }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-400 transition-all duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
              </svg>
            </div>
          </div>
          
          {/* Instruction tooltip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm transition-opacity duration-300 opacity-90 group-hover:opacity-100 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m-8 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span>Drag to compare</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Community-Centered</h3>
            <p className="text-gray-700">
              We're creating spaces where professionals can connect with neighbors, share ideas, 
              and build meaningful relationships while working close to home.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Sustainable Living</h3>
            <p className="text-gray-700">
              By eliminating long commutes, we're reducing carbon footprints and giving you 
              precious hours of your day back for what matters most.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Neighborhood Vitality</h3>
            <p className="text-gray-700">
              Our spaces bring economic activity to residential areas, supporting local businesses 
              and creating vibrant, 24-hour neighborhoods.
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
                    Just like searching for an apartment on StreetEasy, browse our curated listings of 
                    converted residential spaces that now offer professional work environments throughout NYC.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold mr-4">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Find Your Perfect Match</h3>
                  <p className="text-gray-700">
                    Filter by neighborhood, amenities, price, and membership type to find the ideal 
                    workspace that fits your professional needs and location preferences.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold mr-4">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Book Your Space</h3>
                  <p className="text-gray-700">
                    Connect directly with space providers through our platform to secure your membership 
                    and start enjoying a professional environment just minutes from your home.
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
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What Our Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700 mb-4">
              "MediGrid has completely changed my work-life balance. I save two hours of commuting every day, 
              and I've made friends with neighbors I never knew before."
            </p>
            <p className="font-semibold">— Sarah K., Graphic Designer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700 mb-4">
              "The space feels like a perfect blend of home comfort and professional environment. 
              I'm more productive here than I ever was in my corporate office."
            </p>
            <p className="font-semibold">— Michael T., Software Engineer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700 mb-4">
              "As a small business owner, having an affordable, beautiful space to meet clients in my 
              neighborhood has been game-changing for my practice."
            </p>
            <p className="font-semibold">— Aisha R., Therapist</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Join the MediGrid Community</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          We're expanding across NYC neighborhoods, bringing the future of work closer to home.
          Be part of the movement to reimagine how New Yorkers work.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/locations" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Explore Locations
          </Link>
          <Link 
            href="/membership" 
            className="inline-block bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            View Membership Options
          </Link>
        </div>
      </div>
      
      {/* Add this script for the image slider functionality */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const sliderHandle = document.getElementById('slider-handle');
          const overlayImage = document.getElementById('overlay-image');
          const container = sliderHandle.parentElement;
          
          let isDragging = false;
          
          function updateSliderPosition(clientX) {
            const containerRect = container.getBoundingClientRect();
            let position = ((clientX - containerRect.left) / containerRect.width) * 100;
            
            // Constrain position between 0 and 100
            position = Math.max(0, Math.min(100, position));
            
            // Update slider handle position
            sliderHandle.style.left = \`\${position}%\`;
            
            // Update clip path of the overlay image
            overlayImage.style.clipPath = \`polygon(0 0, \${position}% 0, \${position}% 100%, 0 100%)\`;
          }
          
          sliderHandle.addEventListener('mousedown', function(e) {
            isDragging = true;
            e.preventDefault();
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
          });
          
          document.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            updateSliderPosition(e.touches[0].clientX);
          });
          
          document.addEventListener('touchend', function() {
            isDragging = false;
          });
        });
      ` }}/>
    </div>
  );
}
