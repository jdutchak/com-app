import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonSearchbar, IonChip, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { home, bookmark, leafOutline, flameOutline, fastFoodOutline, snowOutline, flashOutline } from 'ionicons/icons';

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
      <IonHeader>
        <IonToolbar className="bg-white">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">E</span>
              </div>
              <span className="text-gray-800 font-medium">GetPro</span>
            </div>
            <IonButton fill="clear" className="text-gray-600">
              <IonIcon icon="ellipsis-horizontal" />
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="bg-gray-50">
        <div className="px-6 py-8">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-light text-gray-900 mb-2">
              No idea what to <span className="text-blue-500 font-medium">eat</span>?
            </h1>
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Let <span className="text-blue-500 font-medium">AI handle it</span>."
            </h2>
            <p className="text-gray-600 text-base">
              Get personalized food recommendations.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <IonSearchbar
              placeholder="What are you craving today?"
              className="custom-searchbar"
              onIonInput={handleSearch}
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['Nearby', 'Open Now', 'Popular', 'Surprise Me'].map((category) => (
              <IonChip key={category} className="bg-gray-200 text-gray-700">
                {category}
              </IonChip>
            ))}
          </div>

          {/* Food Categories Grid */}
          <IonGrid className="px-0">
            <IonRow>
              <IonCol size="6">
                <IonCard className="category-card bg-white shadow-sm rounded-2xl m-0" onClick={handleVoiceInput}>
                  <IonCardContent className="p-4">
                    <div className="text-2xl mb-2">🍗</div>
                    <div className="text-gray-800 font-medium text-sm">Comfort</div>
                    <div className="text-gray-800 font-medium text-sm">Food</div>
                    <div className="text-red-500 text-lg mt-1">🌶️</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard className="category-card bg-white shadow-sm rounded-2xl m-0" onClick={handleVoiceInput}>
                  <IonCardContent className="p-4">
                    <div className="text-2xl mb-2">🌶️</div>
                    <div className="text-gray-800 font-medium text-sm">Spicy</div>
                    <div className="text-gray-800 font-medium text-sm">Craving</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonCard className="category-card bg-white shadow-sm rounded-2xl m-0" onClick={handleVoiceInput}>
                  <IonCardContent className="p-4">
                    <div className="text-2xl mb-2">🍕</div>
                    <div className="text-gray-800 font-medium text-sm">Budget</div>
                    <div className="text-gray-800 font-medium text-sm">Meal</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard className="category-card bg-white shadow-sm rounded-2xl m-0" onClick={handleVoiceInput}>
                  <IonCardContent className="p-4">
                    <div className="text-2xl mb-2">🥗</div>
                    <div className="text-gray-800 font-medium text-sm">Light &</div>
                    <div className="text-gray-800 font-medium text-sm">Healthy</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonCard className="category-card bg-white shadow-sm rounded-2xl m-0" onClick={handleVoiceInput}>
                  <IonCardContent className="p-4">
                    <div className="text-2xl mb-2">❄️</div>
                    <div className="text-gray-800 font-medium text-sm">Warm &</div>
                    <div className="text-gray-800 font-medium text-sm">Cozy</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard className="category-card bg-white shadow-sm rounded-2xl m-0" onClick={handleVoiceInput}>
                  <IonCardContent className="p-4">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-gray-800 font-medium text-sm">Quick</div>
                    <div className="text-gray-800 font-medium text-sm">Bites</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        
        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <IonButton fill="clear" className="text-gray-900">
              <IonIcon icon={home} size="large" />
            </IonButton>
            
            <IonButton 
              fill="solid" 
              shape="round" 
              className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500"
              onClick={handleVoiceInput}
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full opacity-80"></div>
            </IonButton>
            
            <IonButton fill="clear" className="text-gray-600">
              <IonIcon icon={bookmark} size="large" />
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
