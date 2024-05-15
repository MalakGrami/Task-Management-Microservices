const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/TaskManagement';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

module.exports = mongoose;
