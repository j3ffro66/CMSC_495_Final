// Import the required modules
import express from 'express';
import sanitizeHtml from 'sanitize-html';
import {__dirname} from "../app.js";
import authController from "../controllers/authController.js";
import bcrypt from 'bcryptjs'

const router = express.Router();

//Getter method to show login page
router.get('/', (req, res) => {
    //If a session is in progress, the page will redirect to the task management page
    if (req.session.user === undefined) {
        res.sendFile(__dirname + '/views/login.html');
    } else {
        res.redirect('/TaskManagementPage')
    }
});

//POST method to authenticate to the task management page
router.post('/', async (req, res) => {
    //Hash the password
    const salt = await bcrypt.genSalt(10)
    const {email, hashPass = await bcrypt.hash(req.body.password, salt)} = req.body;

    //Sanitize input to protect from XSS or SQL Injection
    const cleanEmail = sanitizeHtml(email);
    const cleanPassword = sanitizeHtml(hashPass);

    //Check the database for a matching user
    let auth = await authController({cleanEmail, cleanPassword});

    //If there is a match, redirect to task management page, if not redirect to login page
    if (auth === 'unauthorized') {
        res.redirect('/login')
    } else if (auth === 'authorized') {
        req.session.user = cleanEmail;
        res.redirect('/TaskManagementPage');
    }
});

export default router;
