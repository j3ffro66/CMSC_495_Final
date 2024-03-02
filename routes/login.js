// Import the required modules
import express from 'express';
import sanitizeHtml from 'sanitize-html';
import {__dirname} from "../app.js";
import authController from "../controllers/authController.js";
import bcrypt from 'bcryptjs'
import {getUserById} from "../controllers/userController.js";

const router = express.Router();

//Getter method to show login page
router.get('/', (req, res) => {
    //If a session is in progress, the page will redirect to the task management page
    if (req.session.user === undefined) {
        res.sendFile((__dirname + '/views/login.html'));

    } else {
        res.redirect('/TaskManagementPage')
    }
});

//POST method to authenticate to the task management page
router.post('/', async (req, res) => {
    //Hash the password and sanitize input to protect from XSS or SQL Injection
    const salt = await bcrypt.genSalt(10)
    const {email = sanitizeHtml(req.body.email), pass = sanitizeHtml(req.body.password)} = req.body;

    //Check the database for a matching user
    let auth  = await authController(email, pass);

    //If there is a match, redirect to task management page, if not redirect to login page
    if (auth === 'unauthorized') {
        res.redirect('/login')
    } else  {
        req.session.user = auth;
        currentUser = await getUserById(auth);// !!!!!this is wrong and needs to be saved to session
        console.log(currentUser)
        res.redirect('/TaskManagementPage');
    }
});

export let currentUser = undefined;
export default router;
