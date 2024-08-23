const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const questionRoutes = require('./routes/questions');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use('/api', questionRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));