import React, { useState } from 'react';
import { 
  Trophy, 
  Medal, 
  Star, 
  Award, 
  BookOpen, 
  Target, 
  Calendar, 
  TrendingUp,
  Crown,
  Users,
  ChevronDown,
  ChevronUp,
  Download,
  Eye,
  Filter,
  FileText,
  CheckCircle,
  Clock,
  Calculator
} from 'lucide-react';

export default function ParentAchievements() {
  const [selectedChild, setSelectedChild] = useState('1');
  const [selectedAcademicYear, setSelectedAcademicYear] = useState('2025-26');
  const [achievementFilter, setAchievementFilter] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState({
    academic: true,
    extracurricular: true,
    behavioral: true,
    special: true
  });

  const children = [
    {
      id: 1,
      name: 'Devansh Gupta',
      class: '10-A',
      rollNo: 'STU013',
      photo: 'https://randomuser.me/api/portraits/men/73.jpg'
    },
    {
      id: 2,
      name: 'Sneha Gupta',
      class: '8-A',
      rollNo: 'STU014',
      photo: 'https://randomuser.me/api/portraits/women/74.jpg'
    }
  ];

  const achievementsData = {
    1: { // Devansh Gupta
      summary: {
        totalAchievements: 12,
        recentAchievements: 3,
        academicRank: 5,
        excellenceGrade: 'A+'
      },
      categories: {
        academic: [
          {
            id: 1,
            title: 'Mathematics Olympiad Gold Medal',
            description: 'First place in State-level Mathematics Olympiad 2024',
            date: '2024-03-15',
            type: 'Gold Medal',
            icon: Trophy,
            status: 'Completed'
          },
          {
            id: 2,
            title: 'Science Fair Winner',
            description: 'Best Project Award for "Renewable Energy Solutions"',
            date: '2024-02-20',
            type: 'First Place',
            icon: Award,
            status: 'Completed'
          },
          {
            id: 3,
            title: 'Perfect Attendance',
            description: 'Maintained 100% attendance for the entire academic term',
            date: '2024-01-30',
            type: 'Recognition',
            icon: Calendar,
            status: 'Completed'
          },
          {
            id: 4,
            title: 'English Essay Competition Winner',
            description: 'Regional level essay writing competition on "Digital India"',
            date: '2024-01-10',
            type: 'Winner',
            icon: BookOpen,
            status: 'Completed'
          }
        ],
        extracurricular: [
          {
            id: 5,
            title: 'Inter-School Cricket Champion',
            description: 'Captain of winning team in District Cricket Tournament',
            date: '2024-03-01',
            type: 'Captain & Winner',
            icon: Trophy,
            status: 'Completed'
          },
          {
            id: 6,
            title: 'Cultural Fest Dance Performance',
            description: 'Outstanding performance in annual cultural festival',
            date: '2024-02-14',
            type: 'Outstanding',
            icon: Star,
            status: 'Completed'
          },
          {
            id: 7,
            title: 'Robotics Club President',
            description: 'Elected as president of school robotics club',
            date: '2024-01-15',
            type: 'Leadership',
            icon: Target,
            status: 'Pending'
          }
        ],
        behavioral: [
          {
            id: 8,
            title: 'Peer Mentor Excellence',
            description: 'Helped junior students with academic guidance throughout the year',
            date: '2024-03-10',
            type: 'Service',
            icon: Users,
            status: 'Completed'
          },
          {
            id: 9,
            title: 'Class Representative',
            description: 'Elected as class representative for academic session 2023-24',
            date: '2023-04-01',
            type: 'Leadership',
            icon: Crown,
            status: 'Pending'
          }
        ],
        special: [
          {
            id: 10,
            title: 'Environmental Conservation Award',
            description: 'Led school\'s tree plantation drive with exceptional participation',
            date: '2024-06-05',
            type: 'Leadership',
            icon: Target,
            status: 'Completed'
          },
          {
            id: 11,
            title: 'Technology Innovation Fair',
            description: 'Created innovative mobile app for school library management',
            date: '2024-05-20',
            type: 'Innovation',
            icon: Star,
            status: 'Completed'
          },
          {
            id: 12,
            title: 'Community Service Recognition',
            description: 'Completed extensive community service hours in local NGO',
            date: '2024-04-15',
            type: 'Service',
            icon: Medal,
            status: 'Completed'
          }
        ]
      }
    },
    2: { // Sneha Gupta  
      summary: {
        totalAchievements: 10,
        recentAchievements: 2,
        academicRank: 8,
        excellenceGrade: 'A'
      },
      categories: {
        academic: [
          {
            id: 1,
            title: 'Hindi Poetry Recitation Winner',
            description: 'First place in Inter-school Hindi poetry competition',
            date: '2024-03-20',
            type: 'Winner',
            icon: BookOpen,
            status: 'Completed'
          },
          {
            id: 2,
            title: 'Social Science Project Excellence',
            description: 'Best project on "Indian Freedom Struggle" in district competition',
            date: '2024-02-28',
            type: 'Excellence',
            icon: Award,
            status: 'Completed'
          },
          {
            id: 3,
            title: 'Mathematics Quiz Runner-up',
            description: 'Second place in district mathematics quiz competition',
            date: '2024-01-25',
            type: 'Runner-up',
            icon: Trophy,
            status: 'Completed'
          },
          {
            id: 4,
            title: 'Academic Consistency Award',
            description: 'Maintained excellent grades throughout the academic year',
            date: '2024-01-15',
            type: 'Consistency',
            icon: TrendingUp,
            status: 'Completed'
          }
        ],
        extracurricular: [
          {
            id: 5,
            title: 'Classical Dance Competition',
            description: 'Second place in state-level Bharatanatyam competition',
            date: '2024-03-05',
            type: 'Runner-up',
            icon: Star,
            status: 'Completed'
          },
          {
            id: 6,
            title: 'School Choir Lead Singer',
            description: 'Selected as lead singer for annual day celebrations',
            date: '2024-02-10',
            type: 'Lead Role',
            icon: Medal,
            status: 'Pending'
          },
          {
            id: 7,
            title: 'Art Exhibition Display',
            description: 'Artwork selected for district school art exhibition',
            date: '2024-01-20',
            type: 'Selection',
            icon: Star,
            status: 'Completed'
          }
        ],
        behavioral: [
          {
            id: 8,
            title: 'Perfect Discipline Record',
            description: 'Maintained exemplary behavior throughout the academic year',
            date: '2024-03-15',
            type: 'Excellence',
            icon: Crown,
            status: 'Completed'
          },
          {
            id: 9,
            title: 'Helping Hand Award',
            description: 'Recognized for consistently helping classmates with studies',
            date: '2024-02-05',
            type: 'Recognition',
            icon: Users,
            status: 'Completed'
          }
        ],
        special: [
          {
            id: 10,
            title: 'Reading Challenge Champion',
            description: 'Completed the school\'s annual reading challenge program',
            date: '2024-06-01',
            type: 'Champion',
            icon: BookOpen,
            status: 'Completed'
          }
        ]
      }
    }
  };

  const getCurrentChildData = () => {
    return achievementsData[selectedChild] || achievementsData[1];
  };

  const getCurrentChild = () => {
    return children.find(c => c.id === parseInt(selectedChild)) || children[0];
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const downloadCertificate = (achievementTitle) => {
    alert(`Downloading certificate for "${achievementTitle}". This would trigger a PDF download in a real application.`);
  };

  const viewDetails = (achievementId) => {
    alert(`Viewing detailed information for achievement ID: ${achievementId}`);
  };

  const currentChildData = getCurrentChildData();
  const currentChild = getCurrentChild();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Achievement</h1>
          <p className="text-gray-600 mt-1">Track and view {currentChild.name}'s academic and extracurricular achievements</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200">
            <Download className="h-4 w-4" />
            <span>Download Report</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200">
            <FileText className="h-4 w-4" />
            <span>Achievement History</span>
          </button>
        </div>
      </div>

      {/* Selection Panel */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Selection</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Academic Year</label>
            <select
              value={selectedAcademicYear}
              onChange={(e) => setSelectedAcademicYear(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="2025-26">2025-26</option>
              <option value="2024-25">2024-25</option>
              <option value="2023-24">2023-24</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Achievement Filter</label>
            <select
              value={achievementFilter}
              onChange={(e) => setAchievementFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Achievements</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="recent">Recent</option>
            </select>
          </div>
        </div>
      </div>

      {/* Student Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={currentChild.photo}
            alt={currentChild.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{currentChild.name}</h2>
            <p className="text-gray-600">Class {currentChild.class} • Roll No: {currentChild.rollNo}</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-sm text-gray-600">
                Total Achievements: <span className="font-semibold text-green-600">{currentChildData.summary.totalAchievements}</span>
              </span>
              <span className="text-sm text-gray-600">
                Class Rank: <span className="font-semibold text-red-600">#{currentChildData.summary.academicRank}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid - Using EXACT same colors as fee management */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Calculator className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-blue-600">Total Achievements</p>
                <p className="text-2xl font-bold text-blue-900">{currentChildData.summary.totalAchievements}</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm font-medium text-green-600">Completed Awards</p>
                <p className="text-2xl font-bold text-green-900">{currentChildData.summary.recentAchievements}</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-sm font-medium text-red-600">Class Rank</p>
                <p className="text-2xl font-bold text-red-900">#{currentChildData.summary.academicRank}</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm font-medium text-purple-600">Excellence Grade</p>
                <p className="text-2xl font-bold text-purple-900">{currentChildData.summary.excellenceGrade}</p>
                <p className="text-xs text-purple-600">Overall Performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Achievement Categories */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievement Breakdown</h3>
            <div className="space-y-4">
              {Object.entries(currentChildData.categories).map(([categoryKey, achievements]) => (
                <div key={categoryKey} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900 capitalize">{categoryKey.replace('_', ' ')} ({achievements.length})</h4>
                    <button
                      onClick={() => toggleCategory(categoryKey)}
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      {expandedCategories[categoryKey] ? 'Show Less' : 'View All'}
                    </button>
                  </div>
                  
                  {expandedCategories[categoryKey] && (
                    <div className="space-y-3">
                      {achievements.map((achievement) => {
                        const IconComponent = achievement.icon;
                        return (
                          <div key={achievement.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <IconComponent className="h-5 w-5 text-gray-600" />
                              <div>
                                <p className="font-medium text-gray-900">{achievement.title}</p>
                                <p className="text-sm text-gray-600">
                                  {new Date(achievement.date).toLocaleDateString('en-IN', { 
                                    year: 'numeric',
                                    month: 'short', 
                                    day: 'numeric' 
                                  })} • {achievement.type}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getStatusColor(achievement.status)}`}>
                                  {achievement.status}
                                </span>
                                <button
                                  onClick={() => viewDetails(achievement.id)}
                                  className="text-blue-600 hover:text-blue-700"
                                >
                                  <Eye className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upcoming/Recent Achievements */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
            <div className="space-y-3">
              {Object.values(currentChildData.categories)
                .flat()
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 4)
                .map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-gray-900 text-sm">{achievement.title}</p>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {achievement.type}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-600">
                            {new Date(achievement.date).toLocaleDateString('en-IN', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </p>
                        </div>
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getStatusColor(achievement.status)}`}>
                          {achievement.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <Download className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700 font-medium">Download Certificates</span>
                </div>
                <span className="text-blue-600">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-green-600" />
                  <span className="text-green-700 font-medium">Achievement Report</span>
                </div>
                <span className="text-green-600">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-purple-600" />
                  <span className="text-purple-700 font-medium">View All Awards</span>
                </div>
                <span className="text-purple-600">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-orange-600" />
                  <span className="text-orange-700 font-medium">Performance Analytics</span>
                </div>
                <span className="text-orange-600">→</span>
              </button>
            </div>
          </div>

          {/* Category Summary */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Overview</h3>
            <div className="space-y-2">
              {Object.entries(currentChildData.categories).map(([category, achievements]) => (
                <div key={category} className="flex items-center space-x-3 p-2 border border-gray-200 rounded">
                  <Trophy className="h-5 w-5 text-gray-600" />
                  <span className="text-sm text-gray-700 capitalize">{category.replace('_', ' ')}</span>
                  <span className="ml-auto text-sm font-semibold text-gray-900">{achievements.length}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
