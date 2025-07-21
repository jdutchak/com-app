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