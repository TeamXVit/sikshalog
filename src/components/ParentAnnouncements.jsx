import React, { useState } from 'react';
import {
  Calendar,
  Download,
  Bell,
  BookOpen,
  AlertTriangle,
  Info,
  Star,
  Users,
  Clock,
  MapPin,
  ChevronRight,
  Search,
  Filter,
  Eye,
  Bookmark,
  Share2,
  FileText,
  Megaphone,
  School,
  Trophy,
  Heart,
  Zap,
  Target
} from 'lucide-react';

export default function ParentAnnouncements() {
  const [selectedChild, setSelectedChild] = useState('1');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  const children = [
    {
      id: 1,
      name: 'Devansh Gupta',
      class: '10-A',
      photo: 'https://randomuser.me/api/portraits/men/73.jpg'
    },
    {
      id: 2,
      name: 'Sneha Gupta',
      class: '8-A',
      photo: 'https://randomuser.me/api/portraits/women/74.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Announcements', icon: Bell, color: '#6B7280' },
    { id: 'general', name: 'General', icon: Info, color: '#3B82F6' },
    { id: 'academic', name: 'Academic', icon: BookOpen, color: '#10B981' },
    { id: 'events', name: 'Events', icon: Calendar, color: '#F59E0B' },
    { id: 'urgent', name: 'Urgent', icon: AlertTriangle, color: '#EF4444' },
    { id: 'achievements', name: 'Achievements', icon: Trophy, color: '#8B5CF6' },
    { id: 'health', name: 'Health & Safety', icon: Heart, color: '#EC4899' }
  ];

  const announcementsData = {
    1: {
      announcements: [
        {
          id: 'ANN001',
          title: 'Parent-Teacher Meeting Scheduled',
          content: 'Dear Parents, We are pleased to announce that the Parent-Teacher Meeting for Class 10-A will be held on September 25, 2025, from 2:00 PM to 5:00 PM. This is an excellent opportunity to discuss your child\'s academic progress and address any concerns.',
          category: 'general',
          date: '2025-09-17',
          time: '09:00 AM',
          isRead: false,
          isBookmarked: false,
          attachments: ['PTM_Schedule_Class10A.pdf'],
          targetClasses: ['10-A'],
          postedBy: 'Principal Office'
        },
        {
          id: 'ANN002',
          title: 'Mathematics Olympiad Results Announced',
          content: 'Congratulations to Devansh Gupta from Class 10-A for securing 2nd position in the State Level Mathematics Olympiad! The school is proud of this outstanding achievement. Devansh will be felicitated in the upcoming morning assembly.',
          category: 'achievements',
          date: '2025-09-16',
          time: '11:30 AM',
          isRead: true,
          isBookmarked: true,
          attachments: [],
          targetClasses: ['10-A'],
          postedBy: 'Mathematics Department'
        },
        {
          id: 'ANN003',
          title: 'Holiday Notice - Gandhi Jayanti',
          content: 'The school will remain closed on October 2, 2025 (Wednesday) on account of Gandhi Jayanti. Regular classes will resume on October 3, 2025. Students are encouraged to participate in community service activities to honor Mahatma Gandhi\'s legacy.',
          category: 'general',
          date: '2025-09-15',
          time: '02:15 PM',
          isRead: true,
          isBookmarked: false,
          attachments: [],
          targetClasses: ['All Classes'],
          postedBy: 'Administration'
        },
        {
          id: 'ANN004',
          title: 'Science Fair Registration Open',
          content: 'The annual Science Fair 2025 is approaching! Registration is now open for all students in classes 8-12. Students can participate individually or in groups of up to 3 members. Last date for registration: September 30, 2025. Prize money up to ₹10,000 for winners!',
          category: 'events',
          date: '2025-09-14',
          time: '10:45 AM',
          isRead: false,
          isBookmarked: true,
          attachments: ['Science_Fair_2025_Guidelines.pdf', 'Registration_Form.pdf'],
          targetClasses: ['8th-12th'],
          postedBy: 'Science Department'
        },
        {
          id: 'ANN005',
          title: 'Urgent: Bus Route Change',
          content: 'URGENT NOTICE: Due to road construction work on MG Road, Bus Route No. 7 will be temporarily diverted from September 20-30, 2025. New pickup points and timings are attached. Please ensure your ward is informed about the changes.',
          category: 'urgent',
          date: '2025-09-13',
          time: '08:00 AM',
          isRead: true,
          isBookmarked: false,
          attachments: ['Bus_Route_7_Changes.pdf'],
          targetClasses: ['All Classes'],
          postedBy: 'Transport Department'
        },
        {
          id: 'ANN006',
          title: 'Mid-Term Examination Schedule',
          content: 'The Mid-Term Examinations for Class 10 will be conducted from October 15-25, 2025. Students are advised to prepare thoroughly for all subjects. Detailed exam schedule and guidelines are attached. Study materials are available in the school library.',
          category: 'academic',
          date: '2025-09-12',
          time: '03:30 PM',
          isRead: true,
          isBookmarked: true,
          attachments: ['Class10_MidTerm_Schedule.pdf', 'Exam_Guidelines.pdf'],
          targetClasses: ['10-A', '10-B'],
          postedBy: 'Examination Board'
        },
        {
          id: 'ANN007',
          title: 'Health Checkup Camp',
          content: 'A comprehensive health checkup camp will be organized in the school premises on September 28, 2025. All students will undergo basic health screening including height, weight, vision, and dental checkup. Parents will receive individual health reports.',
          category: 'health',
          date: '2025-09-11',
          time: '01:20 PM',
          isRead: false,
          isBookmarked: false,
          attachments: ['Health_Camp_Details.pdf'],
          targetClasses: ['All Classes'],
          postedBy: 'Health & Wellness Team'
        }
      ]
    },
    2: {
      announcements: [
        {
          id: 'ANN008',
          title: 'Art Exhibition - Student Showcase',
          content: 'We are delighted to announce that Sneha Gupta\'s artwork has been selected for the Inter-School Art Exhibition. The exhibition will be held at the City Art Gallery from October 5-10, 2025. Parents are cordially invited to attend the inauguration ceremony.',
          category: 'achievements',
          date: '2025-09-16',
          time: '04:00 PM',
          isRead: false,
          isBookmarked: true,
          attachments: ['Art_Exhibition_Invitation.pdf'],
          targetClasses: ['8-A'],
          postedBy: 'Art Department'
        },
        {
          id: 'ANN009',
          title: 'Sports Day Practice Schedule',
          content: 'Sports Day practice sessions for Class 8 students will begin from September 22, 2025. Students participating in various events should attend regular practice sessions. Sports kits can be collected from the sports department office.',
          category: 'events',
          date: '2025-09-15',
          time: '11:15 AM',
          isRead: true,
          isBookmarked: false,
          attachments: ['Sports_Day_Events_List.pdf'],
          targetClasses: ['8-A', '8-B', '8-C'],
          postedBy: 'Sports Department'
        },
        {
          id: 'ANN010',
          title: 'English Poetry Competition',
          content: 'The English Department is organizing a Poetry Recitation Competition for Classes 6-8. Theme: "Nature and Environment". Registration deadline: September 25, 2025. Competition date: October 8, 2025. Exciting prizes await the winners!',
          category: 'events',
          date: '2025-09-14',
          time: '09:45 AM',
          isRead: true,
          isBookmarked: true,
          attachments: ['Poetry_Competition_Rules.pdf'],
          targetClasses: ['6th-8th'],
          postedBy: 'English Department'
        },
        {
          id: 'ANN011',
          title: 'Library Week Celebration',
          content: 'Library Week will be celebrated from September 23-27, 2025. Special events include storytelling sessions, book exhibitions, and reading competitions. Students are encouraged to participate actively and explore the world of books.',
          category: 'events',
          date: '2025-09-13',
          time: '02:00 PM',
          isRead: false,
          isBookmarked: false,
          attachments: ['Library_Week_Events.pdf'],
          targetClasses: ['All Classes'],
          postedBy: 'Library Department'
        },
        {
          id: 'ANN012',
          title: 'Class 8 Field Trip to Science Museum',
          content: 'An educational field trip to the Regional Science Museum has been organized for Class 8 students on October 12, 2025. The trip will include interactive science exhibits and planetarium show. Permission slips must be submitted by October 5, 2025.',
          category: 'academic',
          date: '2025-09-12',
          time: '10:30 AM',
          isRead: true,
          isBookmarked: true,
          attachments: ['Field_Trip_Permission_Slip.pdf', 'Museum_Visit_Itinerary.pdf'],
          targetClasses: ['8-A', '8-B', '8-C'],
          postedBy: 'Science Department'
        }
      ]
    }
  };

  const getCurrentChildData = () => {
    return announcementsData[selectedChild] || announcementsData[1];
  };

  const getCurrentChild = () => {
    return children.find(c => c.id === parseInt(selectedChild)) || children[0];
  };

  const getCategoryIcon = (category) => {
    const cat = categories.find(c => c.id === category);
    if (cat) {
      const IconComponent = cat.icon;
      return <IconComponent className="h-4 w-4" style={{ color: cat.color }} />;
    }
    return <Info className="h-4 w-4 text-gray-500" />;
  };

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : '#6B7280';
  };

  const getCategoryName = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.name : 'General';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getDaysAgo = (dateString) => {
    const today = new Date();
    const announcementDate = new Date(dateString);
    const diffTime = today - announcementDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    return `${diffDays} days ago`;
  };

  const toggleBookmark = (announcementId) => {
    console.log(`Toggling bookmark for announcement ${announcementId}`);
  };

  const markAsRead = (announcementId) => {
    console.log(`Marking announcement ${announcementId} as read`);
  };

  const downloadAttachment = (attachment) => {
    console.log(`Downloading attachment: ${attachment}`);
    alert(`Downloading ${attachment}. This would trigger a file download in a real application.`);
  };

  const shareAnnouncement = (announcement) => {
    console.log(`Sharing announcement: ${announcement.title}`);
    alert(`Sharing announcement: ${announcement.title}`);
  };

  const getFilteredAnnouncements = () => {
    const currentData = getCurrentChildData();
    let filtered = currentData.announcements;

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(ann => ann.category === categoryFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(ann => 
        ann.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ann.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered.sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
      if (sortBy === 'unread') return a.isRead - b.isRead;
      return 0;
    });
  };

  const getAnnouncementStats = () => {
    const currentData = getCurrentChildData();
    const total = currentData.announcements.length;
    const unread = currentData.announcements.filter(ann => !ann.isRead).length;
    const bookmarked = currentData.announcements.filter(ann => ann.isBookmarked).length;
    const urgent = currentData.announcements.filter(ann => ann.category === 'urgent').length;

    return { total, unread, bookmarked, urgent };
  };

  const currentChild = getCurrentChild();
  const filteredAnnouncements = getFilteredAnnouncements();
  const stats = getAnnouncementStats();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
          <p className="text-gray-600 mt-1">Stay updated with {currentChild.name}'s school announcements and notices</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200">
            <Bell className="h-4 w-4" />
            <span>Notification Settings</span>
          </button>
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200">
            <Download className="h-4 w-4" />
            <span>Export All</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={currentChild.photo}
            alt={currentChild.name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900">{currentChild.name}</h2>
            <p className="text-gray-600">Class {currentChild.class}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Megaphone className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-blue-600">Total Announcements</p>
                <p className="text-2xl font-bold text-blue-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Bell className="h-6 w-6 text-red-600" />
              <div>
                <p className="text-sm font-medium text-red-600">Unread</p>
                <p className="text-2xl font-bold text-red-900">{stats.unread}</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Bookmark className="h-6 w-6 text-yellow-600" />
              <div>
                <p className="text-sm font-medium text-yellow-600">Bookmarked</p>
                <p className="text-2xl font-bold text-yellow-900">{stats.bookmarked}</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              <div>
                <p className="text-sm font-medium text-orange-600">Urgent</p>
                <p className="text-2xl font-bold text-orange-900">{stats.urgent}</p>
              </div>
            </div>
          </div>
        </div>

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
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
              <option value="unread">Unread First</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 ${
                  !announcement.isRead ? 'border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    {getCategoryIcon(announcement.category)}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
                        {!announcement.isRead && (
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(announcement.date)}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{announcement.time}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <School className="h-4 w-4" />
                          <span>{announcement.postedBy}</span>
                        </span>
                      </div>
                      <span
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${getCategoryColor(announcement.category)}20`,
                          color: getCategoryColor(announcement.category)
                        }}
                      >
                        {getCategoryName(announcement.category)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark(announcement.id)}
                      className={`p-1 rounded ${
                        announcement.isBookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                      }`}
                    >
                      <Bookmark className="h-4 w-4" fill={announcement.isBookmarked ? 'currentColor' : 'none'} />
                    </button>
                    <button
                      onClick={() => shareAnnouncement(announcement)}
                      className="p-1 text-gray-400 hover:text-blue-500 rounded"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
                    <span className="text-xs text-gray-500">{getDaysAgo(announcement.date)}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
                </div>

                {announcement.attachments && announcement.attachments.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Attachments:</p>
                    <div className="flex flex-wrap gap-2">
                      {announcement.attachments.map((attachment, index) => (
                        <button
                          key={index}
                          onClick={() => downloadAttachment(attachment)}
                          className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg text-sm transition duration-200"
                        >
                          <FileText className="h-4 w-4 text-gray-600" />
                          <span>{attachment}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>Target: {announcement.targetClasses.join(', ')}</span>
                  </div>
                  {!announcement.isRead && (
                    <button
                      onClick={() => markAsRead(announcement.id)}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No announcements found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => {
                const count = getCurrentChildData().announcements.filter(ann => 
                  category.id === 'all' ? true : ann.category === category.id
                ).length;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setCategoryFilter(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition duration-200 ${
                      categoryFilter === category.id 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="h-4 w-4" style={{ color: category.color }} />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm font-bold">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <Bell className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700 font-medium">Mark All as Read</span>
                </div>
                <ChevronRight className="h-4 w-4 text-blue-600" />
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <Bookmark className="h-4 w-4 text-yellow-600" />
                  <span className="text-yellow-700 font-medium">View Bookmarked</span>
                </div>
                <ChevronRight className="h-4 w-4 text-yellow-600" />
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <Download className="h-4 w-4 text-green-600" />
                  <span className="text-green-700 font-medium">Download Archive</span>
                </div>
                <ChevronRight className="h-4 w-4 text-green-600" />
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-purple-600" />
                  <span className="text-purple-700 font-medium">Advanced Filters</span>
                </div>
                <ChevronRight className="h-4 w-4 text-purple-600" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-2 bg-green-50 rounded-lg">
                <Trophy className="h-4 w-4 text-green-600" />
                <div className="text-sm">
                  <p className="font-medium text-green-900">Achievement Posted</p>
                  <p className="text-green-700">Mathematics Olympiad results</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-2 bg-red-50 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <div className="text-sm">
                  <p className="font-medium text-red-900">Urgent Notice</p>
                  <p className="text-red-700">Bus route changes</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-2 bg-blue-50 rounded-lg">
                <Calendar className="h-4 w-4 text-blue-600" />
                <div className="text-sm">
                  <p className="font-medium text-blue-900">Event Scheduled</p>
                  <p className="text-blue-700">Parent-Teacher Meeting</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Push Notifications</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" defaultChecked />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-green-400 cursor-pointer"></label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Email Notifications</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" defaultChecked />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-green-400 cursor-pointer"></label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">SMS Alerts</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
