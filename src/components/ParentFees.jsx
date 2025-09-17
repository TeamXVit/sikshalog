import React, { useState } from 'react';
import {
  Calendar,
  Download,
  CreditCard,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  Receipt,
  DollarSign,
  TrendingUp,
  Eye,
  Filter,
  Search,
  Bell,
  Wallet,
  History,
  Calculator
} from 'lucide-react';

export default function ParentFees() {
  const [selectedChild, setSelectedChild] = useState('1');
  const [selectedAcademicYear, setSelectedAcademicYear] = useState('2025-26');
  const [paymentFilter, setPaymentFilter] = useState('all');

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

  const feesData = {
    1: {
      totalAnnualFees: 125000,
      paidAmount: 75000,
      pendingAmount: 50000,
      nextDueDate: '2025-10-15',
      feeStructure: [
        { category: 'Tuition Fee', amount: 80000, paid: 40000, pending: 40000, dueDate: '2025-10-15' },
        { category: 'Development Fee', amount: 15000, paid: 15000, pending: 0, dueDate: null },
        { category: 'Laboratory Fee', amount: 8000, paid: 8000, pending: 0, dueDate: null },
        { category: 'Library Fee', amount: 5000, paid: 5000, pending: 0, dueDate: null },
        { category: 'Sports Fee', amount: 7000, paid: 0, pending: 7000, dueDate: '2025-11-01' },
        { category: 'Transport Fee', amount: 10000, paid: 7000, pending: 3000, dueDate: '2025-10-01' }
      ],
      paymentHistory: [
        { id: 'TXN001', date: '2025-06-15', amount: 25000, method: 'Online', status: 'Completed', receipt: 'RCP001', category: 'Admission + Development Fee' },
        { id: 'TXN002', date: '2025-07-10', amount: 20000, method: 'Bank Transfer', status: 'Completed', receipt: 'RCP002', category: 'Tuition Fee (Q1)' },
        { id: 'TXN003', date: '2025-08-05', amount: 15000, method: 'UPI', status: 'Completed', receipt: 'RCP003', category: 'Laboratory + Library Fee' },
        { id: 'TXN004', date: '2025-09-01', amount: 7000, method: 'Debit Card', status: 'Completed', receipt: 'RCP004', category: 'Transport Fee (Partial)' },
        { id: 'TXN005', date: '2025-09-15', amount: 8000, method: 'Online', status: 'Completed', receipt: 'RCP005', category: 'Laboratory Fee' }
      ],
      upcomingPayments: [
        { category: 'Tuition Fee (Q2)', amount: 20000, dueDate: '2025-10-15', type: 'Quarterly' },
        { category: 'Tuition Fee (Q3)', amount: 20000, dueDate: '2025-01-15', type: 'Quarterly' },
        { category: 'Sports Fee', amount: 7000, dueDate: '2025-11-01', type: 'Annual' },
        { category: 'Transport Fee (Oct-Dec)', amount: 3000, dueDate: '2025-10-01', type: 'Quarterly' }
      ],
      concessions: [
        { type: 'Merit Scholarship', amount: 10000, appliedDate: '2025-06-01', status: 'Approved' },
        { type: 'Sibling Discount', amount: 5000, appliedDate: '2025-06-01', status: 'Approved' }
      ],
      installmentPlan: {
        totalInstallments: 4,
        completedInstallments: 2,
        nextInstallmentAmount: 25000,
        nextInstallmentDate: '2025-10-15'
      }
    },
    2: {
      totalAnnualFees: 95000,
      paidAmount: 60000,
      pendingAmount: 35000,
      nextDueDate: '2025-10-10',
      feeStructure: [
        { category: 'Tuition Fee', amount: 60000, paid: 30000, pending: 30000, dueDate: '2025-10-10' },
        { category: 'Development Fee', amount: 12000, paid: 12000, pending: 0, dueDate: null },
        { category: 'Laboratory Fee', amount: 6000, paid: 6000, pending: 0, dueDate: null },
        { category: 'Library Fee', amount: 4000, paid: 4000, pending: 0, dueDate: null },
        { category: 'Sports Fee', amount: 5000, paid: 0, pending: 5000, dueDate: '2025-10-25' },
        { category: 'Activity Fee', amount: 8000, paid: 8000, pending: 0, dueDate: null }
      ],
      paymentHistory: [
        { id: 'TXN006', date: '2025-06-10', amount: 20000, method: 'Online', status: 'Completed', receipt: 'RCP006', category: 'Admission + Development Fee' },
        { id: 'TXN007', date: '2025-07-05', amount: 15000, method: 'UPI', status: 'Completed', receipt: 'RCP007', category: 'Tuition Fee (Q1)' },
        { id: 'TXN008', date: '2025-08-01', amount: 10000, method: 'Bank Transfer', status: 'Completed', receipt: 'RCP008', category: 'Laboratory + Library Fee' },
        { id: 'TXN009', date: '2025-08-20', amount: 15000, method: 'Online', status: 'Completed', receipt: 'RCP009', category: 'Tuition Fee (Q2)' },
        { id: 'TXN010', date: '2025-09-10', amount: 8000, method: 'Credit Card', status: 'Completed', receipt: 'RCP010', category: 'Activity Fee' }
      ],
      upcomingPayments: [
        { category: 'Tuition Fee (Q3)', amount: 15000, dueDate: '2025-10-10', type: 'Quarterly' },
        { category: 'Tuition Fee (Q4)', amount: 15000, dueDate: '2025-01-10', type: 'Quarterly' },
        { category: 'Sports Fee', amount: 5000, dueDate: '2025-10-25', type: 'Annual' }
      ],
      concessions: [
        { type: 'Academic Excellence', amount: 8000, appliedDate: '2025-06-01', status: 'Approved' },
        { type: 'Art Competition Winner', amount: 2000, appliedDate: '2025-07-15', status: 'Approved' }
      ],
      installmentPlan: {
        totalInstallments: 3,
        completedInstallments: 2,
        nextInstallmentAmount: 20000,
        nextInstallmentDate: '2025-10-10'
      }
    }
  };

  const getCurrentChildData = () => {
    return feesData[selectedChild] || feesData[1];
  };

  const getCurrentChild = () => {
    return children.find(c => c.id === parseInt(selectedChild)) || children[0];
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentMethodIcon = (method) => {
    switch (method) {
      case 'Online': return <CreditCard className="h-4 w-4 text-blue-600" />;
      case 'UPI': return <Wallet className="h-4 w-4 text-purple-600" />;
      case 'Bank Transfer': return <DollarSign className="h-4 w-4 text-green-600" />;
      case 'Debit Card': return <CreditCard className="h-4 w-4 text-orange-600" />;
      case 'Credit Card': return <CreditCard className="h-4 w-4 text-red-600" />;
      default: return <Receipt className="h-4 w-4 text-gray-600" />;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const downloadReceipt = (receiptId) => {
    alert(`Downloading receipt ${receiptId}. This would trigger a PDF download in a real application.`);
  };

  const makePayment = (amount, category) => {
    alert(`Redirecting to payment gateway for ${formatCurrency(amount)} for ${category}. This would integrate with actual payment gateway.`);
  };

  const currentChildData = getCurrentChildData();
  const currentChild = getCurrentChild();
  const paymentCompletion = ((currentChildData.paidAmount / currentChildData.totalAnnualFees) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Fee Management</h1>
          <p className="text-gray-600 mt-1">Manage and track {currentChild.name}'s school fee payments</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200">
            <Download className="h-4 w-4" />
            <span>Download Statement</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200">
            <Receipt className="h-4 w-4" />
            <span>Payment History</span>
          </button>
        </div>
      </div>

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
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Filter</label>
            <select
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Payments</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
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
            <p className="text-gray-600">Class {currentChild.class} • Roll No: {currentChild.rollNo}</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-sm text-gray-600">
                Payment Completion: <span className="font-semibold text-green-600">{paymentCompletion}%</span>
              </span>
              <span className="text-sm text-gray-600">
                Next Due: <span className="font-semibold text-red-600">
                  {getDaysUntilDue(currentChildData.nextDueDate)} days
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Calculator className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-blue-600">Total Annual Fees</p>
                <p className="text-2xl font-bold text-blue-900">{formatCurrency(currentChildData.totalAnnualFees)}</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm font-medium text-green-600">Amount Paid</p>
                <p className="text-2xl font-bold text-green-900">{formatCurrency(currentChildData.paidAmount)}</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-sm font-medium text-red-600">Pending Amount</p>
                <p className="text-2xl font-bold text-red-900">{formatCurrency(currentChildData.pendingAmount)}</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm font-medium text-purple-600">Next Installment</p>
                <p className="text-2xl font-bold text-purple-900">{formatCurrency(currentChildData.installmentPlan.nextInstallmentAmount)}</p>
                <p className="text-xs text-purple-600">
                  Due: {new Date(currentChildData.installmentPlan.nextInstallmentDate).toLocaleDateString('en-IN', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-green-500 h-3 rounded-full" 
              style={{ width: `${paymentCompletion}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">Payment Progress: {paymentCompletion}% Complete</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fee Structure Breakdown</h3>
            <div className="space-y-4">
              {currentChildData.feeStructure.map((fee, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{fee.category}</h4>
                    <div className="flex items-center space-x-2">
                      {fee.pending > 0 && fee.dueDate && (
                        <button
                          onClick={() => makePayment(fee.pending, fee.category)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition duration-200"
                        >
                          Pay Now
                        </button>
                      )}
                      <span className="text-lg font-bold text-gray-900">{formatCurrency(fee.amount)}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Paid</p>
                      <p className="font-semibold text-green-600">{formatCurrency(fee.paid)}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Pending</p>
                      <p className="font-semibold text-red-600">{formatCurrency(fee.pending)}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Due Date</p>
                      <p className="font-medium text-gray-900">
                        {fee.dueDate ? new Date(fee.dueDate).toLocaleDateString('en-IN', { 
                          month: 'short', 
                          day: 'numeric' 
                        }) : 'Paid'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${(fee.paid / fee.amount) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment History</h3>
            <div className="space-y-3">
              {currentChildData.paymentHistory.slice(0, 6).map((payment, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getPaymentMethodIcon(payment.method)}
                    <div>
                      <p className="font-medium text-gray-900">{payment.category}</p>
                      <p className="text-sm text-gray-600">
                        {new Date(payment.date).toLocaleDateString('en-IN', { 
                          year: 'numeric',
                          month: 'short', 
                          day: 'numeric' 
                        })} • {payment.method}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{formatCurrency(payment.amount)}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getStatusColor(payment.status)}`}>
                        {payment.status}
                      </span>
                      <button
                        onClick={() => downloadReceipt(payment.receipt)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Receipt className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full text-center text-blue-600 hover:text-blue-700 text-sm font-medium mt-4">
              View All Payments
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Upcoming Payments</h3>
            </div>
            <div className="space-y-3">
              {currentChildData.upcomingPayments.slice(0, 4).map((payment, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900 text-sm">{payment.category}</p>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {payment.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-gray-900">{formatCurrency(payment.amount)}</p>
                      <p className="text-xs text-gray-600">Due: {new Date(payment.dueDate).toLocaleDateString('en-IN', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                    <button
                      onClick={() => makePayment(payment.amount, payment.category)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Installment Plan</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-600">Progress</span>
                  <span className="text-sm font-bold text-blue-900">
                    {currentChildData.installmentPlan.completedInstallments}/{currentChildData.installmentPlan.totalInstallments}
                  </span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(currentChildData.installmentPlan.completedInstallments / currentChildData.installmentPlan.totalInstallments) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="text-sm text-gray-600 mb-1">Next Installment</p>
                <p className="font-bold text-gray-900">{formatCurrency(currentChildData.installmentPlan.nextInstallmentAmount)}</p>
                <p className="text-xs text-gray-600">
                  Due: {new Date(currentChildData.installmentPlan.nextInstallmentDate).toLocaleDateString('en-IN', { 
                    weekday: 'long',
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <button
                  onClick={() => makePayment(currentChildData.installmentPlan.nextInstallmentAmount, 'Next Installment')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm mt-3"
                >
                  Pay Installment
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Concessions & Scholarships</h3>
            <div className="space-y-3">
              {currentChildData.concessions.map((concession, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-green-900">{concession.type}</p>
                    <p className="text-sm text-green-700">
                      Applied: {new Date(concession.appliedDate).toLocaleDateString('en-IN', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-900">-{formatCurrency(concession.amount)}</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getStatusColor(concession.status)}`}>
                      {concession.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700 font-medium">Make Payment</span>
                </div>
                <span className="text-blue-600">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <Receipt className="h-4 w-4 text-green-600" />
                  <span className="text-green-700 font-medium">Download Receipts</span>
                </div>
                <span className="text-green-600">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-purple-600" />
                  <span className="text-purple-700 font-medium">Fee Structure</span>
                </div>
                <span className="text-purple-600">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition duration-200">
                <div className="flex items-center space-x-2">
                  <Bell className="h-4 w-4 text-orange-600" />
                  <span className="text-orange-700 font-medium">Payment Reminders</span>
                </div>
                <span className="text-orange-600">→</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 border border-gray-200 rounded">
                <CreditCard className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-700">Credit/Debit Cards</span>
              </div>
              <div className="flex items-center space-x-3 p-2 border border-gray-200 rounded">
                <Wallet className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-700">UPI & Digital Wallets</span>
              </div>
              <div className="flex items-center space-x-3 p-2 border border-gray-200 rounded">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-700">Net Banking</span>
              </div>
              <div className="flex items-center space-x-3 p-2 border border-gray-200 rounded">
                <Receipt className="h-5 w-5 text-orange-600" />
                <span className="text-sm text-gray-700">Bank Transfer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
