"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { FiMapPin, FiPhone, FiMail, FiMessageSquare, FiUser, FiCheckCircle, FiDownload, FiFileText, FiCalendar, FiVideo } from "react-icons/fi";

export default function ResourcesPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    submitted: false,
  });
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would normally handle the form submission to your backend
    setFormState({ ...formState, submitted: true });
    // Reset form after submission (in a real app, you'd do this after successful API response)
    setTimeout(() => {
    
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        submitted: false,
      });
    }, 3000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-navy-700 text-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-navy-100 max-w-3xl">
              Access our collection of resources to help you make informed decisions about medical spaces.
            </p>
          </div>
        </div>
        
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Contact information */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded mr-4">
              
                  <FiMapPin className="text-blue-400" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Our Office</h3>
                  <p className="text-gray-600">
                    123 Medical Plaza<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded mr-4">
                  <FiPhone className="text-blue-400" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+12125551234" className="hover:text-blue-500">(212) 555-1234</a>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Monday-Friday, 9am-6pm EST
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded mr-4">
                  <FiMail className="text-blue-400" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@medigrid.com" className="hover:text-blue-500">info@medigrid.com</a>
                  </p>
                  <p className="text-gray-500 text-sm">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium text-navy-800 mb-3">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-50 p-2 rounded-full hover:bg-blue-100 transition-colors">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-50 p-2 rounded-full hover:bg-blue-100 transition-colors">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-50 p-2 rounded-full hover:bg-blue-100 transition-colors">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                <div className="bg-blue-50 p-3 rounded mr-4">
                  <FiFileText className="text-blue-400" size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-gray-800">Medical Office Design Checklist</h3>
                  <p className="text-gray-600 text-sm">PDF, 1.2 MB</p>
                </div>
                <button className="text-blue-400 hover:text-blue-500">
                  <FiDownload size={20} />
                </button>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                <div className="bg-blue-50 p-3 rounded mr-4">
                  <FiFileText className="text-blue-400" size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-gray-800">Healthcare Facility Requirements Guide</h3>
                  <p className="text-gray-600 text-sm">PDF, 3.5 MB</p>
                </div>
                <button className="text-blue-400 hover:text-blue-500">
                  <FiDownload size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Resources sections */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Educational Resources</h2>
            
            {/* Webinars and events */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Upcoming Webinars & Events</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <FiCalendar className="text-blue-400 mr-2" />
                        <span className="text-gray-800 font-medium">{event.date}</span>
                      </div>
                      
                      <h3 className="font-semibold text-lg text-navy-800 mb-2">{event.title}</h3>
                      
                      <div className="flex items-center text-gray-600 mb-4">
                        <FiMapPin className="mr-1" />
                        <span>{event.location}</span>
                        {event.virtual && (
                          <span className="ml-2 bg-navy-100 text-navy-800 text-xs px-2 py-1 rounded">
                            Virtual
                          </span>
                        )}
                      </div>
                      
                      <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Video resources */}
            <section>
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Video Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48 bg-gray-200">
                    <img 
                      src="/images/video-thumbnail-1.jpg" 
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-blue-400 bg-opacity-80 rounded-full p-3">
                        <FiVideo className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-navy-800 mb-1">How to Evaluate a Medical Office Space</h3>
                    <p className="text-gray-600 text-sm">12:34 • Dr. Michael Chen</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48 bg-gray-200">
                    <img 
                      src="/images/video-thumbnail-2.jpg" 
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-blue-400 bg-opacity-80 rounded-full p-3">
                        <FiVideo className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-navy-800 mb-1">Medical Office Design Trends for 2023</h3>
                    <p className="text-gray-600 text-sm">18:45 • Sarah Johnson, Interior Designer</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48 bg-gray-200">
                    <img 
                      src="/images/video-thumbnail-3.jpg" 
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-blue-400 bg-opacity-80 rounded-full p-3">
                        <FiVideo className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-navy-800 mb-1">Negotiating Your Medical Office Lease</h3>
                    <p className="text-gray-600 text-sm">22:10 • James Wilson, Healthcare Attorney</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-navy-600 hover:text-navy-800 font-medium">
                  View All Videos
                </button>
              </div>
            </section>
            
            {/* Newsletter signup */}
            <section className="mt-16 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-8 border border-blue-200">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated</h2>
                  <p className="text-gray-700 max-w-2xl">
                    Subscribe to our newsletter for the latest resources, market insights, and exclusive content.
                  </p>
                </div>
                
                <div className="w-full md:w-auto">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-4 py-2 rounded-l-full border-y border-l border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    />
                    <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-r-full font-medium transition-colors">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// Sample data for events
const events = [
  {
    id: 1,
    title: "Healthcare Real Estate Market Update",
    date: "June 15, 2023",
    location: "Online",
    virtual: true
  },
  {
    id: 2,
    title: "Medical Office Design Workshop",
    date: "July 8, 2023",
    location: "New York City",
    virtual: false
  },
  {
    id: 3,
    title: "Navigating Healthcare Leases",
    date: "August 22, 2023",
    location: "Online",
    virtual: true
  }
];