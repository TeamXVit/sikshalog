import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { Camera, Check, XCircle, Loader2 } from "lucide-react";

export default function RegisterStudent() {
  /* ---------- Refs ---------- */
  const videoRef   = useRef(null);
  const canvasRef  = useRef(null);

  /* ---------- State ---------- */
  const [status,       setStatus]       = useState("Initializing…");
  const [name,         setName]         = useState("");
  const [regno,         setRegno]         = useState("");
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [faceReady,    setFaceReady]    = useState(false);

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
            setStatus("Ready • Position face & enter name");
            detectLoop(); // start passive face-present check
          };
        }
      } catch (err) {
        console.error(err);
        setStatus(`Error: ${err.message}`);
      }
    };

    init();

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
      descriptor: Array.from(detection.descriptor),
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("faces", JSON.stringify(faces));

    setName("");
    setStatus("✅ Saved! Register another student");
  };

  /* ---------- UI ---------- */
  return (
    <div className="max-w-3xl mx-auto space-y-6">
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
          placeholder="Enter student name"
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
    </div>
  );
}
