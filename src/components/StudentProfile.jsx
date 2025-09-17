import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Award, TrendingUp, Clock, AlertTriangle, CheckCircle, XCircle, Heart, Shield, Thermometer } from 'lucide-react';
import StudentsData from './StudentsData';

const StudentProfile = () => {
  const { id } = useParams();

  // Mock student data
  const student = StudentsData[id-1];

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A+': return 'text-green-700 bg-green-100';
      case 'A': return 'text-green-600 bg-green-50';
      case 'B+': return 'text-blue-700 bg-blue-100';
      case 'B': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRemarkStyle = (severity) => {
    switch (severity) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-blue-500 bg-blue-50';
      case 'positive': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getRemarkIcon = (severity) => {
    switch (severity) {
      case 'high': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'medium': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'low': return <AlertTriangle className="h-4 w-4 text-blue-500" />;
      case 'positive': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-500" />;
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
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
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

          {/* Remarks Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Teacher Remarks</h3>
            <div className="space-y-4">
              {student.remarks.map((remark) => (
                <div key={remark.id} className={`border-l-4 p-4 rounded-lg ${getRemarkStyle(remark.severity)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-2">
                      {getRemarkIcon(remark.severity)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-900">{remark.title}</h4>
                          <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                            {remark.subject}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{remark.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>By: {remark.addedBy}</span>
                          <span>{new Date(remark.date).toLocaleDateString('en-IN')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Medical History */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Medical History</span>
            </h3>
            
            {/* Basic Medical Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="text-sm font-medium text-gray-600">Blood Group</label>
                <p className="text-gray-900 font-semibold">{student.medicalHistory.bloodGroup}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Height</label>
                <p className="text-gray-900">{student.medicalHistory.height}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Weight</label>
                <p className="text-gray-900">{student.medicalHistory.weight}</p>
              </div>
            </div>

            {/* Allergies & Conditions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Allergies</h4>
                <div className="space-y-1">
                  {student.medicalHistory.allergies.map((allergy, index) => (
                    <span key={index} className="inline-block bg-red-100 text-red-700 text-sm px-2 py-1 rounded-full mr-2">
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Chronic Conditions</h4>
                <div className="space-y-1">
                  {student.medicalHistory.chronicConditions.map((condition, index) => (
                    <span key={index} className="inline-block bg-yellow-100 text-yellow-700 text-sm px-2 py-1 rounded-full mr-2">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>Emergency Medical Contact</span>
              </h4>
              <p className="text-gray-700">{student.medicalHistory.emergencyContact.name}</p>
              <p className="text-sm text-gray-600">{student.medicalHistory.emergencyContact.phone}</p>
              <p className="text-sm text-gray-600">{student.medicalHistory.emergencyContact.relation}</p>
            </div>

            {/* Vaccinations */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-1">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Vaccination Records</span>
              </h4>
              <div className="space-y-2">
                {student.medicalHistory.vaccinations.map((vaccination, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">{vaccination.vaccine}</span>
                      <p className="text-sm text-gray-600">{vaccination.manufacturer}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-900">{new Date(vaccination.date).toLocaleDateString('en-IN')}</p>
                      <span className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded-full">
                        {vaccination.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical Reports */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-1">
                <Thermometer className="h-4 w-4 text-blue-500" />
                <span>Recent Medical Reports</span>
              </h4>
              <div className="space-y-3">
                {student.medicalHistory.medicalReports.map((report, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium text-gray-900">{report.type}</h5>
                      <span className="text-sm text-gray-500">{new Date(report.date).toLocaleDateString('en-IN')}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Dr: {report.doctor}</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Findings:</strong> {report.findings}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Recommendations:</strong> {report.recommendations}
                    </p>
                  </div>
                ))}
              </div>
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