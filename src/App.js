
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Hero from "./pages/hero.jsx"
// import VoiceControl from "./pages/control.jsx"
import AudioPlayer from "./pages/song_player.jsx"
// import Card from "./pages/card.jsx"
// import Bank from "./pages/Bank.jsx"
// import Scanner from './pages/Scanner.jsx';
// import PaymentUI from './pages/PaymentUI.jsx';
// import PinEntryScreen from './pages/PinInput.jsx';



function App() {
  return (
    <div className="App">
        <Hero/>
        <AudioPlayer/>
        {/* <VoiceControl/> */}

        {/* <Card/> */}
        {/* <Card
        brandLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Alpro_logo.svg/1280px-Alpro_logo.svg.png"
        brandTitle="Alpro, le dessert végétal"
        purchases="3.59"
        timeLeft="4 jours"
        currentStep={1}
        steps={[
          { reward: "1€", amount: "3 €", missions: 1 },
          { reward: "2€", amount: "5 €", missions: 2 },
          { reward: "3€", amount: "8 €", missions: 3 },
        ]}
      /> */}


      {/* <Bank/> */}
      {/* <Scanner/>  */}
      {/* <PaymentUI/>       */}
      {/* <PinEntryScreen/>           */}
    </div>
  );
}

export default App;













// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './App.css';
// // import Hero from "./pages/hero.jsx"
// // import VoiceControl from "./pages/control.jsx"
// // import AudioPlayer from "./pages/song_player.jsx"
// // import Card from "./pages/card.jsx"
// import Bank from "./pages/Bank.jsx"
// import Scanner from './pages/Scanner.jsx';
// import PaymentUI from './pages/PaymentUI.jsx';
// import PinEntryScreen from './pages/PinInput.jsx';
// import Success from './pages/Success.jsx';



// function App() {
//   return (


//       <Router>
//       <Routes>
//         {/* <Route path="/" element={<PinEntryScreen />} /> */}
//         {/* <Route path="/" element={<Success />} /> */}
//         {/* <Route path="/" element={<Scanner />} /> */}
//         <Route path="/" element={<Bank />} />
//         <Route path="/scanner" element={<Scanner />} />
//         <Route path="/payment" element={<PaymentUI />} />
//         <Route path="/enterPin" element={<PinEntryScreen />} />
//         <Route path="/success" element={<Success />} />
//       </Routes>
//       </Router>
//   );
// }

// export default App;


