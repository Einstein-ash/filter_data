
import './App.css';
import Hero from "./pages/hero.jsx"
// import VoiceControl from "./pages/control.jsx"
import AudioPlayer from "./pages/song_player.jsx"


function App() {
  return (
    <div className="App">
        <Hero/>
        <AudioPlayer/>
        {/* <VoiceControl/> */}
    </div>
  );
}

export default App;
