// import React from 'react';
// import './Success.css';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const Success = () => {
//   return (
//     <div className="success-container">

//     <DotLottieReact
//       src="https://lottie.host/fc5081aa-982a-485d-a6b1-2f5aafeb407e/ixBHyon6J5.lottie"
//       loop
//       autoplay
//     />
      
//     </div>
    
//   );
// };

// export default Success;












import React, { useEffect, useState } from 'react';
import './Success.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SuccessAudio from '../assets/audio/success_final.mp3';

const Success = () => {
  const [moveUp, setMoveUp] = useState(false);

  const [successVid, setSuccessVid] = useState("");
  
  const GetVideo = async () => {
    try {
      const res = await fetch("https://lottie.host/fc5081aa-982a-485d-a6b1-2f5aafeb407e/ixBHyon6J5.lottie");
  
      if (!res.ok) {
        throw new Error("Failed to fetch video");
      }
  
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      console.log("Fetched finally");
      setSuccessVid(url);
  
      
      setTimeout(() => {
          setMoveUp(true);
        }, 3000);
        
        const audio = new Audio(SuccessAudio);
        audio.play();
  
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };
  
  

  useEffect(() => {
    GetVideo();
  }, []);
  

  return (
    <div className="success-container">
      <div className={`lottie-wrapper ${moveUp ? 'move-up' : ''}`}>
        <DotLottieReact
          src={successVid}
          autoplay
        />
      </div>
    </div>
  );
};

export default Success;
