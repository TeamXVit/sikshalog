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
  Calendar
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
  const [recognizedFaces, setRecognizedFaces] = useState([]);
  const [attendanceMarked, setAttendanceMarked] = useState([]);
  const [currentSession, setCurrentSession] = useState('morning');
  const [showSettings, setShowSettings] = useState(false);
  const [confidence, setConfidence] = useState(0.6);
  const [frameRate, setFrameRate] = useState(100);

  const sessions = [
    { id: 'morning', name: 'Morning', time: '09:00 - 10:00' },
    { id: 'afternoon', name: 'Afternoon', time: '13:00 - 14:00' },
    { id: 'evening', name: 'Evening', time: '16:00 - 17:00' }
  ];

  useEffect(() => {
    init();
    return () => {
      cleanup();
    };
  }, []);

  const cleanup = () => {
    stopDetection();
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const init = async () => {
    try {
      setStatus("Loading AI models...");
      setDebugInfo("Starting model loading process...");
      
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

      const stored = JSON.parse(localStorage.getItem("faces")) || [];
      setDebugInfo(`Found ${stored.length} stored faces`);
      
      if (stored.length === 0) {
        setStatus("⚠️ No enrolled faces found. Please register students first.");
        setDebugInfo("No enrolled faces - please use Register Student first");
        return;
      }

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
      
      const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, confidence);
      setMatcher(faceMatcher);
      setDebugInfo(`Face matcher created with ${labeledDescriptors.length} faces`);

      setStatus("Face matcher ready, starting camera...");

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
          
          videoRef.current.onloadedmetadata = () => {
            setStatus("✅ Camera ready - click Start Detection");
            setDebugInfo(`Video ready: ${videoRef.current.videoWidth}x${videoRef.current.videoHeight}`);
          };

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
  };

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
        
        if (!videoRef.current || !canvasRef.current || !overlayCanvasRef.current) {
          setDebugInfo("Missing video or canvas refs");
          if (isDetecting) {
            detectionRef.current = setTimeout(detectFaces, frameRate);
          }
          return;
        }

        if (videoRef.current.readyState < 2) {
          setDebugInfo(`Video not ready, readyState: ${videoRef.current.readyState}`);
          if (isDetecting) {
            detectionRef.current = setTimeout(detectFaces, frameRate);
          }
          return;
        }

        const video = videoRef.current;
        const canvas = canvasRef.current;
        const overlayCanvas = overlayCanvasRef.current;
        
        const videoWidth = video.videoWidth || video.offsetWidth;
        const videoHeight = video.videoHeight || video.offsetHeight;
        
        if (videoWidth === 0 || videoHeight === 0) {
          setDebugInfo("Video dimensions are 0");
          if (isDetecting) {
            detectionRef.current = setTimeout(detectFaces, frameRate);
          }
          return;
        }

        const displaySize = { width: videoWidth, height: videoHeight };

        faceapi.matchDimensions(canvas, displaySize);
        faceapi.matchDimensions(overlayCanvas, displaySize);

        const detections = await faceapi
          .detectAllFaces(video, new faceapi.SsdMobilenetv1Options({ 
            minConfidence: 0.3,
            maxResults: 10 
          }))
          .withFaceLandmarks()
          .withFaceDescriptors();

        setDebugInfo(`Frame ${frameCount}: ${detections.length} faces detected`);

        const ctx = canvas.getContext("2d");
        const overlayCtx = overlayCanvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);

        setFaceCount(detections.length);

        const currentRecognized = [];

        if (detections.length > 0) {
          const resizedDetections = faceapi.resizeResults(detections, displaySize);

          resizedDetections.forEach((detection, index) => {
            const bestMatch = matcher.findBestMatch(detection.descriptor);
            const box = detection.detection.box;
            const isRecognized = bestMatch.distance < confidence;
            const label = isRecognized ? bestMatch.label : "Unknown";
            const confidenceScore = Math.round((1 - bestMatch.distance) * 100);
            const color = isRecognized ? "#10B981" : "#EF4444";
            
            if (isRecognized) {
              currentRecognized.push({
                name: label,
                confidence: confidenceScore,
                timestamp: new Date().toISOString()
              });
            }
            
            // Draw face box mirrored
            ctx.save();
            ctx.scale(-1, 1);
            ctx.translate(-canvas.width, 0);
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.strokeRect(box.x, box.y, box.width, box.height);
            
            // Draw corner indicators
            const cornerSize = 20;
            ctx.fillStyle = color;
            // Top-left corner
            ctx.fillRect(box.x, box.y, cornerSize, 3);
            ctx.fillRect(box.x, box.y, 3, cornerSize);
            // Top-right corner
            ctx.fillRect(box.x + box.width - cornerSize, box.y, cornerSize, 3);
            ctx.fillRect(box.x + box.width - 3, box.y, 3, cornerSize);
            // Bottom-left corner
            ctx.fillRect(box.x, box.y + box.height - 3, cornerSize, 3);
            ctx.fillRect(box.x, box.y + box.height - cornerSize, 3, cornerSize);
            // Bottom-right corner
            ctx.fillRect(box.x + box.width - cornerSize, box.y + box.height - 3, cornerSize, 3);
            ctx.fillRect(box.x + box.width - 3, box.y + box.height - cornerSize, 3, cornerSize);
            
            ctx.restore();
            
            // Draw landmarks
            const landmarks = detection.landmarks;
            ctx.save();
            ctx.scale(-1, 1);
            ctx.translate(-canvas.width, 0);
            ctx.fillStyle = color;
            landmarks.positions.forEach(point => {
              ctx.beginPath();
              ctx.arc(point.x, point.y, 1, 0, 2 * Math.PI);
              ctx.fill();
            });
            ctx.restore();

            // Draw text labels
            const textX = displaySize.width - box.x - box.width;
            const textY = box.y - 15;
            overlayCtx.font = "bold 16px Arial";
            overlayCtx.fillStyle = color;
            overlayCtx.strokeStyle = "rgba(0,0,0,0.7)";
            overlayCtx.lineWidth = 3;
            const text = `${label}`;
            const subText = `${confidenceScore}%`;
            
            overlayCtx.strokeText(text, textX, textY);
            overlayCtx.fillText(text, textX, textY);
            overlayCtx.strokeText(subText, textX, textY + 20);
            overlayCtx.fillText(subText, textX, textY + 20);
          });
        }

        setRecognizedFaces(currentRecognized);

        if (isDetecting) {
          detectionRef.current = setTimeout(detectFaces, frameRate);
        }

      } catch (error) {
        console.error("Detection error:", error);
        setStatus("❌ Detection error");
        setDebugInfo(`Detection error: ${error.message}`);
        if (isDetecting) {
          detectionRef.current = setTimeout(detectFaces, frameRate);
        }
      }
    };

    detectionRef.current = setTimeout(detectFaces, frameRate);
  };

  const stopDetection = () => {
    setIsDetecting(false);
    setStatus("⏹️ Detection stopped");
    setFaceCount(0);
    setRecognizedFaces([]);
    if (detectionRef.current) {
      clearTimeout(detectionRef.current);
      detectionRef.current = null;
    }
  };

  const markAttendance = (student) => {
    if (!attendanceMarked.find(s => s.name === student.name)) {
      const newAttendance = {
        ...student,
        session: currentSession,
        markedAt: new Date().toLocaleString()
      };
      setAttendanceMarked([...attendanceMarked, newAttendance]);
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recognition Confidence: {confidence}
              </label>
              <input
                type="range"
                min="0.3"
                max="0.9"
                step="0.1"
                value={confidence}
                onChange={(e) => setConfidence(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Frame Rate (ms): {frameRate}
              </label>
              <input
                type="range"
                min="50"
                max="500"
                step="50"
                value={frameRate}
                onChange={(e) => setFrameRate(parseInt(e.target.value))}
                className="w-full"
              />
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
                className="w-full h-80 object-cover transform scale-x-[-1]"
                style={{ maxHeight: '400px' }}
              />
              <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
              />
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

        {/* Recognition Results */}
        <div className="space-y-6">
          {/* Live Recognition */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Recognition</h3>
            
            {recognizedFaces.length === 0 ? (
              <div className="text-center py-8">
                <UserCheck className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No faces recognized</p>
                <p className="text-sm text-gray-400 mt-1">Students will appear here when detected</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {recognizedFaces.map((face, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-green-900">{face.name}</p>
                      <p className="text-sm text-green-600">{face.confidence}% confidence</p>
                    </div>
                    <button
                      onClick={() => markAttendance(face)}
                      disabled={attendanceMarked.find(s => s.name === face.name)}
                      className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-3 py-1 rounded text-sm transition duration-200"
                    >
                      {attendanceMarked.find(s => s.name === face.name) ? 'Marked' : 'Mark'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Attendance Marked */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance Marked ({attendanceMarked.length})</h3>
            
            {attendanceMarked.length === 0 ? (
              <div className="text-center py-6">
                <Clock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">No attendance marked yet</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {attendanceMarked.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-blue-50 rounded">
                    <div>
                      <p className="font-medium text-blue-900 text-sm">{student.name}</p>
                      <p className="text-xs text-blue-600">{student.markedAt}</p>
                    </div>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Detection Info */}
          <div className="bg-blue-50 rounded-xl border border-blue-200 p-4">
            <h4 className="font-medium text-blue-900 mb-2">Detection Tips</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• Ensure good lighting on faces</li>
              <li>• Look directly at the camera</li>
              <li>• Keep face within the detection area</li>
              <li>• Avoid rapid movements</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Debug Information */}
      {debugInfo && (
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            <strong>Debug:</strong> {debugInfo}
          </p>
        </div>
      )}
    </div>
  );
}
