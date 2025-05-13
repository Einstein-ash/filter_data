// import React, { useState, useRef } from "react";

// const AudioPlayer = () => {
//   const [audioSrc, setAudioSrc] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [loop, setLoop] = useState(false);
//   const [volume, setVolume] = useState(1);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const audioRef = useRef(null);

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type === "audio/mpeg") {
//       setAudioSrc(URL.createObjectURL(file));
//     }
//   };

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const toggleLoop = () => {
//     setLoop(!loop);
//     audioRef.current.loop = !loop;
//   };

//   const handleVolumeChange = (event) => {
//     setVolume(event.target.value);
//     audioRef.current.volume = event.target.value;
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   const handleSeek = (event) => {
//     audioRef.current.currentTime = event.target.value;
//     setCurrentTime(event.target.value);
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", textAlign: "center", border: "1px solid #ddd", borderRadius: "10px" }}>
//       <input type="file" accept="audio/mp3" onChange={handleFileUpload} />
      
//       {audioSrc && (
//         <div>
//           <audio
//             ref={audioRef}
//             src={audioSrc}
//             onTimeUpdate={handleTimeUpdate}
//             onLoadedMetadata={() => setDuration(audioRef.current.duration)}
//           />

//           <div style={{ marginTop: "10px" }}>
//             <button onClick={togglePlayPause} style={{ marginRight: "10px", padding: "8px 12px", cursor: "pointer" }}>
//               {isPlaying ? "Pause" : "Play"}
//             </button>
//             <button onClick={toggleLoop} style={{ padding: "8px 12px", cursor: "pointer", background: loop ? "lightgreen" : "white" }}>
//               Loop: {loop ? "ON" : "OFF"}
//             </button>
//           </div>

//           <div style={{ marginTop: "10px" }}>
//             <label>Volume: </label>
//             <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
//           </div>

//           <div style={{ marginTop: "10px" }}>
//             <label>Seek: </label>
//             <input type="range" min="0" max={duration} step="0.1" value={currentTime} onChange={handleSeek} />
//             <p>{Math.floor(currentTime)} / {Math.floor(duration)} sec</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioPlayer;












// ----------- 2nd giving audio direlcy -------------


// import React, { useState, useRef } from "react";


// import song1 from "../assets/audio/song_N.mp3";
// // import song2 from "../assets/audio/song_N.mp3";
// import song3 from "../assets/audio/Sweet_piano.mp3";
// import song4 from "../assets/audio/Water_DD.mp3";

// const AudioPlayer = () => {
//   const [audioSrc, setAudioSrc] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [loop, setLoop] = useState(false);
//   const [volume, setVolume] = useState(1);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const audioRef = useRef(null);


//   const audioFiles = [
//     { name: "Song 1", url: song1 },
//     // { name: "Song 2", url: song2 },
//     { name: "Sweet Piano", url: song3 },
//     { name: "Water - Diljit Dosanjh", url: song4 },
//   ];

//   // Handle uploaded file
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type.startsWith("audio/")) {
//       setAudioSrc(URL.createObjectURL(file));
//     }
//   };


//   const handleAudioSelect = (event) => {
//     setAudioSrc(event.target.value);
//   };

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const toggleLoop = () => {
//     setLoop(!loop);
//     audioRef.current.loop = !loop;
//   };

//   const handleVolumeChange = (event) => {
//     setVolume(event.target.value);
//     audioRef.current.volume = event.target.value;
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   const handleSeek = (event) => {
//     audioRef.current.currentTime = event.target.value;
//     setCurrentTime(event.target.value);
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", textAlign: "center", border: "1px solid #ddd", borderRadius: "10px" }}>
      

//       <label>Select a song: </label>
//       <select onChange={handleAudioSelect} style={{ marginBottom: "10px", padding: "5px" }}>
//         <option value="">-- Choose an Audio --</option>
//         {audioFiles.map((file, index) => (
//           <option key={index} value={file.url}>{file.name}</option>
//         ))}
//       </select>

//       <br />


//       <input type="file" accept="audio/*" onChange={handleFileUpload} style={{ margin: "10px 0" }} />

//       {audioSrc && (
//         <div>
//           <audio
//             ref={audioRef}
//             src={audioSrc}
//             onTimeUpdate={handleTimeUpdate}
//             onLoadedMetadata={() => setDuration(audioRef.current.duration)}
//           />

//           <div style={{ marginTop: "10px" }}>
//             <button onClick={togglePlayPause} style={{ marginRight: "10px", padding: "8px 12px", cursor: "pointer" }}>
//               {isPlaying ? "Pause" : "Play"}
//             </button>
//             <button onClick={toggleLoop} style={{ padding: "8px 12px", cursor: "pointer", background: loop ? "lightgreen" : "white" }}>
//               Loop: {loop ? "ON" : "OFF"}
//             </button>
//           </div>

//           <div style={{ marginTop: "10px" }}>
//             <label>Volume: </label>
//             <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
//           </div>

//           <div style={{ marginTop: "10px" }}>
//             <label>Seek: </label>
//             <input type="range" min="0" max={duration} step="0.1" value={currentTime} onChange={handleSeek} />
//             <p>{Math.floor(currentTime)} / {Math.floor(duration)} sec</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioPlayer;






// ----- tyring to give yt link j--------------





import React, { useState, useRef, useEffect } from "react";

import song1 from "../assets/audio/song_N.mp3";
import song3 from "../assets/audio/Sweet_piano.mp3";
import song4 from "../assets/audio/Water_DD.mp3";

const AudioPlayer = () => {
  const [audioSrc, setAudioSrc] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loop, setLoop] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const [youtubeLink, setYoutubeLink] = useState('');
  const [youtubeID, setYoutubeID] = useState('');
  const youtubeRef = useRef(null);

  const extractYouTubeID = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/);
    return match ? match[1] : null;
  };

  const audioFiles = [
    { name: "Song 1", url: song1 },
    { name: "Sweet Piano", url: song3 },
    { name: "Water - Diljit Dosanjh", url: song4 },
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioSrc(URL.createObjectURL(file));
      setYoutubeID(""); // 🔥 Switch to audio mode
    }
  };

  const handleAudioSelect = (event) => {
    setAudioSrc(event.target.value);
    setYoutubeID(""); // 🔥 Switch to audio mode
  };

  const togglePlayPause = () => {
    if (youtubeID && youtubeRef.current) {
      const command = isPlaying ? "pauseVideo" : "playVideo";
      youtubeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: [] }),
        "*"
      );
      setIsPlaying(!isPlaying);
      return;
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleLoop = () => {
    setLoop(!loop);
    if (audioRef.current) audioRef.current.loop = !loop;
    // YouTube loop handled via effect below
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    if (audioRef.current) audioRef.current.volume = event.target.value;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (event) => {
    if (audioRef.current) {
      audioRef.current.currentTime = event.target.value;
      setCurrentTime(event.target.value);
    }
  };

  // 🔁 Manual loop for YouTube
  useEffect(() => {
    const handleMessage = (event) => {
      if (loop && youtubeID && event.data?.info === 0) {
        youtubeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "seekTo", args: [0] }),
          "*"
        );
        youtubeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "playVideo", args: [] }),
          "*"
        );
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [loop, youtubeID]);

  return (
    <div style={{
      padding: "20px",
      maxWidth: "400px",
      margin: "auto",
      textAlign: "center",
      border: "1px solid #ddd",
      borderRadius: "10px"
    }}>
      <label>Select a song: </label>
      <select onChange={handleAudioSelect} style={{ marginBottom: "10px", padding: "5px" }}>
        <option value="">-- Choose an Audio --</option>
        {audioFiles.map((file, index) => (
          <option key={index} value={file.url}>{file.name}</option>
        ))}
      </select>

      <div>
        <input
          type="text"
          placeholder="Paste YouTube link"
          onChange={(e) => {
            const id = extractYouTubeID(e.target.value);
            if (id) {
              setYoutubeID(id);
              setAudioSrc(null); // 🔥 Switch to YouTube mode
              setIsPlaying(false); // reset
            }
            setYoutubeLink(e.target.value);
          }}
          style={{ margin: '10px 0', width: "100%" }}
        />
      </div>

      <input type="file" accept="audio/*" onChange={handleFileUpload} style={{ margin: "10px 0" }} />

      <div style={{ marginTop: "10px" }}>
        <button onClick={togglePlayPause} style={{ marginRight: "10px", padding: "8px 12px", cursor: "pointer" }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={toggleLoop} style={{ padding: "8px 12px", cursor: "pointer", background: loop ? "lightgreen" : "white" }}>
          Loop: {loop ? "ON" : "OFF"}
        </button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Volume: </label>
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
      </div>

      {audioSrc && (
        <div>
          <audio
            ref={audioRef}
            src={audioSrc}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={() => setDuration(audioRef.current.duration)}
          />
          <div style={{ marginTop: "10px" }}>
            <label>Seek: </label>
            <input type="range" min="0" max={duration} step="0.1" value={currentTime} onChange={handleSeek} />
            <p>{Math.floor(currentTime)} / {Math.floor(duration)} sec</p>
          </div>
        </div>
      )}


<iframe
  style={{ borderRadius: '12px' }}
  src="https://open.spotify.com/embed/playlist/37i9dQZF1E4wTBsBegbIu8?utm_source=generator"
  width="100%"
  height="352"
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>


      {youtubeID && (
        <iframe
          ref={youtubeRef}
          width="100%"
          height="215"
          src={`https://www.youtube.com/embed/${youtubeID}?enablejsapi=1&origin=http://localhost`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
        />
      )}
    </div>
  );
};

export default AudioPlayer;






