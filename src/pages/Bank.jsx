// import React from 'react'
// import "./bankCss.css"

// const Bank = () => {
//   return (
//     <div>
//         <div>Name - Abhi nhi aa rha kuch dimaag mai </div>

//         <div className='main_container'>

//             <div className="scanner_box">




//             </div>
//         </div>
//         <div className="home2_image"></div>
//         <div className="home3_image"></div>
      
//     </div>
//   )
// }

// export default Bank





import React, { useEffect, useRef } from 'react';
import './bankCss.css';

const Bank = () => {
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
    <div>
      <div>Name - Abhi nhi aa rha kuch dimaag mai</div>

      <div className="main_container">
        <div className="scanner_box">
            
        </div>
      </div>

      <div className="home2_image"></div>
      <div className="home3_image"></div>
    </div>
  );
};

export default Bank;
