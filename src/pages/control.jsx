import React, { useEffect, useState, useRef } from "react";

const VoiceControl = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const apiURL = "https://blr1.blynk.cloud/external/api/update?token=5pN3cst-c9iRBe8v67UtgXLOltt_49sO&v2=1"; // Replace with your API endpoint
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support speech recognition. Please use Chrome.");
      return;
    }

    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onresult = (event) => {
      const latestTranscript = event.results[event.results.length - 1][0].transcript.trim();
      setTranscript(latestTranscript);
      console.log("Heard:", latestTranscript);

      if (latestTranscript.toLowerCase().includes("lights")) {
        fetch(apiURL, { method: "GET" })
          .then((res) => res.json())
          .then((data) => console.log("API Response:", data))
          .catch((err) => console.error("API Error:", err));
      }
    };

    recognitionRef.current.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      if (isListening) {
        recognitionRef.current.stop();
        setTimeout(() => {
          if (isListening) recognitionRef.current.start();
        }, 1000); // Restart after a short delay
      }
    };

    recognitionRef.current.onend = () => {
      console.log("Speech recognition ended.");
      if (isListening) {
        setTimeout(() => {
          if (isListening) recognitionRef.current.start();
        }, 1000);
      }
    };

    return () => {
      recognitionRef.current.stop();
      setIsListening(false);
    };
  }, [isListening]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold">Voice-Controlled Lights</h2>
      <p className="mt-2">Microphone is {isListening ? "ON" : "OFF"} and listening...</p>
      <p className="mt-2 font-mono text-gray-600">You said: "{transcript}"</p>
      <button
        className={`mt-4 px-4 py-2 ${isListening ? "bg-red-500" : "bg-blue-500"} text-white rounded-lg`}
        onClick={toggleListening}
      >
        {isListening ? "Turn Mic OFF" : "Turn Mic ON"}
      </button>
    </div>
  );
};

export default VoiceControl;
