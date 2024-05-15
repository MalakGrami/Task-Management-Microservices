const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://mongodb:27017/TaskManagement'; 

mongoose.connect(MONGODB_URI);

module.exports = mongoose;
