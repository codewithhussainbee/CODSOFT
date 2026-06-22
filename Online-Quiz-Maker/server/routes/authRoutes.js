const express = require('express');
const router = express.Router();

// Placeholder for Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log("Login attempt received for:", email);
    
    // Simple placeholder response (Returns a fake token for testing frontend)
    res.json({ token: "fake-jwt-token-for-testing" });
});

// Placeholder for Register
router.post('/register', (req, res) => {
    res.json({ message: "User registered successfully" });
});

module.exports = router;