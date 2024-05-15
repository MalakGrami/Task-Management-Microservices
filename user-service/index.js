const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes');

const app = express();
const PORT = process.env.PORT || 50051;

app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
