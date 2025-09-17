const StudentsData = [
  {
    id: 1,
    name: 'Aadhya Sharma',
    rollNo: 'STU001',
    class: '10-A',
    section: 'A',
    admissionDate: '2015-07-24',
    dateOfBirth: '2009-10-15',
    fatherName: 'Rajesh Sharma',
    motherName: 'Sunita Sharma',
    phone: '+91 9876543210',
    email: 'rajesh.sharma@email.com',
    address: '789, Shanti Vihar, Semi-Urban Area, State - 345678',
    aadharNumber: '6501-2053-2065',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    overallAttendance: 92,
    currentMonthAttendance: 97,
    grades: [
      { subject: 'Mathematics', marks: 91, grade: 'A' },
      { subject: 'Science', marks: 96, grade: 'A+' },
      { subject: 'English', marks: 86, grade: 'B+' },
      { subject: 'Hindi', marks: 85, grade: 'B+' },
      { subject: 'Social Studies', marks: 95, grade: 'A+' },
    ],
    achievements: [
      'Art Competition Winner',
      'Leadership Award 2024',
      'Mathematics Olympiad Participant',
      'Science Fair Winner 2024',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Afternoon'] },
      { date: '2025-09-15', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-14', status: 'present', sessions: ['Afternoon', 'Evening'] },
      { date: '2025-09-13', status: 'present', sessions: ['Afternoon'] },
      { date: '2025-09-12', status: 'present', sessions: ['Evening', 'Afternoon', 'Morning'] },
      { date: '2025-09-11', status: 'present', sessions: ['Evening', 'Morning', 'Afternoon'] },
      { date: '2025-09-10', status: 'present', sessions: ['Morning', 'Evening', 'Afternoon'] },
      { date: '2025-09-09', status: 'present', sessions: ['Afternoon', 'Evening', 'Morning'] },
      { date: '2025-09-08', status: 'present', sessions: ['Afternoon', 'Morning', 'Evening'] },
      { date: '2025-09-07', status: 'absent', sessions: [] },
    ],
    remarks: [
      {
        id: 2,
        date: '2025-09-01',
        type: 'academic',
        severity: 'medium',
        title: 'Late Homework Submission',
        description: 'Submitted General homework 2 days late. Reason: illness.',
        addedBy: 'Dr. Meera Patel',
        subject: 'Social Studies'
      },
      {
        id: 1,
        date: '2025-08-18',
        type: 'academic',
        severity: 'positive',
        title: 'Excellent Assignment',
        description: 'Outstanding work in Science assignment. Shows deep understanding.',
        addedBy: 'Mr. Anil Sharma',
        subject: 'Social Studies'
      },
    ],
    medicalHistory: {
      bloodGroup: 'O-',
      height: '153 cm',
      weight: '51 kg',
      allergies: ['Dust'],
      chronicConditions: ['Mild Asthma'],
      emergencyContact: {
        name: 'Dr. Priya Sharma',
        phone: '+91 9876545456',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Sunita Agarwal',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Rajesh Patel',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 2,
    name: 'Arjun Patel',
    rollNo: 'STU002',
    class: '10-A',
    section: 'A',
    admissionDate: '2016-06-24',
    dateOfBirth: '2009-01-10',
    fatherName: 'Vikram Patel',
    motherName: 'Kavita Patel',
    phone: '+91 9876543211',
    email: 'vikram.patel@email.com',
    address: '456, Model Town, Urban Area, State - 234567',
    aadharNumber: '9418-9156-9182',
    photo: 'https://randomuser.me/api/portraits/men/66.jpg',
    overallAttendance: 88,
    currentMonthAttendance: 83,
    grades: [
      { subject: 'Mathematics', marks: 75, grade: 'B' },
      { subject: 'Science', marks: 72, grade: 'B' },
      { subject: 'English', marks: 82, grade: 'B+' },
      { subject: 'Hindi', marks: 78, grade: 'B' },
      { subject: 'Social Studies', marks: 89, grade: 'B+' },
    ],
    achievements: [
      'Mathematics Olympiad Participant',
      'Reading Champion 2024',
      'Excellence in Sports 2024',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-15', status: 'present', sessions: ['Evening', 'Afternoon', 'Morning'] },
      { date: '2025-09-14', status: 'present', sessions: ['Morning', 'Evening', 'Afternoon'] },
      { date: '2025-09-13', status: 'present', sessions: ['Afternoon'] },
      { date: '2025-09-12', status: 'present', sessions: ['Afternoon'] },
      { date: '2025-09-11', status: 'present', sessions: ['Morning', 'Afternoon', 'Evening'] },
      { date: '2025-09-10', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-09', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-08', status: 'absent', sessions: [] },
      { date: '2025-09-07', status: 'absent', sessions: [] },
    ],
    remarks: [
      {
        id: 1,
        date: '2025-09-13',
        type: 'disciplinary',
        severity: 'medium',
        title: 'Uniform Violation',
        description: 'Not wearing proper school uniform. Parent contacted.',
        addedBy: 'Mr. Anil Sharma',
        subject: 'Hindi'
      },
      {
        id: 3,
        date: '2025-09-03',
        type: 'academic',
        severity: 'medium',
        title: 'Late Homework Submission',
        description: 'Submitted General homework 2 days late. Reason: illness.',
        addedBy: 'Mrs. Sunita Jain',
        subject: 'Science'
      },
      {
        id: 2,
        date: '2025-08-28',
        type: 'academic',
        severity: 'positive',
        title: 'Excellent Assignment',
        description: 'Outstanding work in Hindi assignment. Shows deep understanding.',
        addedBy: 'Mr. Anil Sharma',
        subject: 'Social Studies'
      },
    ],
    medicalHistory: {
      bloodGroup: 'B+',
      height: '156 cm',
      weight: '43 kg',
      allergies: ['Peanuts'],
      chronicConditions: ['Seasonal Allergies'],
      emergencyContact: {
        name: 'Dr. Sunita Agarwal',
        phone: '+91 9876545615',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Amit Gupta',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Sunita Agarwal',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 3,
    name: 'Priya Kumari',
    rollNo: 'STU003',
    class: '9-B',
    section: 'B',
    admissionDate: '2017-07-11',
    dateOfBirth: '2010-01-18',
    fatherName: 'Suresh Kumar',
    motherName: 'Anita Kumar',
    phone: '+91 9876543212',
    email: 'suresh.kumar@email.com',
    address: '789, Shanti Vihar, Semi-Urban Area, State - 345678',
    aadharNumber: '5739-2792-6354',
    photo: 'https://randomuser.me/api/portraits/women/67.jpg',
    overallAttendance: 95,
    currentMonthAttendance: 89,
    grades: [
      { subject: 'Mathematics', marks: 97, grade: 'A+' },
      { subject: 'Science', marks: 93, grade: 'A' },
      { subject: 'English', marks: 88, grade: 'B+' },
      { subject: 'Hindi', marks: 90, grade: 'A' },
      { subject: 'Social Studies', marks: 97, grade: 'A+' },
    ],
    achievements: [
      'Science Fair Winner 2024',
      'Excellence in Sports 2024',
      'Mathematics Olympiad Participant',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Afternoon', 'Morning', 'Evening'] },
      { date: '2025-09-15', status: 'present', sessions: ['Evening', 'Afternoon'] },
      { date: '2025-09-14', status: 'present', sessions: ['Afternoon', 'Morning', 'Evening'] },
      { date: '2025-09-13', status: 'present', sessions: ['Morning', 'Afternoon', 'Evening'] },
      { date: '2025-09-12', status: 'present', sessions: ['Afternoon', 'Morning', 'Evening'] },
      { date: '2025-09-11', status: 'present', sessions: ['Afternoon', 'Morning', 'Evening'] },
      { date: '2025-09-10', status: 'present', sessions: ['Morning', 'Afternoon'] },
      { date: '2025-09-09', status: 'present', sessions: ['Afternoon'] },
      { date: '2025-09-08', status: 'present', sessions: ['Evening', 'Morning', 'Afternoon'] },
      { date: '2025-09-07', status: 'absent', sessions: [] },
    ],
    remarks: [
      {
        id: 1,
        date: '2025-09-08',
        type: 'academic',
        severity: 'medium',
        title: 'Needs Improvement',
        description: 'Requires additional support in General. Recommended for extra classes.',
        addedBy: 'Dr. Meera Patel',
        subject: 'Hindi'
      },
      {
        id: 2,
        date: '2025-08-18',
        type: 'academic',
        severity: 'medium',
        title: 'Late Homework Submission',
        description: 'Submitted General homework 2 days late. Reason: power outage.',
        addedBy: 'Mrs. Priya Singh',
        subject: 'General'
      },
    ],
    medicalHistory: {
      bloodGroup: 'AB-',
      height: '161 cm',
      weight: '62 kg',
      allergies: ['Milk', 'Eggs'],
      chronicConditions: ['Mild Asthma'],
      emergencyContact: {
        name: 'Dr. Sunita Agarwal',
        phone: '+91 9876547655',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Sunita Agarwal',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Priya Sharma',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 4,
    name: 'Rohit Singh',
    rollNo: 'STU004',
    class: '9-B',
    section: 'B',
    admissionDate: '2018-04-21',
    dateOfBirth: '2010-05-13',
    fatherName: 'Mahendra Singh',
    motherName: 'Priya Singh',
    phone: '+91 9876543213',
    email: 'mahendra.singh@email.com',
    address: '321, Nehru Colony, Rural District, State - 456789',
    aadharNumber: '7838-9385-9402',
    photo: 'https://randomuser.me/api/portraits/men/68.jpg',
    overallAttendance: 76,
    currentMonthAttendance: 72,
    grades: [
      { subject: 'Mathematics', marks: 57, grade: 'D' },
      { subject: 'Science', marks: 70, grade: 'B' },
      { subject: 'English', marks: 78, grade: 'B' },
      { subject: 'Hindi', marks: 67, grade: 'C' },
      { subject: 'Social Studies', marks: 71, grade: 'B' },
    ],
    achievements: [
      'Perfect Attendance 2023',
      'Art Competition Winner',
      'Debate Competition Finalist',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-15', status: 'absent', sessions: [] },
      { date: '2025-09-14', status: 'absent', sessions: [] },
      { date: '2025-09-13', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-12', status: 'present', sessions: ['Morning', 'Evening', 'Afternoon'] },
      { date: '2025-09-11', status: 'present', sessions: ['Morning', 'Afternoon'] },
      { date: '2025-09-10', status: 'present', sessions: ['Morning', 'Afternoon'] },
      { date: '2025-09-09', status: 'present', sessions: ['Afternoon', 'Morning'] },
      { date: '2025-09-08', status: 'present', sessions: ['Evening', 'Afternoon'] },
      { date: '2025-09-07', status: 'present', sessions: ['Morning', 'Afternoon', 'Evening'] },
    ],
    remarks: [
      {
        id: 2,
        date: '2025-09-06',
        type: 'academic',
        severity: 'medium',
        title: 'Late Homework Submission',
        description: 'Submitted Social Studies homework 2 days late. Reason: transport issue.',
        addedBy: 'Mrs. Sunita Jain',
        subject: 'Hindi'
      },
      {
        id: 1,
        date: '2025-08-25',
        type: 'disciplinary',
        severity: 'positive',
        title: 'Perfect Discipline',
        description: 'Exemplary discipline record. Never had any issues.',
        addedBy: 'Mrs. Priya Singh',
        subject: 'Mathematics'
      },
      {
        id: 3,
        date: '2025-08-20',
        type: 'behavior',
        severity: 'positive',
        title: 'Excellent Behavior',
        description: 'Model student behavior. Very respectful and helpful to classmates.',
        addedBy: 'Mrs. Sunita Jain',
        subject: 'Social Studies'
      },
    ],
    medicalHistory: {
      bloodGroup: 'B-',
      height: '145 cm',
      weight: '52 kg',
      allergies: ['Shellfish', 'Pollen'],
      chronicConditions: ['Mild Asthma'],
      emergencyContact: {
        name: 'Dr. Rajesh Patel',
        phone: '+91 9876541378',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Amit Gupta',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Amit Gupta',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'inactive'
  },
  {
    id: 5,
    name: 'Kavya Reddy',
    rollNo: 'STU005',
    class: '8-C',
    section: 'C',
    admissionDate: '2017-05-21',
    dateOfBirth: '2011-02-06',
    fatherName: 'Ravi Reddy',
    motherName: 'Lakshmi Reddy',
    phone: '+91 9876543214',
    email: 'ravi.reddy@email.com',
    address: '456, Model Town, Urban Area, State - 234567',
    aadharNumber: '4026-1736-8158',
    photo: 'https://randomuser.me/api/portraits/women/69.jpg',
    overallAttendance: 91,
    currentMonthAttendance: 96,
    grades: [
      { subject: 'Mathematics', marks: 94, grade: 'A' },
      { subject: 'Science', marks: 97, grade: 'A+' },
      { subject: 'English', marks: 93, grade: 'A' },
      { subject: 'Hindi', marks: 91, grade: 'A' },
      { subject: 'Social Studies', marks: 95, grade: 'A+' },
    ],
    achievements: [
      'Mathematics Olympiad Participant',
      'Leadership Award 2024',
      'Best Student Award 2023',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'absent', sessions: [] },
      { date: '2025-09-15', status: 'present', sessions: ['Afternoon', 'Morning', 'Evening'] },
      { date: '2025-09-14', status: 'present', sessions: ['Evening', 'Morning', 'Afternoon'] },
      { date: '2025-09-13', status: 'present', sessions: ['Afternoon', 'Evening', 'Morning'] },
      { date: '2025-09-12', status: 'absent', sessions: [] },
      { date: '2025-09-11', status: 'present', sessions: ['Evening', 'Afternoon', 'Morning'] },
      { date: '2025-09-10', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-09', status: 'present', sessions: ['Evening', 'Morning', 'Afternoon'] },
      { date: '2025-09-08', status: 'absent', sessions: [] },
      { date: '2025-09-07', status: 'present', sessions: ['Afternoon', 'Morning'] },
    ],
    remarks: [
      {
        id: 1,
        date: '2025-08-29',
        type: 'behavior',
        severity: 'medium',
        title: 'Disruptive in Class',
        description: 'Talking during Hindi lecture. Parent meeting scheduled.',
        addedBy: 'Dr. Meera Patel',
        subject: 'Science'
      },
      {
        id: 2,
        date: '2025-08-27',
        type: 'behavior',
        severity: 'medium',
        title: 'Disruptive in Class',
        description: 'Talking during General lecture. Parent meeting scheduled.',
        addedBy: 'Mrs. Priya Singh',
        subject: 'Hindi'
      },
    ],
    medicalHistory: {
      bloodGroup: 'AB+',
      height: '160 cm',
      weight: '36 kg',
      allergies: ['Shellfish', 'Pollen'],
      chronicConditions: ['Seasonal Allergies'],
      emergencyContact: {
        name: 'Dr. Sunita Agarwal',
        phone: '+91 9876548414',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Rajesh Patel',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Priya Sharma',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 6,
    name: 'Manish Verma',
    rollNo: 'STU006',
    class: '8-C',
    section: 'C',
    admissionDate: '2017-04-23',
    dateOfBirth: '2011-07-13',
    fatherName: 'Harish Verma',
    motherName: 'Sushma Verma',
    phone: '+91 9876543215',
    email: 'harish.verma@email.com',
    address: '321, Nehru Colony, Rural District, State - 456789',
    aadharNumber: '1520-2843-2568',
    photo: 'https://randomuser.me/api/portraits/men/69.jpg',
    overallAttendance: 85,
    currentMonthAttendance: 79,
    grades: [
      { subject: 'Mathematics', marks: 83, grade: 'B+' },
      { subject: 'Science', marks: 70, grade: 'B' },
      { subject: 'English', marks: 83, grade: 'B+' },
      { subject: 'Hindi', marks: 72, grade: 'B' },
      { subject: 'Social Studies', marks: 73, grade: 'B' },
    ],
    achievements: [
      'Science Fair Winner 2024',
      'Best Student Award 2023',
      'Cultural Program Star 2023',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-15', status: 'present', sessions: ['Morning', 'Evening'] },
      { date: '2025-09-14', status: 'present', sessions: ['Afternoon', 'Evening'] },
      { date: '2025-09-13', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-12', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-11', status: 'present', sessions: ['Morning', 'Afternoon', 'Evening'] },
      { date: '2025-09-10', status: 'present', sessions: ['Evening', 'Afternoon'] },
      { date: '2025-09-09', status: 'present', sessions: ['Morning', 'Afternoon'] },
      { date: '2025-09-08', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-07', status: 'present', sessions: ['Evening'] },
    ],
    remarks: [
      {
        id: 3,
        date: '2025-09-15',
        type: 'disciplinary',
        severity: 'medium',
        title: 'Uniform Violation',
        description: 'Not wearing proper school uniform. Parent contacted.',
        addedBy: 'Mrs. Sunita Jain',
        subject: 'Science'
      },
      {
        id: 1,
        date: '2025-09-10',
        type: 'behavior',
        severity: 'low',
        title: 'Not Attentive in Class',
        description: 'Student appeared distracted during General class. Seemed sleepy.',
        addedBy: 'Mr. Rajesh Kumar',
        subject: 'Science'
      },
      {
        id: 4,
        date: '2025-08-29',
        type: 'behavior',
        severity: 'positive',
        title: 'Excellent Behavior',
        description: 'Model student behavior. Very respectful and helpful to classmates.',
        addedBy: 'Dr. Meera Patel',
        subject: 'Social Studies'
      },
      {
        id: 2,
        date: '2025-08-20',
        type: 'behavior',
        severity: 'high',
        title: 'Disruptive in Class',
        description: 'Talking during Mathematics lecture. Parent meeting scheduled.',
        addedBy: 'Mrs. Priya Singh',
        subject: 'English'
      },
    ],
    medicalHistory: {
      bloodGroup: 'A-',
      height: '170 cm',
      weight: '45 kg',
      allergies: ['Milk', 'Eggs'],
      chronicConditions: ['Mild Asthma'],
      emergencyContact: {
        name: 'Dr. Amit Gupta',
        phone: '+91 9876541260',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Rajesh Patel',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Rajesh Patel',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 7,
    name: 'Simran Kaur',
    rollNo: 'STU007',
    class: '10-B',
    section: 'B',
    admissionDate: '2016-04-17',
    dateOfBirth: '2009-10-22',
    fatherName: 'Gurpreet Singh',
    motherName: 'Manpreet Kaur',
    phone: '+91 9876543216',
    email: 'gurpreet.singh@email.com',
    address: '123, Gandhi Nagar, Rural District, State - 123456',
    aadharNumber: '9823-3930-5308',
    photo: 'https://randomuser.me/api/portraits/women/70.jpg',
    overallAttendance: 98,
    currentMonthAttendance: 97,
    grades: [
      { subject: 'Mathematics', marks: 94, grade: 'A' },
      { subject: 'Science', marks: 94, grade: 'A' },
      { subject: 'English', marks: 87, grade: 'B+' },
      { subject: 'Hindi', marks: 98, grade: 'A+' },
      { subject: 'Social Studies', marks: 95, grade: 'A+' },
    ],
    achievements: [
      'Debate Competition Finalist',
      'Excellence in Sports 2024',
      'Art Competition Winner',
      'Leadership Award 2024',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-15', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-14', status: 'absent', sessions: [] },
      { date: '2025-09-13', status: 'absent', sessions: [] },
      { date: '2025-09-12', status: 'present', sessions: ['Evening', 'Morning'] },
      { date: '2025-09-11', status: 'present', sessions: ['Morning', 'Afternoon'] },
      { date: '2025-09-10', status: 'absent', sessions: [] },
      { date: '2025-09-09', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-08', status: 'present', sessions: ['Evening', 'Afternoon'] },
      { date: '2025-09-07', status: 'present', sessions: ['Afternoon', 'Evening', 'Morning'] },
    ],
    remarks: [
      {
        id: 1,
        date: '2025-09-09',
        type: 'disciplinary',
        severity: 'positive',
        title: 'Perfect Discipline',
        description: 'Exemplary discipline record. Never had any issues.',
        addedBy: 'Mr. Rajesh Kumar',
        subject: 'English'
      },
      {
        id: 3,
        date: '2025-09-06',
        type: 'disciplinary',
        severity: 'medium',
        title: 'Uniform Violation',
        description: 'Not wearing proper school uniform. Parent contacted.',
        addedBy: 'Mrs. Priya Singh',
        subject: 'Science'
      },
      {
        id: 4,
        date: '2025-09-03',
        type: 'disciplinary',
        severity: 'positive',
        title: 'Perfect Discipline',
        description: 'Exemplary discipline record. Never had any issues.',
        addedBy: 'Mr. Anil Sharma',
        subject: 'General'
      },
      {
        id: 2,
        date: '2025-08-21',
        type: 'academic',
        severity: 'positive',
        title: 'Excellent Assignment',
        description: 'Outstanding work in General assignment. Shows deep understanding.',
        addedBy: 'Mrs. Sunita Jain',
        subject: 'Hindi'
      },
    ],
    medicalHistory: {
      bloodGroup: 'AB+',
      height: '164 cm',
      weight: '40 kg',
      allergies: ['Milk', 'Eggs'],
      chronicConditions: ['Seasonal Allergies'],
      emergencyContact: {
        name: 'Dr. Rajesh Patel',
        phone: '+91 9876545157',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Sunita Agarwal',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Sunita Agarwal',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 8,
    name: 'Ananya Iyer',
    rollNo: 'STU008',
    class: '9-A',
    section: 'A',
    admissionDate: '2018-04-17',
    dateOfBirth: '2010-10-13',
    fatherName: 'Srinivas Iyer',
    motherName: 'Meera Iyer',
    phone: '+91 9876543217',
    email: 'srinivas.iyer@email.com',
    address: '654, Green Park, Urban Area, State - 567890',
    aadharNumber: '9541-4950-6581',
    photo: 'https://randomuser.me/api/portraits/women/71.jpg',
    overallAttendance: 82,
    currentMonthAttendance: 81,
    grades: [
      { subject: 'Mathematics', marks: 85, grade: 'B+' },
      { subject: 'Science', marks: 80, grade: 'B+' },
      { subject: 'English', marks: 73, grade: 'B' },
      { subject: 'Hindi', marks: 72, grade: 'B' },
      { subject: 'Social Studies', marks: 82, grade: 'B+' },
    ],
    achievements: [
      'Science Fair Winner 2024',
      'Perfect Attendance 2023',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-15', status: 'present', sessions: ['Evening', 'Afternoon', 'Morning'] },
      { date: '2025-09-14', status: 'present', sessions: ['Morning', 'Evening'] },
      { date: '2025-09-13', status: 'absent', sessions: [] },
      { date: '2025-09-12', status: 'present', sessions: ['Afternoon', 'Evening', 'Morning'] },
      { date: '2025-09-11', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-10', status: 'present', sessions: ['Morning', 'Afternoon'] },
      { date: '2025-09-09', status: 'absent', sessions: [] },
      { date: '2025-09-08', status: 'absent', sessions: [] },
      { date: '2025-09-07', status: 'present', sessions: ['Afternoon'] },
    ],
    remarks: [
      {
        id: 2,
        date: '2025-09-02',
        type: 'disciplinary',
        severity: 'positive',
        title: 'Perfect Discipline',
        description: 'Exemplary discipline record. Never had any issues.',
        addedBy: 'Mr. Rajesh Kumar',
        subject: 'Mathematics'
      },
      {
        id: 3,
        date: '2025-08-25',
        type: 'academic',
        severity: 'positive',
        title: 'Excellent Assignment',
        description: 'Outstanding work in English assignment. Shows deep understanding.',
        addedBy: 'Mr. Rajesh Kumar',
        subject: 'Social Studies'
      },
      {
        id: 1,
        date: '2025-08-20',
        type: 'behavior',
        severity: 'high',
        title: 'Disruptive in Class',
        description: 'Talking during English lecture. Parent meeting scheduled.',
        addedBy: 'Mrs. Sunita Jain',
        subject: 'General'
      },
    ],
    medicalHistory: {
      bloodGroup: 'O-',
      height: '153 cm',
      weight: '36 kg',
      allergies: ['Dust'],
      chronicConditions: ['Seasonal Allergies'],
      emergencyContact: {
        name: 'Dr. Rajesh Patel',
        phone: '+91 9876545587',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Sunita Agarwal',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Priya Sharma',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 9,
    name: 'Farhan Ali',
    rollNo: 'STU009',
    class: '8-B',
    section: 'B',
    admissionDate: '2017-04-17',
    dateOfBirth: '2011-07-24',
    fatherName: 'Imran Ali',
    motherName: 'Fatima Ali',
    phone: '+91 9876543218',
    email: 'imran.ali@email.com',
    address: '456, Model Town, Urban Area, State - 234567',
    aadharNumber: '5266-2164-7182',
    photo: 'https://randomuser.me/api/portraits/men/71.jpg',
    overallAttendance: 73,
    currentMonthAttendance: 77,
    grades: [
      { subject: 'Mathematics', marks: 71, grade: 'B' },
      { subject: 'Science', marks: 62, grade: 'C' },
      { subject: 'English', marks: 56, grade: 'D' },
      { subject: 'Hindi', marks: 60, grade: 'C' },
      { subject: 'Social Studies', marks: 76, grade: 'B' },
    ],
    achievements: [
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Afternoon', 'Evening', 'Morning'] },
      { date: '2025-09-15', status: 'present', sessions: ['Morning', 'Afternoon'] },
      { date: '2025-09-14', status: 'present', sessions: ['Evening', 'Morning'] },
      { date: '2025-09-13', status: 'present', sessions: ['Afternoon', 'Evening'] },
      { date: '2025-09-12', status: 'present', sessions: ['Afternoon', 'Evening', 'Morning'] },
      { date: '2025-09-11', status: 'present', sessions: ['Afternoon', 'Morning'] },
      { date: '2025-09-10', status: 'present', sessions: ['Afternoon', 'Evening'] },
      { date: '2025-09-09', status: 'absent', sessions: [] },
      { date: '2025-09-08', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-07', status: 'present', sessions: ['Afternoon', 'Morning', 'Evening'] },
    ],
    remarks: [
      {
        id: 2,
        date: '2025-09-06',
        type: 'disciplinary',
        severity: 'medium',
        title: 'Punctuality Issue',
        description: 'Late to school for 3 consecutive days. Counseling provided.',
        addedBy: 'Mrs. Sunita Jain',
        subject: 'Hindi'
      },
      {
        id: 1,
        date: '2025-08-19',
        type: 'behavior',
        severity: 'high',
        title: 'Disruptive in Class',
        description: 'Talking during Hindi lecture. Parent meeting scheduled.',
        addedBy: 'Mr. Anil Sharma',
        subject: 'English'
      },
    ],
    medicalHistory: {
      bloodGroup: 'O+',
      height: '145 cm',
      weight: '61 kg',
      allergies: ['Shellfish', 'Pollen'],
      chronicConditions: [],
      emergencyContact: {
        name: 'Dr. Sunita Agarwal',
        phone: '+91 9876542055',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Rajesh Patel',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Priya Sharma',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'inactive'
  },
  {
    id: 10,
    name: 'Tanvi Mehta',
    rollNo: 'STU010',
    class: '10-C',
    section: 'C',
    admissionDate: '2017-04-25',
    dateOfBirth: '2009-07-05',
    fatherName: 'Ramesh Mehta',
    motherName: 'Kiran Mehta',
    phone: '+91 9876543219',
    email: 'ramesh.mehta@email.com',
    address: '654, Green Park, Urban Area, State - 567890',
    aadharNumber: '9727-9946-9206',
    photo: 'https://randomuser.me/api/portraits/women/72.jpg',
    overallAttendance: 94,
    currentMonthAttendance: 93,
    grades: [
      { subject: 'Mathematics', marks: 97, grade: 'A+' },
      { subject: 'Science', marks: 94, grade: 'A' },
      { subject: 'English', marks: 85, grade: 'B+' },
      { subject: 'Hindi', marks: 93, grade: 'A' },
      { subject: 'Social Studies', marks: 92, grade: 'A' },
    ],
    achievements: [
      'Science Fair Winner 2024',
      'Excellence in Sports 2024',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Evening', 'Morning'] },
      { date: '2025-09-15', status: 'present', sessions: ['Afternoon'] },
      { date: '2025-09-14', status: 'present', sessions: ['Morning', 'Afternoon', 'Evening'] },
      { date: '2025-09-13', status: 'absent', sessions: [] },
      { date: '2025-09-12', status: 'present', sessions: ['Evening', 'Morning'] },
      { date: '2025-09-11', status: 'present', sessions: ['Evening', 'Morning', 'Afternoon'] },
      { date: '2025-09-10', status: 'present', sessions: ['Afternoon', 'Evening', 'Morning'] },
      { date: '2025-09-09', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-08', status: 'present', sessions: ['Evening', 'Morning', 'Afternoon'] },
      { date: '2025-09-07', status: 'present', sessions: ['Morning', 'Afternoon'] },
    ],
    remarks: [
      {
        id: 1,
        date: '2025-08-27',
        type: 'behavior',
        severity: 'positive',
        title: 'Excellent Behavior',
        description: 'Model student behavior. Very respectful and helpful to classmates.',
        addedBy: 'Mr. Rajesh Kumar',
        subject: 'General'
      },
      {
        id: 2,
        date: '2025-08-27',
        type: 'behavior',
        severity: 'medium',
        title: 'Disruptive in Class',
        description: 'Talking during General lecture. Parent meeting scheduled.',
        addedBy: 'Mrs. Priya Singh',
        subject: 'Mathematics'
      },
    ],
    medicalHistory: {
      bloodGroup: 'O+',
      height: '153 cm',
      weight: '56 kg',
      allergies: ['Shellfish', 'Pollen'],
      chronicConditions: [],
      emergencyContact: {
        name: 'Dr. Priya Sharma',
        phone: '+91 9876549067',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Amit Gupta',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Amit Gupta',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 11,
    name: 'Ishaan Mehta',
    rollNo: 'STU011',
    class: '8-A',
    section: 'A',
    admissionDate: '2017-06-14',
    dateOfBirth: '2011-04-18',
    fatherName: 'Ramesh Mehta',
    motherName: 'Kiran Mehta',
    phone: '+91 9876543219',
    email: 'ramesh.mehta@email.com',
    address: '789, Shanti Vihar, Semi-Urban Area, State - 345678',
    aadharNumber: '4266-3598-6866',
    photo: 'https://randomuser.me/api/portraits/men/72.jpg',
    overallAttendance: 89,
    currentMonthAttendance: 86,
    grades: [
      { subject: 'Mathematics', marks: 82, grade: 'B+' },
      { subject: 'Science', marks: 77, grade: 'B' },
      { subject: 'English', marks: 76, grade: 'B' },
      { subject: 'Hindi', marks: 85, grade: 'B+' },
      { subject: 'Social Studies', marks: 70, grade: 'B' },
    ],
    achievements: [
      'Best Student Award 2023',
      'Art Competition Winner',
      'Perfect Attendance 2023',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Afternoon'] },
      { date: '2025-09-15', status: 'present', sessions: ['Morning', 'Evening'] },
      { date: '2025-09-14', status: 'present', sessions: ['Evening', 'Morning'] },
      { date: '2025-09-13', status: 'present', sessions: ['Evening', 'Morning'] },
      { date: '2025-09-12', status: 'present', sessions: ['Afternoon', 'Morning'] },
      { date: '2025-09-11', status: 'present', sessions: ['Afternoon'] },
      { date: '2025-09-10', status: 'present', sessions: ['Afternoon', 'Evening', 'Morning'] },
      { date: '2025-09-09', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-08', status: 'present', sessions: ['Morning', 'Afternoon', 'Evening'] },
      { date: '2025-09-07', status: 'present', sessions: ['Morning'] },
    ],
    remarks: [
      {
        id: 4,
        date: '2025-09-03',
        type: 'academic',
        severity: 'high',
        title: 'Needs Improvement',
        description: 'Requires additional support in Mathematics. Recommended for extra classes.',
        addedBy: 'Mrs. Sunita Jain',
        subject: 'English'
      },
      {
        id: 1,
        date: '2025-09-02',
        type: 'disciplinary',
        severity: 'positive',
        title: 'Perfect Discipline',
        description: 'Exemplary discipline record. Never had any issues.',
        addedBy: 'Mr. Rajesh Kumar',
        subject: 'Social Studies'
      },
      {
        id: 3,
        date: '2025-08-22',
        type: 'behavior',
        severity: 'low',
        title: 'Not Attentive in Class',
        description: 'Student appeared distracted during Mathematics class. Seemed sleepy.',
        addedBy: 'Dr. Meera Patel',
        subject: 'Science'
      },
      {
        id: 2,
        date: '2025-08-19',
        type: 'disciplinary',
        severity: 'medium',
        title: 'Punctuality Issue',
        description: 'Late to school for 3 consecutive days. Counseling provided.',
        addedBy: 'Mr. Rajesh Kumar',
        subject: 'Social Studies'
      },
    ],
    medicalHistory: {
      bloodGroup: 'A+',
      height: '170 cm',
      weight: '65 kg',
      allergies: ['Peanuts', 'Dust mites'],
      chronicConditions: ['Mild Asthma'],
      emergencyContact: {
        name: 'Dr. Amit Gupta',
        phone: '+91 9876544287',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Rajesh Patel',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Amit Gupta',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 12,
    name: 'Riya Sharma',
    rollNo: 'STU012',
    class: '7-B',
    section: 'B',
    admissionDate: '2018-07-24',
    dateOfBirth: '2012-01-14',
    fatherName: 'Rajesh Sharma',
    motherName: 'Sunita Sharma',
    phone: '+91 9876543210',
    email: 'rajesh.sharma@email.com',
    address: '456, Model Town, Urban Area, State - 234567',
    aadharNumber: '6311-7101-9680',
    photo: 'https://randomuser.me/api/portraits/women/73.jpg',
    overallAttendance: 87,
    currentMonthAttendance: 82,
    grades: [
      { subject: 'Mathematics', marks: 76, grade: 'B' },
      { subject: 'Science', marks: 75, grade: 'B' },
      { subject: 'English', marks: 88, grade: 'B+' },
      { subject: 'Hindi', marks: 72, grade: 'B' },
      { subject: 'Social Studies', marks: 84, grade: 'B+' },
    ],
    achievements: [
      'Mathematics Olympiad Participant',
      'Leadership Award 2024',
      'Best Student Award 2023',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-15', status: 'present', sessions: ['Morning', 'Evening'] },
      { date: '2025-09-14', status: 'present', sessions: ['Morning', 'Afternoon'] },
      { date: '2025-09-13', status: 'absent', sessions: [] },
      { date: '2025-09-12', status: 'absent', sessions: [] },
      { date: '2025-09-11', status: 'present', sessions: ['Afternoon', 'Evening'] },
      { date: '2025-09-10', status: 'present', sessions: ['Morning', 'Afternoon'] },
      { date: '2025-09-09', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-08', status: 'present', sessions: ['Evening', 'Afternoon'] },
      { date: '2025-09-07', status: 'absent', sessions: [] },
    ],
    remarks: [
      {
        id: 2,
        date: '2025-08-29',
        type: 'behavior',
        severity: 'low',
        title: 'Not Attentive in Class',
        description: 'Student appeared distracted during Hindi class. Seemed sleepy.',
        addedBy: 'Dr. Meera Patel',
        subject: 'Science'
      },
      {
        id: 1,
        date: '2025-08-19',
        type: 'behavior',
        severity: 'high',
        title: 'Disruptive in Class',
        description: 'Talking during General lecture. Parent meeting scheduled.',
        addedBy: 'Mr. Rajesh Kumar',
        subject: 'General'
      },
    ],
    medicalHistory: {
      bloodGroup: 'B+',
      height: '159 cm',
      weight: '42 kg',
      allergies: ['Dust'],
      chronicConditions: ['Migraine'],
      emergencyContact: {
        name: 'Dr. Rajesh Patel',
        phone: '+91 9876547475',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Rajesh Patel',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Priya Sharma',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 13,
    name: 'Devansh Gupta',
    rollNo: 'STU013',
    class: '10-A',
    section: 'A',
    admissionDate: '2016-06-22',
    dateOfBirth: '2009-07-19',
    fatherName: 'Sanjay Gupta',
    motherName: 'Ritu Gupta',
    phone: '+91 9876543220',
    email: 'sanjay.gupta@email.com',
    address: '789, Shanti Vihar, Semi-Urban Area, State - 345678',
    aadharNumber: '3118-6579-8626',
    photo: 'https://randomuser.me/api/portraits/men/73.jpg',
    overallAttendance: 93,
    currentMonthAttendance: 91,
    grades: [
      { subject: 'Mathematics', marks: 92, grade: 'A' },
      { subject: 'Science', marks: 98, grade: 'A+' },
      { subject: 'English', marks: 89, grade: 'B+' },
      { subject: 'Hindi', marks: 94, grade: 'A' },
      { subject: 'Social Studies', marks: 97, grade: 'A+' },
    ],
    achievements: [
      'Reading Champion 2024',
      'Leadership Award 2024',
      'Mathematics Olympiad Participant',
      'Excellence in Sports 2024',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Afternoon', 'Evening'] },
      { date: '2025-09-15', status: 'present', sessions: ['Evening', 'Morning', 'Afternoon'] },
      { date: '2025-09-14', status: 'present', sessions: ['Morning', 'Afternoon', 'Evening'] },
      { date: '2025-09-13', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-12', status: 'present', sessions: ['Afternoon', 'Evening'] },
      { date: '2025-09-11', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-10', status: 'present', sessions: ['Morning', 'Evening'] },
      { date: '2025-09-09', status: 'absent', sessions: [] },
      { date: '2025-09-08', status: 'present', sessions: ['Afternoon', 'Evening', 'Morning'] },
      { date: '2025-09-07', status: 'present', sessions: ['Afternoon', 'Morning', 'Evening'] },
    ],
    remarks: [
      {
        id: 2,
        date: '2025-09-14',
        type: 'behavior',
        severity: 'low',
        title: 'Not Attentive in Class',
        description: 'Student appeared distracted during Science class. Seemed sleepy.',
        addedBy: 'Mr. Rajesh Kumar',
        subject: 'Mathematics'
      },
      {
        id: 1,
        date: '2025-08-28',
        type: 'behavior',
        severity: 'positive',
        title: 'Excellent Behavior',
        description: 'Model student behavior. Very respectful and helpful to classmates.',
        addedBy: 'Mrs. Sunita Jain',
        subject: 'English'
      },
      {
        id: 3,
        date: '2025-08-19',
        type: 'academic',
        severity: 'medium',
        title: 'Late Homework Submission',
        description: 'Submitted English homework 2 days late. Reason: power outage.',
        addedBy: 'Dr. Meera Patel',
        subject: 'General'
      },
    ],
    medicalHistory: {
      bloodGroup: 'O-',
      height: '150 cm',
      weight: '56 kg',
      allergies: ['Shellfish', 'Pollen'],
      chronicConditions: [],
      emergencyContact: {
        name: 'Dr. Amit Gupta',
        phone: '+91 9876549929',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Sunita Agarwal',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Rajesh Patel',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 14,
    name: 'Sneha Gupta',
    rollNo: 'STU014',
    class: '8-A',
    section: 'A',
    admissionDate: '2017-07-17',
    dateOfBirth: '2011-09-17',
    fatherName: 'Sanjay Gupta',
    motherName: 'Ritu Gupta',
    phone: '+91 9876543220',
    email: 'sanjay.gupta@email.com',
    address: '321, Nehru Colony, Rural District, State - 456789',
    aadharNumber: '4505-2780-3433',
    photo: 'https://randomuser.me/api/portraits/women/74.jpg',
    overallAttendance: 90,
    currentMonthAttendance: 95,
    grades: [
      { subject: 'Mathematics', marks: 93, grade: 'A' },
      { subject: 'Science', marks: 95, grade: 'A+' },
      { subject: 'English', marks: 98, grade: 'A+' },
      { subject: 'Hindi', marks: 97, grade: 'A+' },
      { subject: 'Social Studies', marks: 88, grade: 'B+' },
    ],
    achievements: [
      'Best Student Award 2023',
      'Excellence in Sports 2024',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Evening', 'Morning', 'Afternoon'] },
      { date: '2025-09-15', status: 'present', sessions: ['Evening', 'Morning'] },
      { date: '2025-09-14', status: 'present', sessions: ['Morning', 'Evening'] },
      { date: '2025-09-13', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-12', status: 'absent', sessions: [] },
      { date: '2025-09-11', status: 'present', sessions: ['Evening', 'Afternoon', 'Morning'] },
      { date: '2025-09-10', status: 'present', sessions: ['Morning', 'Evening', 'Afternoon'] },
      { date: '2025-09-09', status: 'present', sessions: ['Afternoon', 'Evening'] },
      { date: '2025-09-08', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-07', status: 'present', sessions: ['Evening'] },
    ],
    remarks: [
      {
        id: 1,
        date: '2025-09-05',
        type: 'academic',
        severity: 'positive',
        title: 'Excellent Assignment',
        description: 'Outstanding work in Social Studies assignment. Shows deep understanding.',
        addedBy: 'Mr. Anil Sharma',
        subject: 'Social Studies'
      },
      {
        id: 2,
        date: '2025-08-27',
        type: 'academic',
        severity: 'medium',
        title: 'Needs Improvement',
        description: 'Requires additional support in Hindi. Recommended for extra classes.',
        addedBy: 'Mr. Anil Sharma',
        subject: 'General'
      },
    ],
    medicalHistory: {
      bloodGroup: 'A-',
      height: '170 cm',
      weight: '65 kg',
      allergies: [],
      chronicConditions: [],
      emergencyContact: {
        name: 'Dr. Sunita Agarwal',
        phone: '+91 9876549759',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Sunita Agarwal',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Amit Gupta',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 15,
    name: 'Lakshya Nair',
    rollNo: 'STU015',
    class: '9-C',
    section: 'C',
    admissionDate: '2017-06-10',
    dateOfBirth: '2010-07-17',
    fatherName: 'Vivek Nair',
    motherName: 'Deepa Nair',
    phone: '+91 9876543221',
    email: 'vivek.nair@email.com',
    address: '654, Green Park, Urban Area, State - 567890',
    aadharNumber: '6825-2222-3103',
    photo: 'https://randomuser.me/api/portraits/men/74.jpg',
    overallAttendance: 78,
    currentMonthAttendance: 72,
    grades: [
      { subject: 'Mathematics', marks: 57, grade: 'D' },
      { subject: 'Science', marks: 63, grade: 'C' },
      { subject: 'English', marks: 77, grade: 'B' },
      { subject: 'Hindi', marks: 65, grade: 'C' },
      { subject: 'Social Studies', marks: 74, grade: 'B' },
    ],
    achievements: [
      'Art Competition Winner',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-15', status: 'present', sessions: ['Morning', 'Afternoon', 'Evening'] },
      { date: '2025-09-14', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-13', status: 'present', sessions: ['Morning', 'Afternoon', 'Evening'] },
      { date: '2025-09-12', status: 'present', sessions: ['Evening', 'Afternoon', 'Morning'] },
      { date: '2025-09-11', status: 'present', sessions: ['Evening', 'Morning'] },
      { date: '2025-09-10', status: 'absent', sessions: [] },
      { date: '2025-09-09', status: 'present', sessions: ['Evening', 'Afternoon', 'Morning'] },
      { date: '2025-09-08', status: 'present', sessions: ['Afternoon', 'Morning', 'Evening'] },
      { date: '2025-09-07', status: 'present', sessions: ['Afternoon'] },
    ],
    remarks: [
      {
        id: 2,
        date: '2025-09-07',
        type: 'disciplinary',
        severity: 'positive',
        title: 'Perfect Discipline',
        description: 'Exemplary discipline record. Never had any issues.',
        addedBy: 'Mr. Anil Sharma',
        subject: 'Science'
      },
      {
        id: 1,
        date: '2025-09-05',
        type: 'behavior',
        severity: 'high',
        title: 'Disruptive in Class',
        description: 'Talking during Hindi lecture. Parent meeting scheduled.',
        addedBy: 'Mr. Anil Sharma',
        subject: 'Social Studies'
      },
      {
        id: 3,
        date: '2025-08-20',
        type: 'disciplinary',
        severity: 'positive',
        title: 'Perfect Discipline',
        description: 'Exemplary discipline record. Never had any issues.',
        addedBy: 'Dr. Meera Patel',
        subject: 'Science'
      },
    ],
    medicalHistory: {
      bloodGroup: 'AB+',
      height: '169 cm',
      weight: '52 kg',
      allergies: ['Milk', 'Eggs'],
      chronicConditions: [],
      emergencyContact: {
        name: 'Dr. Amit Gupta',
        phone: '+91 9876543012',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Sunita Agarwal',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Amit Gupta',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'inactive'
  },
  {
    id: 16,
    name: 'Meera Nair',
    rollNo: 'STU016',
    class: '6-A',
    section: 'A',
    admissionDate: '2021-07-19',
    dateOfBirth: '2013-08-26',
    fatherName: 'Vivek Nair',
    motherName: 'Deepa Nair',
    phone: '+91 9876543221',
    email: 'vivek.nair@email.com',
    address: '789, Shanti Vihar, Semi-Urban Area, State - 345678',
    aadharNumber: '2482-4975-6570',
    photo: 'https://randomuser.me/api/portraits/women/75.jpg',
    overallAttendance: 81,
    currentMonthAttendance: 81,
    grades: [
      { subject: 'Mathematics', marks: 70, grade: 'B' },
      { subject: 'Science', marks: 71, grade: 'B' },
      { subject: 'English', marks: 76, grade: 'B' },
      { subject: 'Hindi', marks: 77, grade: 'B' },
      { subject: 'Social Studies', marks: 87, grade: 'B+' },
    ],
    achievements: [
      'Perfect Attendance 2023',
      'Reading Champion 2024',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Morning', 'Evening', 'Afternoon'] },
      { date: '2025-09-15', status: 'present', sessions: ['Afternoon', 'Evening', 'Morning'] },
      { date: '2025-09-14', status: 'present', sessions: ['Afternoon', 'Morning'] },
      { date: '2025-09-13', status: 'present', sessions: ['Afternoon'] },
      { date: '2025-09-12', status: 'present', sessions: ['Afternoon', 'Morning', 'Evening'] },
      { date: '2025-09-11', status: 'present', sessions: ['Morning', 'Afternoon'] },
      { date: '2025-09-10', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-09', status: 'present', sessions: ['Evening', 'Afternoon'] },
      { date: '2025-09-08', status: 'present', sessions: ['Afternoon', 'Morning'] },
      { date: '2025-09-07', status: 'absent', sessions: [] },
    ],
    remarks: [
      {
        id: 1,
        date: '2025-09-12',
        type: 'disciplinary',
        severity: 'positive',
        title: 'Perfect Discipline',
        description: 'Exemplary discipline record. Never had any issues.',
        addedBy: 'Mr. Anil Sharma',
        subject: 'Social Studies'
      },
      {
        id: 2,
        date: '2025-08-21',
        type: 'academic',
        severity: 'high',
        title: 'Needs Improvement',
        description: 'Requires additional support in English. Recommended for extra classes.',
        addedBy: 'Mrs. Priya Singh',
        subject: 'General'
      },
    ],
    medicalHistory: {
      bloodGroup: 'B+',
      height: '159 cm',
      weight: '36 kg',
      allergies: ['Milk', 'Eggs'],
      chronicConditions: ['Seasonal Allergies'],
      emergencyContact: {
        name: 'Dr. Amit Gupta',
        phone: '+91 9876541520',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Sunita Agarwal',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Sunita Agarwal',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 17,
    name: 'Aarav Desai',
    rollNo: 'STU017',
    class: '10-B',
    section: 'B',
    admissionDate: '2016-05-11',
    dateOfBirth: '2009-06-16',
    fatherName: 'Kunal Desai',
    motherName: 'Shruti Desai',
    phone: '+91 9876543222',
    email: 'kunal.desai@email.com',
    address: '456, Model Town, Urban Area, State - 234567',
    aadharNumber: '3612-3394-6409',
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    overallAttendance: 96,
    currentMonthAttendance: 96,
    grades: [
      { subject: 'Mathematics', marks: 90, grade: 'A' },
      { subject: 'Science', marks: 87, grade: 'B+' },
      { subject: 'English', marks: 92, grade: 'A' },
      { subject: 'Hindi', marks: 88, grade: 'B+' },
      { subject: 'Social Studies', marks: 97, grade: 'A+' },
    ],
    achievements: [
      'Mathematics Olympiad Participant',
      'Excellence in Sports 2024',
      'Debate Competition Finalist',
      'Reading Champion 2024',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-15', status: 'present', sessions: ['Afternoon', 'Morning', 'Evening'] },
      { date: '2025-09-14', status: 'present', sessions: ['Afternoon'] },
      { date: '2025-09-13', status: 'present', sessions: ['Afternoon', 'Evening', 'Morning'] },
      { date: '2025-09-12', status: 'present', sessions: ['Evening', 'Morning'] },
      { date: '2025-09-11', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-10', status: 'absent', sessions: [] },
      { date: '2025-09-09', status: 'present', sessions: ['Evening', 'Morning'] },
      { date: '2025-09-08', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-07', status: 'present', sessions: ['Evening', 'Afternoon'] },
    ],
    remarks: [
      {
        id: 2,
        date: '2025-09-15',
        type: 'academic',
        severity: 'medium',
        title: 'Needs Improvement',
        description: 'Requires additional support in General. Recommended for extra classes.',
        addedBy: 'Mr. Rajesh Kumar',
        subject: 'Science'
      },
      {
        id: 1,
        date: '2025-08-20',
        type: 'behavior',
        severity: 'medium',
        title: 'Disruptive in Class',
        description: 'Talking during Social Studies lecture. Parent meeting scheduled.',
        addedBy: 'Mrs. Sunita Jain',
        subject: 'Social Studies'
      },
    ],
    medicalHistory: {
      bloodGroup: 'AB+',
      height: '162 cm',
      weight: '44 kg',
      allergies: [],
      chronicConditions: ['Seasonal Allergies'],
      emergencyContact: {
        name: 'Dr. Amit Gupta',
        phone: '+91 9876544270',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Amit Gupta',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Amit Gupta',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 18,
    name: 'Isha Desai',
    rollNo: 'STU018',
    class: '8-B',
    section: 'B',
    admissionDate: '2019-07-14',
    dateOfBirth: '2011-05-07',
    fatherName: 'Kunal Desai',
    motherName: 'Shruti Desai',
    phone: '+91 9876543222',
    email: 'kunal.desai@email.com',
    address: '789, Shanti Vihar, Semi-Urban Area, State - 345678',
    aadharNumber: '1011-4069-3413',
    photo: 'https://randomuser.me/api/portraits/women/76.jpg',
    overallAttendance: 92,
    currentMonthAttendance: 91,
    grades: [
      { subject: 'Mathematics', marks: 98, grade: 'A+' },
      { subject: 'Science', marks: 90, grade: 'A' },
      { subject: 'English', marks: 88, grade: 'B+' },
      { subject: 'Hindi', marks: 88, grade: 'B+' },
      { subject: 'Social Studies', marks: 94, grade: 'A' },
    ],
    achievements: [
      'Debate Competition Finalist',
      'Best Student Award 2023',
      'Science Fair Winner 2024',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-15', status: 'present', sessions: ['Morning', 'Afternoon', 'Evening'] },
      { date: '2025-09-14', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-13', status: 'present', sessions: ['Evening', 'Morning', 'Afternoon'] },
      { date: '2025-09-12', status: 'absent', sessions: [] },
      { date: '2025-09-11', status: 'present', sessions: ['Afternoon', 'Morning'] },
      { date: '2025-09-10', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-09', status: 'present', sessions: ['Morning', 'Evening'] },
      { date: '2025-09-08', status: 'present', sessions: ['Evening', 'Afternoon', 'Morning'] },
      { date: '2025-09-07', status: 'present', sessions: ['Morning', 'Afternoon'] },
    ],
    remarks: [
      {
        id: 4,
        date: '2025-09-02',
        type: 'disciplinary',
        severity: 'positive',
        title: 'Perfect Discipline',
        description: 'Exemplary discipline record. Never had any issues.',
        addedBy: 'Mrs. Priya Singh',
        subject: 'Social Studies'
      },
      {
        id: 1,
        date: '2025-09-01',
        type: 'academic',
        severity: 'medium',
        title: 'Needs Improvement',
        description: 'Requires additional support in English. Recommended for extra classes.',
        addedBy: 'Mrs. Priya Singh',
        subject: 'Social Studies'
      },
      {
        id: 2,
        date: '2025-08-31',
        type: 'disciplinary',
        severity: 'positive',
        title: 'Perfect Discipline',
        description: 'Exemplary discipline record. Never had any issues.',
        addedBy: 'Mr. Anil Sharma',
        subject: 'Hindi'
      },
      {
        id: 3,
        date: '2025-08-31',
        type: 'academic',
        severity: 'medium',
        title: 'Late Homework Submission',
        description: 'Submitted Mathematics homework 2 days late. Reason: illness.',
        addedBy: 'Mrs. Priya Singh',
        subject: 'Hindi'
      },
    ],
    medicalHistory: {
      bloodGroup: 'AB-',
      height: '143 cm',
      weight: '45 kg',
      allergies: ['Milk', 'Eggs'],
      chronicConditions: [],
      emergencyContact: {
        name: 'Dr. Priya Sharma',
        phone: '+91 9876547446',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Amit Gupta',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Rajesh Patel',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 19,
    name: 'Rahul Yadav',
    rollNo: 'STU019',
    class: '7-C',
    section: 'C',
    admissionDate: '2018-04-19',
    dateOfBirth: '2012-11-11',
    fatherName: 'Suraj Yadav',
    motherName: 'Pooja Yadav',
    phone: '+91 9876543223',
    email: 'suraj.yadav@email.com',
    address: '456, Model Town, Urban Area, State - 234567',
    aadharNumber: '3774-3651-3048',
    photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    overallAttendance: 84,
    currentMonthAttendance: 89,
    grades: [
      { subject: 'Mathematics', marks: 83, grade: 'B+' },
      { subject: 'Science', marks: 82, grade: 'B+' },
      { subject: 'English', marks: 82, grade: 'B+' },
      { subject: 'Hindi', marks: 71, grade: 'B' },
      { subject: 'Social Studies', marks: 75, grade: 'B' },
    ],
    achievements: [
      'Cultural Program Star 2023',
      'Perfect Attendance 2023',
      'Reading Champion 2024',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Afternoon', 'Evening'] },
      { date: '2025-09-15', status: 'present', sessions: ['Evening', 'Afternoon'] },
      { date: '2025-09-14', status: 'present', sessions: ['Morning', 'Evening'] },
      { date: '2025-09-13', status: 'present', sessions: ['Morning', 'Evening'] },
      { date: '2025-09-12', status: 'present', sessions: ['Evening'] },
      { date: '2025-09-11', status: 'present', sessions: ['Morning', 'Evening'] },
      { date: '2025-09-10', status: 'present', sessions: ['Afternoon', 'Morning'] },
      { date: '2025-09-09', status: 'present', sessions: ['Evening', 'Afternoon', 'Morning'] },
      { date: '2025-09-08', status: 'present', sessions: ['Afternoon', 'Evening', 'Morning'] },
      { date: '2025-09-07', status: 'present', sessions: ['Evening', 'Morning', 'Afternoon'] },
    ],
    remarks: [
      {
        id: 3,
        date: '2025-09-12',
        type: 'disciplinary',
        severity: 'medium',
        title: 'Uniform Violation',
        description: 'Not wearing proper school uniform. Parent contacted.',
        addedBy: 'Mrs. Priya Singh',
        subject: 'General'
      },
      {
        id: 1,
        date: '2025-09-10',
        type: 'academic',
        severity: 'medium',
        title: 'Late Homework Submission',
        description: 'Submitted Mathematics homework 2 days late. Reason: illness.',
        addedBy: 'Mr. Anil Sharma',
        subject: 'Mathematics'
      },
      {
        id: 4,
        date: '2025-09-06',
        type: 'academic',
        severity: 'high',
        title: 'Needs Improvement',
        description: 'Requires additional support in Science. Recommended for extra classes.',
        addedBy: 'Mr. Rajesh Kumar',
        subject: 'General'
      },
      {
        id: 2,
        date: '2025-09-04',
        type: 'behavior',
        severity: 'high',
        title: 'Disruptive in Class',
        description: 'Talking during English lecture. Parent meeting scheduled.',
        addedBy: 'Mr. Anil Sharma',
        subject: 'Mathematics'
      },
    ],
    medicalHistory: {
      bloodGroup: 'AB-',
      height: '152 cm',
      weight: '55 kg',
      allergies: [],
      chronicConditions: ['Migraine'],
      emergencyContact: {
        name: 'Dr. Priya Sharma',
        phone: '+91 9876545747',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Rajesh Patel',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Amit Gupta',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  },
  {
    id: 20,
    name: 'Pooja Yadav',
    rollNo: 'STU020',
    class: '6-B',
    section: 'B',
    admissionDate: '2019-07-20',
    dateOfBirth: '2013-12-11',
    fatherName: 'Suraj Yadav',
    motherName: 'Pooja Yadav',
    phone: '+91 9876543223',
    email: 'suraj.yadav@email.com',
    address: '123, Gandhi Nagar, Rural District, State - 123456',
    aadharNumber: '2453-4091-8148',
    photo: 'https://randomuser.me/api/portraits/women/77.jpg',
    overallAttendance: 86,
    currentMonthAttendance: 87,
    grades: [
      { subject: 'Mathematics', marks: 73, grade: 'B' },
      { subject: 'Science', marks: 89, grade: 'B+' },
      { subject: 'English', marks: 75, grade: 'B' },
      { subject: 'Hindi', marks: 74, grade: 'B' },
      { subject: 'Social Studies', marks: 70, grade: 'B' },
    ],
    achievements: [
      'Perfect Attendance 2023',
      'Cultural Program Star 2023',
      'Science Fair Winner 2024',
    ],
    attendanceHistory: [
      { date: '2025-09-16', status: 'present', sessions: ['Afternoon', 'Morning'] },
      { date: '2025-09-15', status: 'present', sessions: ['Morning', 'Afternoon', 'Evening'] },
      { date: '2025-09-14', status: 'present', sessions: ['Morning', 'Evening'] },
      { date: '2025-09-13', status: 'present', sessions: ['Afternoon', 'Morning', 'Evening'] },
      { date: '2025-09-12', status: 'present', sessions: ['Morning'] },
      { date: '2025-09-11', status: 'present', sessions: ['Afternoon'] },
      { date: '2025-09-10', status: 'present', sessions: ['Afternoon', 'Morning'] },
      { date: '2025-09-09', status: 'present', sessions: ['Morning', 'Afternoon', 'Evening'] },
      { date: '2025-09-08', status: 'present', sessions: ['Afternoon', 'Evening', 'Morning'] },
      { date: '2025-09-07', status: 'present', sessions: ['Afternoon', 'Evening'] },
    ],
    remarks: [
      {
        id: 2,
        date: '2025-09-10',
        type: 'academic',
        severity: 'positive',
        title: 'Excellent Assignment',
        description: 'Outstanding work in General assignment. Shows deep understanding.',
        addedBy: 'Mr. Rajesh Kumar',
        subject: 'Mathematics'
      },
      {
        id: 4,
        date: '2025-09-07',
        type: 'disciplinary',
        severity: 'medium',
        title: 'Uniform Violation',
        description: 'Not wearing proper school uniform. Parent contacted.',
        addedBy: 'Mrs. Sunita Jain',
        subject: 'Social Studies'
      },
      {
        id: 3,
        date: '2025-08-31',
        type: 'behavior',
        severity: 'high',
        title: 'Disruptive in Class',
        description: 'Talking during English lecture. Parent meeting scheduled.',
        addedBy: 'Dr. Meera Patel',
        subject: 'Science'
      },
      {
        id: 1,
        date: '2025-08-18',
        type: 'behavior',
        severity: 'low',
        title: 'Not Attentive in Class',
        description: 'Student appeared distracted during Social Studies class. Seemed sleepy.',
        addedBy: 'Dr. Meera Patel',
        subject: 'General'
      },
    ],
    medicalHistory: {
      bloodGroup: 'AB+',
      height: '160 cm',
      weight: '40 kg',
      allergies: ['Milk', 'Eggs'],
      chronicConditions: [],
      emergencyContact: {
        name: 'Dr. Sunita Agarwal',
        phone: '+91 9876546036',
        relation: 'Family Doctor'
      },
      vaccinations: [
        {
          vaccine: 'COVID-19 (1st Dose)',
          date: '2021-09-15',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (2nd Dose)',
          date: '2021-12-10',
          manufacturer: 'Covishield',
          status: 'completed'
        },
        {
          vaccine: 'COVID-19 (Booster)',
          date: '2022-06-20',
          manufacturer: 'Covaxin',
          status: 'completed'
        },
        {
          vaccine: 'Hepatitis B',
          date: '2023-03-10',
          manufacturer: 'Engerix-B',
          status: 'completed'
        },
        {
          vaccine: 'Tetanus',
          date: '2023-08-15',
          manufacturer: 'TT Vaccine',
          status: 'completed'
        },
      ],
      medicalReports: [
        {
          date: '2024-01-10',
          type: 'Annual Health Checkup',
          doctor: 'Dr. Priya Sharma',
          findings: 'Overall health good. Mild vitamin D deficiency noted.',
          recommendations: 'Increase outdoor activities. Vitamin D supplements recommended.'
        },
        {
          date: '2023-11-20',
          type: 'Eye Examination',
          doctor: 'Dr. Rajesh Patel',
          findings: 'Vision normal. No corrective measures needed.',
          recommendations: 'Regular eye exercises recommended.'
        },
      ]
    },
    status: 'active'
  }
];

export default StudentsData;