"use client";
import React, { useState } from "react";

const MapComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="h-48 border mb-5 relative rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
          <span className="ml-2">Loading map ...</span>
        </div>
      )}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d997.2036914770368!2d36.985791!3d-1.285111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6d53a862003d%3A0xa7e7826d4e52657f!2sKellian%20Enterprises!5e0!3m2!1sen!2ske!4v1731263157961!5m2!1sen!2ske"
        className="w-full h-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={handleLoad}
      />
    </div>
  );
};

export default MapComponent;
