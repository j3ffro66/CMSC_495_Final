// Import the http module to create the web server
import http from 'http';
// Import
import app from './app.js'

// Retrieve the port number from environment variables with a fallback to 3000 if not specified
const PORT = process.env.PORT || 3000;
// Initialize server
const server = http.createServer(app);

// Start the server and listen on the specified port, logging a message to the console when the server is ready
server.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${PORT}`));
