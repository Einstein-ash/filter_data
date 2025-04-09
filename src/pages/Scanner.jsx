import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './scannerCss.css';

const Scanner = () => {

  const navigate = useNavigate();

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [qrResult, setQrResult] = useState("");

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: 'environment' }
          },
          audio: false
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Camera error:", error);
        alert("Please allow camera access.");
      }
    };

    startCamera();
  }, []);

  const handleScreenClick = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
  
    if (!video || !canvas || !context) return;
  
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append('file', blob, 'frame.png');
  
      try {
        const res = await fetch('https://api.qrserver.com/v1/read-qr-code/', {
          method: 'POST',
          body: formData,
        });
  
        const data = await res.json();
        const qrText = data?.[0]?.symbol?.[0]?.data;
  
        if (qrText) {
          setQrResult(qrText);
          console.log("Scanned from server:", qrText);

          setTimeout(() => {
            navigate('/payment', {
              state: {
                qrText
              }
            });
            
          }, 1000); // delay of 1 second

        } else {
          alert("QR not found by server.");
        }
      } catch (err) {
        console.error("QR decode API failed:", err);
      }
    }, 'image/png');
  };


  return (
    <div className="main_scanner_container" onClick={handleScreenClick}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="full_screen_video"
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div className="scanner_black_shadow_"></div>

      {qrResult && (
        <p className="qr-result-display">Scanned: {qrResult}</p>
      )}
    </div>
  );
};

export default Scanner;



// upi://pay?pa=ashwanisingh46572-1@oksbi&pn=Einstein%20Ash&aid=uGICAgIDtloiwLA
// upi://pay?pa=harshbansal1717@okicici&pn=Harsh%20Bansal&aid=uGICAgIDX2sG3DQ
// upi://pay?pa=9599170096@ptsbi&pn=Sumit%20%20Kumar
// upi://pay?pa=sujalmittal2000@oksbi&pn=Sujal&aid=uGICAgMC0w4jvRg