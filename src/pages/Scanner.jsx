import React, {useRef, useEffect} from 'react'
import "./scannerCss.css"

const Scanner = () => {

      const videoRef = useRef(null);
    
      useEffect(() => {
        // Access the camera
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(stream => {
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
            }
          })
          .catch(err => {
            console.error("Camera access denied:", err);
          });
      }, []);


  return (
    <div className='main_scanner_container'>

        <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default Scanner
