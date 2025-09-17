import React, { useState, useRef, useEffect } from 'react';
import { 
  Camera, 
  Users, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Play, 
  Square, 
  History,
  UserCheck,
  AlertCircle,
  Calendar,
  Plus,
  Edit3,
  Trash2,
  Save,
  X
} from 'lucide-react';

const Attendance = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentSession, setCurrentSession] = useState('morning');
  const [recognizedStudents, setRecognizedStudents] = useState([]);
  const [showAddSession, setShowAddSession] = useState(false);
  const [editingSession, setEditingSession] = useState(null);
  const [newSession, setNewSession] = useState({ name: '', timeStart: '', timeEnd: '' });
  const [sessions, setSessions] = useState([
    { id: 'morning', name: 'Morning', time: '09:00 - 10:00', isCustom: false },
    { id: 'afternoon', name: 'Afternoon', time: '13:00 - 14:00', isCustom: false },
    { id: 'evening', name: 'Evening', time: '16:00 - 17:00', isCustom: false }
  ]);
  const [stats, setStats] = useState({
    totalStudents: 247,
    present: 0,
    absent: 0,
    unrecognized: 0
  });
  const videoRef = useRef(null);

  // Mock recognized students data
  const mockStudents = [
    {
      id: 1,
      name: 'Aadhya Sharma',
      rollNo: 'STU001',
      class: '10-A',
      timestamp: '09:15:23',
      confidence: 98.5,
      photo: 'https://images.unsplash.com/photo-1494790108755-2616c95a70e4?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Arjun Patel',
      rollNo: 'STU002',
      class: '10-A',
      timestamp: '09:16:45',
      confidence: 95.2,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Priya Kumari',
      rollNo: 'STU003',
      class: '9-B',
      timestamp: '09:18:12',
      confidence: 97.8,
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  useEffect(() => {
    // Start camera when component mounts
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    // Simulate face recognition with mock data
    setTimeout(() => {
      const newStudent = mockStudents[recognizedStudents.length % mockStudents.length];
      if (!recognizedStudents.find(s => s.id === newStudent.id)) {
        const updatedStudents = [...recognizedStudents, {
          ...newStudent,
          timestamp: new Date().toLocaleTimeString()
        }];
        setRecognizedStudents(updatedStudents);
        setStats(prev => ({
          ...prev,
          present: updatedStudents.length,
          absent: prev.totalStudents - updatedStudents.length
        }));
      }
    }, 2000);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 95) return 'text-green-600 bg-green-100';
    if (confidence >= 85) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  // Remove recognized student from attendance
  const removeRecognizedStudent = (studentId) => {
    if (window.confirm('Are you sure you want to remove this student from attendance?')) {
      const updatedStudents = recognizedStudents.filter(student => student.id !== studentId);
      setRecognizedStudents(updatedStudents);
      setStats(prev => ({
        ...prev,
        present: updatedStudents.length,
        absent: prev.totalStudents - updatedStudents.length
      }));
    }
  };

  // Clear all recognized students
  const clearAllRecognizedStudents = () => {
    if (window.confirm('Are you sure you want to clear all recognized students?')) {
      setRecognizedStudents([]);
      setStats(prev => ({
        ...prev,
        present: 0,
        absent: prev.totalStudents
      }));
    }
  };

  // Session management functions
  const handleAddSession = () => {
    if (newSession.name && newSession.timeStart && newSession.timeEnd) {
      const sessionId = `custom_${Date.now()}`;
      const timeRange = `${newSession.timeStart} - ${newSession.timeEnd}`;
      
      setSessions(prev => [...prev, {
        id: sessionId,
        name: newSession.name,
        time: timeRange,
        isCustom: true
      }]);
      
      setNewSession({ name: '', timeStart: '', timeEnd: '' });
      setShowAddSession(false);
    }
  };

  const handleEditSession = (sessionId) => {
    const session = sessions.find(s => s.id === sessionId);
    if (session) {
      const [timeStart, timeEnd] = session.time.split(' - ');
      setNewSession({ 
        name: session.name, 
        timeStart: timeStart, 
        timeEnd: timeEnd 
      });
      setEditingSession(sessionId);
      setShowAddSession(true);
    }
  };

  const handleUpdateSession = () => {
    if (newSession.name && newSession.timeStart && newSession.timeEnd) {
      const timeRange = `${newSession.timeStart} - ${newSession.timeEnd}`;
      
      setSessions(prev => prev.map(session => 
        session.id === editingSession 
          ? { ...session, name: newSession.name, time: timeRange }
          : session
      ));
      
      setNewSession({ name: '', timeStart: '', timeEnd: '' });
      setShowAddSession(false);
      setEditingSession(null);
    }
  };

  // ENHANCED: Remove session slot with better confirmation and fallback logic
  const handleRemoveSession = (sessionId) => {
    const session = sessions.find(s => s.id === sessionId);
    if (!session) return;

    // Enhanced confirmation message
    const confirmMessage = session.isCustom 
      ? `Are you sure you want to delete the custom session "${session.name}" (${session.time})?`
      : `Are you sure you want to remove the "${session.name}" session slot? This will permanently delete this time slot.`;

    if (window.confirm(confirmMessage)) {
      // Filter out the session to remove
      const updatedSessions = sessions.filter(s => s.id !== sessionId);
      setSessions(updatedSessions);

      // Handle current session fallback if the removed session was active
      if (currentSession === sessionId) {
        // Set to the first available session, or morning if no sessions left
        const fallbackSession = updatedSessions.length > 0 ? updatedSessions[0].id : 'morning';
        setCurrentSession(fallbackSession);
        
        // If no sessions left, add a default morning session
        if (updatedSessions.length === 0) {
          setSessions([{ id: 'morning', name: 'Morning', time: '09:00 - 10:00', isCustom: false }]);
        }
      }

      // Clear recognized students when session is removed
      setRecognizedStudents([]);
      setStats(prev => ({
        ...prev,
        present: 0,
        absent: prev.totalStudents
      }));
    }
  };

  // NEW: Remove all custom sessions
  const handleRemoveAllCustomSessions = () => {
    const customSessions = sessions.filter(s => s.isCustom);
    if (customSessions.length === 0) {
      alert('No custom sessions to remove.');
      return;
    }

    if (window.confirm(`Are you sure you want to remove all ${customSessions.length} custom session(s)? This action cannot be undone.`)) {
      const defaultSessions = sessions.filter(s => !s.isCustom);
      setSessions(defaultSessions);
      
      // Reset to morning if current session was custom
      const currentSessionWasCustom = sessions.find(s => s.id === currentSession)?.isCustom;
      if (currentSessionWasCustom) {
        setCurrentSession('morning');
      }
      
      // Clear recognized students
      setRecognizedStudents([]);
      setStats(prev => ({
        ...prev,
        present: 0,
        absent: prev.totalStudents
      }));
    }
  };

  const cancelSessionEdit = () => {
    setNewSession({ name: '', timeStart: '', timeEnd: '' });
    setShowAddSession(false);
    setEditingSession(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Take Attendance</h1>
          <p className="text-gray-600 mt-1">Face recognition based attendance system</p>
        </div>
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

      {/* Session Selection */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Manage Session Slots</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setShowAddSession(true)}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
            >
              <Plus className="h-4 w-4" />
              <span>Add Session</span>
            </button>
            {/* NEW: Remove all custom sessions button */}
            {sessions.some(s => s.isCustom) && (
              <button
                onClick={handleRemoveAllCustomSessions}
                className="flex items-center space-x-2 bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg transition duration-200"
              >
                <Trash2 className="h-4 w-4" />
                <span>Remove All Custom</span>
              </button>
            )}
          </div>
        </div>

        {/* Add/Edit Session Form */}
        {showAddSession && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
            <h4 className="font-medium text-gray-900 mb-3">
              {editingSession ? 'Edit Session Slot' : 'Add New Session Slot'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Session name (e.g., Lunch Break)"
                value={newSession.name}
                onChange={(e) => setNewSession(prev => ({ ...prev, name: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="time"
                placeholder="Start time"
                value={newSession.timeStart}
                onChange={(e) => setNewSession(prev => ({ ...prev, timeStart: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="time"
                placeholder="End time"
                value={newSession.timeEnd}
                onChange={(e) => setNewSession(prev => ({ ...prev, timeEnd: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2 mt-3">
              <button
                onClick={editingSession ? handleUpdateSession : handleAddSession}
                className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition duration-200"
              >
                <Save className="h-4 w-4" />
                <span>{editingSession ? 'Update Slot' : 'Save Slot'}</span>
              </button>
              <button
                onClick={cancelSessionEdit}
                className="flex items-center space-x-1 bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition duration-200"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
            </div>
          </div>
        )}

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`relative p-4 rounded-lg border-2 transition-all duration-200 ${
                currentSession === session.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => setCurrentSession(session.id)}
                className="w-full text-left"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className={`font-semibold ${
                      currentSession === session.id ? 'text-blue-700' : 'text-gray-700'
                    }`}>
                      {session.name}
                    </h4>
                    <p className={`text-sm mt-1 ${
                      currentSession === session.id ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {session.time}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 ml-2">
                    {/* ENHANCED: Edit button for all sessions */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditSession(session.id);
                      }}
                      className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                      title="Edit session slot"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    {/* ENHANCED: Delete button for all sessions with better styling */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveSession(session.id);
                      }}
                      className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                      title="Remove session slot"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* ENHANCED: Session management info */}
        {sessions.length === 0 && (
          <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
            <Clock className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 mb-2">No session slots available</p>
            <p className="text-sm text-gray-400">Add a session slot to get started</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Camera Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Camera Feed</h3>
              <div className="flex items-center space-x-2">
                {isRecording && (
                  <div className="flex items-center space-x-2 text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Recording</span>
                  </div>
                )}
              </div>
            </div>

            {/* Video Feed */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                muted
                className="w-full h-80 object-cover"
              />
              
              {/* Overlay for face detection area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border-2 border-blue-500 border-dashed rounded-lg w-64 h-64 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Camera className="h-8 w-8 mx-auto mb-2 opacity-75" />
                    <p className="text-sm opacity-75">Position face here</p>
                  </div>
                </div>
              </div>

              {/* Recognition status */}
              {isRecording && (
                <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-3 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Scanning faces...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              {!isRecording ? (
                <button
                  onClick={startRecording}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-200"
                >
                  <Play className="h-5 w-5" />
                  <span>Start Recognition</span>
                </button>
              ) : (
                <button
                  onClick={stopRecording}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition duration-200"
                >
                  <Square className="h-5 w-5" />
                  <span>Stop Recognition</span>
                </button>
              )}
              
              <button
                onClick={() => alert('Navigate to attendance history')}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition duration-200"
              >
                <History className="h-5 w-5" />
                <span>View History</span>
              </button>
            </div>
          </div>

          {/* Real-time Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-xl font-bold text-gray-900">{stats.totalStudents}</p>
                </div>
                <Users className="h-8 w-8 text-gray-400" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Present</p>
                  <p className="text-xl font-bold text-green-600">{stats.present}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Absent</p>
                  <p className="text-xl font-bold text-red-600">{stats.absent}</p>
                </div>
                <XCircle className="h-8 w-8 text-red-400" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Attendance</p>
                  <p className="text-xl font-bold text-blue-600">
                    {stats.totalStudents > 0 ? Math.round((stats.present / stats.totalStudents) * 100) : 0}%
                  </p>
                </div>
                <UserCheck className="h-8 w-8 text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Recognition Results */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recognized Students</h3>
              {recognizedStudents.length > 0 && (
                <button
                  onClick={clearAllRecognizedStudents}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-800 transition-colors text-sm"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Clear All</span>
                </button>
              )}
            </div>
            
            {recognizedStudents.length === 0 ? (
              <div className="text-center py-8">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No students recognized yet</p>
                <p className="text-sm text-gray-400 mt-1">Start recognition to see results</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {recognizedStudents.map((student) => (
                  <div key={student.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg group">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{student.name}</p>
                      <p className="text-sm text-gray-500">{student.rollNo} • {student.class}</p>
                      <p className="text-xs text-gray-400">{student.timestamp}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getConfidenceColor(student.confidence)}`}>
                        {student.confidence}%
                      </span>
                      <button
                        onClick={() => removeRecognizedStudent(student.id)}
                        className="opacity-0 group-hover:opacity-100 p-1 text-red-500 hover:text-red-700 transition-all duration-200"
                        title="Remove student from attendance"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center space-x-2 bg-green-50 hover:bg-green-100 text-green-700 py-3 px-4 rounded-lg transition duration-200">
                <CheckCircle className="h-4 w-4" />
                <span>Mark All Present</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-700 py-3 px-4 rounded-lg transition duration-200">
                <Clock className="h-4 w-4" />
                <span>End Session</span>
              </button>
              <button
                onClick={() => alert('Navigate to reports')}
                className="w-full flex items-center justify-center space-x-2 bg-purple-50 hover:bg-purple-100 text-purple-700 py-3 px-4 rounded-lg transition duration-200"
              >
                <History className="h-4 w-4" />
                <span>Generate Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
