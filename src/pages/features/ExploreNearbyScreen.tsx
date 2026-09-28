import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { BottomNavigation } from '../../components/layout/BottomNavigation';
import { MapCard } from '../../components/domain/MapCard';
import { SearchField } from '../../components/common/SearchField';
import { mockNearbyPlaces } from '../../mock/nearbyPlaces';
import { Star, Navigation, MapPin } from 'lucide-react';

export const ExploreNearbyScreen: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Food', 'Cafes', 'Hotels', 'Hospitals', 'Transport', 'ATM', 'Attractions', 'Shopping'];

  const filteredPlaces = mockNearbyPlaces.filter((place) => {
    const matchesCat = selectedCategory === 'All' || place.category === selectedCategory;
    const matchesQuery = place.name.toLowerCase().includes(searchQuery.toLowerCase()) || place.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation 
        title="Explore Nearby" 
        subtitle="Connaught Place, Delhi" 
        showBack={true}
        onBackClick={() => navigate('/my-safar')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Search Bar */}
        <SearchField
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search places..."
        />

        {/* Categories Horizontal Selector */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar -mx-6 px-6 py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`py-1.5 px-3.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Vector Map Card Placeholder */}
        <MapCard places={filteredPlaces} selectedCategory={selectedCategory} />

        {/* Nearby Place Cards */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Nearby Places ({filteredPlaces.length})
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {filteredPlaces.length === 0 ? (
              <div className="bg-white rounded-2xl p-6 text-center border border-slate-100 space-y-1">
                <p className="text-xs font-bold text-slate-700">No places found</p>
                <p className="text-[11px] text-slate-400 font-medium">Try searching with another keyword or selecting a different category.</p>
              </div>
            ) : (
              filteredPlaces.map((place) => (
                <div
                  key={place.id}
                  className="bg-white rounded-2xl p-3.5 shadow-sm border border-slate-100 flex items-center justify-between hover:border-slate-200 transition-all"
                >
                  <div className="flex items-center space-x-3.5">
                    <img
                      src={place.imageUrl}
                      alt={place.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">{place.name}</h4>
                      <p className="text-xs text-slate-500 font-medium flex items-center mt-0.5">
                        <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                        {place.distance} • {place.category}
                      </p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="text-[11px] font-bold text-slate-800">{place.rating}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`Simulating navigation directions to ${place.name}`)}
                    className="py-2 px-3 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl text-xs font-bold flex items-center space-x-1 transition-all active:scale-95 shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Directions</span>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
