// Import the http module to create the web server
import http from 'http';
// Import
import app from './app.js'
import mysql from 'mysql2';
import fs from 'fs';
import * as dotenv from 'dotenv'; // Loads environment variables from a ...env file into process...env
dotenv.config();


export  const  pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    ssl: {ca: fs.readFileSync("./DigiCertGlobalRootCA.crt.pem")}
})
export default pool;
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        } else if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        } else if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        } else {
            console.error(err)
        }
    }
    if (connection) connection.release()
    console.log('You are now connected...')
})

const options = {
    key: fs.readFileSync('./cert/localhost.key'),
    cert: fs.readFileSync('./cert/localhost.crt')
};

// Retrieve the port number from environment variables with a fallback to 3000 if not specified
const PORT = process.env.PORT || 3000;
// Initialize server
const server = http.createServer(options, app);

// Start the server and listen on the specified port, logging a message to the console when the server is ready
server.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${PORT}`));
