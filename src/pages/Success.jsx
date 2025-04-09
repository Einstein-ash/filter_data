import React from 'react';
import './Success.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import giff from "../assets/images/success_gif.gif"

const Success = () => {
  return (
    <div className="success-container">

    <DotLottieReact
      src="https://lottie.host/fc5081aa-982a-485d-a6b1-2f5aafeb407e/ixBHyon6J5.lottie"
      loop
      autoplay
    />

      {/* <img src={giff}  alt="" /> */}
      
    </div>
    
  );
};

export default Success;

