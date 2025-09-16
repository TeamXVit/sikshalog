import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";

export default function EnrollFace() {
  const videoRef = useRef(null);
  const [status, setStatus] = useState("Initializing...");
  const [name, setName] = useState("");
  const [modelsLoaded, setModelsLoaded] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        setStatus("Loading models...");
        
        await Promise.all([
          faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
          faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
          faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        ]);
        
        setModelsLoaded(true);
        setStatus("Models loaded, starting camera...");
        
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            width: 480, 
            height: 360,
            facingMode: 'user'
          } 
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            setStatus("Ready! Position your face and enter a name.");
          };
        }
      } catch (error) {
        console.error("Initialization error:", error);
        setStatus(`Error: ${error.message}`);
      }
    }
    
    init();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const handleCapture = async () => {
    if (!modelsLoaded) {
      alert("Models still loading, please wait!");
      return;
    }

    if (!name.trim()) {
      alert("Please enter a name first!");
      return;
    }

    if (!videoRef.current || videoRef.current.readyState !== 4) {
      alert("Camera not ready! Please wait for video to load.");
      return;
    }

    try {
      setStatus("Detecting face...");
      
      const detections = await faceapi
        .detectSingleFace(videoRef.current)
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (!detections) {
        setStatus("Ready! Position your face and enter a name.");
        alert("No face detected! Please ensure your face is clearly visible and well-lit.");
        return;
      }

      let saved = JSON.parse(localStorage.getItem("faces")) || [];
      saved.push({ 
        name: name.trim(), 
        descriptor: Array.from(detections.descriptor),
        timestamp: new Date().toISOString()
      });
      
      localStorage.setItem("faces", JSON.stringify(saved));
      alert(`Successfully saved face for ${name}`);
      setName("");
      setStatus("Ready! Position your face and enter a name.");
      
    } catch (error) {
      console.error("Capture error:", error);
      setStatus("Ready! Position your face and enter a name.");
      alert("Error during face detection: " + error.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Enroll Face</h2>
      <video 
        ref={videoRef} 
        autoPlay 
        muted 
        width={480} 
        height={360}
        style={{ 
          border: '2px solid #ccc', 
          borderRadius: '8px',
          transform: 'scaleX(-1)'
        }}
      />
      <div style={{ margin: '10px 0' }}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ 
            padding: '8px', 
            marginRight: '10px', 
            borderRadius: '4px', 
            border: '1px solid #ccc' 
          }}
        />
        <button 
          onClick={handleCapture}
          disabled={!modelsLoaded}
          style={{
            padding: '8px 16px',
            backgroundColor: modelsLoaded ? '#007bff' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: modelsLoaded ? 'pointer' : 'not-allowed'
          }}
        >
          Save Face
        </button>
      </div>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
}
