import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Award, TrendingUp, Clock } from 'lucide-react';

const StudentProfile = () => {
  const { id } = useParams();

  // Mock student data
  const student = {
    id: 1,
    name: 'Aadhya Sharma',
    rollNo: 'STU001',
    class: '10-A',
    section: 'A',
    admissionDate: '2023-04-15',
    dateOfBirth: '2008-07-22',
    fatherName: 'Rajesh Sharma',
    motherName: 'Sunita Sharma',
    phone: '+91 9876543210',
    email: 'rajesh.sharma@email.com',
    address: '123, Gandhi Nagar, Rural District, State - 123456',
    aadharNumber: '1234-5678-9012',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616c95a70e4?w=300&h=300&fit=crop&crop=face',
    overallAttendance: 92,
    currentMonthAttendance: 89,
    grades: [
      { subject: 'Mathematics', marks: 85, grade: 'A' },
      { subject: 'Science', marks: 78, grade: 'B+' },
      { subject: 'English', marks: 92, grade: 'A+' },
      { subject: 'Hindi', marks: 88, grade: 'A' },
      { subject: 'Social Studies', marks: 82, grade: 'A' }
    ],
    achievements: [
      'Science Fair Winner 2024',
      'Best Student Award 2023',
      'Mathematics Olympiad Participant'
    ],
    attendanceHistory: [
      { date: '2024-01-15', status: 'present', sessions: ['Morning', 'Afternoon'] },
      { date: '2024-01-16', status: 'present', sessions: ['Morning', 'Afternoon'] },
      { date: '2024-01-17', status: 'absent', sessions: [] },
      { date: '2024-01-18', status: 'present', sessions: ['Morning'] },
      { date: '2024-01-19', status: 'present', sessions: ['Morning', 'Afternoon'] }
    ]
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A+': return 'text-green-700 bg-green-100';
      case 'A': return 'text-green-600 bg-green-50';
      case 'B+': return 'text-blue-700 bg-blue-100';
      case 'B': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/students"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Students</span>
          </Link>
        </div>
      </div>

      {/* Student Info Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src={student.photo}
            alt={student.name}
            className="h-24 w-24 rounded-full object-cover"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{student.name}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
              <span>Roll No: {student.rollNo}</span>
              <span>Class: {student.class}</span>
              <span>Section: {student.section}</span>
            </div>
            <div className="flex items-center space-x-4 mt-3">
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">{student.overallAttendance}% Overall</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-600">{student.currentMonthAttendance}% This Month</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">Date of Birth</label>
                  <p className="text-gray-900">{new Date(student.dateOfBirth).toLocaleDateString('en-IN')}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Father's Name</label>
                  <p className="text-gray-900">{student.fatherName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Mother's Name</label>
                  <p className="text-gray-900">{student.motherName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Aadhar Number</label>
                  <p className="text-gray-900">{student.aadharNumber}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">Admission Date</label>
                  <p className="text-gray-900">{new Date(student.admissionDate).toLocaleDateString('en-IN')}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Phone</label>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <p className="text-gray-900">{student.phone}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <p className="text-gray-900">{student.email}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Address</label>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                    <p className="text-gray-900 text-sm">{student.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Performance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Performance</h3>
            <div className="space-y-3">
              {student.grades.map((grade, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{grade.subject}</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600">{grade.marks}/100</span>
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${getGradeColor(grade.grade)}`}>
                      {grade.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
            <div className="space-y-3">
              {student.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Award className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Attendance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Attendance</h3>
            <div className="space-y-3">
              {student.attendanceHistory.map((record, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      record.status === 'present' ? 'bg-green-500' : 'bg-red-500'
                    }`}></div>
                    <span className="text-sm text-gray-600">
                      {new Date(record.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <span className={`text-sm font-medium ${
                    record.status === 'present' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {record.status === 'present' ? 'Present' : 'Absent'}
                  </span>
                </div>
              ))}
            </div>
            <Link
              to="/attendance/history"
              className="block text-center text-blue-600 hover:text-blue-700 text-sm font-medium mt-4"
            >
              View Full History
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
