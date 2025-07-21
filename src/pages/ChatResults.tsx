import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonCard, IonCardContent, IonChip, IonInput } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { arrowBack, ellipsisHorizontal, star, location, bookmark, send } from 'ionicons/icons';

const ChatResults: React.FC = () => {
  const history = useHistory();
  const [newMessage, setNewMessage] = useState('');

  const handleBack = () => {
    history.goBack();
  };

  const foodRecommendations = [
    {
      id: 1,
      name: 'Thai Tom Yum',
      price: '$4.00',
      restaurant: 'ThaiLicious Express',
      rating: 4.6,
      distance: '1000m',
      image: '🍲',
      isPopular: true
    },
    {
      id: 2,
      name: 'Spicy Noodles',
      price: '$4.90',
      restaurant: 'Kemong Noodles',
      rating: 4.9,
      distance: '800m',
      image: '🍜',
      isPopular: false
    }
  ];

  const messages = [
    {
      id: 1,
      text: "I'm really hungry, but I want something quick and spicy that's under $5.00",
      isUser: true,
      time: '12:00'
    },
    {
      id: 2,
      text: "You got it! Based on your craving for something quick, spicy, and affordable, here are 3 delicious picks near you:",
      isUser: false,
      time: '12:00'
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="bg-white">
          <div className="flex items-center justify-between px-4 py-2">
            <IonButton fill="clear" onClick={handleBack}>
              <IonIcon icon={arrowBack} className="text-gray-700" />
            </IonButton>
            
            <IonTitle className="text-center">
              <span className="text-gray-900 font-medium">Chat with </span>
              <span className="text-blue-500 font-medium">Eato</span>
            </IonTitle>
            
            <IonButton fill="clear">
              <IonIcon icon={ellipsisHorizontal} className="text-gray-600" />
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="bg-gray-50">
        <div className="min-h-screen bg-gray-50 flex flex-col">
          
          {/* Chat Messages */}
          <div className="flex-1 px-6 py-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  message.isUser 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-800 shadow-sm'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.time}
                  </p>
                </div>
                {!message.isUser && (
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center ml-2 mt-1">
                    <span className="text-white text-sm font-bold">E</span>
                  </div>
                )}
              </div>
            ))}

            {/* AI Response */}
            <div className="flex justify-start mb-4">
              <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl bg-white text-gray-800 shadow-sm">
                <p className="text-sm">You got it! Based on your craving for something quick, spicy, and affordable, here are 3 delicious picks near you :</p>
                <p className="text-xs mt-1 text-gray-500">12:00</p>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center ml-2 mt-1">
                <span className="text-white text-sm font-bold">E</span>
              </div>
            </div>

            {/* Food Recommendations */}
            <div className="space-y-3 mt-6">
              {foodRecommendations.map((food) => (
                <IonCard key={food.id} className="rounded-2xl shadow-sm m-0">
                  <IonCardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      {/* Food Image */}
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">{food.image}</span>
                      </div>
                      
                      {/* Food Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">{food.name}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-sm text-gray-600">{food.restaurant}</span>
                              {food.isPopular && (
                                <IonChip className="bg-red-500 text-white text-xs px-2 py-1 h-6">
                                  Popular
                                </IonChip>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-gray-900 text-lg">{food.price}</span>
                            <IonButton fill="clear" size="small" className="text-gray-400 p-1">
                              <IonIcon icon={bookmark} />
                            </IonButton>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <IonIcon icon={star} className="text-yellow-400 text-sm" />
                              <span className="text-sm font-medium text-gray-700">{food.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <IonIcon icon={location} className="text-gray-400 text-sm" />
                              <span className="text-sm text-gray-600">{food.distance}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <IonInput
                  value={newMessage}
                  placeholder="Ask me anything..."
                  onIonInput={(e) => setNewMessage(e.detail.value!)}
                  className="bg-gray-100 rounded-2xl px-4 py-3"
                  onKeyPress={(e: any) => e.key === 'Enter' && handleSendMessage()}
                />
              </div>
              <IonButton 
                fill="solid"
                shape="round"
                className="w-12 h-12 bg-gray-900 text-white"
                onClick={handleSendMessage}
              >
                <span className="font-bold">0</span>
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ChatResults; 