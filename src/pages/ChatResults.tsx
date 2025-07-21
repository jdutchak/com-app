import React, { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';

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
      <IonContent className="bg-gray-50">
        <div className="min-h-screen bg-gray-50 flex flex-col">
          {/* Header */}
          <div className="bg-white px-6 py-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button onClick={handleBack}>
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg font-semibold text-gray-900">Chat with</h1>
                  <span className="text-lg font-semibold text-blue-500">Eato</span>
                </div>
              </div>
              
              <button className="p-2">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>

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

            {/* Food Recommendations */}
            <div className="space-y-3 mt-6">
              {foodRecommendations.map((food) => (
                <div key={food.id} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">{food.image}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{food.name}</h3>
                        <span className="font-bold text-gray-900">{food.price}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-sm text-gray-600">{food.restaurant}</span>
                        {food.isPopular && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-700">{food.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <span className="text-sm text-gray-600">{food.distance}</span>
                          </div>
                        </div>
                        
                        <button className="p-2">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V5z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full pl-4 pr-4 py-3 bg-gray-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
              </div>
              <button 
                onClick={handleSendMessage}
                className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <span className="text-white font-bold">0</span>
              </button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ChatResults; 