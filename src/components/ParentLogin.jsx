import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Eye, EyeOff, Users, Bell, TrendingUp, Heart } from 'lucide-react';

export default function ParentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      navigate('/parent/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 flex items-center justify-center p-4 relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Patterned background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%229C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-white space-y-8 lg:pr-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-xl">
                <BookOpen size={32} className="text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                SikshaLog
              </h1>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay Connected with Your Child's Education Journey
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Parent Portal Features</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                  <TrendingUp size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Track Progress</h3>
                  <p className="text-gray-400 text-sm">Monitor attendance and academic performance</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-teal-500/20 p-2 rounded-lg">
                  <Bell size={24} className="text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Instant Notifications</h3>
                  <p className="text-gray-400 text-sm">Get alerts about your child's activities</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-cyan-500/20 p-2 rounded-lg">
                  <Users size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Teacher Communication</h3>
                  <p className="text-gray-400 text-sm">Direct messaging with educators</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-pink-500/20 p-2 rounded-lg">
                  <Heart size={24} className="text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Child Safety</h3>
                  <p className="text-gray-400 text-sm">Real-time safety and wellness updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Parents</h2>
            <p className="text-gray-300">Access your child's learning dashboard</p>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="parent@example.com"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-white/20 bg-white/10 text-emerald-500 focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-gray-300">Remember me</span>
              </label>
              <a href="#" className="text-sm text-emerald-400 hover:text-emerald-300">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-4 rounded-xl font-medium hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Demo Credentials: <span className="font-mono">parent@example.com / parent123</span>
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              New to SikshaLog? <a href="#" className="text-emerald-400 hover:text-emerald-300">Contact your child's school</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}