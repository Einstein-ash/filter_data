import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentScreen.css';

const PaymentScreen = () => {
  const navigate = useNavigate();


  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [amountInput, setAmountInput] = useState("0");
  const [showWarning, setShowWarning] = useState(false);
  

  const formatAmount = (numStr) => {
    const x = numStr.replace(/[^\d]/g, '').replace(/,/g, ''); // keep digits onlu 
    if (x.length <= 3) return x;
    const lastThree = x.slice(-3);
    const rest = x.slice(0, -3);
    return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
  };
  
  

  const handleInputChange = (e) => {

    let value = formatAmount(e.target.value);
  
    if (/^\d*$/.test(value)) {
      value = value.replace(/\D/g, '');              
      value = value.replace(/^0+/, '');             
      setAmountInput(value || "0");
    }

    setAmountInput(value);
  };
  
  
    const handlePayClick = () => {
      navigate('/enterPin'); 
    };
  

  const handleArrowClick = () => {
    setShowBottomSheet(true);
  };

  return (
    <div className="screen">
      <div className="top-icons">
        <span className="close">✕</span>
        <span>
          <span className="exclamation">⚠️</span>
          <span className="dots">⋮</span>
        </span>
      </div>

      <div className="profile-section">
        <div className="avatar">A</div>
        <div className="name-info">
          <p className="paying-name">Paying <strong>Ashwani Ashwani</strong></p>
          <p className="bank-name">
            <p className='verify_icon'></p>
            Banking name : <strong> &nbsp;Ashwani Singh</strong>
          </p>
          <p className="upi-info">UPI ID: 8824270600@ptsbi</p>
        </div>
      </div>

      <div className="amount-section">
        <span className="currency">₹</span>

        <input
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          className="amount-input"
          name="amount_input"
          value={formatAmount(amountInput)}
          onChange={handleInputChange}
        />


        <div className="add-note">Add note</div>
      </div>

      <div className="bottom-arrow">
        <button className="arrow-button" onClick={handleArrowClick}>→</button>
      </div>

{/* belos is code for payment bmouldule boi----------- */}
      {showBottomSheet && (
        <div className="bottom-sheet">
          <div className="account-option">
            <p className="choose-text">Choose account to pay with</p>
            <div className="account-card">
                <div className="sbi_logo"></div>
              <div className="payment_ui_bank_info">
                <p className="bank_name_bottom_module">State Bank of India ••••9035</p>
                <p className='payment_ui_balance'>Balance: <span className='check_now_balance'>Check now</span> </p>
              </div>
            </div>
              <button className="pay_button" onClick={handlePayClick}>Pay ₹ {amountInput}</button>
            <div className="bottom-logos">
                <p className='axis_logo'></p> 
                <p className='vertical_line'></p>
                <p className='upi_logo'></p>
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentScreen;
