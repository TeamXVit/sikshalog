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
