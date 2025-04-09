// import React from "react";
// import "./PaymentUI.css";

// const PaymentUI = () => {
//   return (
//     <div className="payment-container">
//       {/* Header */}
//       <div className="header">
//         <button className="close-btn">✖</button>
//         <div className="icons">
//           <span className="info-icon">❗</span>
//           <span className="menu-icon">⋮</span>
//         </div>
//       </div>

//       {/* Recipient Info */}
//       <div className="recipient-info">
//         <div className="recipient-avatar">A</div>
//         <h2>Paying Ashwani </h2>
//         <p>Banking name: Ashwani Ashwani</p>
//         <p>Paytm • UPI ID: 8039320538230@ptsbi</p>
//       </div>

//       {/* Amount Input */}
//       <div className="amount-input">
//         <span className="currency-symbol">₹</span>
//         <input type="number" placeholder="0" />
//       </div>

//       {/* Add Note */}
//       <div className="add-note">
//         <p>Add note</p>
//       </div>

//       {/* Submit Button */}
//       <button className="submit-btn">➡️</button>
//     </div>
//   );
// };

// export default PaymentUI;

















import React from 'react';
import './PaymentScreen.css';

const PaymentScreen = () => {
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
        <div className="avatar">Y</div>
        <div className="name-info">
          <p className="paying-name">Paying <strong>Ashwani Ashwani</strong></p>
          <p className="bank-name">🏦 Banking name: <strong>Ashwani Singh</strong></p>
          <p className="upi-info">Paytm · UPI ID: 8824270600@ptsbi</p>
        </div>
      </div>

      <div className="amount-section">
        <span className="currency">₹
        </span>
        <input type="text" className="amount-input" defaultValue="0" />

        <div className="add-note">Add note</div>
      </div>

      <div className="bottom-arrow">
        <button className="arrow-button">→</button>
      </div>
    </div>
  );
};

export default PaymentScreen;
