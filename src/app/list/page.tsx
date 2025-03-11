"use client"

import { useState, useRef } from "react";
import Footer from "@/components/Footer";
import { FiUpload, FiX, FiCheck, FiInfo, FiMapPin, FiDollarSign, FiMaximize, FiHome, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ListRentalPage() {
  // Form state
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    neighborhood: "",
    altAddress: "",
    price: "",
    size: "",
    category: "premium",
    availableFrom: "",
    virtualTour: false,
    description: "",
    fullDescription: "",
    features: ["", "", "", "", "", ""],
    status: "pending"
  });
  
  // Images state
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

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

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  // Handle feature input changes
  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index] = value;
    setFormData(prev => ({ ...prev, features: updatedFeatures }));
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      
      // Limit to 5 images total
      const totalImages = [...images, ...newFiles].slice(0, 5);
      setImages(totalImages);
      
      // Create preview URLs
      const newPreviewUrls = totalImages.map(file => URL.createObjectURL(file));
      setImagePreviewUrls(newPreviewUrls);
    }
  };

  // Remove an image
  const removeImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    
    // Update preview URLs and revoke the removed URL to prevent memory leaks
    URL.revokeObjectURL(imagePreviewUrls[index]);
    const updatedPreviewUrls = [...imagePreviewUrls];
    updatedPreviewUrls.splice(index, 1);
    setImagePreviewUrls(updatedPreviewUrls);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Validate required fields
      const requiredFields = [
        "title", "location", "neighborhood", "price", 
        "size", "category", "availableFrom", "description", "fullDescription"
      ];
      
      for (const field of requiredFields) {
        if (!formData[field as keyof typeof formData]) {
          throw new Error(`Missing required field: ${field}`);
        }
      }

      // Create JSON payload
      const listingData = {
        title: formData.title,
        location: formData.location,
        neighborhood: formData.neighborhood,
        altAddress: formData.altAddress,
        price: parseFloat(formData.price),
        size: parseInt(formData.size),
        category: formData.category,
        availableFrom: formData.availableFrom,
        virtualTour: formData.virtualTour,
        description: formData.description,
        fullDescription: formData.fullDescription,
        features: formData.features.filter(feature => feature.trim() !== ""),
        status: formData.status,
        submittedAt: new Date().toISOString()
      };

      console.log("Submitting data:", listingData);

      // Try both URL formats
      const urls = [
        "https://559h09g3y1.execute-api.us-east-1.amazonaws.com/Sub",
        "https://559h09g3y1.execute-api.us-east-1.amazonaws.com/Sub/submit-listing"
      ];
      
      let response = null;
      let error = null;
      
      // Try each URL
      for (const url of urls) {
        try {
          console.log(`Trying URL: ${url}`);
          response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Add these headers to help with CORS issues
              "Accept": "application/json",
              "Origin": window.location.origin
            },
            body: JSON.stringify(listingData),
          });
          
          if (response.ok) {
            console.log(`Success with URL: ${url}`);
            break;
          } else {
            const errorText = await response.text();
            console.error(`Error with URL ${url}:`, response.status, response.statusText, errorText);
            error = new Error(`Failed with URL ${url}: ${response.status} ${response.statusText}`);
          }
        } catch (e) {
          console.error(`Exception with URL ${url}:`, e);
          error = e;
        }
      }

      if (!response || !response.ok) {
        throw error || new Error("Failed to submit listing with all URLs");
      }

      const result = await response.json();
      console.log("Listing submitted successfully:", result);

      setSubmitSuccess(true);

      // Reset form
      setFormData({
        title: "",
        location: "",
        neighborhood: "",
        altAddress: "",
        price: "",
        size: "",
        category: "premium",
        availableFrom: "",
        virtualTour: false,
        description: "",
        fullDescription: "",
        features: ["", "", "", "", "", ""],
        status: "pending"
      });
      setImages([]);
      setImagePreviewUrls([]);
    } catch (error) {
      console.error("Error submitting listing:", error);
      setSubmitError(`There was an error submitting your listing: ${error instanceof Error ? error.message : 'Unknown error'}. Check the console for details.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-w-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gray-50 text-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold mb-4 text-black">List Your Rental Property</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Showcase your medical office space to thousands of potential tenants looking for the perfect location.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Form section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {submitSuccess ? (
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheck className="text-green-500 w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Listing Submitted Successfully!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for listing your property with us. Our team will review your submission and get in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  List Another Property
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="p-8 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Property Details</h2>
                  
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                      {submitError}
                    </div>
                  )}
                  
                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Property Title*
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
                        placeholder="e.g., Premium Broadway Office Space"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Property Category*
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
                      >
                        <option value="premium">Premium Suite</option>
                        <option value="compact">Compact Office</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Street Address*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiMapPin className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
                          placeholder="e.g., 571 West 139th Street, New York"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-1">
                        Neighborhood*
                      </label>
                      <select
                        id="neighborhood"
                        name="neighborhood"
                        value={formData.neighborhood}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
                      >
                        <option value="">Select a neighborhood</option>
                        <option value="manhattan_valley">Manhattan Valley</option>
                        <option value="morningside_heights">Morningside Heights</option>
                        <option value="harlem">Harlem</option>
                        <option value="upper_west_side">Upper West Side</option>
                        <option value="washington_heights">Washington Heights</option>
                        <option value="inwood">Inwood</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="altAddress" className="block text-sm font-medium text-gray-700 mb-1">
                        Alternative Address (Optional)
                      </label>
                      <input
                        type="text"
                        id="altAddress"
                        name="altAddress"
                        value={formData.altAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
                        placeholder="e.g., 3420 Broadway"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Rent (USD)*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiDollarSign className="text-gray-400" />
                        </div>
                        <input
                          type="number"
                          id="price"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          required
                          min="1"
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
                          placeholder="e.g., 4860"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                        Size (sq ft)*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiMaximize className="text-gray-400" />
                        </div>
                        <input
                          type="number"
                          id="size"
                          name="size"
                          value={formData.size}
                          onChange={handleInputChange}
                          required
                          min="1"
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
                          placeholder="e.g., 1215"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="availableFrom" className="block text-sm font-medium text-gray-700 mb-1">
                        Available From*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiCalendar className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="availableFrom"
                          name="availableFrom"
                          value={formData.availableFrom}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
                          placeholder="e.g., Immediate, Next Month, 2 Months"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <input
                        type="text"
                        id="status"
                        name="status"
                        value="Pending Review"
                        disabled
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
                      />
                      <p className="mt-1 text-xs text-gray-500">This field cannot be edited</p>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="virtualTour"
                        name="virtualTour"
                        checked={formData.virtualTour}
                        onChange={handleCheckboxChange}
                        className="h-5 w-5 text-blue-400 rounded border-gray-300 focus:ring-blue-300"
                      />
                      <label htmlFor="virtualTour" className="ml-2 text-sm font-medium text-gray-700">
                        Virtual Tour Available
                      </label>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants} className="p-8 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Property Features</h2>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Key Features (Add up to 6)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {formData.features.map((feature, index) => (
                        <div key={index} className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiCheck className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            value={feature}
                            onChange={(e) => handleFeatureChange(index, e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
                            placeholder={`Feature ${index + 1}, e.g., Windows in every room`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Short Description* (150-200 characters)
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
                      placeholder="Brief overview of your property..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="fullDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Description*
                    </label>
                    <textarea
                      id="fullDescription"
                      name="fullDescription"
                      value={formData.fullDescription}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
                      placeholder="Detailed description of your property..."
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="p-8 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Property Images</h2>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="imageUpload"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <FiUpload className="w-10 h-10 mb-3 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            PNG, JPG or WEBP (MAX. 5 images)
                          </p>
                        </div>
                        <input
                          id="imageUpload"
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                  
                  {imagePreviewUrls.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
                      {imagePreviewUrls.map((url, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={url}
                            alt={`Property image ${index + 1}`}
                            className="h-32 w-full object-cover rounded-lg border border-gray-200"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Remove image"
                          >
                            <FiX className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
                
                <motion.div variants={itemVariants} className="p-8">
                  <div className="bg-blue-50 rounded-lg p-4 mb-6 flex items-start">
                    <FiInfo className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      By submitting this form, you agree to our terms and conditions. Your listing will be reviewed by our team before being published.
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Submit Listing"
                      )}
                    </button>
                  </div>
                </motion.div>
              </form>
            )}
          </motion.div>
          
          {/* FAQ section */}
          <motion.div 
            className="mt-16 bg-white rounded-xl shadow-sm p-8 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">How long does it take for my listing to appear?</h3>
                <p className="text-gray-600">
                  After submission, our team reviews all listings within 24-48 hours. Once approved, your property will be immediately visible to potential tenants.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Can I edit my listing after submission?</h3>
                <p className="text-gray-600">
                  Yes, you can edit your listing at any time by logging into your account and navigating to "My Listings" in your dashboard.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">How do I schedule viewings with interested tenants?</h3>
                <p className="text-gray-600">
                  When a tenant expresses interest, you'll receive a notification. You can then coordinate directly with them or use our scheduling tool to arrange viewings.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
    </div>
  );
}
