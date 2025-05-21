// app/profile/page.tsx
import React from 'react';

// Placeholder data
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'Loves camping and hiking. Enjoys spending weekends outdoors and exploring new trails.',
};

const createdCamps = [
  { id: 'camp1', name: 'Mountain View Camp', location: 'Alpine Meadows, High Sierras' },
  { id: 'camp2', name: 'Riverside Camp', location: 'Willow Creek, Forest Haven' },
  { id: 'camp3', name: 'Desert Oasis Camp', location: 'Red Rock Canyon, Mojave Desert' },
];
// const createdCamps = []; // Uncomment to test the "no camps" scenario

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* User Information Section */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6 md:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{user.name}</h1>
          <p className="text-md text-gray-600 mb-1">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-md text-gray-600 mt-4">
            <span className="font-semibold">Bio:</span> {user.bio}
          </p>
        </div>

        {/* Created Camps Section */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6 md:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">My Camps</h2>
          {createdCamps.length > 0 ? (
            <ul className="space-y-5">
              {createdCamps.map((camp) => (
                <li key={camp.id} className="p-5 bg-gray-50 rounded-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <h3 className="text-xl font-medium text-indigo-700 hover:text-indigo-800 transition-colors duration-300">{camp.name}</h3>
                  <p className="text-gray-500 text-sm">{camp.location}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 italic text-center py-4">You haven't created any camps yet.</p>
          )}
        </div>

        {/* Edit Profile Form Section */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Edit Profile</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                defaultValue={user.name}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-150 ease-in-out"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue={user.email}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-150 ease-in-out"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                id="bio"
                defaultValue={user.bio}
                rows={4}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-150 ease-in-out"
                placeholder="Tell us a little about yourself"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 border border-transparent rounded-lg shadow-md text-base font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 ease-in-out"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
