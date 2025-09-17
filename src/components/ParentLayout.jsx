import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Clock,
  TrendingUp,
  DollarSign,
  Bell,
  Award,
  Menu,
  X,
  LogOut,
  BookOpen,
  ChevronDown,
} from "lucide-react";

const ParentLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const navigation = [
    { name: "Dashboard", href: "/parent/dashboard", icon: LayoutDashboard },
    { name: "Attendance Report", href: "/parent/attendance", icon: Clock },
    { name: "Academic Performance", href: "/parent/performance", icon: TrendingUp },
    { name: "Fee Management", href: "/parent/fees", icon: DollarSign },
    { name: "Announcements", href: "/parent/announcements", icon: Bell },
    { name: "Achievements", href: "/parent/achievements", icon: Award },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:w-64 lg:flex-shrink-0`}
      >
        {/* Brand */}
        <div className="flex items-center justify-between h-16 px-6 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">SikshaLog</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:text-gray-200 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group
                  ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700 font-semibold border-r-4 border-emerald-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
              >
                <Icon className={`h-5 w-5 transition-colors duration-200 ${
                  isActive ? "text-emerald-700" : "text-gray-500 group-hover:text-gray-700"
                }`} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Open sidebar"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Page title - visible on mobile */}
            <div className="lg:hidden">
              <h1 className="text-lg font-semibold text-gray-900 capitalize">
                {location.pathname.split('/').pop() || 'Dashboard'}
              </h1>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center space-x-2 sm:space-x-3 text-sm text-gray-700 hover:text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  aria-label="User menu"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover border-2 border-gray-200"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                    alt="Profile"
                  />
                  <span className="font-medium hidden sm:block">Sanjay Gupta</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    userDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">Sanjay Gupta</p>
                      <p className="text-xs text-gray-500">Parent of Devansh & Sneha</p>
                      <p className="text-xs text-gray-500">sanjay.gupta@email.com</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <LogOut className="h-4 w-4 mr-3" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ParentLayout;