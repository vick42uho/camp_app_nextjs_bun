// app/camp/page.tsx
import React from 'react';

// Placeholder data for camps
const camps = [
  {
    id: 'campA',
    name: 'Sunny Meadows Campground',
    location: 'Golden Valley, CA',
    description: 'A beautiful and spacious spot perfect for summer camping, offering great views and hiking trails.',
  },
  {
    id: 'campB',
    name: 'Forest Retreat Camp',
    location: 'Redwood National Park, CA',
    description: 'Escape to nature in this secluded forest camp, surrounded by towering redwood trees.',
  },
  {
    id: 'campC',
    name: 'Lakeside Haven',
    location: 'Lake Tahoe, NV',
    description: 'Enjoy water activities and stunning lake views at this popular camping destination.',
  },
  {
    id: 'campD',
    name: 'Desert Mirage Oasis',
    location: 'Joshua Tree, CA',
    description: 'Experience the unique beauty of the desert with clear night skies for stargazing.',
  }
];

// const camps = []; // Uncomment to test the "no camps" scenario

const CampPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-50 to-blue-100 py-10 antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">
            Discover Your Next Adventure
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Browse our curated list of unique campgrounds and book your stay.
          </p>
        </header>

        {/* Camps List Section */}
        {camps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {camps.map((camp) => (
              <div 
                key={camp.id} 
                className="bg-white shadow-2xl rounded-xl overflow-hidden transition-all duration-500 ease-in-out hover:shadow-indigo-300/50 flex flex-col"
              >
                {/* You can add an image here if you have URLs */}
                {/* <img src="https://source.unsplash.com/random/400x300?camp" alt={`Image of ${camp.name}`} className="w-full h-48 object-cover" /> */}
                <div className="p-6 flex-grow">
                  <h2 className="text-2xl font-bold text-indigo-700 mb-3">{camp.name}</h2>
                  <p className="text-md text-gray-700 mb-2">
                    <span className="font-semibold">Location:</span> {camp.location}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{camp.description}</p>
                </div>
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                        View Details
                    </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white shadow-lg rounded-lg">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-xl font-medium text-gray-900">No camps available</h3>
            <p className="mt-1 text-sm text-gray-500">Please check back later or add a new camp!</p>
          </div>
        )}

        {/* Add Camp Form Section */}
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden p-8 md:p-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Add a New Camp</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label htmlFor="campName" className="block text-sm font-medium text-gray-700 mb-1.5">
                Camp Name
              </label>
              <input
                type="text"
                id="campName"
                className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow duration-200"
                placeholder="e.g., Whispering Pines"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1.5">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow duration-200"
                placeholder="e.g., Near Big Bear Lake, CA"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1.5">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow duration-200"
                placeholder="Describe the camp, its amenities, and nearby attractions."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3.5 px-6 border border-transparent rounded-lg shadow-md text-base font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Add Camp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CampPage;
