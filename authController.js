// Import the required modules
const jwt = require('jsonwebtoken'); // Used for generating JSON Web Tokens
const bcrypt = require('bcryptjs'); // Used for hashing and comparing passwords
require('dotenv').config(); // Loads environment variables from a .env file into process.env

// Define the login function which is exported for use in other files
exports.login = async (req, res) => {
    // Destructure email and password from the request body
    const { email, password } = req.body;
  
    // Define a hardcoded user object for demonstration purposes
    // In a real application, you would fetch this data from a database
    const hardcodedUser = {
      email: "user@example.com",
      // The password is plaintext only for this example. In production, use bcrypt to hash passwords.
      password: "userpassword" 
    };
  
    // Check if the provided email and password match the hardcoded user's credentials
    if (email !== hardcodedUser.email || password !== hardcodedUser.password) {
      // If the credentials don't match, return a 401 Unauthorized status with an error message
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  
    // If the credentials match, generate a JWT token using the user's email and the secret key from .env
    // The token expires in 1 hour ('1h')
    const token = jwt.sign({ email: hardcodedUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
    // Respond with a JSON object containing the success status and the generated token
    res.json({ success: true, token });
};
