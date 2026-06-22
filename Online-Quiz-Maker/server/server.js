const express = require('express');
const cors = require('cors');
require('dotenv').config();

// 1. IMPORT YOUR ROUTE FILES
const authRoutes = require('./routes/authRoutes'); 
const quizRoutes = require('./routes/quizRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// 2. LINK THE ROUTE FILES TO APIS
app.use('/api/auth', authRoutes); // This activates /api/auth/login and /api/auth/register
app.use('/api/quizzes', quizRoutes);

app.get('/', (req, res) => {
    res.send('Quiz Maker API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});