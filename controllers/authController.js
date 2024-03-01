// Import the required modules
import bcrypt from 'bcryptjs'
import pool from '../server.js'
import req from "express/lib/request.js";

// Define the authentication function which is exported for use in other files
export async function login(email, password) {
    return new Promise(function (resolve) {
        pool.query('SELECT * FROM users WHERE email = ? ', [email], (error, results) => {
            // If there is an issue with the query, output the error
            if (error) throw error;

            if (results.length > 0) {  // If the account exists, compare hashed password
                if (bcrypt.compareSync(password, results[0]['password']) === true) {

                    resolve(results[0]['userId'])
                } else {
                    resolve('unauthorized')
                }
            } else {
                resolve('unauthorized')
                //response.send('Incorrect Username and/or Password!');
            }
        })
    });
}

export default login;