

import React, { useState } from "react";
import { MapPin, Compass, Mountain, Calendar } from "lucide-react";

const places = [
  {
    name: "Chopta",
    image: "/chopta.jpg",
    description:
      "Chopta, located in Uttarakhand, is known as the 'Mini Switzerland' of India. Surrounded by lush meadows and majestic Himalayan peaks, it is a base for treks to Tungnath and Chandrashila.",
    highlights: ["Trekking", "Nature", "Photography"],
    bestTime: "Apr-Nov"
  },
  {
    name: "Champhai",
    image: "/champhai.jpg",
    description:
      "Champhai, situated in Mizoram, is a scenic town on the Indo-Myanmar border. Known for its rolling vineyards and panoramic views of Myanmar's hills, steeped in history as a gateway for ancient trade routes.",
    highlights: ["Vineyards", "Culture", "Border Town"],
    bestTime: "Oct-Mar"
  },
  {
    name: "Majuli",
    image: "/majuli.jpg",
    description:
      "Majuli, the world's largest river island, is located in Assam on the Brahmaputra River. Renowned for its unique culture and neo-Vaishnavite tradition, with numerous satras preserving art, dance, and music.",
    highlights: ["River Island", "Heritage", "Festivals"],
    bestTime: "Nov-Apr"
  },
];

const Home = () => {
  const [hoveredPlace, setHoveredPlace] = useState(null);

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 py-12 bg-linear-to-br from-slate-950 via-slate-900 to-teal-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation hint */}
      <div className="absolute top-6 left-6 flex items-center gap-2 text-teal-400/80 text-sm font-medium">
        <Compass className="w-4 h-4" />
        <span>Explore India</span>
      </div>

      {/* Introduction Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-24 w-full max-w-7xl relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000"></div>
          <img
            src="/Front.png"
            alt="India Tourist"
            className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="flex-1 flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 text-sm font-medium">Discover Hidden Gems</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-teal-300 via-teal-400 to-blue-400 mb-6 leading-tight">
            Welcome to
            <br />
            <span className="text-white">TravelVista</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover the beauty and history of India's most enchanting tourist
            destinations. Explore hidden gems to famous landmarks, diving into
            the stories, culture, and natural wonders that make each destination
            unique.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="group relative bg-linear-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-teal-500/50 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Exploring
                <Mountain className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            
          </div>
        </div>
      </section>

      {/* Tourist Places Section */}
      <section className="w-full max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
            Featured Tourist Places
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-teal-500 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <div
              key={place.name}
              onMouseEnter={() => setHoveredPlace(index)}
              onMouseLeave={() => setHoveredPlace(null)}
              className="group relative bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2"
            >
              {/* Image container with overlay */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Best time badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-teal-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {place.bestTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                  {place.name}
                </h3>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {place.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs font-medium text-teal-300 bg-teal-500/20 border border-teal-500/30 px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-4">
                  {place.description}
                </p>
                
                {/* Call to action */}
                <button className="w-full bg-white/5 hover:bg-teal-500/20 border border-white/10 hover:border-teal-500/50 text-white font-medium py-3 rounded-xl transition-all duration-300 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100">
                  Learn More
                </button>
              </div>

              {/* Hover effect glow */}
              <div className="absolute inset-0 bg-linear-to-r from-teal-500/0 via-teal-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full max-w-7xl mt-24 mb-12 relative z-10">
        <div className="bg-linear-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Explore more destinations, plan your trips, and discover the incredible diversity of India's landscapes and cultures.
          </p>
          <button className="bg-white text-slate-900 hover:bg-teal-400 hover:text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
            Browse All Destinations
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
