import express from 'express';
//const users = require('../controllers/userController.js');
import sanitizeHtml from 'sanitize-html';
import {__dirname} from "../app.js";
import bcrypt from "bcryptjs";
const router = express.Router();

let message = '';


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
    const {name, email,
        hashPass = await bcrypt.hash(req.body.password, salt),
        confHashPass =  await bcrypt.hash(req.body.confirmpassword, salt)} = req.body;

    //Sanitize input to protect from XSS or SQL Injection
    const cleanName = sanitizeHtml(req.body.name);
    const cleanEmail = sanitizeHtml(email);
    const cleanPassword = sanitizeHtml(hashPass);
    const cleanConfPassword = sanitizeHtml(confHashPass);



    /*
    if (passwords dont match)

    else if (password not complex)

    else if (email != user in db)
        users.createUser({email, password});
        res.render('login', {message: 'User successfully created!'} )

     */
});


export default router;