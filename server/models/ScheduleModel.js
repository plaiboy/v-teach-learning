const mongoose = require('mongoose');

// Define the Schedule schema
const scheduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

// Create the Schedule model
const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
