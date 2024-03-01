import express from 'express';
import sanitizeHtml from 'sanitize-html';
import {__dirname} from "../app.js";
import bcrypt from "bcryptjs";
import createUser from "../controllers/userController.js";
const router = express.Router();


//Getter method to show register page
router.get('/', (req, res) => {
    //If a session is in progress, the page will redirect to the task management page
    if (req.session.user === undefined) {
        res.sendFile(__dirname + '/views/signup.html');
    } else {
        res.redirect('/TaskManagementPage')
    }
});

router.post('/', async (req, res, err) => {
    const salt = await bcrypt.genSalt(10)
    //Sanitize input to protect from XSS or SQL Injection
    const {name = sanitizeHtml(req.body.name),
        email = sanitizeHtml(req.body.email),
        pass = sanitizeHtml(req.body.password),
        confPass =  sanitizeHtml(req.body.confirmpassword)} = req.body;

    if (pass !== confPass) {
        console.log("passwords don't match")
        res.redirect('/signup');//passwords don't match
    } else {
        let hashPass = await bcrypt.hash(pass, salt)
        let addUser = await createUser(name, hashPass, email)
        if (addUser === 'in use') {
            console.log('email in use')
            res.redirect('/signup');//email in use
        } else if (addUser === 'created') {
            console.log('created')
            res.redirect('/login');
        }
    }
});


export default router;