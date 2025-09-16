import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Download, 
  Filter, 
  Search, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  MoreVertical
} from 'lucide-react';

const AttendanceHistory = () => {
  // Set default date to today's date in YYYY-MM-DD format
  const today = new Date();
  const todayString = today.toISOString().split('T')[0];
  
  const [selectedDate, setSelectedDate] = useState(todayString);
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedSession, setSelectedSession] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const classes = ['10-A', '10-B', '9-A', '9-B', '8-A', '8-B', '8-C'];
  const sessions = ['Morning', 'Afternoon', 'Evening'];

  // Mock attendance history data - Updated with current date
  const attendanceHistory = [
    {
      id: 1,
      date: todayString, // Use today's date
      session: 'Morning',
      studentName: 'Aadhya Sharma',
      rollNo: 'STU001',
      class: '10-A',
      status: 'present',
      timestamp: '09:15:23',
      confidence: 98.5,
      method: 'face_recognition'
    },
    {
      id: 2,
      date: todayString, // Use today's date
      session: 'Morning',
      studentName: 'Arjun Patel',
      rollNo: 'STU002',
      class: '10-A',
      status: 'present',
      timestamp: '09:16:45',
      confidence: 95.2,
      method: 'face_recognition'
    },
    {
      id: 3,
      date: todayString, // Use today's date
      session: 'Morning',
      studentName: 'Priya Kumari',
      rollNo: 'STU003',
      class: '9-B',
      status: 'present',
      timestamp: '09:18:12',
      confidence: 97.8,
      method: 'face_recognition'
    },
    {
      id: 4,
      date: todayString, // Use today's date
      session: 'Morning',
      studentName: 'Rohit Singh',
      rollNo: 'STU004',
      class: '9-B',
      status: 'absent',
      timestamp: null,
      confidence: null,
      method: 'manual'
    },
    {
      id: 5,
      date: todayString, // Use today's date
      session: 'Afternoon',
      studentName: 'Kavya Reddy',
      rollNo: 'STU005',
      class: '8-C',
      status: 'present',
      timestamp: '13:15:30',
      confidence: 91.7,
      method: 'face_recognition'
    },
    // Previous day data
    {
      id: 6,
      date: new Date(today.getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Yesterday
      session: 'Morning',
      studentName: 'Aadhya Sharma',
      rollNo: 'STU001',
      class: '10-A',
      status: 'present',
      timestamp: '09:12:15',
      confidence: 96.8,
      method: 'face_recognition'
    },
    {
      id: 7,
      date: new Date(today.getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Yesterday
      session: 'Morning',
      studentName: 'Arjun Patel',
      rollNo: 'STU002',
      class: '10-A',
      status: 'absent',
      timestamp: null,
      confidence: null,
      method: 'manual'
    },
    {
      id: 8,
      date: new Date(today.getTime() - 48 * 60 * 60 * 1000).toISOString().split('T')[0], // 2 days ago
      session: 'Afternoon',
      studentName: 'Kavya Reddy',
      rollNo: 'STU005',
      class: '8-C',
      status: 'present',
      timestamp: '13:22:15',
      confidence: 93.4,
      method: 'face_recognition'
    }
  ];

  // Fixed filtering logic
  const filteredHistory = attendanceHistory.filter(record => {
    const matchesDate = !selectedDate || record.date === selectedDate;
    const matchesClass = selectedClass === 'all' || record.class === selectedClass;
    const matchesSession = selectedSession === 'all' || record.session === selectedSession;
    const matchesSearch = !searchTerm || 
      record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDate && matchesClass && matchesSession && matchesSearch;
  });

  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedHistory = filteredHistory.slice(startIndex, startIndex + itemsPerPage);

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedDate, selectedClass, selectedSession, searchTerm]);

  const getStatusIcon = (status) => {
    return status === 'present' ? (
      <CheckCircle className="h-4 w-4 text-green-500" />
    ) : (
      <XCircle className="h-4 w-4 text-red-500" />
    );
  };

  const getStatusColor = (status) => {
    return status === 'present' 
      ? 'text-green-700 bg-green-100' 
      : 'text-red-700 bg-red-100';
  };

  const getMethodBadge = (method) => {
    return method === 'face_recognition' ? (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        Face Recognition
      </span>
    ) : (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        Manual
      </span>
    );
  };

  const exportData = () => {
    if (filteredHistory.length === 0) {
      alert('No data to export');
      return;
    }
    
    const csvContent = filteredHistory.map(record => 
      `${record.date},${record.session},${record.studentName},${record.rollNo},${record.class},${record.status},${record.timestamp || 'N/A'},${record.confidence || 'N/A'}`
    ).join('\n');
    
    const blob = new Blob([`Date,Session,Student Name,Roll No,Class,Status,Timestamp,Confidence\n${csvContent}`], 
      { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `attendance_${selectedDate || 'all'}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const clearFilters = () => {
    setSelectedDate(todayString);
    setSelectedClass('all');
    setSelectedSession('all');
    setSearchTerm('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance History</h1>
          <p className="text-gray-600 mt-1">View and manage attendance records</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={exportData}
            disabled={filteredHistory.length === 0}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
          <Link
            to="/attendance"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            <Clock className="h-4 w-4" />
            <span>Take Attendance</span>
          </Link>
        </div>
      </div>

      {/* Debug Info - Remove in production */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
        <p><strong>Debug Info:</strong></p>
        <p>Selected Date: {selectedDate}</p>
        <p>Total Records: {attendanceHistory.length}</p>
        <p>Filtered Records: {filteredHistory.length}</p>
        <p>Current Page: {currentPage}</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Date Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Class Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Classes</option>
                {classes.map(cls => (
                  <option key={cls} value={cls}>Class {cls}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Session Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Session</label>
            <select
              value={selectedSession}
              onChange={(e) => setSelectedSession(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Sessions</option>
              {sessions.map(session => (
                <option key={session} value={session}>{session}</option>
              ))}
            </select>
          </div>

          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing {paginatedHistory.length} of {filteredHistory.length} records for {selectedDate}
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-gray-600">Present: {filteredHistory.filter(r => r.status === 'present').length}</span>
            </div>
            <div className="flex items-center space-x-1">
              <XCircle className="h-4 w-4 text-red-500" />
              <span className="text-gray-600">Absent: {filteredHistory.filter(r => r.status === 'absent').length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {paginatedHistory.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Class
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Session
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Method
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Confidence
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedHistory.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{record.studentName}</div>
                          <div className="text-sm text-gray-500">{record.rollNo}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.class}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.session}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(record.status)}
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(record.status)}`}>
                            {record.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.timestamp || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getMethodBadge(record.method)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.confidence ? `${record.confidence}%` : 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-700 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-sm text-gray-700">
                      Page {currentPage} of {totalPages}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No attendance records found</h3>
            <p className="text-gray-500 mb-4">
              {filteredHistory.length === 0 && attendanceHistory.length > 0 
                ? 'Try adjusting your filters or select a different date' 
                : 'No attendance data available'}
            </p>
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceHistory;
