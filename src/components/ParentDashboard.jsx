import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Edit, Trash2, MoreVertical, Users, BookOpen, UserCheck, Calendar } from 'lucide-react';

const ParentDashboard = () => {
  const navigate = useNavigate();
  const children = [
    {
      id: 1,
      name: 'Devansh Gupta',
      rollNo: 'STU013',
      class: '10-A',
      fatherName: 'Sanjay Gupta',
      phone: '+91 9876543220',
      attendance: 93,
      status: 'active',
      photo: 'https://randomuser.me/api/portraits/men/73.jpg'
    },
    {
      id: 2,
      name: 'Sneha Gupta',
      rollNo: 'STU014',
      class: '8-A',
      fatherName: 'Sanjay Gupta',
      phone: '+91 9876543220',
      attendance: 90,
      status: 'active',
      photo: 'https://randomuser.me/api/portraits/women/74.jpg'
    }
  ];

  const handleViewProfile = (childId) => {
    navigate(`/parent/student/${childId}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, Sanjay Gupta</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Children</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-xl">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall Grade</p>
              <p className="text-2xl font-bold text-emerald-600">A</p>
            </div>
            <div className="bg-emerald-100 p-3 rounded-xl">
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Students</p>
              <p className="text-2xl font-bold text-green-600">2</p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Upcoming Events</p>
              <p className="text-2xl font-bold text-purple-600">3</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same... */}
      {/* Children Cards */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Your Children</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {children.map((child) => (
            <div key={child.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* Header with photo and menu */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={child.photo}
                    alt={child.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{child.name}</h3>
                    <p className="text-sm text-gray-500">Roll No: {child.rollNo}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>

              {/* Student Details */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Class:</span>
                  <span className="text-sm font-medium text-gray-900">{child.class}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Father's Name:</span>
                  <span className="text-sm font-medium text-gray-900">{child.fatherName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Phone:</span>
                  <span className="text-sm font-medium text-gray-900">{child.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Attendance:</span>
                  <span className="text-sm font-semibold text-emerald-600">{child.attendance}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Status:</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${child.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                    }`}>
                    {child.status}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleViewProfile(child.id)}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Profile</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
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
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Devansh Gupta marked present for today</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Sneha Gupta marked present for today</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">New announcement: Parent-Teacher meeting scheduled</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
