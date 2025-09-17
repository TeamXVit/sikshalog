import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { Camera, Check, XCircle, Loader2, Trash2, Eye, EyeOff } from "lucide-react";

export default function RegisterStudent() {
  /* ---------- Refs ---------- */
  const videoRef   = useRef(null);
  const canvasRef  = useRef(null);

  /* ---------- State ---------- */
  const [status,       setStatus]       = useState("Initializing…");
  const [name,         setName]         = useState("");
  const [regno,        setRegno]        = useState("");
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [faceReady,    setFaceReady]    = useState(false);
  const [storedFaces,  setStoredFaces]  = useState([]);
  const [showData,     setShowData]     = useState(false);

  /* ---------- Load stored data ---------- */
  const loadStoredData = () => {
    const faces = JSON.parse(localStorage.getItem("faces") || "[]");
    setStoredFaces(faces);
  };

  /* ---------- Load models & start camera ---------- */
  useEffect(() => {
    const init = async () => {
      try {
        setStatus("Loading AI models…");
        await Promise.all([
          faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
          faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
          faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        ]);
        setModelsLoaded(true);
        setStatus("Starting camera…");

        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 480, height: 360, facingMode: "user" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            setStatus("Ready • Position face & enter details");
            detectLoop(); // start passive face-present check
          };
        }
      } catch (err) {
        console.error(err);
        setStatus(`Error: ${err.message}`);
      }
    };

    init();
    loadStoredData(); // Load stored data on component mount

    /* Cleanup camera on unmount */
    return () => {
      if (videoRef.current?.srcObject)
        videoRef.current.srcObject.getTracks().forEach(t => t.stop());
    };
  }, []);

  /* ---------- Passive face-present indicator ---------- */
  const detectLoop = async () => {
    if (!videoRef.current) return;
    const result = await faceapi
      .detectSingleFace(videoRef.current)
      .withFaceLandmarks()
      .withFaceDescriptor();
    setFaceReady(!!result);

    /* Draw green frame if face present */
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      if (result) {
        const { box } = result.detection;
        ctx.strokeStyle = "#22c55e";
        ctx.lineWidth = 3;
        const invertedX = canvasRef.current.width - box.x - box.width;
        ctx.strokeRect(invertedX, box.y, box.width, box.height);
      }
    }
    requestAnimationFrame(detectLoop);
  };

  /* ---------- Capture & store ---------- */
  const handleSave = async () => {
    if (!modelsLoaded) return;
    if (!name.trim()) {
      alert("Enter a name first!"); return;
    }
    if (!regno.trim()) {
      alert("Enter registration number first!"); return;
    }
    if (!faceReady) {
      alert("No face detected!"); return;
    }

    setStatus("Capturing…");
    const detection = await faceapi
      .detectSingleFace(videoRef.current)
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (!detection) {
      setStatus("Ready • Face lost, try again");
      return;
    }

    const faces = JSON.parse(localStorage.getItem("faces") || "[]");
    faces.push({
      name: name.trim(),
      regno: regno.trim(),
      descriptor: Array.from(detection.descriptor),
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("faces", JSON.stringify(faces));

    setName("");
    setRegno("");
    setStatus("✅ Saved! Register another student");
    loadStoredData(); // Refresh the stored data display
  };

  /* ---------- Delete stored data ---------- */
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      const faces = JSON.parse(localStorage.getItem("faces") || "[]");
      faces.splice(index, 1);
      localStorage.setItem("faces", JSON.stringify(faces));
      loadStoredData(); // Refresh the display
    }
  };

  /* ---------- Clear all data ---------- */
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete ALL registered faces? This cannot be undone.")) {
      localStorage.removeItem("faces");
      loadStoredData(); // Refresh the display
    }
  };

  /* ---------- UI ---------- */
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900">Register Student</h1>

      {/* Video / Canvas */}
      <div className="relative w-[480px] h-[360px] mx-auto">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="w-full h-full object-cover rounded-lg ring-2 ring-gray-300"
          style={{ transform: "scaleX(-1)" }}
        />
        <canvas
          ref={canvasRef}
          width={480}
          height={360}
          className="absolute inset-0 pointer-events-none"
        />
        {!modelsLoaded && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg">
            <Loader2 className="h-8 w-8 text-white animate-spin" />
          </div>
        )}
      </div>

      {/* Input & Button */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter student name"
          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={regno}
          onChange={e => setRegno(e.target.value)}
          placeholder="Enter registration number"
          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSave}
          disabled={!modelsLoaded}
          className={`flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-white
            ${modelsLoaded ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
        >
          <Camera className="h-5 w-5" />
          Save Face
        </button>
      </div>

      {/* Status Banner */}
      <div className={`flex items-center gap-2 text-sm p-3 rounded-lg
        ${status.startsWith("✅") ? "bg-green-50 text-green-700"
        : status.startsWith("Error") || status.startsWith("❌") ? "bg-red-50 text-red-700"
        : "bg-gray-50 text-gray-700"}`}>
        {status.startsWith("✅") ? <Check className="h-4 w-4" />
        : status.startsWith("Error") || status.startsWith("❌") ? <XCircle className="h-4 w-4" />
        : <Loader2 className="h-4 w-4 animate-spin" />}
        <span className="font-medium">{status}</span>
      </div>

      {/* Face readiness indicator */}
      <div className="flex items-center gap-2 text-sm">
        Face status:
        {faceReady ? (
          <span className="flex items-center gap-1 text-green-600">
            <Check className="h-4 w-4" /> Detected
          </span>
        ) : (
          <span className="flex items-center gap-1 text-gray-500">
            <XCircle className="h-4 w-4" /> Not Detected
          </span>
        )}
      </div>

      {/* Stored Data Section */}
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Registered Students ({storedFaces.length})
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setShowData(!showData)}
              className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
            >
              {showData ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showData ? "Hide" : "Show"} Data
            </button>
            {storedFaces.length > 0 && (
              <button
                onClick={handleClearAll}
                className="flex items-center gap-2 px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg"
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </button>
            )}
          </div>
        </div>

        {showData && (
          <div className="space-y-3">
            {storedFaces.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No students registered yet.</p>
            ) : (
              storedFaces.map((face, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{face.name}</div>
                    <div className="text-sm text-gray-600">Reg No: {face.regno}</div>
                    <div className="text-xs text-gray-500">
                      Registered: {new Date(face.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(index)}
                    className="flex items-center gap-1 px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}