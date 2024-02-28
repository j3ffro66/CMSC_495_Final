// Import the required modules
import bcrypt from 'bcryptjs'
//import {getUsers} from "./userController.js";
import pool from '../server.js'
import req from "express/lib/request.js";

// Define the authentication function which is exported for use in other files
 export async function login (email, password)  {
    pool.query('SELECT * FROM users WHERE email = ? ',[email], function(error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;

        if (results.length > 0) {  // If the account exists, compare hashed password
            if (bcrypt.compareSync(results[0]['password'], password) === true){// may need to swap this
                console.log('worky')
                return 'authorized'
                }
               else {
                    console.log('no worky')
                    return 'unauthorized'
                }
        } else {
            return 'unauthorized'
            //response.send('Incorrect Username and/or Password!');
        }
    });




        console.log('z')
        return 'unauthorized';


    // If the credentials match, return an authorized statement that will further redirect the user

}

export default login;