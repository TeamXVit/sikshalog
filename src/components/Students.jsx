import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, UserPlus, Eye, Edit, Trash2, MoreVertical } from 'lucide-react';
import StudentsData from "./StudentsData";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');

  const students = StudentsData;

  const classes = ['10-A', '10-B', '9-A', '9-B', '8-A', '8-B', '8-C'];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const getAttendanceColor = (attendance) => {
    if (attendance >= 90) return 'text-green-600 bg-green-100';
    if (attendance >= 75) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Students</h1>
        
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
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
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Classes</option>
                {classes.map(cls => (
                  <option key={cls} value={cls}>Class {cls}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <div key={student.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{student.name}</h3>
                    <p className="text-sm text-gray-500">Roll No: {student.rollNo}</p>
                  </div>
                </div>
                <div className="relative">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Class:</span>
                  <span className="text-sm font-medium text-gray-900">{student.class}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Father's Name:</span>
                  <span className="text-sm font-medium text-gray-900">{student.fatherName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Phone:</span>
                  <span className="text-sm font-medium text-gray-900">{student.phone}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Attendance:</span>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${getAttendanceColor(student.overallAttendance)}`}>
                    {student.overallAttendance}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Status:</span>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    student.status === 'active' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                  }`}>
                    {student.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                <Link
                  to={`/students/${student.id}`}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Profile</span>
                </Link>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-blue-600">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No students found</div>
          <p className="text-gray-400 mt-2">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Students;
