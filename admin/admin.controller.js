// admin/admin.controller.js this for admin loginpage

const adminLogin = (req, res) => {
    const { username, password } = req.body;
    
    // Check if username and password are correct
    if (username === 'borganics' && password === 'borganics*123') {
        // If login successful, send success response
        res.status(200).json({ message: 'Login successful', username});
    } else {
        // If login credentials are incorrect, send error response
        res.status(401).json({ error: 'Invalid username or password' });
    }
};

module.exports = { adminLogin };
