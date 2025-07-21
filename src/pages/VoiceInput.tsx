import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { arrowBack, close, chatbubbleOutline, micOutline, stopOutline } from 'ionicons/icons';

const VoiceInput: React.FC = () => {
  const history = useHistory();
  const [isListening, setIsListening] = useState(false);
  const [userInput, setUserInput] = useState("I'm really hungry, but I want something quick and spicy that's under $5.00");

  const handleBack = () => {
    history.goBack();
  };

  const handleMicClick = () => {
    setIsListening(!isListening);
    // Simulate processing and redirect to chat results
    setTimeout(() => {
      history.push('/chat');
    }, 2000);
  };

  const handleClose = () => {
    history.push('/home');
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
            
            <IonButton fill="clear" onClick={handleClose}>
              <IonIcon icon={close} className="text-gray-700" />
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative">
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 pt-24">
            {/* Voice Visualization */}
            <div className="relative mb-8">
              <div className={`w-40 h-40 rounded-full bg-gradient-to-br from-blue-300 to-purple-400 flex items-center justify-center ${isListening ? 'animate-pulse' : ''}`}>
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-70"></div>
                </div>
              </div>
              {isListening && (
                <div className="absolute inset-0 w-40 h-40 rounded-full border-4 border-blue-300 animate-ping"></div>
              )}
            </div>

            {/* User Input Display */}
            {userInput && (
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 max-w-sm mx-auto">
                <p className="text-gray-800 text-center font-medium">
                  {userInput}
                </p>
              </div>
            )}

            {/* Status Text */}
            <p className="text-gray-600 text-center mb-12">
              {isListening ? "Listening..." : "Go Ahead, I'm listening..."}
            </p>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center justify-center space-x-8">
              {/* Chat Button */}
              <IonButton fill="solid" shape="round" className="w-12 h-12 bg-white text-gray-600">
                <IonIcon icon={chatbubbleOutline} />
              </IonButton>

              {/* Main Mic Button */}
              <IonButton 
                fill="solid"
                shape="round"
                className={`w-20 h-20 ${
                  isListening 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                }`}
                onClick={handleMicClick}
              >
                {isListening ? (
                  <IonIcon icon={stopOutline} className="text-white text-2xl" />
                ) : (
                  <IonIcon icon={micOutline} className="text-white text-2xl" />
                )}
              </IonButton>

              {/* Close Button */}
              <IonButton fill="solid" shape="round" className="w-12 h-12 bg-white text-gray-600" onClick={handleClose}>
                <IonIcon icon={close} />
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default VoiceInput;

            {/* Status Text */}
            <p className="text-gray-600 text-center mb-12">
              {isListening ? "Listening..." : "Go Ahead, I'm listening..."}
            </p>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center justify-center space-x-8">
              {/* Chat Button */}
              <button className="p-4 bg-white rounded-full shadow-lg">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>

              {/* Main Mic Button */}
              <button 
                onClick={handleMicClick}
                className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all ${
                  isListening 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                }`}
              >
                {isListening ? (
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                ) : (
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"/>
                  </svg>
                )}
              </button>

              {/* Close Button */}
              <button onClick={handleClose} className="p-4 bg-white rounded-full shadow-lg">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default VoiceInput; 