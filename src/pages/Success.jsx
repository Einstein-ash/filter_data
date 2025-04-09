import React from 'react';
import './Success.css';
import giff from "../assets/images/success_gif.gif"

const Success = () => {
  return (
    <div className="success-container">
      <img src={giff} alt="" />
    </div>
  );
};

export default Success;
