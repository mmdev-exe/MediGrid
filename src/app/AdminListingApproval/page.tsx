"use client";

import React, { useState, useEffect } from "react";
import { FiCheck, FiX, FiRefreshCw, FiLock } from "react-icons/fi";

// Interface for the building data
interface Building {
  id: string;
  title: string;
  location: string;
  altAddress?: string;
  price: number;
  size: number;
  images?: string[];
  daysOnMarket: number;
  lastPriceChange: string;
  agent: {
    name: string;
    company: string;
    office: string;
    image: string;
  };
  status: string;
}

export default function AdminListingApproval() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch pending listings from API Gateway
  const fetchPendingListings = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://ukd9ctaie1.execute-api.us-east-1.amazonaws.com/Get-listings/get-pending-listings",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch pending listings");
      }

      const data = await response.json();
      setBuildings(data); // Set the raw DB response
    } catch (err) {
      setError("Failed to load pending listings. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle password submission
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "MediGrid") {
      setIsAuthenticated(true);
      fetchPendingListings();
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  // Approve or reject listing
  const handleApproval = async (action: "approve" | "reject", buildingId: string) => {
    const endpoint =
      action === "approve"
        ? "https://06u5wb7shr.execute-api.us-east-1.amazonaws.com/default/approve"
        : "https://your-api-gateway-endpoint/reject"; // Replace with your reject endpoint

    try {
      const response = await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ listingId: buildingId }),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${action} listing`);
      }

      // Remove the approved/rejected listing from the list
      setBuildings((prev) => prev.filter((building) => building.id !== buildingId));
      alert(`Listing ${action}d successfully!`);
    } catch (err) {
      setError(`Failed to ${action} listing. Please try again.`);
    }
  };

  // If not authenticated, show password form
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <FiLock className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Admin Access</h1>
            <p className="text-gray-600 text-sm mt-1">Enter password to manage listings</p>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}
          
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full font-medium transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // If no buildings to review
  if (buildings.length === 0 && !loading) {
    return (
      <div className="container max-w-7xl mx-auto py-12 px-4">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="rounded-full bg-blue-50 p-6 mb-6">
            <FiRefreshCw className="h-10 w-10 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No Pending Listings</h2>
          <p className="text-gray-600 max-w-md mb-6">
            There are currently no listings awaiting approval. Check back later or refresh to check for new submissions.
          </p>
          <button 
            onClick={fetchPendingListings} 
            className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full font-medium transition-colors flex items-center"
          >
            <FiRefreshCw className="mr-2 h-4 w-4" /> Check for New Listings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Listing Approval</h1>
            <p className="text-gray-600 mt-1">
              Review and manage {buildings.length} pending listings
            </p>
          </div>
          <button 
            onClick={fetchPendingListings} 
            className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full font-medium transition-colors flex items-center"
          >
            <FiRefreshCw className="mr-2 h-4 w-4" /> Refresh
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Listed</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {buildings.map((building) => (
                    <tr key={building.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-800">{building.title}</div>
                      
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-700">{building.location}</div>
                        {building.altAddress && (
                          <div className="text-sm text-gray-500">Alt: {building.altAddress}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                        ${building.price.toLocaleString()}/month
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                        {building.size.toLocaleString()} sq ft
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                        {building.daysOnMarket} days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full bg-yellow-100 text-yellow-800">
                          {building.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleApproval("approve", building.id)}
                            className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center"
                          >
                            <FiCheck className="mr-1 h-4 w-4" /> Approve
                          </button>
                          <button
                            onClick={() => handleApproval("reject", building.id)}
                            className="bg-red-400 hover:bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center"
                          >
                            <FiX className="mr-1 h-4 w-4" /> Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}