import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  const handleVoiceInput = () => {
    history.push('/voice');
  };

  const handleSearch = () => {
    // Handle search functionality
    history.push('/voice');
  };

  return (
    <IonPage>
      <IonContent className="bg-black">
        <div className="min-h-screen bg-black text-white px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-sm">E</span>
              </div>
              <span className="text-white text-sm">GetPro</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-start mb-12">
            <h1 className="text-2xl font-normal text-white mb-4">
              No idea what to eat?
            </h1>
            <h2 className="text-2xl font-normal text-white mb-6">
              Let AI handle it."
            </h2>
            <p className="text-gray-400 text-sm mb-12">
              Get personalized food recommendations.
            </p>

            {/* Large Search Icon */}
            <div className="w-full flex justify-center mb-12">
              <button 
                onClick={handleSearch}
                className="w-48 h-48 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-24 h-24 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="21 21l-4.35-4.35"></path>
                </svg>
              </button>
            </div>

            {/* Search Input */}
            <div className="w-full mb-6">
              <input
                type="text"
                placeholder="What are you craving today?"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Nearby', 'Open Now', 'Popular', 'Surprise Me'].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Food Categories */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="text-2xl mb-2">🍗</div>
                <div className="text-white font-medium">Comfort Food</div>
                <div className="text-red-500 text-xl">🌶️</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="text-2xl mb-2">🌶️</div>
                <div className="text-white font-medium">Spicy Craving</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="text-2xl mb-2">🍕</div>
                <div className="text-white font-medium">Budget Meal</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="text-2xl mb-2">🥗</div>
                <div className="text-white font-medium">Light & Healthy</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="text-2xl mb-2">❄️</div>
                <div className="text-white font-medium">Warm & Cozy</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-white font-medium">Quick Bites</div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
