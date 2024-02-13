// Import the express module to create the web server
import express from 'express';

// Import dotenv to load environment variables from a .env file into process.env
import dotenv from 'dotenv';
dotenv.config();

// Create an Express application
const app = express();

// Use express.json() middleware to parse JSON payloads in incoming requests
app.use(express.json());

// Import the authController module, which contains the login functionality
//import authController from './authController.js';

// Define a POST route for '/api/login' that uses the login function from authController to authenticate users
//app.post('/api/login', authController.login);

// Retrieve the port number from environment variables with a fallback to 3000 if not specified
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port, logging a message to the console when the server is ready
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
