// import React from 'react'

// const card = () => {
//   return (
//     <div>
//       <p>Card desing </p>
//     </div>
//   )
// }

// export default card



import React from "react";

const Card = ({
  brandLogo,
  brandTitle,
  purchases,
  timeLeft,
  steps = [],
  currentStep = 0,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <img src={brandLogo} alt="Brand" className="h-6" />
          <h2 className="font-semibold text-gray-800">{brandTitle}</h2>
        </div>
        <div className="text-sm text-red-500 flex items-center space-x-1">
          <span>⏰</span>
          <span>{timeLeft}</span>
        </div>
      </div>

      <div className="text-gray-700 text-sm mb-4">
        🛒 <strong>Mes achats :</strong> {purchases} €
      </div>

      <div className="relative mt-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center w-1/3">
              <div
                className={`px-2 py-1 rounded text-xs ${
                  index < currentStep
                    ? "bg-green-500 text-white"
                    : "border border-dashed border-gray-400 text-gray-500"
                }`}
              >
                {index < currentStep ? `${step.reward} gagnés` : `${step.reward} à gagner`}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {step.amount} d’achats<br />
                {step.missions} mission{step.missions > 1 ? "s" : ""}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 right-0 top-6 h-1 bg-gray-200 rounded-full mt-2 z-0">
          <div
            className="h-1 bg-green-500 rounded-full"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
