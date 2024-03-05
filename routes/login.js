// Import the required modules
import express from 'express';
import sanitizeHtml from 'sanitize-html';
import authController from "../controllers/authController.js";
import {getUserById} from "../controllers/userController.js";


const router = express.Router();

//Getter method to show login page
router.get('/', (req, res) => {
    //If a session is in progress, the page will redirect to the task management page
    if (req.session.user === undefined) {
        res.render('login', {message:''});
    } else {
        res.redirect('/taskmanagementpage')
    }
});

//POST method to authenticate to the task management page
router.post('/', async (req, res) => {
    //Hash the password and sanitize input to protect from XSS or SQL Injection
    const {email = sanitizeHtml(req.body.email), pass = sanitizeHtml(req.body.password)} = req.body;

    //Check the database for a matching user
    let auth  = await authController(email, pass);

    //If there is a match, redirect to task management page, if not redirect to login page
    if (auth === 'unauthorized') {
        res.render('login', {message: 'Login Failed'})
    } else  {
        req.session.user = auth;
        currentUser = await getUserById(auth);// !!!!!this is wrong and needs to be saved to session
        console.log(currentUser)
        res.redirect('/taskmanagementpage');
    }
});

export let currentUser = undefined;
export default router;
