import express from 'express';
//const users = require('../controllers/userController.js');
import sanitizeHtml from 'sanitize-html';
import {__dirname} from "../app.js";
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

router.post('/', (req, res, err) => {
    const {email, password, passwordconfirm} = req.body;

    /*
    if (passwords dont match)

    else if (password not complex)

    else if (email != user in db)
        users.createUser({email, password});
        res.render('login', {message: 'User successfully created!'} )

     */
});


export default router;