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
  User,
  BookOpen,
  Star,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  BookMarked,
  Calculator,
  Beaker,
  Globe,
  Palette,
  Music,
  Dumbbell
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

export default function ParentAcademic() {
  const [selectedChild, setSelectedChild] = useState('1');
  const [selectedTerm, setSelectedTerm] = useState('current');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [chartView, setChartView] = useState('grades');

  const children = [
    {
      id: 1,
      name: 'Devansh Gupta',
      class: '10-A',
      overallGrade: 'A',
      gpa: 3.8,
      rank: 5,
      totalStudents: 45,
      photo: 'https://randomuser.me/api/portraits/men/73.jpg'
    },
    {
      id: 2,
      name: 'Sneha Gupta',
      class: '8-A',
      overallGrade: 'A-',
      gpa: 3.6,
      rank: 8,
      totalStudents: 48,
      photo: 'https://randomuser.me/api/portraits/women/74.jpg'
    }
  ];

  const subjects = [
    { id: 'mathematics', name: 'Mathematics', icon: Calculator, color: '#3B82F6' },
    { id: 'science', name: 'Science', icon: Beaker, color: '#10B981' },
    { id: 'english', name: 'English', icon: BookOpen, color: '#F59E0B' },
    { id: 'hindi', name: 'Hindi', icon: Globe, color: '#EF4444' },
    { id: 'social', name: 'Social Studies', icon: BookMarked, color: '#8B5CF6' },
    { id: 'art', name: 'Art', icon: Palette, color: '#EC4899' },
    { id: 'music', name: 'Music', icon: Music, color: '#06B6D4' },
    { id: 'pe', name: 'Physical Education', icon: Dumbbell, color: '#84CC16' }
  ];

  const academicData = {
    1: {
      currentGrades: [
        { subject: 'Mathematics', marks: 88, grade: 'A', maxMarks: 100, trend: 'up' },
        { subject: 'Science', marks: 91, grade: 'A+', maxMarks: 100, trend: 'up' },
        { subject: 'English', marks: 85, grade: 'A', maxMarks: 100, trend: 'stable' },
        { subject: 'Hindi', marks: 92, grade: 'A+', maxMarks: 100, trend: 'up' },
        { subject: 'Social Studies', marks: 87, grade: 'A', maxMarks: 100, trend: 'down' },
        { subject: 'Art', marks: 94, grade: 'A+', maxMarks: 100, trend: 'up' },
        { subject: 'Music', marks: 89, grade: 'A', maxMarks: 100, trend: 'stable' },
        { subject: 'Physical Education', marks: 95, grade: 'A+', maxMarks: 100, trend: 'up' }
      ],
      monthlyProgress: [
        { month: 'Apr', mathematics: 85, science: 88, english: 82, hindi: 90, social: 84 },
        { month: 'May', mathematics: 87, science: 89, english: 84, hindi: 91, social: 86 },
        { month: 'Jun', mathematics: 86, science: 90, english: 83, hindi: 92, social: 85 },
        { month: 'Jul', mathematics: 88, science: 91, english: 85, hindi: 92, social: 87 },
        { month: 'Aug', mathematics: 88, science: 91, english: 85, hindi: 92, social: 87 }
      ],
      assignments: [
        { subject: 'Mathematics', total: 12, completed: 11, pending: 1, score: 91.7 },
        { subject: 'Science', total: 10, completed: 10, pending: 0, score: 94.5 },
        { subject: 'English', total: 8, completed: 7, pending: 1, score: 88.2 },
        { subject: 'Hindi', total: 9, completed: 9, pending: 0, score: 95.1 },
        { subject: 'Social Studies', total: 7, completed: 6, pending: 1, score: 89.3 }
      ],
      upcomingAssignments: [
        { subject: 'Mathematics', title: 'Algebra Test', dueDate: '2025-09-20', type: 'Test', priority: 'high' },
        { subject: 'Science', title: 'Physics Lab Report', dueDate: '2025-09-22', type: 'Assignment', priority: 'medium' },
        { subject: 'English', title: 'Essay Writing', dueDate: '2025-09-25', type: 'Assignment', priority: 'low' },
        { subject: 'Hindi', title: 'Literature Analysis', dueDate: '2025-09-28', type: 'Project', priority: 'medium' }
      ],
      recentTests: [
        { subject: 'Mathematics', title: 'Trigonometry Quiz', date: '2025-09-15', marks: 88, maxMarks: 100, grade: 'A' },
        { subject: 'Science', title: 'Chemistry Unit Test', date: '2025-09-12', marks: 91, maxMarks: 100, grade: 'A+' },
        { subject: 'English', title: 'Grammar Test', date: '2025-09-10', marks: 85, maxMarks: 100, grade: 'A' },
        { subject: 'Hindi', title: 'Prose & Poetry', date: '2025-09-08', marks: 92, maxMarks: 100, grade: 'A+' }
      ],
      achievements: [
        { title: 'Mathematics Olympiad Winner', date: '2025-09-01', type: 'Competition' },
        { title: 'Science Fair 1st Prize', date: '2025-08-15', type: 'Competition' },
        { title: 'Perfect Assignment Streak', date: '2025-08-30', type: 'Academic' }
      ],
      gradeDistribution: [
        { name: 'A+', value: 4, color: '#10B981' },
        { name: 'A', value: 3, color: '#3B82F6' },
        { name: 'B+', value: 1, color: '#F59E0B' }
      ]
    },
    2: {
      currentGrades: [
        { subject: 'Mathematics', marks: 82, grade: 'A', maxMarks: 100, trend: 'up' },
        { subject: 'Science', marks: 85, grade: 'A', maxMarks: 100, trend: 'stable' },
        { subject: 'English', marks: 90, grade: 'A+', maxMarks: 100, trend: 'up' },
        { subject: 'Hindi', marks: 88, grade: 'A', maxMarks: 100, trend: 'up' },
        { subject: 'Social Studies', marks: 84, grade: 'A', maxMarks: 100, trend: 'stable' },
        { subject: 'Art', marks: 96, grade: 'A+', maxMarks: 100, trend: 'up' },
        { subject: 'Music', marks: 93, grade: 'A+', maxMarks: 100, trend: 'up' },
        { subject: 'Physical Education', marks: 89, grade: 'A', maxMarks: 100, trend: 'stable' }
      ],
      monthlyProgress: [
        { month: 'Apr', mathematics: 79, science: 82, english: 87, hindi: 85, social: 81 },
        { month: 'May', mathematics: 80, science: 83, english: 88, hindi: 86, social: 82 },
        { month: 'Jun', mathematics: 81, science: 84, english: 89, hindi: 87, social: 83 },
        { month: 'Jul', mathematics: 82, science: 85, english: 90, hindi: 88, social: 84 },
        { month: 'Aug', mathematics: 82, science: 85, english: 90, hindi: 88, social: 84 }
      ],
      assignments: [
        { subject: 'Mathematics', total: 10, completed: 9, pending: 1, score: 85.6 },
        { subject: 'Science', total: 8, completed: 8, pending: 0, score: 87.3 },
        { subject: 'English', total: 12, completed: 12, pending: 0, score: 92.4 },
        { subject: 'Hindi', total: 9, completed: 8, pending: 1, score: 89.7 },
        { subject: 'Social Studies', total: 7, completed: 7, pending: 0, score: 86.8 }
      ],
      upcomingAssignments: [
        { subject: 'English', title: 'Creative Writing', dueDate: '2025-09-19', type: 'Assignment', priority: 'high' },
        { subject: 'Art', title: 'Painting Project', dueDate: '2025-09-21', type: 'Project', priority: 'medium' },
        { subject: 'Mathematics', title: 'Geometry Quiz', dueDate: '2025-09-24', type: 'Test', priority: 'medium' },
        { subject: 'Music', title: 'Performance Evaluation', dueDate: '2025-09-26', type: 'Assessment', priority: 'low' }
      ],
      recentTests: [
        { subject: 'English', title: 'Literature Quiz', date: '2025-09-14', marks: 90, maxMarks: 100, grade: 'A+' },
        { subject: 'Art', title: 'Portfolio Review', date: '2025-09-11', marks: 96, maxMarks: 100, grade: 'A+' },
        { subject: 'Mathematics', title: 'Algebra Test', date: '2025-09-09', marks: 82, maxMarks: 100, grade: 'A' },
        { subject: 'Science', title: 'Biology Unit Test', date: '2025-09-07', marks: 85, maxMarks: 100, grade: 'A' }
      ],
      achievements: [
        { title: 'English Poetry Competition Winner', date: '2025-08-20', type: 'Competition' },
        { title: 'Art Exhibition Featured Artist', date: '2025-08-10', type: 'Recognition' },
        { title: 'Music Performance Excellence', date: '2025-07-25', type: 'Performance' }
      ],
      gradeDistribution: [
        { name: 'A+', value: 3, color: '#10B981' },
        { name: 'A', value: 4, color: '#3B82F6' },
        { name: 'B+', value: 1, color: '#F59E0B' }
      ]
    }
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A+': return 'text-green-700 bg-green-100';
      case 'A': return 'text-green-600 bg-green-50';
      case 'B+': return 'text-blue-700 bg-blue-100';
      case 'B': return 'text-blue-600 bg-blue-50';
      case 'C+': return 'text-yellow-700 bg-yellow-100';
      case 'C': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />;
      default: return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSubjectIcon = (subject) => {
    const subjectData = subjects.find(s => s.name === subject);
    if (subjectData) {
      const IconComponent = subjectData.icon;
      return <IconComponent className="h-4 w-4" style={{ color: subjectData.color }} />;
    }
    return <BookOpen className="h-4 w-4 text-gray-500" />;
  };

  const getCurrentChildData = () => {
    return academicData[selectedChild] || academicData[1];
  };

  const getCurrentChild = () => {
    return children.find(c => c.id === parseInt(selectedChild)) || children[0];
  };

  const getOverallStats = () => {
    const childData = getCurrentChildData();
    const avgGrade = childData.currentGrades.reduce((sum, grade) => sum + grade.marks, 0) / childData.currentGrades.length;
    const totalAssignments = childData.assignments.reduce((sum, assignment) => sum + assignment.total, 0);
    const completedAssignments = childData.assignments.reduce((sum, assignment) => sum + assignment.completed, 0);
    const pendingAssignments = childData.assignments.reduce((sum, assignment) => sum + assignment.pending, 0);
    
    return {
      averageGrade: avgGrade.toFixed(1),
      totalAssignments,
      completedAssignments,
      pendingAssignments
    };
  };

  const getRadarData = () => {
    const childData = getCurrentChildData();
    return [
      { subject: 'Math', score: childData.currentGrades.find(g => g.subject === 'Mathematics')?.marks || 0, fullMark: 100 },
      { subject: 'Science', score: childData.currentGrades.find(g => g.subject === 'Science')?.marks || 0, fullMark: 100 },
      { subject: 'English', score: childData.currentGrades.find(g => g.subject === 'English')?.marks || 0, fullMark: 100 },
      { subject: 'Hindi', score: childData.currentGrades.find(g => g.subject === 'Hindi')?.marks || 0, fullMark: 100 },
      { subject: 'Social', score: childData.currentGrades.find(g => g.subject === 'Social Studies')?.marks || 0, fullMark: 100 },
      { subject: 'Art', score: childData.currentGrades.find(g => g.subject === 'Art')?.marks || 0, fullMark: 100 }
    ];
  };

  const exportReport = () => {
    const stats = getOverallStats();
    const child = getCurrentChild();
    const csvContent = `Child,Class,Average Grade,Total Assignments,Completed,Pending\n${child.name},${child.class},${stats.averageGrade}%,${stats.totalAssignments},${stats.completedAssignments},${stats.pendingAssignments}`;
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `academic_report_${child.name}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const overallStats = getOverallStats();
  const currentChildData = getCurrentChildData();
  const currentChild = getCurrentChild();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Academic Performance</h1>
          <p className="text-gray-600 mt-1">Track {currentChild.name}'s academic progress and achievements</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={exportReport}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200">
            <FileText className="h-4 w-4" />
            <span>Progress Report</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Selection</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Child</label>
            <select
              value={selectedChild}
              onChange={(e) => setSelectedChild(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {children.map(child => (
                <option key={child.id} value={child.id}>{child.name} - Class {child.class}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Term</label>
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="current">Current Term</option>
              <option value="term1">Term 1</option>
              <option value="term2">Term 2</option>
              <option value="yearly">Full Year</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Subjects</option>
              {subjects.map(subject => (
                <option key={subject.id} value={subject.id}>{subject.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">View</label>
            <select
              value={chartView}
              onChange={(e) => setChartView(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="grades">Grades</option>
              <option value="assignments">Assignments</option>
              <option value="progress">Progress</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={currentChild.photo}
            alt={currentChild.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{currentChild.name}</h2>
            <p className="text-gray-600">Class {currentChild.class} • Rank {currentChild.rank} of {currentChild.totalStudents}</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(currentChild.overallGrade)}`}>
                Overall Grade: {currentChild.overallGrade}
              </span>
              <span className="text-sm text-gray-600">GPA: {currentChild.gpa}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Subject Performance Overview</h3>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor('A')}`}>
                  Average: {overallStats.averageGrade}%
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div style={{ width: '100%', height: '300px' }}>
                <ResponsiveContainer>
                  <RadarChart data={getRadarData()}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar
                      name="Score"
                      dataKey="score"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Subject Performance</h4>
              {currentChildData.currentGrades.map((grade, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getSubjectIcon(grade.subject)}
                    <div>
                      <p className="font-medium text-gray-900">{grade.subject}</p>
                      <p className="text-sm text-gray-600">{grade.marks}/{grade.maxMarks} marks</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {getTrendIcon(grade.trend)}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(grade.grade)}`}>
                      {grade.grade}
                    </span>
                    <span className="text-lg font-bold text-gray-900">{grade.marks}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Progress Trend</h3>
            <div style={{ width: '100%', height: '300px' }}>
              <ResponsiveContainer>
                <LineChart data={currentChildData.monthlyProgress}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                  <YAxis stroke="#6B7280" fontSize={12} domain={[75, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="mathematics" stroke="#3B82F6" strokeWidth={2} name="Mathematics" />
                  <Line type="monotone" dataKey="science" stroke="#10B981" strokeWidth={2} name="Science" />
                  <Line type="monotone" dataKey="english" stroke="#F59E0B" strokeWidth={2} name="English" />
                  <Line type="monotone" dataKey="hindi" stroke="#EF4444" strokeWidth={2} name="Hindi" />
                  <Line type="monotone" dataKey="social" stroke="#8B5CF6" strokeWidth={2} name="Social Studies" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Assignment Progress</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentChildData.assignments.map((assignment, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {getSubjectIcon(assignment.subject)}
                      <h4 className="font-medium text-gray-900">{assignment.subject}</h4>
                    </div>
                    <span className="text-sm font-bold text-blue-600">{assignment.score.toFixed(1)}%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Completed:</span>
                      <span className="font-medium">{assignment.completed}/{assignment.total}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${(assignment.completed / assignment.total) * 100}%` }}
                      ></div>
                    </div>
                    {assignment.pending > 0 && (
                      <p className="text-xs text-red-600">{assignment.pending} pending assignments</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-900 font-medium">Average Grade</span>
                </div>
                <span className="text-2xl font-bold text-blue-600">{overallStats.averageGrade}%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-900 font-medium">Completed</span>
                </div>
                <span className="text-2xl font-bold text-green-600">{overallStats.completedAssignments}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  <span className="text-yellow-900 font-medium">Pending</span>
                </div>
                <span className="text-2xl font-bold text-yellow-600">{overallStats.pendingAssignments}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span className="text-purple-900 font-medium">Class Rank</span>
                </div>
                <span className="text-2xl font-bold text-purple-600">{currentChild.rank}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Grade Distribution</h3>
            <div style={{ width: '100%', height: '200px' }}>
              <ResponsiveContainer>
                <RechartsPieChart>
                  <Pie
                    data={currentChildData.gradeDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ value }) => value}
                  >
                    {currentChildData.gradeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Assignments</h3>
            <div className="space-y-3">
              {currentChildData.upcomingAssignments.slice(0, 4).map((assignment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getSubjectIcon(assignment.subject)}
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{assignment.title}</p>
                      <p className="text-xs text-gray-600">{assignment.subject}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getPriorityColor(assignment.priority)}`}>
                      {assignment.priority}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(assignment.dueDate).toLocaleDateString('en-IN', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full text-center text-blue-600 hover:text-blue-700 text-sm font-medium mt-4">
              View All Assignments
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Test Results</h3>
            <div className="space-y-3">
              {currentChildData.recentTests.slice(0, 4).map((test, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getSubjectIcon(test.subject)}
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{test.title}</p>
                      <p className="text-xs text-gray-600">
                        {new Date(test.date).toLocaleDateString('en-IN', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-gray-900">{test.marks}/{test.maxMarks}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(test.grade)}`}>
                        {test.grade}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full text-center text-blue-600 hover:text-blue-700 text-sm font-medium mt-4">
              View All Results
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="h-5 w-5 text-yellow-500" />
              <h3 className="text-lg font-semibold text-gray-900">Recent Achievements</h3>
            </div>
            <div className="space-y-3">
              {currentChildData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="font-medium text-yellow-900">{achievement.title}</p>
                    <p className="text-sm text-yellow-700">
                      {achievement.type} • {new Date(achievement.date).toLocaleDateString('en-IN', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}