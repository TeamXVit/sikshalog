const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

// Input validation middleware
const validateStudentInput = (req, res, next) => {
  const { name, regno, descriptor } = req.body;
  
  if (!name || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Name is required'
    });
  }
  
  if (!regno || !regno.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Registration number is required'
    });
  }
  
  if (!descriptor || !Array.isArray(descriptor) || descriptor.length !== 128) {
    return res.status(400).json({
      success: false,
      message: 'Valid face descriptor with 128 values is required'
    });
  }
  
  next();
};

// GET /api/students - Get all registered students
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '', sortBy = 'timestamp', order = 'desc' } = req.query;
    
    // Build search query
    const searchQuery = search ? {
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { regno: { $regex: search, $options: 'i' } }
      ],
      isActive: true
    } : { isActive: true };
    
    // Build sort object
    const sortOrder = order === 'asc' ? 1 : -1;
    const sortObject = { [sortBy]: sortOrder };
    
    const students = await Student.find(searchQuery)
      .select('-faceDescriptor') // Exclude face descriptor for list view
      .sort(sortObject)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .lean();
    
    const total = await Student.countDocuments(searchQuery);
    
    res.json({
      success: true,
      data: {
        students,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalStudents: total,
          hasNextPage: page < Math.ceil(total / limit),
          hasPrevPage: page > 1
        }
      }
    });
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch students',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// POST /api/students - Register new student
router.post('/', validateStudentInput, async (req, res) => {
  try {
    const { name, regno, descriptor } = req.body;
    
    // Check if registration number already exists
    const existingStudent = await Student.findOne({ 
      regno: regno.toUpperCase(),
      isActive: true 
    });
    
    if (existingStudent) {
      return res.status(409).json({
        success: false,
        message: `Student with registration number ${regno.toUpperCase()} already exists`
      });
    }
    
    // Create new student with stringified descriptor
    const newStudent = new Student({
      name: name.trim(),
      regno: regno.toUpperCase().trim(),
      faceDescriptor: JSON.stringify(descriptor) // Stringify the descriptor array
    });
    
    await newStudent.save();
    
    // Return student data without face descriptor
    const studentData = newStudent.toObject();
    delete studentData.faceDescriptor;
    
    res.status(201).json({
      success: true,
      message: 'Student registered successfully',
      data: studentData
    });
    
  } catch (error) {
    console.error('Error registering student:', error);
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: validationErrors
      });
    }
    
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'Registration number already exists'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to register student',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// GET /api/students/:id - Get specific student
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .select('-faceDescriptor')
      .lean();
    
    if (!student || !student.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }
    
    res.json({
      success: true,
      data: student
    });
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch student'
    });
  }
});

// DELETE /api/students/:id - Delete student
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    
    if (!student || !student.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }
    
    // Soft delete by setting isActive to false
    student.isActive = false;
    await student.save();
    
    res.json({
      success: true,
      message: 'Student deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete student'
    });
  }
});

// DELETE /api/students - Delete all students
router.delete('/', async (req, res) => {
  try {
    const result = await Student.updateMany(
      { isActive: true },
      { isActive: false }
    );
    
    res.json({
      success: true,
      message: `${result.modifiedCount} students deleted successfully`
    });
  } catch (error) {
    console.error('Error deleting all students:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete students'
    });
  }
});

// GET /api/students/descriptors/all - Get all face descriptors for recognition
router.get('/descriptors/all', async (req, res) => {
  try {
    const students = await Student.find({ isActive: true })
      .select('name regno faceDescriptor')
      .lean();
    
    const descriptors = students.map(student => {
      let parsedDescriptor;
      try {
        parsedDescriptor = JSON.parse(student.faceDescriptor); // Parse the stringified descriptor back to array
      } catch (error) {
        console.error(`Error parsing descriptor for student ${student._id}:`, error);
        parsedDescriptor = null;
      }
      
      return {
        id: student._id,
        name: student.name,
        regno: student.regno,
        descriptor: parsedDescriptor
      };
    }).filter(student => student.descriptor !== null); // Filter out students with invalid descriptors
    
    res.json({
      success: true,
      data: descriptors
    });
  } catch (error) {
    console.error('Error fetching descriptors:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch face descriptors'
    });
  }
});

module.exports = router;
