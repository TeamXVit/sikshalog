import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  UserPlus, 
  Edit, 
  Trash2, 
  Eye, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  BookOpen,
  Award,
  Clock,
  Users,
  TrendingUp,
  MoreVertical,
  Download,
  Upload,
  X,
  Check,
  Star,
  GraduationCap,
  Building
} from 'lucide-react';

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [viewType, setViewType] = useState('grid'); // 'grid' or 'table'
  const [showAddTeacher, setShowAddTeacher] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const subjects = ['Mathematics', 'Science', 'English', 'Hindi', 'Social Studies', 'Computer Science', 'Physical Education'];
  const statuses = ['Active', 'Inactive', 'On Leave'];

  // Mock teachers data
  const teachers = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      employeeId: 'T001',
      email: 'rajesh.kumar@school.edu',
      phone: '+91 9876543210',
      subjects: ['Mathematics', 'Computer Science'],
      classes: ['10-A', '9-B'],
      joiningDate: '2020-03-15',
      qualification: 'Ph.D. in Mathematics',
      experience: '12 years',
      salary: '₹45,000',
      status: 'Active',
      address: '123 Teachers Colony, Rural District',
      dateOfBirth: '1985-07-22',
      gender: 'Male',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      attendanceRate: 96.5,
      totalStudents: 89,
      performance: {
        classesCompleted: 145,
        avgStudentScore: 78.5,
        parentSatisfaction: 4.6
      }
    },
    {
      id: 2,
      name: 'Mrs. Priya Sharma',
      employeeId: 'T002',
      email: 'priya.sharma@school.edu',
      phone: '+91 9876543211',
      subjects: ['English', 'Hindi'],
      classes: ['10-B', '9-A'],
      joiningDate: '2019-06-20',
      qualification: 'M.A. in English Literature',
      experience: '8 years',
      salary: '₹38,000',
      status: 'Active',
      address: '456 Green Avenue, Rural District',
      dateOfBirth: '1988-03-12',
      gender: 'Female',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616c95a70e4?w=150&h=150&fit=crop&crop=face',
      attendanceRate: 98.2,
      totalStudents: 92,
      performance: {
        classesCompleted: 152,
        avgStudentScore: 82.1,
        parentSatisfaction: 4.8
      }
    },
    {
      id: 3,
      name: 'Mr. Amit Singh',
      employeeId: 'T003',
      email: 'amit.singh@school.edu',
      phone: '+91 9876543212',
      subjects: ['Science', 'Physical Education'],
      classes: ['8-A', '8-B'],
      joiningDate: '2021-01-10',
      qualification: 'M.Sc. in Physics',
      experience: '5 years',
      salary: '₹32,000',
      status: 'Active',
      address: '789 School Road, Rural District',
      dateOfBirth: '1990-11-05',
      gender: 'Male',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      attendanceRate: 94.8,
      totalStudents: 78,
      performance: {
        classesCompleted: 128,
        avgStudentScore: 75.3,
        parentSatisfaction: 4.4
      }
    },
    {
      id: 4,
      name: 'Ms. Sunita Devi',
      employeeId: 'T004',
      email: 'sunita.devi@school.edu',
      phone: '+91 9876543213',
      subjects: ['Social Studies'],
      classes: ['9-B', '8-C'],
      joiningDate: '2018-08-15',
      qualification: 'M.A. in History',
      experience: '10 years',
      salary: '₹42,000',
      status: 'On Leave',
      address: '321 Village Center, Rural District',
      dateOfBirth: '1983-09-18',
      gender: 'Female',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      attendanceRate: 92.1,
      totalStudents: 65,
      performance: {
        classesCompleted: 118,
        avgStudentScore: 79.8,
        parentSatisfaction: 4.5
      }
    }
  ];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSubject = selectedSubject === 'all' || teacher.subjects.includes(selectedSubject);
    const matchesStatus = selectedStatus === 'all' || teacher.status === selectedStatus;
    
    return matchesSearch && matchesSubject && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-700 bg-green-100';
      case 'Inactive': return 'text-red-700 bg-red-100';
      case 'On Leave': return 'text-yellow-700 bg-yellow-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const getPerformanceColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const AddTeacherModal = () => {
    if (!showAddTeacher) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Add New Teacher</h3>
            <button
              onClick={() => setShowAddTeacher(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter teacher's name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="T005"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="teacher@school.edu"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+91 9876543214"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Qualification</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="B.Ed., M.A., etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="5 years"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="₹35,000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Joining Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subjects</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {subjects.map((subject) => (
                  <label key={subject} className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Complete address"
              ></textarea>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setShowAddTeacher(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Teacher
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teachers Management</h1>
          <p className="text-gray-600 mt-1">Manage teaching staff and their information</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200">
            <Upload className="h-4 w-4" />
            <span>Import</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-200">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
          <button
            onClick={() => setShowAddTeacher(true)}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            <UserPlus className="h-4 w-4" />
            <span>Add Teacher</span>
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Teachers</p>
              <p className="text-2xl font-bold text-gray-900">{teachers.length}</p>
              <p className="text-sm text-green-600 mt-1">+2 from last month</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Teachers</p>
              <p className="text-2xl font-bold text-green-600">{teachers.filter(t => t.status === 'Active').length}</p>
              <p className="text-sm text-gray-500 mt-1">Currently teaching</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Check className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Attendance</p>
              <p className="text-2xl font-bold text-purple-600">
                {(teachers.reduce((sum, t) => sum + t.attendanceRate, 0) / teachers.length).toFixed(1)}%
              </p>
              <p className="text-sm text-purple-600 mt-1">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +1.2% from last month
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Performance</p>
              <p className="text-2xl font-bold text-orange-600">
                {(teachers.reduce((sum, t) => sum + t.performance.parentSatisfaction, 0) / teachers.length).toFixed(1)}
              </p>
              <div className="flex items-center mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-3 w-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Award className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search teachers by name, ID, or subject..."
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
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Subjects</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewType('grid')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  viewType === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewType('table')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  viewType === 'table' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                Table
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Teachers Display */}
      {viewType === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-200">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="h-14 w-14 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{teacher.name}</h3>
                      <p className="text-sm text-gray-500">{teacher.employeeId}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor(teacher.status)}`}>
                        {teacher.status}
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{teacher.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{teacher.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span className="truncate">{teacher.subjects.join(', ')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Building className="h-4 w-4" />
                    <span>Classes: {teacher.classes.join(', ')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <GraduationCap className="h-4 w-4" />
                    <span className="truncate">{teacher.qualification}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-500">Attendance</p>
                      <p className="font-semibold text-green-600">{teacher.attendanceRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Students</p>
                      <p className="font-semibold text-blue-600">{teacher.totalStudents}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedTeacher(teacher)}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Profile</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subjects</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classes</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTeachers.map((teacher) => (
                  <tr key={teacher.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-10 w-10 rounded-full object-cover" src={teacher.photo} alt={teacher.name} />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                          <div className="text-sm text-gray-500">{teacher.employeeId}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{teacher.email}</div>
                      <div className="text-sm text-gray-500">{teacher.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{teacher.subjects.join(', ')}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{teacher.classes.join(', ')}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{teacher.experience}</div>
                      <div className="text-sm text-gray-500">{teacher.qualification}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-green-600">{teacher.attendanceRate}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(teacher.status)}`}>
                        {teacher.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setSelectedTeacher(teacher)}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-blue-600">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filteredTeachers.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No teachers found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Add Teacher Modal */}
      <AddTeacherModal />

      {/* Teacher Detail Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Teacher Profile</h3>
              <button
                onClick={() => setSelectedTeacher(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Basic Info */}
                <div className="lg:col-span-1">
                  <div className="text-center">
                    <img
                      src={selectedTeacher.photo}
                      alt={selectedTeacher.name}
                      className="h-32 w-32 rounded-full object-cover mx-auto border-4 border-gray-200"
                    />
                    <h2 className="text-xl font-bold text-gray-900 mt-4">{selectedTeacher.name}</h2>
                    <p className="text-gray-500">{selectedTeacher.employeeId}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getStatusColor(selectedTeacher.status)}`}>
                      {selectedTeacher.status}
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700">{selectedTeacher.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700">{selectedTeacher.phone}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                      <span className="text-gray-700">{selectedTeacher.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700">Born: {new Date(selectedTeacher.dateOfBirth).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Detailed Info */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Professional Info */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Professional Information</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Qualification:</span>
                        <p className="font-medium">{selectedTeacher.qualification}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Experience:</span>
                        <p className="font-medium">{selectedTeacher.experience}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Joining Date:</span>
                        <p className="font-medium">{new Date(selectedTeacher.joiningDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Salary:</span>
                        <p className="font-medium">{selectedTeacher.salary}</p>
                      </div>
                    </div>
                  </div>

                  {/* Teaching Details */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Teaching Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Subjects:</span>
                        <div className="mt-1 space-x-2">
                          {selectedTeacher.subjects.map((subject, index) => (
                            <span key={index} className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Classes:</span>
                        <div className="mt-1 space-x-2">
                          {selectedTeacher.classes.map((cls, index) => (
                            <span key={index} className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                              {cls}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Total Students:</span>
                        <p className="font-medium">{selectedTeacher.totalStudents}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Attendance Rate:</span>
                        <p className="font-medium text-green-600">{selectedTeacher.attendanceRate}%</p>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Performance Metrics</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-blue-600">{selectedTeacher.performance.classesCompleted}</p>
                        <p className="text-sm text-gray-500">Classes Completed</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">{selectedTeacher.performance.avgStudentScore}%</p>
                        <p className="text-sm text-gray-500">Avg Student Score</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-orange-600">{selectedTeacher.performance.parentSatisfaction}/5</p>
                        <div className="flex justify-center mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-3 w-3 ${
                                star <= selectedTeacher.performance.parentSatisfaction 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">Parent Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teachers;
