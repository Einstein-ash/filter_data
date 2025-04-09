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

const Success = () => {
  const [moveUp, setMoveUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMoveUp(true);
    }, 2000); // move after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="success-container">
      <div className={`lottie-wrapper ${moveUp ? 'move-up' : ''}`}>
        <DotLottieReact
          src="https://lottie.host/fc5081aa-982a-485d-a6b1-2f5aafeb407e/ixBHyon6J5.lottie"
        //   loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Success;
