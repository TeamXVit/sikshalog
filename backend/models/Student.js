const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name must not exceed 100 characters']
  },
  regno: {
    type: String,
    required: [true, 'Registration number is required'],
    unique: true,
    trim: true,
    uppercase: true,
    validate: {
      validator: function(v) {
        return /^[A-Z0-9]{6,20}$/.test(v);
      },
      message: 'Registration number must be 6-20 alphanumeric characters'
    }
  },
  faceDescriptor: {
    type: String, // Changed from [Number] to String
    required: [true, 'Face descriptor is required'],
    validate: {
      validator: function(v) {
        try {
          const parsed = JSON.parse(v);
          return Array.isArray(parsed) && parsed.length === 128;
        } catch (error) {
          return false;
        }
      },
      message: 'Face descriptor must be a valid JSON string of 128 numbers'
    }
  },
  parentemailid: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  dob: {
    type: Date,
    required: false
  },
  fatherName: {
    type: String,
    trim: true,
    maxlength: [100, 'Father\'s name must not exceed 100 characters']
  },
  motherName: {
    type: String,
    trim: true,
    maxlength: [100, 'Mother\'s name must not exceed 100 characters']
  },
  aadhar: {
    type: String,
    trim: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^\d{12}$/.test(v);
      },
      message: 'Aadhar must be a 12 digit number'
    }
  },
  address: {
    type: String,
    trim: true,
    maxlength: [500, 'Address must not exceed 500 characters']
  },
  fatherMobile: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: 'Father\'s mobile number must be a 10 digit number'
    }
  },
  motherMobile: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: 'Mother\'s mobile number must be a 10 digit number'
    }
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Index for faster queries
studentSchema.index({ regno: 1 });
studentSchema.index({ name: 1 });
studentSchema.index({ timestamp: -1 });

// Virtual for formatted timestamp
studentSchema.virtual('formattedTimestamp').get(function() {
  return this.timestamp.toLocaleString();
});

// Virtual for parsed face descriptor
studentSchema.virtual('parsedFaceDescriptor').get(function() {
  try {
    return JSON.parse(this.faceDescriptor);
  } catch (error) {
    return null;
  }
});

module.exports = mongoose.model('Student', studentSchema);