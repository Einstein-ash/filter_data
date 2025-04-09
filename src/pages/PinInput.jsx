
// import React, { useState } from 'react';
// import './PinEntryScreen.css';

// const PinEntryScreen = () => {
//   const [pin, setPin] = useState([]);

//   const handleNumpadClick = (val) => {
//     if (val === 'X') {
//       setPin((prev) => prev.slice(0, -1));
//     } else if (val === '✔') {
//     } else if (pin.length < 6 && typeof val === 'number') {
//       setPin((prev) => [...prev, val]);
//     }
//   };

//   return (
//     <div className="pin-screen">
//       <div className="header">
//         <div className="pin_input_bank_info">
//           <p className='pin_input_bank_name'>State Bank of India</p>
//           <p>XXXX9035</p>   
//         </div>
//         <p className='pin_input_upi_logo'></p>
//       </div>

//       <div className="send-info">
//         <div className="left">
//           <p className="label">To:</p>
//           <p className="label">Sending:</p>
//         </div>
//         <div className="right">
//           <p className="recipient">GARV BHATIA</p>
//           <p className="amount">₹ 1.00</p>
//         </div>
//       </div>

//       <div className="enter-pin">ENTER 6-DIGIT UPI PIN</div>

//       <div className="pin-boxes">
//         {Array(6).fill().map((_, idx) => (
//           <div className="pin-box" key={idx}>
//             {idx < pin.length ? '●' : <span className="pin-line"></span>}
//           </div>
//         ))}
//       </div>

//       <div className="warning-box">
//         <span className="cicular_warning_avatar">!</span>
//         <p>You are transferring money from your account to <strong>GARV BHATIA</strong></p>
//       </div>

//       <div className="numpad">
//         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 0, '✔'].map((val, idx) => (
//           <button key={idx} className={`num-btn ${val === '✔' ? 'submit' : ''}`} onClick={() => handleNumpadClick(val)}>
//             {val}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PinEntryScreen;














import React, { useState } from 'react';
import './PinEntryScreen.css';

const PinEntryScreen = () => {
  const [pin, setPin] = useState([]);
  const [showNumpad, setShowNumpad] = useState(false);

  const handleNumpadClick = (val) => {
    if (val === 'X') {
      setPin((prev) => prev.slice(0, -1));
    } else if (val === '✔') {
      // Optional: handle PIN submission
    } else if (pin.length < 6 && typeof val === 'number') {
      setPin((prev) => [...prev, val]);
    }
  };

  return (
    <div className="pin-screen">
      <div className="header">
        <div className="pin_input_bank_info">
          <p className='pin_input_bank_name'>State Bank of India</p>
          <p>XXXX9035</p>   
        </div>
        <p className='pin_input_upi_logo'></p>
      </div>

      <div className="send-info">
        <div className="left">
          <p className="label">To:</p>
          <p className="label">Sending:</p>
        </div>
        <div className="right">
          <p className="recipient">GARV BHATIA</p>
          <p className="amount">₹ 1.00</p>
        </div>
      </div>

      <div className="enter-pin">ENTER 6-DIGIT UPI PIN</div>

      <div className="pin-boxes" onClick={() => setShowNumpad(true)}>
        {Array(6).fill().map((_, idx) => (
          <div className="pin-box" key={idx}>
            {idx < pin.length ? '●' : <span className="pin-line"></span>}
          </div>
        ))}
      </div>

      <div className="warning-box">
        <span className="cicular_warning_avatar">!</span>
        <p>You are transferring money from your account to <strong>GARV BHATIA</strong></p>
      </div>

      {showNumpad && (
        <div className="numpad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 0, '✔'].map((val, idx) => (
            <button key={idx} className={`num-btn ${val === '✔' ? 'submit' : ''}`} onClick={() => handleNumpadClick(val)}>
              {val}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PinEntryScreen;
