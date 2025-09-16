import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";

export default function TakeAttendance() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  const [status, setStatus] = useState("Initializing...");
  const [matcher, setMatcher] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const detectionRef = useRef(null);
  const [faceCount, setFaceCount] = useState(0);
  const [debugInfo, setDebugInfo] = useState("");

  useEffect(() => {
    async function init() {
      try {
        setStatus("Loading models...");
        setDebugInfo("Starting model loading process...");
        
        // Load models with error handling for each
        await Promise.all([
          faceapi.nets.ssdMobilenetv1.loadFromUri("/models").catch(e => {
            console.error("SsdMobilenetv1 model failed:", e);
            throw new Error("Failed to load SsdMobilenetv1 model");
          }),
          faceapi.nets.faceLandmark68Net.loadFromUri("/models").catch(e => {
            console.error("FaceLandmark68 model failed:", e);
            throw new Error("Failed to load FaceLandmark68 model");
          }),
          faceapi.nets.faceRecognitionNet.loadFromUri("/models").catch(e => {
            console.error("FaceRecognition model failed:", e);
            throw new Error("Failed to load FaceRecognition model");
          }),
        ]);
        
        setModelsLoaded(true);
        setStatus("Models loaded, setting up face matcher...");
        setDebugInfo("Models loaded successfully");

        // Load stored faces and create matcher
        const stored = JSON.parse(localStorage.getItem("faces")) || [];
        setDebugInfo(`Found ${stored.length} stored faces`);
        
        if (stored.length === 0) {
          setStatus("No enrolled faces found. Please enroll faces first.");
          setDebugInfo("No enrolled faces - please use EnrollFace component first");
          return;
        }

        // Create labeled descriptors with validation
        const labeledDescriptors = stored.map((f, index) => {
          if (!f.descriptor || !Array.isArray(f.descriptor)) {
            console.error(`Invalid descriptor for face ${index}:`, f);
            return null;
          }
          return new faceapi.LabeledFaceDescriptors(
            f.name || `Person ${index}`,
            [new Float32Array(f.descriptor)]
          );
        }).filter(Boolean);

        if (labeledDescriptors.length === 0) {
          setStatus("No valid face descriptors found.");
          setDebugInfo("All stored faces have invalid descriptors");
          return;
        }
        
        const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);
        setMatcher(faceMatcher);
        setDebugInfo(`Face matcher created with ${labeledDescriptors.length} faces`);

        setStatus("Face matcher ready, starting camera...");

        // Start camera with detailed error handling
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
              width: 480, 
              height: 360,
              facingMode: 'user'
            } 
          });
          
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            
            // Wait for video metadata to load
            videoRef.current.onloadedmetadata = () => {
              setStatus("Camera ready - click Start Detection");
              setDebugInfo(`Video ready: ${videoRef.current.videoWidth}x${videoRef.current.videoHeight}`);
            };

            // Handle video loading errors
            videoRef.current.onerror = (e) => {
              console.error("Video error:", e);
              setStatus("Video error occurred");
              setDebugInfo("Video failed to load");
            };
          }
        } catch (cameraError) {
          console.error("Camera error:", cameraError);
          setStatus(`Camera error: ${cameraError.message}`);
          setDebugInfo(`Camera access failed: ${cameraError.name}`);
        }
        
      } catch (error) {
        console.error("Initialization error:", error);
        setStatus(`Error: ${error.message}`);
        setDebugInfo(`Init failed: ${error.message}`);
      }
    }

    init();

    return () => {
      stopDetection();
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const startDetection = async () => {
    if (!matcher || !videoRef.current || isDetecting || !modelsLoaded) {
      setDebugInfo("Cannot start: missing matcher, video, or models not loaded");
      return;
    }

    setIsDetecting(true);
    setStatus("Starting detection...");
    let frameCount = 0;

    const detectFaces = async () => {
      try {
        frameCount++;
        
        // Critical checks before detection
        if (!videoRef.current || !canvasRef.current || !overlayCanvasRef.current) {
          setDebugInfo("Missing video or canvas refs");
          if (isDetecting) {
            detectionRef.current = requestAnimationFrame(detectFaces);
          }
          return;
        }

        // Check video ready state - this is crucial!
        if (videoRef.current.readyState < 2) {
          setDebugInfo(`Video not ready, readyState: ${videoRef.current.readyState}`);
          if (isDetecting) {
            detectionRef.current = requestAnimationFrame(detectFaces);
          }
          return;
        }

        const video = videoRef.current;
        const canvas = canvasRef.current;
        const overlayCanvas = overlayCanvasRef.current;
        
        // Get actual video dimensions
        const videoWidth = video.videoWidth || video.offsetWidth;
        const videoHeight = video.videoHeight || video.offsetHeight;
        
        if (videoWidth === 0 || videoHeight === 0) {
          setDebugInfo("Video dimensions are 0");
          if (isDetecting) {
            detectionRef.current = requestAnimationFrame(detectFaces);
          }
          return;
        }

        const displaySize = {
          width: videoWidth,
          height: videoHeight,
        };

        // Match canvas dimensions
        faceapi.matchDimensions(canvas, displaySize);
        faceapi.matchDimensions(overlayCanvas, displaySize);

        // Perform detection with lower confidence for better results
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.SsdMobilenetv1Options({ 
            minConfidence: 0.3, // Lower threshold for better detection
            maxResults: 10 
          }))
          .withFaceLandmarks()
          .withFaceDescriptors();

        // Update debug info
        setDebugInfo(`Frame ${frameCount}: ${detections.length} faces detected`);

        // Clear both canvases
        const ctx = canvas.getContext("2d");
        const overlayCtx = overlayCanvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);

        setFaceCount(detections.length);

        if (detections.length > 0) {
          const resizedDetections = faceapi.resizeResults(detections, displaySize);

          resizedDetections.forEach((detection, index) => {
            const bestMatch = matcher.findBestMatch(detection.descriptor);
            const box = detection.detection.box;
            const label = bestMatch.distance < 0.6 ? bestMatch.label : "Unknown";
            const confidence = Math.round((1 - bestMatch.distance) * 100);
            const color = bestMatch.distance < 0.6 ? "#00ff00" : "#ff0000";
            
            // Draw face box mirrored for selfie view
            ctx.save();
            ctx.scale(-1, 1);
            ctx.translate(-canvas.width, 0);
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.strokeRect(box.x, box.y, box.width, box.height);
            ctx.restore();
            
            // Draw landmarks
            const landmarks = detection.landmarks;
            ctx.save();
            ctx.scale(-1, 1);
            ctx.translate(-canvas.width, 0);
            ctx.fillStyle = color;
            landmarks.positions.forEach(point => {
              ctx.beginPath();
              ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
              ctx.fill();
            });
            ctx.restore();

            // Draw text labels (not mirrored for readability)
            const textX = displaySize.width - box.x - box.width;
            const textY = box.y - 10;
            overlayCtx.font = "16px Arial";
            overlayCtx.fillStyle = color;
            overlayCtx.strokeStyle = "black";
            overlayCtx.lineWidth = 3;
            const text = `${label} (${confidence}%)`;
            overlayCtx.strokeText(text, textX, textY);
            overlayCtx.fillText(text, textX, textY);
          });
        }

        // Continue detection loop
        if (isDetecting) {
          detectionRef.current = requestAnimationFrame(detectFaces);
        }

      } catch (error) {
        console.error("Detection error:", error);
        setStatus("Detection error");
        setDebugInfo(`Detection error: ${error.message}`);
        if (isDetecting) {
          detectionRef.current = requestAnimationFrame(detectFaces);
        }
      }
    };

    detectionRef.current = requestAnimationFrame(detectFaces);
    setStatus("Live detection running...");
  };

  const stopDetection = () => {
    setIsDetecting(false);
    setStatus("Detection stopped");
    setFaceCount(0);
    if (detectionRef.current) {
      cancelAnimationFrame(detectionRef.current);
      detectionRef.current = null;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Live Face Detection & Recognition</h2>
      <div style={{ position: "relative", display: "inline-block" }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          width={480}
          height={360}
          style={{
            border: '2px solid #ccc',
            borderRadius: '8px',
            display: 'block',
            transform: 'scaleX(-1)' // Mirror video for natural selfie view
          }}
        />
        {/* Canvas for face detection boxes and landmarks - mirrored */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: 'none'
          }}
        />
        {/* Separate canvas for text labels - not mirrored for readability */}
        <canvas
          ref={overlayCanvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: 'none'
          }}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Faces Detected:</strong> {faceCount}</p>
        <div style={{ marginTop: '10px' }}>
          <button
            onClick={isDetecting ? stopDetection : startDetection}
            disabled={!matcher || !modelsLoaded}
            style={{
              padding: '8px 16px',
              backgroundColor: isDetecting ? '#dc3545' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: (matcher && modelsLoaded) ? 'pointer' : 'not-allowed'
            }}
          >
            {isDetecting ? 'Stop Live Detection' : 'Start Live Detection'}
          </button>
        </div>
        <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
          <p>• Live tracking with face recognition</p>
          <p>• Green boxes for known faces, red for unknown</p>
          <p>• Face landmarks tracked in real-time</p>
          <p style={{ marginTop: '6px', color: '#007bff' }}>
            <strong>Debug:</strong> {debugInfo}
          </p>
        </div>
      </div>
    </div>
  );
}
