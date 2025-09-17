import React, { useState } from 'react';
import {
  Calendar,
  Download,
  TrendingUp,
  TrendingDown,
  Users,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Target,
  Award,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  Eye,
  User
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar
} from 'recharts';

export default function ParentAttendance() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTimeframe, setSelectedTimeframe] = useState('monthly');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [chartType, setChartType] = useState('line');

  const children = [
    {
      id: 1,
      name: 'Devansh Gupta',
      class: '10-A',
      currentAttendance: 93,
      monthlyAttendance: 96,
      totalPresent: 178,
      totalDays: 192,
      photo: 'https://randomuser.me/api/portraits/men/73.jpg',
      trend: 'up',
      improvement: '+2.3%',
      monthlyData: [
        { month: 'Apr', attendance: 92 },
        { month: 'May', attendance: 95 },
        { month: 'Jun', attendance: 90 },
        { month: 'Jul', attendance: 93 },
        { month: 'Aug', attendance: 94 },
        { month: 'Sep', attendance: 96 }
      ],
      weeklyData: [
        { week: 'Week 1', attendance: 95, present: 9, absent: 1 },
        { week: 'Week 2', attendance: 100, present: 10, absent: 0 },
        { week: 'Week 3', attendance: 80, present: 8, absent: 2 },
        { week: 'Week 4', attendance: 90, present: 9, absent: 1 }
      ],
      distributionData: [
        { name: 'Present', value: 87 },
        { name: 'Absent', value: 8 },
        { name: 'Late', value: 5 }
      ],
      recentActivity: [
        { date: '2025-09-16', slot: 'Morning', time: '08:15 AM', status: 'present' },
        { date: '2025-09-16', slot: 'Afternoon', time: '01:15 PM', status: 'present' },
        { date: '2025-09-15', slot: 'Morning', time: '08:10 AM', status: 'present' },
        { date: '2025-09-15', slot: 'Afternoon', time: '01:10 PM', status: 'absent' },
        { date: '2025-09-14', slot: 'Morning', time: '08:12 AM', status: 'present' },
        { date: '2025-09-14', slot: 'Afternoon', time: '01:12 PM', status: 'present' }
      ]
    },
    {
      id: 2,
      name: 'Sneha Gupta',
      class: '8-A',
      currentAttendance: 90,
      monthlyAttendance: 93,
      totalPresent: 162,
      totalDays: 180,
      photo: 'https://randomuser.me/api/portraits/women/74.jpg',
      trend: 'up',
      improvement: '+1.8%',
      monthlyData: [
        { month: 'Apr', attendance: 89 },
        { month: 'May', attendance: 91 },
        { month: 'Jun', attendance: 88 },
        { month: 'Jul', attendance: 92 },
        { month: 'Aug', attendance: 89 },
        { month: 'Sep', attendance: 93 }
      ],
      weeklyData: [
        { week: 'Week 1', attendance: 90, present: 9, absent: 1 },
        { week: 'Week 2', attendance: 95, present: 10, absent: 0 },
        { week: 'Week 3', attendance: 85, present: 8, absent: 2 },
        { week: 'Week 4', attendance: 95, present: 9, absent: 1 }
      ],
      distributionData: [
        { name: 'Present', value: 83 },
        { name: 'Absent', value: 12 },
        { name: 'Late', value: 5 }
      ],
      recentActivity: [
        { date: '2025-09-16', slot: 'Morning', time: '08:20 AM', status: 'present' },
        { date: '2025-09-16', slot: 'Afternoon', time: '01:20 PM', status: 'present' },
        { date: '2025-09-15', slot: 'Morning', time: '08:25 AM', status: 'present' },
        { date: '2025-09-15', slot: 'Evening', time: '05:30 PM', status: 'present' },
        { date: '2025-09-14', slot: 'Morning', time: '08:18 AM', status: 'absent' },
        { date: '2025-09-14', slot: 'Afternoon', time: '01:18 PM', status: 'present' }
      ]
    }
  ];

  const timeframes = [
    { id: 'daily', name: 'Daily' },
    { id: 'weekly', name: 'Weekly' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'yearly', name: 'Yearly' }
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const COLORS = {
    Present: '#10B981',
    Absent: '#EF4444',
    Late: '#F59E0B'
  };

  const dailyPatternData = [
    { day: 'Monday', present: 90, absent: 10 },
    { day: 'Tuesday', present: 95, absent: 5 },
    { day: 'Wednesday', present: 88, absent: 12 },
    { day: 'Thursday', present: 92, absent: 8 },
    { day: 'Friday', present: 85, absent: 15 }
  ];

  const validateNumber = (value) => {
    const num = Number(value);
    return isNaN(num) || num === null || num === undefined ? 0 : num;
  };

  const getTrendIcon = (trend) => {
    return trend === 'up' ? (
      <TrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-500" />
    );
  };

  const getAttendanceColor = (percentage) => {
    if (percentage >= 90) return 'text-green-600 bg-green-100';
    if (percentage >= 75) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present': return 'bg-green-100 text-green-800';
      case 'absent': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSlotColor = (slot) => {
    switch (slot) {
      case 'Morning': return 'bg-blue-100 text-blue-800';
      case 'Afternoon': return 'bg-orange-100 text-orange-800';
      case 'Evening': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    return status === 'present' ? '✓' : '✗';
  };

  const exportReport = (childIndex) => {
    const child = children[childIndex];
    const csvContent = child.monthlyData.map(row => 
      `${row.month},${row.attendance}%`
    ).join('\n');
    
    const blob = new Blob([`Month,Attendance\n${csvContent}`], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${child.name.replace(' ', '_')}_attendance_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{label}</p>
          {payload.map((entry, index) => {
            const value = validateNumber(entry.value);
            return (
              <p key={index} className="text-sm" style={{ color: entry.color }}>
                {`Attendance: ${value}%`}
              </p>
            );
          })}
        </div>
      );
    }
    return null;
  };

  const renderChart = (data) => {
    switch (chartType) {
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} domain={[75, 100]} />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="attendance" 
                stroke="#8B5CF6" 
                fillOpacity={1} 
                fill="url(#colorAttendance)"
                name="Attendance"
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} domain={[75, 100]} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="attendance" fill="#8B5CF6" name="Attendance" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );

      default:
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} domain={[75, 100]} />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="attendance" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8 }}
                name="Attendance"
              />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  const currentChild = children[activeTab];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance Overview</h1>
          <p className="text-gray-600 mt-1">Individual attendance insights for your children</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => exportReport(activeTab)}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => alert('PDF report generation would be implemented with libraries like jsPDF or react-pdf')}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            <FileText className="h-4 w-4" />
            <span>Generate PDF</span>
          </button>
        </div>
      </div>

      {/* Child Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-1 mb-6">
          {children.map((child, index) => (
            <button
              key={child.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-200 ${
                activeTab === index
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <img
                src={child.photo}
                alt={child.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-medium">{child.name}</p>
                <p className={`text-sm ${activeTab === index ? 'text-blue-200' : 'text-gray-500'}`}>
                  Class {child.class}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
      </div>

      {/* Child Summary Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img
              src={currentChild.photo}
              alt={currentChild.name}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{currentChild.name}</h2>
              <p className="text-gray-600">Class {currentChild.class}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {getTrendIcon(currentChild.trend)}
            <span className={`text-sm font-medium ${currentChild.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {currentChild.improvement}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-600 text-sm font-medium">Current Attendance</p>
            <p className="text-2xl font-bold text-blue-700">{currentChild.currentAttendance}%</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-600 text-sm font-medium">Monthly Average</p>
            <p className="text-2xl font-bold text-green-700">{currentChild.monthlyAttendance}%</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-purple-600 text-sm font-medium">Total Present</p>
            <p className="text-2xl font-bold text-purple-700">{currentChild.totalPresent}</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-orange-600 text-sm font-medium">Total Days</p>
            <p className="text-2xl font-bold text-orange-700">{currentChild.totalDays}</p>
          </div>
        </div>
      </div>

      {/* Charts and Data */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Main Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {currentChild.name} - Monthly Attendance Trend
              </h3>
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setChartType('line')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    chartType === 'line' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Line
                </button>
                <button
                  onClick={() => setChartType('area')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    chartType === 'area' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Area
                </button>
                <button
                  onClick={() => setChartType('bar')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    chartType === 'bar' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Bar
                </button>
              </div>
            </div>

            {renderChart(currentChild.monthlyData)}

            {/* Weekly Overview */}
            <div className="mt-6 space-y-3">
              <h4 className="font-medium text-gray-900">Weekly Overview</h4>
              {currentChild.weeklyData.map((week, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">{week.week}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-green-600">{week.present} Present</span>
                    <span className="text-sm text-red-600">{week.absent} Absent</span>
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${getAttendanceColor(week.attendance)}`}>
                      {week.attendance}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Pattern */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Daily Attendance Pattern</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyPatternData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="day" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip formatter={(value, name) => [`${value}%`, name === 'present' ? 'Present' : 'Absent']} />
                <Legend />
                <Bar dataKey="present" fill="#10B981" name="Present" radius={[4, 4, 0, 0]} />
                <Bar dataKey="absent" fill="#EF4444" name="Absent" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          {/* Attendance Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <RechartsPieChart>
                <Pie
                  data={currentChild.distributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ value }) => `${value}%`}
                >
                  {currentChild.distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>

          {/* Weekly Trend */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Trend</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={currentChild.weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="week" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} domain={[70, 105]} />
                <Tooltip formatter={(value) => [`${value}%`, 'Attendance']} />
                <Line 
                  type="monotone" 
                  dataKey="attendance" 
                  stroke="#8B5CF6" 
                  strokeWidth={3}
                  dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {currentChild.recentActivity.map((record, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${getStatusColor(record.status)}`}>
                      {getStatusIcon(record.status)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="text-xs text-gray-600">
                          {new Date(record.date).toLocaleDateString('en-IN', { 
                            weekday: 'short', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </p>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getSlotColor(record.slot)}`}>
                          {record.slot}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(record.status)}`}>
                      {record.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{record.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="block text-center text-blue-600 hover:text-blue-700 text-sm font-medium mt-4 w-full">
              View Complete History
            </button>
          </div>

          {/* Performance Summary */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="h-5 w-5 text-yellow-500" />
              <h3 className="text-lg font-semibold text-gray-900">Performance Summary</h3>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{currentChild.name}</p>
                  <p className="text-sm text-green-600">{currentChild.improvement} improvement</p>
                  <p className="text-xs text-gray-500 mt-1">Class {currentChild.class}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-700">{currentChild.currentAttendance}%</p>
                  <p className="text-sm text-gray-600">Current Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
