import React, { useRef, useEffect, useState } from "react";
import { 
  Camera, 
  User, 
  Check, 
  X, 
  AlertCircle, 
  RefreshCw, 
  Save,
  Eye,
  EyeOff,
  Loader
} from 'lucide-react';

export default function RegisterStudent() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [status, setStatus] = useState("Initializing...");
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [faceDetected, setFaceDetected] = useState(false);
  const [savedFaces, setSavedFaces] = useState([]);
  const [showSavedFaces, setShowSavedFaces] = useState(false);
  const [detectionInterval, setDetectionInterval] = useState(null);
  const [cameraError, setCameraError] = useState(null);
  const [debugInfo, setDebugInfo] = useState({});

  const classes = ['10-A', '10-B', '9-A', '9-B', '8-A', '8-B', '8-C'];

  // Load saved faces from localStorage
  const loadSavedFaces = () => {
    try {
      const saved = JSON.parse(localStorage.getItem("faces")) || [];
      setSavedFaces(saved);
    } catch (error) {
      console.error("Error loading saved faces:", error);
      setSavedFaces([]);
    }
  };

  // Debug function to check button state
  const updateDebugInfo = () => {
    const videoReady = videoRef.current?.readyState === 4;
    const nameValid = name.trim().length > 0;
    const rollNumberValid = rollNumber.trim().length > 0;
    const classValid = studentClass.length > 0;
    
    setDebugInfo({
      modelsLoaded,
      isCapturing,
      faceDetected,
      nameValid,
      rollNumberValid,
      classValid,
      videoReady
    });
  };

  // Update debug info when dependencies change
  useEffect(() => {
    updateDebugInfo();
  }, [modelsLoaded, isCapturing, faceDetected, name, rollNumber, studentClass]);

  useEffect(() => {
    loadSavedFaces();
    init();
    
    return () => {
      cleanup();
    };
  }, []);

  const cleanup = () => {
    if (detectionInterval) {
      clearInterval(detectionInterval);
      setDetectionInterval(null);
    }
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const init = async () => {
    try {
      setStatus("Initializing camera (Demo mode - face-api.js simulation)...");
      setCameraError(null);
      
      // Simulate model loading since face-api.js isn't available
      setTimeout(() => {
        setModelsLoaded(true);
        setStatus("Demo mode: AI models loaded successfully");
      }, 2000);
      
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
            setStatus("✅ Camera ready! Fill the form and position your face.");
            startFaceDetection();
          };
          
          videoRef.current.onerror = (e) => {
            console.error("Video error:", e);
            setCameraError("Video failed to load");
            setStatus("❌ Video error occurred");
          };
        }
      } catch (cameraErr) {
        console.error("Camera error:", cameraErr);
        setCameraError(cameraErr.message);
        setStatus("⚠️ Camera access denied - Demo mode without camera");
        
        // Still start face detection for demo
        setTimeout(() => {
          startFaceDetection();
        }, 1000);
      }
    } catch (error) {
      console.error("Initialization error:", error);
      setCameraError(error.message);
      setStatus(`❌ Error: ${error.message}`);
      
      // For demo purposes, still enable the models
      setTimeout(() => {
        setModelsLoaded(true);
        setStatus("⚠️ Demo mode: Error but models loaded");
        startFaceDetection();
      }, 2000);
    }
  };

  const startFaceDetection = () => {
    // Clear existing interval
    if (detectionInterval) {
      clearInterval(detectionInterval);
    }
    
    // Simulate face detection since face-api.js isn't available
    const interval = setInterval(() => {
      // Simulate face detection with higher probability when form is filled
      const formComplete = name.trim() && rollNumber.trim() && studentClass;
      const shouldDetectFace = formComplete ? Math.random() > 0.2 : Math.random() > 0.5;
      setFaceDetected(shouldDetectFace);
    }, 1500); // Check every 1.5 seconds for smoother simulation
    
    setDetectionInterval(interval);
  };

 const handleCapture = async () => {
  if (!modelsLoaded) {
    alert("AI models still loading, please wait!");
    return;
  }

  if (!name.trim() || !rollNumber.trim() || !studentClass) {
    alert("Please fill in all required fields!");
    return;
  }

  if (!faceDetected) {
    alert("No face detected! Please ensure your face is clearly visible and well-lit.");
    return;
  }

  try {
    setIsCapturing(true);
    setStatus("🔄 Capturing face data (demo mode)...");
    
    // Simulate face detection processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Fixed duplicate check with proper null/undefined handling
    const currentSaved = JSON.parse(localStorage.getItem("faces")) || [];
    const isDuplicate = currentSaved.some(face => {
      // Check if face and face.rollNumber exist before calling toLowerCase
      if (!face || !face.rollNumber || typeof face.rollNumber !== 'string') {
        return false;
      }
      return face.rollNumber.toLowerCase() === rollNumber.toLowerCase().trim();
    });

    if (isDuplicate) {
      alert("A student with this roll number is already registered!");
      return;
    }

    const newStudent = { 
      name: name.trim(), 
      rollNumber: rollNumber.trim(),
      class: studentClass,
      descriptor: Array(128).fill(0).map(() => Math.random()), // Simulated descriptor
      timestamp: new Date().toISOString(),
      registeredBy: "Demo System"
    };
    
    const updatedFaces = [...currentSaved, newStudent];
    localStorage.setItem("faces", JSON.stringify(updatedFaces));
    setSavedFaces(updatedFaces);
    
    // Success feedback
    setStatus("✅ Student registered successfully!");
    setTimeout(() => {
      setStatus("✅ Camera ready! Fill the form and position your face.");
    }, 3000);
    
    // Reset form
    setName("");
    setRollNumber("");
    setStudentClass("");
    
  } catch (error) {
    console.error("Capture error:", error);
    setStatus("✅ Camera ready! Fill the form and position your face.");
    alert("Error during face registration: " + error.message);
  } finally {
    setIsCapturing(false);
  }
};


  const handleRetakePhoto = () => {
    setStatus("✅ Camera ready! Fill the form and position your face.");
    setFaceDetected(false);
    
    // Restart face detection
    if (detectionInterval) {
      clearInterval(detectionInterval);
    }
    setTimeout(() => {
      startFaceDetection();
    }, 500);
  };

  const deleteSavedFace = (index) => {
    try {
      const currentSaved = JSON.parse(localStorage.getItem("faces")) || [];
      currentSaved.splice(index, 1);
      localStorage.setItem("faces", JSON.stringify(currentSaved));
      setSavedFaces(currentSaved);
    } catch (error) {
      console.error("Error deleting face:", error);
    }
  };

  const getStatusColor = () => {
    if (status.includes("❌") || status.includes("Error")) return "text-red-600";
    if (status.includes("✅")) return "text-green-600";
    if (status.includes("⚠️")) return "text-yellow-600";
    if (status.includes("🔄") || status.includes("Loading") || status.includes("Capturing")) return "text-blue-600";
    return "text-gray-700";
  };

  const getStatusIcon = () => {
    if (status.includes("❌") || status.includes("Error")) return <AlertCircle className="h-5 w-5 text-red-500" />;
    if (status.includes("✅")) return <Check className="h-5 w-5 text-green-500" />;
    if (status.includes("⚠️")) return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    if (status.includes("🔄") || status.includes("Loading") || status.includes("Capturing")) return <Loader className="h-5 w-5 text-blue-500 animate-spin" />;
    return <Camera className="h-5 w-5 text-blue-500" />;
  };

  // Check if button should be enabled
  const isButtonEnabled = modelsLoaded && 
                         !isCapturing && 
                         faceDetected && 
                         name.trim().length > 0 && 
                         rollNumber.trim().length > 0 && 
                         studentClass.length > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Register Student</h1>
          <p className="text-gray-600 mt-1">Enroll students using facial recognition technology (Demo Mode)</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowSavedFaces(!showSavedFaces)}
            className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            {showSavedFaces ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            <span>{showSavedFaces ? 'Hide' : 'Show'} Registered ({savedFaces.length})</span>
          </button>
        </div>
      </div>

      {/* Debug Information Panel */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-800 mb-2">Debug Information (Demo Mode)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div className={`p-2 rounded ${debugInfo.modelsLoaded ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            Models: {debugInfo.modelsLoaded ? '✓' : '✗'}
          </div>
          <div className={`p-2 rounded ${!debugInfo.isCapturing ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            Not Capturing: {!debugInfo.isCapturing ? '✓' : '✗'}
          </div>
          <div className={`p-2 rounded ${debugInfo.faceDetected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            Face Detected: {debugInfo.faceDetected ? '✓ (Simulated)' : '✗'}
          </div>
          <div className={`p-2 rounded ${debugInfo.nameValid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            Name: {debugInfo.nameValid ? '✓' : '✗'}
          </div>
          <div className={`p-2 rounded ${debugInfo.rollNumberValid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            Roll Number: {debugInfo.rollNumberValid ? '✓' : '✗'}
          </div>
          <div className={`p-2 rounded ${debugInfo.classValid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            Class: {debugInfo.classValid ? '✓' : '✗'}
          </div>
          <div className={`p-2 rounded ${isButtonEnabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            Button: {isButtonEnabled ? 'Enabled' : 'Disabled'}
          </div>
          <div className="p-2 rounded bg-blue-100 text-blue-800">
            Total Saved: {savedFaces.length}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Camera Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Face Capture (Demo)</h3>
              <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                faceDetected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  faceDetected ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                }`}></div>
                <span>{faceDetected ? 'Face Detected (Simulated)' : 'No Face Detected'}</span>
              </div>
            </div>

            {/* Camera Container */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4">
              {cameraError && !videoRef.current?.srcObject ? (
                <div className="w-full h-80 flex items-center justify-center text-white">
                  <div className="text-center">
                    <AlertCircle className="h-12 w-12 mx-auto mb-4 text-red-400" />
                    <p className="text-lg font-semibold mb-2">Camera Access Denied</p>
                    <p className="text-sm opacity-75">Demo mode active - face detection simulated</p>
                    <p className="text-xs mt-2 opacity-50">{cameraError}</p>
                  </div>
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    className="w-full h-80 object-cover transform scale-x-[-1]"
                    style={{ maxHeight: '400px' }}
                  />
                  <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full transform scale-x-[-1]"
                  />
                  
                  {/* Face Detection Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className={`border-2 border-dashed rounded-lg w-64 h-64 flex items-center justify-center transition-colors ${
                      faceDetected ? 'border-green-400' : 'border-blue-400'
                    }`}>
                      <div className="text-white text-center">
                        <Camera className="h-8 w-8 mx-auto mb-2 opacity-75" />
                        <p className="text-sm opacity-75">
                          {faceDetected ? 'Face Detected!' : 'Position face here'}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

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

            {/* Camera Controls */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={handleRetakePhoto}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition duration-200"
                disabled={!modelsLoaded}
              >
                <RefreshCw className="h-4 w-4" />
                <span>Reset Detection</span>
              </button>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter student's full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Roll Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., STU001"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Class <span className="text-red-500">*</span>
                </label>
                <select
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Class</option>
                  {classes.map(cls => (
                    <option key={cls} value={cls}>Class {cls}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleCapture}
                disabled={!isButtonEnabled}
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition duration-200"
              >
                {isCapturing ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin" />
                    <span>Registering...</span>
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    <span>Register Student</span>
                  </>
                )}
              </button>
              
              {/* Button Status Explanation */}
              {!isButtonEnabled && (
                <div className="text-xs text-gray-500 text-center space-y-1">
                  <p>Button requirements:</p>
                  <div className="space-x-2">
                    {!modelsLoaded && <span className="text-red-500">• Models loading</span>}
                    {isCapturing && <span className="text-red-500">• Currently capturing</span>}
                    {!faceDetected && <span className="text-red-500">• Face detection needed</span>}
                    {!name.trim() && <span className="text-red-500">• Name required</span>}
                    {!rollNumber.trim() && <span className="text-red-500">• Roll number required</span>}
                    {!studentClass && <span className="text-red-500">• Class required</span>}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Registration Requirements */}
          <div className="bg-blue-50 rounded-xl border border-blue-200 p-4">
            <h4 className="font-medium text-blue-900 mb-2">Registration Requirements</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li className="flex items-start space-x-2">
                <Check className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <span>Fill all form fields completely</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <span>Face should be clearly visible and well-lit</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <span>Look directly at the camera</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <span>Wait for "Face Detected" indicator</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Registered Students List */}
      {showSavedFaces && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Registered Students ({savedFaces.length})</h3>
            <button
              onClick={loadSavedFaces}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Refresh</span>
            </button>
          </div>
          
          {savedFaces.length === 0 ? (
            <div className="text-center py-8">
              <User className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No students registered yet</p>
              <p className="text-sm text-gray-400 mt-1">Register your first student to see them here</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedFaces.map((face, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{face.name}</h4>
                      <p className="text-sm text-gray-500">{face.rollNumber}</p>
                      <p className="text-sm text-gray-500">Class: {face.class}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(face.timestamp).toLocaleDateString()} {new Date(face.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        if (confirm(`Delete ${face.name} (${face.rollNumber})?`)) {
                          deleteSavedFace(index);
                        }
                      }}
                      className="text-red-400 hover:text-red-600 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
