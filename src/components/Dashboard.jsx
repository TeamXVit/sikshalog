import React from 'react';
import { Users, Clock, TrendingUp, Calendar, UserCheck, UserX, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      name: 'Total Students',
      value: '1,247',
      change: '+12%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      name: 'Present Today',
      value: '1,156',
      change: '92.7%',
      changeType: 'increase',
      icon: UserCheck,
      color: 'bg-green-500'
    },
    {
      name: 'Absent Today',
      value: '91',
      change: '7.3%',
      changeType: 'decrease',
      icon: UserX,
      color: 'bg-red-500'
    },
    {
      name: 'Average Attendance',
      value: '89.2%',
      change: '+2.1%',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  const recentActivity = [
    { time: '09:15 AM', action: 'Morning attendance completed', class: 'Class 10-A', status: 'success' },
    { time: '09:30 AM', action: 'Face recognition failed for Aadhya Sharma', class: 'Class 9-B', status: 'warning' },
    { time: '10:45 AM', action: 'New student enrolled', class: 'Class 8-C', status: 'info' },
    { time: '01:15 PM', action: 'Afternoon attendance completed', class: 'Class 7-A', status: 'success' },
  ];

  const attendanceData = [
    { day: 'Mon', percentage: 92 },
    { day: 'Tue', percentage: 88 },
    { day: 'Wed', percentage: 94 },
    { day: 'Thu', percentage: 89 },
    { day: 'Fri', percentage: 91 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>Today: {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">from yesterday</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Attendance Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Attendance Trend</h3>
          <div className="space-y-3">
            {attendanceData.map((day) => (
              <div key={day.day} className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-600 w-8">{day.day}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${day.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-10">{day.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'warning' ? 'bg-yellow-500' :
                  'bg-blue-500'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.class} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition duration-200">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Mark Attendance</span>
          </button>
          <button className="flex items-center justify-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition duration-200">
            <Users className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-medium">View Students</span>
          </button>
          <button className="flex items-center justify-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition duration-200">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 font-medium">Generate Reports</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
