// Import the required modules
import jwt from 'jsonwebtoken' // Used for generating JSON Web Tokens


// Define the login function which is exported for use in other files
export const login = async (req, res, err) => {
    // Destructure email and password from the request body
    const email = req.email;
    const password = req.password;


    // Define a hardcoded user object for demonstration purposes
    // In a real application, you would fetch this data from a database
    const hardcodedUser = {
        email: "user@example.com", // The password is plaintext only for this example. In production, use bcrypt to hash passwords.
        password: "userpassword"
    };

    // Check if the provided email and password match the hardcoded user's credentials
    if (email !== hardcodedUser.email || password !== hardcodedUser.password) {
        // If the credentials don't match, return a 401 Unauthorized status with an error message
        //return res.status(401).json({ success: false, message: "Invalid credentials" });
        return null;
    }

    // If the credentials match, generate a JWT token using the user's email and the secret key from ...env
    // The token expires in 1 hour ('1h')
    // Respond with a JSON object containing the success status and the generated token

    return jwt.sign({email: hardcodedUser.email}, process.env.JWT_SECRET, {expiresIn: '1h'});

};


export default login;