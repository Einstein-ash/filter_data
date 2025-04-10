import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


import './Success.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SuccessAudio from '../assets/audio/success_final.mp3';



const Success = () => {

  const location = useLocation();

  const amountInput = location.state?.amountInput;
  const banking_name = location.state?.banking_name;

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
      
    //   const audio = new Audio(SuccessAudio);
    //   audio.play();
      
    //   setTimeout(() => {
    //       setMoveUp(true);
    //     }, 3000);
        
  
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };
  
  

  useEffect(() => {
    GetVideo();

  }, []);

  useEffect(() => {
    if (!successVid) return;

    const audio = new Audio(SuccessAudio);
    audio.play();

    const timeout = setTimeout(() => setMoveUp(true), 3000);

    return () => clearTimeout(timeout);
  }, [successVid]);
  

  return (
    <div className="success_container">

      <div className='empty_container_above_success'></div>
      <div className={` ${moveUp ? 'move-up' : ''}`}>
        <div className={`lottie-wrapper  ${moveUp ? 'move-up_success_logo' : ''}`}>
            <DotLottieReact
              src={successVid}
              autoplay
            />
          </div>

        <div className='success_data'>
          <p className='success_amount'> ₹ {amountInput}.00</p>
          <p>Paid to {banking_name}</p>

          <div className='empty_space_success'></div>

          <p className='time_success'></p>
          <p>UPI transaction ID: 509476847561 </p>

        </div>
      </div>
    </div>
  );
};

export default Success;
