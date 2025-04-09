// import React, { useRef, useEffect } from 'react';
// import './scannerCss.css';

// const Scanner = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: {
//             facingMode: { ideal: 'environment' } // back cam
//           },
//           audio: false
//         });

//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error("Camera error:", error);
//         alert("Please allow camera access in your mobile browser settings.");
//       }
//     };

//     startCamera();
//   }, []);

//   return (
//     <div className="main_scanner_container">
//       <video
//         ref={videoRef}
//         autoPlay
//         playsInline
//         muted
//         className="full_screen_video"
//       />

//       <div className="scanner_black_shadow_"></div>
//     </div>
//   );
// };

// export default Scanner;





import React, { useRef, useEffect, useState } from 'react';
import jsQR from 'jsqr';
import './scannerCss.css';

const Scanner = () => {
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
