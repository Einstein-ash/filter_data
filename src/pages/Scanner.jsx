// import React, { useRef, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import './scannerCss.css';

// const Scanner = () => {

//   const navigate = useNavigate();

//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [qrResult, setQrResult] = useState("");

//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: {
//             facingMode: { ideal: 'environment' }
//           },
//           audio: false
//         });

//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error("Camera error:", error);
//         alert("Please allow camera access.");
//       }
//     };

//     startCamera();
//   }, []);

//   const handleScreenClick = async () => {
//     const video = videoRef.current;
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
  
//     if (!video || !canvas || !context) return;
  
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
//     canvas.toBlob(async (blob) => {
//       const formData = new FormData();
//       formData.append('file', blob, 'frame.png');
  
//       try {
//         const res = await fetch('https://api.qrserver.com/v1/read-qr-code/', {
//           method: 'POST',
//           body: formData,
//         });
  
//         const data = await res.json();
//         const qrText = data?.[0]?.symbol?.[0]?.data;
  
//         if (qrText) {
//           setQrResult(qrText);
//           console.log("Scanned from server:", qrText);

//           setTimeout(() => {
//             navigate('/payment', {
//               state: {
//                 qrText
//               }
//             });
            
//           }, 1000); // delay of 1 second

//         } else {
//           alert("QR not found by server.");
//         }
//       } catch (err) {
//         console.error("QR decode API failed:", err);
//       }
//     }, 'image/png');
//   };


//   return (
//     <div className="main_scanner_container" onClick={handleScreenClick}>
//       <video
//         ref={videoRef}
//         autoPlay
//         playsInline
//         muted
//         className="full_screen_video"
//       />
//       <canvas ref={canvasRef} style={{ display: 'none' }} />
//       <div className="scanner_black_shadow_"></div>

//       {qrResult && (
//         <p className="qr-result-display">Scanned: {qrResult}</p>
//       )}
//     </div>
//   );
// };

// export default Scanner;



// // upi://pay?pa=ashwanisingh46572-1@oksbi&pn=Einstein%20Ash&aid=uGICAgIDtloiwLA
// // upi://pay?pa=harshbansal1717@okicici&pn=Harsh%20Bansal&aid=uGICAgIDX2sG3DQ
// // upi://pay?pa=9599170096@ptsbi&pn=Sumit%20%20Kumar
// // upi://pay?pa=sujalmittal2000@oksbi&pn=Sujal&aid=uGICAgMC0w4jvRg




// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import QrScanner from 'qr-scanner';

// import './scannerCss.css';

// QrScanner.WORKER_PATH = '../../public/qr-scanner-worker.min.js'; // Put the worker in your public folder

// const Scanner = () => {
//   const videoRef = useRef(null);
//   const scannerRef = useRef(null);
//   const navigate = useNavigate();
//   const [qrResult, setQrResult] = useState('');

//   useEffect(() => {
//     const setupScanner = async () => {
//       try {
//         scannerRef.current = new QrScanner(
//           videoRef.current,
//           (result) => {
//             if (result?.data) {
//               console.log("Scanned:", result.data);
//               setQrResult(result.data);
//               scannerRef.current.stop(); // Stop scanning after successful result

//               setTimeout(() => {
//                 navigate('/payment', {
//                   state: { qrText: result.data }
//                 });
//               }, 1000);
//             }
//           },
//           {
//             returnDetailedScanResult: true,
//             highlightScanRegion: true,
//             highlightCodeOutline: true,
//             inversionMode: 'both' // this detects both black-on-white and white-on-black
//           }
//         );

//         await scannerRef.current.start();
//       } catch (error) {
//         console.error("Camera error:", error);
//         alert("Please allow camera access.");
//       }
//     };

//     setupScanner();

//     return () => {
//       scannerRef.current?.stop();
//     };
//   }, [navigate]);

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

//       {qrResult && (
//         <p className="qr-result-display">Scanned: {qrResult}</p>
//       )}
//     </div>
//   );
// };

// export default Scanner;
















import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QrScanner from 'qr-scanner';

import './scannerCss.css';

QrScanner.WORKER_PATH = '/qr-scanner-worker.min.js';

const Scanner = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [qrResult, setQrResult] = useState('');
  const [scanning, setScanning] = useState(false);

  const scanFrame = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    // Scan original
    try {
      const result = await QrScanner.scanImage(imageData);
      handleResult(result);
      return;
    } catch (e) {
      // ignore and try inverted
    }

    // Invert and scan
    invertImage(imageData);
    context.putImageData(imageData, 0, 0);
    try {
      const result = await QrScanner.scanImage(canvas);
      handleResult(result);
    } catch (e) {
      // No result
    }
  };

  const handleResult = (result) => {
    if (result && !scanning) {
      setScanning(true);
      setQrResult(result);
      console.log('Scanned:', result);

      setTimeout(() => {
        navigate('/payment', {
          state: { qrText: result }
        });
      }, 1000);
    }
  };

  const invertImage = (imageData) => {
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i];     // R
      data[i + 1] = 255 - data[i + 1]; // G
      data[i + 2] = 255 - data[i + 2]; // B
    }
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        const interval = setInterval(scanFrame, 700); // scan every 700ms

        return () => clearInterval(interval);
      } catch (error) {
        console.error('Camera error:', error);
        alert('Please allow camera access.');
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
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div className="scanner_black_shadow_"></div>

      {qrResult && (
        <p className="qr-result-display">Scanned: {qrResult}</p>
      )}
    </div>
  );
};

export default Scanner;
