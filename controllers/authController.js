// Import the required modules
import bcrypt from 'bcryptjs'

// Define the authentication function which is exported for use in other files
export const login = async (req, res, err) => {
    // Destructure email and password from the request body
    const email = req.cleanEmail;
    const password = req.cleanPassword;


    // Define a hardcoded user object for demonstration purposes
    // In a real application, you would fetch this data from a database

    /*
    NEED SQL CODE TO QUERY USER FROM DATABASE
    USE userController.js
     */

    const hardcodedUser = {
        email: "user@example.com", // The password is plaintext only for this example. In production, use bcrypt to hash passwords.
        password: "userpassword"
    };

    // Check if the provided email and password match the hardcoded user's credentials
    if (email !== hardcodedUser.email || bcrypt.compareSync(hardcodedUser.password, password) === false) {
        // If the credentials don't match, return an unauthorized statement that will further redirect the user
        //return res.status(401).json({ success: false, message: "Invalid credentials" });
        return 'unauthorized';
    }

    // If the credentials match, return an authorized statement that will further redirect the user
    return 'authorized';
};

export default login;