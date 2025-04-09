
// import React from 'react';
// import './PaymentScreen.css';

// const PaymentScreen = () => {
//   return (
//     <div className="screen">
//       <div className="top-icons">
//         <span className="close">✕</span>
//         <span>
//         <span className="exclamation">⚠️</span>
//         <span className="dots">⋮</span>
//         </span>
//       </div>

//       <div className="profile-section">
//         <div className="avatar">Y</div>
//         <div className="name-info">
//           <p className="paying-name">Paying <strong>Ashwani Ashwani</strong></p>
//           <p className="bank-name"> 
//             <p className='verify_icon'></p>
//              Banking name: <strong>Ashwani Singh</strong></p>
//           <p className="upi-info">Paytm · UPI ID: 8824270600@ptsbi</p>
//         </div>
//       </div>

//       <div className="amount-section">
//         <span className="currency">₹
//         </span>
//         <input type="text" className="amount-input" defaultValue="0" />

//         <div className="add-note">Add note</div>
//       </div>

//       <div className="bottom-arrow">
//         <button className="arrow-button">→</button>
//       </div>
//     </div>
//   );
// };

// export default PaymentScreen;












import React, { useState } from 'react';
import './PaymentScreen.css';

const PaymentScreen = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const handleArrowClick = () => {
    setShowBottomSheet(true);
  };

  return (
    <div className="screen">
      {/* your existing code */}
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
        <input type="text" className="amount-input" defaultValue="0" />
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
              <button className="pay_button">Pay ₹1</button>
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
