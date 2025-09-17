import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, UserPlus, Eye, Edit, Trash2, MoreVertical } from 'lucide-react';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');

const students = [
  {
    id: 1,
    name: 'Aadhya Sharma',
    rollNo: 'STU001',
    class: '10-A',
    fatherName: 'Rajesh Sharma',
    phone: '+91 9876543210',
    attendance: 92,
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    status: 'active'
  },
  {
    id: 2,
    name: 'Arjun Patel',
    rollNo: 'STU002',
    class: '10-A',
    fatherName: 'Vikram Patel',
    phone: '+91 9876543211',
    attendance: 88,
    photo: 'https://randomuser.me/api/portraits/men/66.jpg',
    status: 'active'
  },
  {
    id: 3,
    name: 'Priya Kumari',
    rollNo: 'STU003',
    class: '9-B',
    fatherName: 'Suresh Kumar',
    phone: '+91 9876543212',
    attendance: 95,
    photo: 'https://randomuser.me/api/portraits/women/67.jpg',
    status: 'active'
  },
  {
    id: 4,
    name: 'Rohit Singh',
    rollNo: 'STU004',
    class: '9-B',
    fatherName: 'Mahendra Singh',
    phone: '+91 9876543213',
    attendance: 76,
    photo: 'https://randomuser.me/api/portraits/men/68.jpg',
    status: 'inactive'
  },
  {
    id: 5,
    name: 'Kavya Reddy',
    rollNo: 'STU005',
    class: '8-C',
    fatherName: 'Ravi Reddy',
    phone: '+91 9876543214',
    attendance: 91,
    photo: 'https://randomuser.me/api/portraits/women/69.jpg',
    status: 'active'
  },
  {
    id: 6,
    name: 'Manish Verma',
    rollNo: 'STU006',
    class: '8-C',
    fatherName: 'Harish Verma',
    phone: '+91 9876543215',
    attendance: 85,
    photo: 'https://randomuser.me/api/portraits/men/69.jpg',
    status: 'active'
  },
  {
    id: 7,
    name: 'Simran Kaur',
    rollNo: 'STU007',
    class: '10-B',
    fatherName: 'Gurpreet Singh',
    phone: '+91 9876543216',
    attendance: 98,
    photo: 'https://randomuser.me/api/portraits/women/70.jpg',
    status: 'active'
  },
  {
    id: 8,
    name: 'Ananya Iyer',
    rollNo: 'STU008',
    class: '9-A',
    fatherName: 'Srinivas Iyer',
    phone: '+91 9876543217',
    attendance: 82,
    photo: 'https://randomuser.me/api/portraits/women/71.jpg',
    status: 'active'
  },
  {
    id: 9,
    name: 'Farhan Ali',
    rollNo: 'STU009',
    class: '8-B',
    fatherName: 'Imran Ali',
    phone: '+91 9876543218',
    attendance: 73,
    photo: 'https://randomuser.me/api/portraits/men/71.jpg',
    status: 'inactive'
  },
  {
    id: 10,
    name: 'Tanvi Mehta',
    rollNo: 'STU010',
    class: '10-C',
    fatherName: 'Ramesh Mehta',
    phone: '+91 9876543219',
    attendance: 94,
    photo: 'https://randomuser.me/api/portraits/women/72.jpg',
    status: 'active'
  },
  // ADDITIONAL 10 STUDENTS
  {
    id: 11,
    name: 'Ishaan Mehta',
    rollNo: 'STU011',
    class: '8-A',
    fatherName: 'Ramesh Mehta', // sibling of Tanvi
    phone: '+91 9876543219',
    attendance: 89,
    photo: 'https://randomuser.me/api/portraits/men/72.jpg',
    status: 'active'
  },
  {
    id: 12,
    name: 'Riya Sharma',
    rollNo: 'STU012',
    class: '7-B',
    fatherName: 'Rajesh Sharma', // sibling of Aadhya
    phone: '+91 9876543210',
    attendance: 87,
    photo: 'https://randomuser.me/api/portraits/women/73.jpg',
    status: 'active'
  },
  {
    id: 13,
    name: 'Devansh Gupta',
    rollNo: 'STU013',
    class: '10-A',
    fatherName: 'Sanjay Gupta',
    phone: '+91 9876543220',
    attendance: 93,
    photo: 'https://randomuser.me/api/portraits/men/73.jpg',
    status: 'active'
  },
  {
    id: 14,
    name: 'Sneha Gupta',
    rollNo: 'STU014',
    class: '8-A',
    fatherName: 'Sanjay Gupta', // sibling of Devansh
    phone: '+91 9876543220',
    attendance: 90,
    photo: 'https://randomuser.me/api/portraits/women/74.jpg',
    status: 'active'
  },
  {
    id: 15,
    name: 'Lakshya Nair',
    rollNo: 'STU015',
    class: '9-C',
    fatherName: 'Vivek Nair',
    phone: '+91 9876543221',
    attendance: 78,
    photo: 'https://randomuser.me/api/portraits/men/74.jpg',
    status: 'inactive'
  },
  {
    id: 16,
    name: 'Meera Nair',
    rollNo: 'STU016',
    class: '6-A',
    fatherName: 'Vivek Nair', // sibling of Lakshya
    phone: '+91 9876543221',
    attendance: 81,
    photo: 'https://randomuser.me/api/portraits/women/75.jpg',
    status: 'active'
  },
  {
    id: 17,
    name: 'Aarav Desai',
    rollNo: 'STU017',
    class: '10-B',
    fatherName: 'Kunal Desai',
    phone: '+91 9876543222',
    attendance: 96,
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    status: 'active'
  },
  {
    id: 18,
    name: 'Isha Desai',
    rollNo: 'STU018',
    class: '8-B',
    fatherName: 'Kunal Desai', // sibling of Aarav
    phone: '+91 9876543222',
    attendance: 92,
    photo: 'https://randomuser.me/api/portraits/women/76.jpg',
    status: 'active'
  },
  {
    id: 19,
    name: 'Rahul Yadav',
    rollNo: 'STU019',
    class: '7-C',
    fatherName: 'Suraj Yadav',
    phone: '+91 9876543223',
    attendance: 84,
    photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    status: 'active'
  },
  {
    id: 20,
    name: 'Pooja Yadav',
    rollNo: 'STU020',
    class: '6-B',
    fatherName: 'Suraj Yadav', // sibling of Rahul
    phone: '+91 9876543223',
    attendance: 86,
    photo: 'https://randomuser.me/api/portraits/women/77.jpg',
    status: 'active'
  }
];



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
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200">
          <UserPlus className="h-4 w-4" />
          <span>Add Student</span>
        </button>
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
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${getAttendanceColor(student.attendance)}`}>
                    {student.attendance}%
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
