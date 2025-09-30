import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { 
  Camera, 
  Play, 
  Square, 
  Users, 
  Eye, 
  AlertCircle, 
  CheckCircle, 
  XCircle,
  Clock,
  RefreshCw,
  Settings,
  Activity,
  Loader,
  UserCheck,
  Calendar,
  Info
} from 'lucide-react';

export default function DetectStudent() {
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
  const [currentSession, setCurrentSession] = useState('morning');
  const [showSettings, setShowSettings] = useState(false);

  const sessions = [
    { id: 'morning', name: 'Morning', time: '09:00 - 10:00' },
    { id: 'afternoon', name: 'Afternoon', time: '13:00 - 14:00' },
    { id: 'evening', name: 'Evening', time: '16:00 - 17:00' }
  ];

  useEffect(() => {
    async function init() {
      try {
        setStatus("Loading AI models...");
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
          setStatus("⚠️ No enrolled faces found. Please register students first.");
          setDebugInfo("No enrolled faces - please use Register Student first");
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
          setStatus("❌ No valid face descriptors found.");
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
              width: { ideal: 640 },
              height: { ideal: 480 },
              facingMode: 'user'
            } 
          });
          
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            
            // Wait for video metadata to load
            videoRef.current.onloadedmetadata = () => {
              setStatus("✅ Camera ready - click Start Detection");
              setDebugInfo(`Video ready: ${videoRef.current.videoWidth}x${videoRef.current.videoHeight}`);
            };

            // Handle video loading errors
            videoRef.current.onerror = (e) => {
              console.error("Video error:", e);
              setStatus("❌ Video error occurred");
              setDebugInfo("Video failed to load");
            };
          }
        } catch (cameraError) {
          console.error("Camera error:", cameraError);
          setStatus(`❌ Camera error: ${cameraError.message}`);
          setDebugInfo(`Camera access failed: ${cameraError.name}`);
        }
        
      } catch (error) {
        console.error("Initialization error:", error);
        setStatus(`❌ Error: ${error.message}`);
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
    setStatus("🔍 Live detection running...");
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

    if (detections.length > 0 && matcher) {
      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      resizedDetections.forEach((detection, index) => {
        const bestMatch = matcher.findBestMatch(detection.descriptor);
        const box = detection.detection.box;
        const label = bestMatch.distance < 0.6 ? bestMatch.label : "Unknown";
        const confidence = Math.round((1 - bestMatch.distance) * 100);
        const color = bestMatch.distance < 0.6 ? "#10B981" : "#EF4444";
        
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
        overlayCtx.font = "bold 16px Arial";
        overlayCtx.fillStyle = color;
        overlayCtx.strokeStyle = "rgba(0,0,0,0.7)";
        overlayCtx.lineWidth = 3;
        const text = `${label} (${confidence}%)`;
        overlayCtx.strokeText(text, textX, textY);
        overlayCtx.fillText(text, textX, textY);
      });
    } else if (detections.length > 0 && !matcher) {
      // If no matcher is loaded, just draw detection boxes without recognition
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      
      resizedDetections.forEach((detection, index) => {
        const box = detection.detection.box;
        const color = "#6B7280"; // Gray color for unrecognized faces
        
        // Draw face box mirrored for selfie view
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(-canvas.width, 0);
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.strokeRect(box.x, box.y, box.width, box.height);
        ctx.restore();
        
        // Draw text labels (not mirrored for readability)
        const textX = displaySize.width - box.x - box.width;
        const textY = box.y - 10;
        overlayCtx.font = "bold 16px Arial";
        overlayCtx.fillStyle = color;
        overlayCtx.strokeStyle = "rgba(0,0,0,0.7)";
        overlayCtx.lineWidth = 3;
        const text = "Face Detected";
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
    setStatus("❌ Detection error");
    setDebugInfo(`Detection error: ${error.message}`);
    if (isDetecting) {
      detectionRef.current = requestAnimationFrame(detectFaces);
    }
  }
};


    detectionRef.current = requestAnimationFrame(detectFaces);
  };

  const stopDetection = () => {
    setIsDetecting(false);
    setStatus("⏹️ Detection stopped");
    setFaceCount(0);
    if (detectionRef.current) {
      cancelAnimationFrame(detectionRef.current);
      detectionRef.current = null;
    }
  };

  const getStatusColor = () => {
    if (status.includes("❌")) return "text-red-600";
    if (status.includes("✅")) return "text-green-600";
    if (status.includes("⚠️")) return "text-yellow-600";
    if (status.includes("🔍")) return "text-blue-600";
    return "text-gray-700";
  };

  const getStatusIcon = () => {
    if (status.includes("❌")) return <XCircle className="h-5 w-5 text-red-500" />;
    if (status.includes("✅")) return <CheckCircle className="h-5 w-5 text-green-500" />;
    if (status.includes("⚠️")) return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    if (status.includes("🔍")) return <Activity className="h-5 w-5 text-blue-500 animate-pulse" />;
    if (status.includes("Loading")) return <Loader className="h-5 w-5 text-blue-500 animate-spin" />;
    return <Camera className="h-5 w-5 text-blue-500" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Take Attendance</h1>
          <p className="text-gray-600 mt-1">Real-time face recognition attendance system</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Session Selection */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Current Session</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{new Date().toLocaleDateString('en-IN', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sessions.map((session) => (
            <button
              key={session.id}
              onClick={() => setCurrentSession(session.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                currentSession === session.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <div className="text-center">
                <h4 className="font-semibold">{session.name}</h4>
                <p className="text-sm mt-1">{session.time}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Detection Settings</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900">Real Face Recognition Active</h4>
                <p className="text-sm text-blue-700 mt-1">
                  This system uses actual face-api.js models for live face detection and recognition. 
                  Confidence threshold: 0.6 (60% similarity required for recognition).
                </p>
                <ul className="text-sm text-blue-600 mt-2 space-y-1">
                  <li>• Green boxes: Recognized students (≥60% confidence)</li>
                  <li>• Red boxes: Unknown persons (60% confidence)</li>
                  <li>• Real-time facial landmark detection</li>
                  <li>• Optimized for classroom environments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Camera Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Live Detection</h3>
              <div className="flex items-center space-x-4">
                <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                  faceCount > 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  <Users className="h-4 w-4" />
                  <span>{faceCount} Face{faceCount !== 1 ? 's' : ''}</span>
                </div>
                <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                  isDetecting ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    isDetecting ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'
                  }`}></div>
                  <span>{isDetecting ? 'Active' : 'Inactive'}</span>
                </div>
              </div>
            </div>

            {/* Camera Container */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4">
              <video
                ref={videoRef}
                autoPlay
                muted
                width={480}
                height={360}
                className="w-full h-80 object-cover"
                style={{
                  display: 'block',
                  transform: 'scaleX(-1)', // Mirror video for natural selfie view
                  maxHeight: '400px'
                }}
              />
              {/* Canvas for face detection boxes and landmarks - mirrored */}
              <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
              />
              {/* Separate canvas for text labels - not mirrored for readability */}
              <canvas
                ref={overlayCanvasRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
              />
              
              {/* Detection Guide Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="border-2 border-dashed border-blue-400 rounded-lg w-64 h-64 flex items-center justify-center opacity-30">
                  <div className="text-white text-center">
                    <Eye className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Detection Area</p>
                  </div>
                </div>
              </div>

              {/* Loading Indicator */}
              {!modelsLoaded && (
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Loader className="h-8 w-8 animate-spin mx-auto mb-2" />
                    <p>Loading AI models...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Status */}
            <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg mb-4">
              {getStatusIcon()}
              <span className={`font-medium ${getStatusColor()}`}>{status}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4">
              {!isDetecting ? (
                <button
                  onClick={startDetection}
                  disabled={!matcher || !modelsLoaded}
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition duration-200"
                >
                  <Play className="h-5 w-5" />
                  <span>Start Detection</span>
                </button>
              ) : (
                <button
                  onClick={stopDetection}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200"
                >
                  <Square className="h-5 w-5" />
                  <span>Stop Detection</span>
                </button>
              )}
              
              <button
                onClick={() => window.location.reload()}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg transition duration-200"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="space-y-6">
          {/* System Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
            
            <div className="space-y-4">
              <div className={`flex items-center space-x-3 p-3 rounded-lg ${
                modelsLoaded ? 'bg-green-50' : 'bg-yellow-50'
              }`}>
                {modelsLoaded ? 
                  <CheckCircle className="h-5 w-5 text-green-600" /> : 
                  <Loader className="h-5 w-5 text-yellow-600 animate-spin" />
                }
                <div>
                  <p className={`font-medium ${modelsLoaded ? 'text-green-900' : 'text-yellow-900'}`}>
                    AI Models
                  </p>
                  <p className={`text-sm ${modelsLoaded ? 'text-green-700' : 'text-yellow-700'}`}>
                    {modelsLoaded ? 'Ready for detection' : 'Loading...'}
                  </p>
                </div>
              </div>

              <div className={`flex items-center space-x-3 p-3 rounded-lg ${
                matcher ? 'bg-green-50' : 'bg-red-50'
              }`}>
                {matcher ? 
                  <CheckCircle className="h-5 w-5 text-green-600" /> : 
                  <XCircle className="h-5 w-5 text-red-600" />
                }
                <div>
                  <p className={`font-medium ${matcher ? 'text-green-900' : 'text-red-900'}`}>
                    Face Matcher
                  </p>
                  <p className={`text-sm ${matcher ? 'text-green-700' : 'text-red-700'}`}>
                    {matcher ? 'Students loaded' : 'No students registered'}
                  </p>
                </div>
              </div>

              <div className={`flex items-center space-x-3 p-3 rounded-lg ${
                isDetecting ? 'bg-blue-50' : 'bg-gray-50'
              }`}>
                {isDetecting ? 
                  <Activity className="h-5 w-5 text-blue-600 animate-pulse" /> : 
                  <Clock className="h-5 w-5 text-gray-600" />
                }
                <div>
                  <p className={`font-medium ${isDetecting ? 'text-blue-900' : 'text-gray-900'}`}>
                    Detection
                  </p>
                  <p className={`text-sm ${isDetecting ? 'text-blue-700' : 'text-gray-700'}`}>
                    {isDetecting ? 'Running...' : 'Stopped'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Detection Tips */}
          <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
            <h4 className="font-medium text-blue-900 mb-3 flex items-center">
              <UserCheck className="h-5 w-5 mr-2" />
              Detection Tips
            </h4>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Ensure good lighting on faces</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Look directly at the camera</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Keep face within detection area</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Avoid rapid movements</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Remove masks or face coverings</span>
              </li>
            </ul>
          </div>

          {/* Technical Info */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <h4 className="font-medium text-gray-900 mb-3 flex items-center">
              <Info className="h-5 w-5 mr-2" />
              Technical Details
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Detection Model:</span>
                <span className="font-medium">SSD MobileNetV1</span>
              </div>
              <div className="flex justify-between">
                <span>Recognition Model:</span>
                <span className="font-medium">FaceNet</span>
              </div>
              <div className="flex justify-between">
                <span>Confidence Threshold:</span>
                <span className="font-medium">60%</span>
              </div>
              <div className="flex justify-between">
                <span>Video Resolution:</span>
                <span className="font-medium">640x480</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Debug Information */}
      {debugInfo && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Activity className="h-5 w-5 mr-2 text-blue-600" />
            Debug Information
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 font-mono">{debugInfo}</p>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <p>• Live tracking with face recognition using face-api.js</p>
            <p>• Green boxes for known faces, red for unknown</p>
            <p>• Face landmarks tracked in real-time</p>
          </div>
        </div>
      )}
    </div>
  );
}
