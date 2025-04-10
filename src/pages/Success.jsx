import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


import './Success.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SuccessAudio from '../assets/audio/success_final.mp3';
import { Share2 } from 'lucide-react';



const Success = () => {

  const location = useLocation();

  const amountInput = location.state?.amountInput;
  const banking_name = location.state?.banking_name;

  const [moveUp, setMoveUp] = useState(false);

  const [successVid, setSuccessVid] = useState("");
  const Transaction_ID = Math.floor(100000000000 + Math.random() * 900000000000);

  const [paymentTime , setPaymentTime] = useState("");


  
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

      const now = new Date();
      const formatted = now.toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      // }).replace(/am|pm/, (match) => match.toUpperCase());

      setPaymentTime(formatted);
      
    //   const audio = new Audio(SuccessAudio);
    //   audio.play();

  
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };
  
  

  useEffect(() => {
    GetVideo();

  }, []);

  useEffect(() => {
    if (!successVid) return;

    // const audio = new Audio(SuccessAudio);
    // audio.play();

    const timeout = setTimeout(() => {
      setMoveUp(true);

    }, 3000);

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
          <p className='success_amount'> ₹{amountInput? {amountInput} : 100 }.00</p>
          <p className='success_user_name'>Paid to Sumit Kumar{banking_name}</p>

          <div className='empty_space_success'></div>

          <p className='success_time'>{paymentTime}</p>
          <p className='success_transaction_id'>UPI transaction ID: {Transaction_ID} </p>

        </div>

      </div>
        <div className="success_footer">
          <button className='success_btn_share_ss'> 
            <Share2 size={16} style={{ marginRight: '8px',}} />
  
            Share screeenshot</button>
          <button className='success_btn_done'>Done</button>
        </div>
    </div>
  );
};

export default Success;
