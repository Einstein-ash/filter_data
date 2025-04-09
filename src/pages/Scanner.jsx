import React, {useRef, useEffect} from 'react'
import "./scannerCss.css"

const Scanner = () => {

      const videoRef = useRef(null);
    
    //   useEffect(() => {
    //     // Access the camera
    //     navigator.mediaDevices.getUserMedia({ video: true })
    //       .then(stream => {
    //         if (videoRef.current) {
    //           videoRef.current.srcObject = stream;
    //         }
    //       })
    //       .catch(err => {
    //         console.error("Camera access denied:", err);
    //       });
    //   }, []);


    useEffect(() => {
        const getCamera = async () => {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
            }
          } catch (err) {
            console.error("Camera access error:", err);
            alert("Camera permission is required to use this feature. Please allow it in your browser settings.");
          }
        };
      
        getCamera();
      }, []);
      


  return (
    <div className='main_scanner_container'>

        <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default Scanner
