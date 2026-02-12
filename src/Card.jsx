import React from "react";

const Card = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10 bg-gray-50 min-h-screen">
        {/* Card 1 */}
        <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=60&w=800"
            alt="Mountain Retreat"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Mountain Retreat
            </h2>
            <p className="text-gray-600 mt-2">
              Escape to the serene beauty of the mountains. Perfect for hiking and peace.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Explore
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=60&w=800"
            alt="Ocean Paradise"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Ocean Paradise
            </h2>
            <p className="text-gray-600 mt-2">
              Enjoy crystal-clear waters, soft beaches, and tropical sunshine.
            </p>
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
              Discover
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=60&w=800"
            alt="City Lights"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">City Lights</h2>
            <p className="text-gray-600 mt-2">
              Discover the pulse of modern city life filled with culture and energy.
            </p>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Visit
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=60&w=800"
            alt="Forest Cabin"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Forest Cabin</h2>
            <p className="text-gray-600 mt-2">
              Relax in a cozy cabin surrounded by lush green forest and fresh air.
            </p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Stay
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=60&w=800"
            alt="Desert Escape"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Desert Escape</h2>
            <p className="text-gray-600 mt-2">
              Find peace under the desert sun and explore golden sand dunes.
            </p>
            <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
              Journey
            </button>
          </div>
        </div>

        {/* Card 6 */}
        <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=60&w=800"
            alt="Tropical Island"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Tropical Island</h2>
            <p className="text-gray-600 mt-2">
              Experience paradise with palm trees, white sands, and blue skies.
            </p>
            <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
