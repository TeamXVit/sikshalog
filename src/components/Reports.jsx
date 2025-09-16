import React, { useState } from 'react';
import { 
  Calendar, 
  Download, 
  Filter, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  CheckCircle, 
  XCircle, 
  Clock,
  FileText,
  BarChart3,
  PieChart,
  Target,
  Award,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  Eye
} from 'lucide-react';

const Reports = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('monthly');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [reportType, setReportType] = useState('overview');
  const [expandedSection, setExpandedSection] = useState('attendance');

  const timeframes = [
    { id: 'daily', name: 'Daily' },
    { id: 'weekly', name: 'Weekly' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'yearly', name: 'Yearly' }
  ];

  const classes = ['10-A', '10-B', '9-A', '9-B', '8-A', '8-B', '8-C'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Mock report data
  const overviewStats = {
    totalStudents: 1247,
    averageAttendance: 89.2,
    presentToday: 1156,
    absentToday: 91,
    trendsComparison: {
      attendance: { current: 89.2, previous: 87.5, trend: 'up' },
      enrollment: { current: 1247, previous: 1198, trend: 'up' },
      punctuality: { current: 92.8, previous: 91.2, trend: 'up' }
    }
  };

  const attendanceData = {
    daily: [
      { date: '2024-09-10', present: 1150, absent: 97, percentage: 92.2 },
      { date: '2024-09-11', present: 1142, absent: 105, percentage: 91.6 },
      { date: '2024-09-12', present: 1167, absent: 80, percentage: 93.6 },
      { date: '2024-09-13', present: 1156, absent: 91, percentage: 92.7 },
      { date: '2024-09-14', present: 1134, absent: 113, percentage: 90.9 }
    ],
    weekly: [
      { week: 'Week 1', present: 5749, absent: 486, percentage: 92.2 },
      { week: 'Week 2', present: 5688, absent: 547, percentage: 91.2 },
      { week: 'Week 3', present: 5812, absent: 423, percentage: 93.2 },
      { week: 'Week 4', present: 5723, absent: 512, percentage: 91.8 }
    ],
    classwise: [
      { class: '10-A', totalStudents: 45, averageAttendance: 94.2, present: 42, absent: 3 },
      { class: '10-B', totalStudents: 43, averageAttendance: 91.8, present: 40, absent: 3 },
      { class: '9-A', totalStudents: 47, averageAttendance: 88.9, present: 42, absent: 5 },
      { class: '9-B', totalStudents: 44, averageAttendance: 90.1, present: 40, absent: 4 },
      { class: '8-A', totalStudents: 48, averageAttendance: 87.3, present: 42, absent: 6 },
      { class: '8-B', totalStudents: 46, averageAttendance: 89.7, present: 41, absent: 5 },
      { class: '8-C', totalStudents: 45, averageAttendance: 86.8, present: 39, absent: 6 }
    ]
  };

  const topPerformers = [
    { name: 'Class 10-A', attendance: 94.2, improvement: '+2.1%' },
    { name: 'Class 10-B', attendance: 91.8, improvement: '+1.8%' },
    { name: 'Class 9-B', attendance: 90.1, improvement: '+0.9%' }
  ];

  const lowPerformers = [
    { name: 'Class 8-C', attendance: 86.8, decline: '-1.2%' },
    { name: 'Class 8-A', attendance: 87.3, decline: '-0.8%' },
    { name: 'Class 9-A', attendance: 88.9, decline: '-0.5%' }
  ];

  const getTrendIcon = (trend) => {
    return trend === 'up' ? (
      <TrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-500" />
    );
  };

  const getTrendColor = (trend) => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  };

  const getAttendanceColor = (percentage) => {
    if (percentage >= 90) return 'text-green-600 bg-green-100';
    if (percentage >= 75) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const exportReport = (type) => {
    const data = type === 'detailed' ? attendanceData.classwise : attendanceData.daily;
    const headers = type === 'detailed' 
      ? 'Class,Total Students,Average Attendance,Present,Absent\n'
      : 'Date,Present,Absent,Percentage\n';
    
    const csvContent = data.map(row => {
      if (type === 'detailed') {
        return `${row.class},${row.totalStudents},${row.averageAttendance}%,${row.present},${row.absent}`;
      }
      return `${row.date},${row.present},${row.absent},${row.percentage}%`;
    }).join('\n');
    
    const blob = new Blob([headers + csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `attendance_report_${type}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const generatePDFReport = () => {
    // Mock PDF generation
    alert('PDF report generation would be implemented with libraries like jsPDF or react-pdf');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Comprehensive attendance insights and data analysis</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => exportReport('summary')}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={generatePDFReport}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            <FileText className="h-4 w-4" />
            <span>Generate PDF</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timeframe</label>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {timeframes.map(timeframe => (
                <option key={timeframe.id} value={timeframe.id}>{timeframe.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Classes</option>
              {classes.map(cls => (
                <option key={cls} value={cls}>Class {cls}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {months.map((month, index) => (
                <option key={index} value={index}>{month}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>
      </div>

      {/* Overview Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{overviewStats.totalStudents.toLocaleString()}</p>
              <div className="flex items-center mt-2">
                {getTrendIcon(overviewStats.trendsComparison.enrollment.trend)}
                <span className={`text-sm font-medium ml-1 ${getTrendColor(overviewStats.trendsComparison.enrollment.trend)}`}>
                  +{overviewStats.totalStudents - overviewStats.trendsComparison.enrollment.previous}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Attendance</p>
              <p className="text-2xl font-bold text-gray-900">{overviewStats.averageAttendance}%</p>
              <div className="flex items-center mt-2">
                {getTrendIcon(overviewStats.trendsComparison.attendance.trend)}
                <span className={`text-sm font-medium ml-1 ${getTrendColor(overviewStats.trendsComparison.attendance.trend)}`}>
                  +{(overviewStats.averageAttendance - overviewStats.trendsComparison.attendance.previous).toFixed(1)}%
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Target className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Present Today</p>
              <p className="text-2xl font-bold text-green-600">{overviewStats.presentToday.toLocaleString()}</p>
              <div className="flex items-center mt-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-green-600 ml-1">
                  {((overviewStats.presentToday / overviewStats.totalStudents) * 100).toFixed(1)}%
                </span>
                <span className="text-sm text-gray-500 ml-1">attendance rate</span>
              </div>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Absent Today</p>
              <p className="text-2xl font-bold text-red-600">{overviewStats.absentToday}</p>
              <div className="flex items-center mt-2">
                <XCircle className="h-4 w-4 text-red-500" />
                <span className="text-sm font-medium text-red-600 ml-1">
                  {((overviewStats.absentToday / overviewStats.totalStudents) * 100).toFixed(1)}%
                </span>
                <span className="text-sm text-gray-500 ml-1">absence rate</span>
              </div>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Attendance Trends */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Attendance Trends</h3>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
                  <BarChart3 className="h-4 w-4" />
                  <span>View Chart</span>
                </button>
              </div>
            </div>

            {/* Mock Chart Area */}
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">Attendance trend chart would appear here</p>
                <p className="text-sm text-gray-400 mt-1">Integration with Chart.js or similar library</p>
              </div>
            </div>

            {/* Weekly Data */}
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Weekly Overview</h4>
              {attendanceData.weekly.map((week, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">{week.week}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-green-600">{week.present} Present</span>
                    <span className="text-sm text-red-600">{week.absent} Absent</span>
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${getAttendanceColor(week.percentage)}`}>
                      {week.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Class-wise Performance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Class-wise Performance</h3>
              <button
                onClick={() => exportReport('detailed')}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
              >
                <Download className="h-4 w-4" />
                <span>Export Details</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Class</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Students</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Present</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Absent</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Attendance</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.classwise.map((classData, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{classData.class}</td>
                      <td className="py-3 px-4 text-gray-600">{classData.totalStudents}</td>
                      <td className="py-3 px-4 text-green-600">{classData.present}</td>
                      <td className="py-3 px-4 text-red-600">{classData.absent}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${getAttendanceColor(classData.averageAttendance)}`}>
                          {classData.averageAttendance}%
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-blue-600 hover:text-blue-700">
                          <Eye className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Performers */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="h-5 w-5 text-yellow-500" />
              <h3 className="text-lg font-semibold text-gray-900">Top Performers</h3>
            </div>
            <div className="space-y-3">
              {topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{performer.name}</p>
                    <p className="text-sm text-green-600">{performer.improvement} improvement</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-700">{performer.attendance}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Areas for Improvement */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Needs Attention</h3>
            </div>
            <div className="space-y-3">
              {lowPerformers.map((performer, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{performer.name}</p>
                    <p className="text-sm text-orange-600">{performer.decline} decline</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-orange-700">{performer.attendance}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Reports</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700 font-medium">Monthly Summary</span>
                </div>
                <ChevronRight className="h-4 w-4 text-blue-600" />
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <PieChart className="h-4 w-4 text-green-600" />
                  <span className="text-green-700 font-medium">Attendance Analysis</span>
                </div>
                <ChevronRight className="h-4 w-4 text-green-600" />
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  <span className="text-purple-700 font-medium">Student Progress</span>
                </div>
                <ChevronRight className="h-4 w-4 text-purple-600" />
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-red-50 hover:bg-red-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="text-red-700 font-medium">Absent Students</span>
                </div>
                <ChevronRight className="h-4 w-4 text-red-600" />
              </button>
            </div>
          </div>

          {/* System Insights */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Insights</h3>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-blue-900">Face Recognition</span>
                </div>
                <p className="text-sm text-blue-700">98.5% accuracy rate this month</p>
              </div>
              
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-900">Overall Trend</span>
                </div>
                <p className="text-sm text-green-700">+2.3% improvement over last quarter</p>
              </div>
              
              <div className="p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <span className="font-medium text-yellow-900">Recommendations</span>
                </div>
                <p className="text-sm text-yellow-700">Focus on Class 8-C attendance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
