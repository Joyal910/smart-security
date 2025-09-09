import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const handleWhatsApp = () => {
    const phoneNumber = '917994455047';
    const message = 'Hello! I would like to know more about your security and cleaning services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+9179944 55047';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button - Always visible */}
      <button
        onClick={handleWhatsApp}
        className="flex items-center justify-end space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
      >
        <span className="font-medium">WhatsApp</span>
        <MessageCircle className="h-5 w-5" />
      </button>

      {/* Call Button - Always visible */}
      <button
        onClick={handleCall}
        className="flex items-center justify-end space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
      >
        <span className="font-medium">Call Now</span>
        <Phone className="h-5 w-5" />
      </button>
    </div>
  );
};

export default FloatingCTA;