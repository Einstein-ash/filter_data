import React, { useRef, useEffect } from 'react';
import './scannerCss.css';

const Scanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        // Ask for rear camera (most common for scanning)
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: 'environment' } // rear cam on mobile
          },
          audio: false
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Camera error:", error);
        alert("Please allow camera access in your mobile browser settings.");
      }
    };

    startCamera();
  }, []);

  return (
    <div className="main_scanner_container">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Scanner;
