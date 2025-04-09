import React, { useRef, useEffect } from 'react';
import './scannerCss.css';

const Scanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: 'environment' } // back cam
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
        className="full_screen_video"
      />

      <div className="scanner_black_shadow_"></div>
    </div>
  );
};

export default Scanner;
